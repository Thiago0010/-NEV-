import * as THREE from 'three';
import { SVGLoader, SVGResultPath } from 'three/examples/jsm/loaders/SVGLoader.js';

/**
 * HeroScene
 * ---------
 * Carrega a logo real da [NEV]² (public/brand/logo.svg — dois traçados:
 * o hexágono/moldura e o glifo "N") e a extruda em 3D. Os dois traçados
 * da própria arte-final se tornam as "duas partes" da animação:
 *
 *   - `pieceFrame`  -> a moldura hexagonal (traçado externo da logo)
 *   - `pieceGlyph`  -> o "N" (traçado interno da logo)
 *
 * Além da separação controlada pelo scroll, a cena tem:
 *   - uma pequena animação de entrada (a marca "monta" ao carregar);
 *   - um leve movimento contínuo mesmo parada (respiração + partículas
 *     de fundo), pra nunca parecer uma imagem estática;
 *   - um brilho aditivo atrás da marca que reage à profundidade do scroll;
 *   - parallax e leve inclinação de câmera acompanhando o cursor.
 *
 * Conforme `setProgress(t)` recebe valores de 0 → 1 (via ScrollTrigger):
 *   1. as duas peças reais da marca se afastam,
 *   2. a câmera avança pela abertura criada entre elas,
 *   3. a opacidade cai suavemente no fim, revelando o conteúdo HTML.
 */
export class HeroScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private pieceFrame = new THREE.Group();
  private pieceGlyph = new THREE.Group();
  private particles: THREE.Points;
  private glow: THREE.Sprite;
  private rimLight: THREE.PointLight;
  private clock = new THREE.Clock();
  private frameId = 0;
  private disposed = false;
  private progress = 0;
  private pointer = { x: 0, y: 0 };
  private reducedMotion: boolean;
  private ready = false;
  private introStart = 0;
  private baseScale = 1;
  private logoSize = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement) {
    this.reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(0, 0, 9);

    const ambient = new THREE.AmbientLight(0xccf9ce, 0.4);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xccf9ce, 1.15);
    key.position.set(4, 6, 6);
    this.scene.add(key);

    this.rimLight = new THREE.PointLight(0x2c6a41, 6, 20, 2);
    this.rimLight.position.set(-3, -2, 4);
    this.scene.add(this.rimLight);

    this.glow = this.buildGlow();
    this.scene.add(this.glow);

    this.particles = this.buildParticles();
    this.scene.add(this.particles);

    this.scene.add(this.pieceFrame, this.pieceGlyph);
    // Começa "fechada" (escala zero) — a animação de entrada abre a marca.
    this.pieceFrame.scale.setScalar(0.001);
    this.pieceGlyph.scale.setScalar(0.001);

    this.loadLogo();

    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('pointermove', this.handlePointer);

    this.tick();
  }

  /** Brilho aditivo atrás da marca — dá profundidade sem precisar de post-processing. */
  private buildGlow() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, 'rgba(204,249,206,0.55)');
    gradient.addColorStop(0.5, 'rgba(44,106,65,0.22)');
    gradient.addColorStop(1, 'rgba(6,17,9,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(9, 9, 1);
    sprite.position.set(0, 0, -1.5);
    return sprite;
  }

  /** Poeira/partículas de fundo — reforçam profundidade e mantêm a cena "viva". */
  private buildParticles() {
    const count = 260;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = -Math.abs(radius * Math.cos(phi)) - 2;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xccf9ce,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    return new THREE.Points(geometry, material);
  }

  /** Carrega e extruda a logo real a partir do SVG servido em /brand/logo.svg. */
  private loadLogo() {
    const loader = new SVGLoader();
    loader.load(
      '/brand/logo.svg',
      (data) => {
        const paths = data.paths;
        if (!paths.length) return;

        const box = new THREE.Box3();
        const tmpMeshes: THREE.Mesh[] = [];

        paths.forEach((path: SVGResultPath, pathIndex: number) => {
          const shapes = SVGLoader.createShapes(path);
          const material = new THREE.MeshStandardMaterial({
            color: 0xccf9ce,
            metalness: 0.3,
            roughness: 0.3,
            emissive: 0x0d1f14,
            emissiveIntensity: 0.35,
            transparent: true
          });

          shapes.forEach((shape) => {
            const geometry = new THREE.ExtrudeGeometry(shape, {
              depth: 28,
              bevelEnabled: true,
              bevelThickness: 3,
              bevelSize: 2.4,
              bevelSegments: 3,
              curveSegments: 12
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.y = -1;
            mesh.userData.pieceIndex = pathIndex;
            tmpMeshes.push(mesh);
            box.expandByObject(mesh);
          });
        });

        if (!tmpMeshes.length) return;

        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);
        this.logoSize.copy(size);
        this.updateBaseScale();

        tmpMeshes.forEach((mesh) => {
          mesh.position.sub(center);
          const target = mesh.userData.pieceIndex === 0 ? this.pieceFrame : this.pieceGlyph;
          target.add(mesh);
        });

        this.introStart = this.clock.getElapsedTime();
        this.ready = true;
      },
      undefined,
      () => {
        this.ready = false;
      }
    );
  }

  private updateBaseScale = () => {
    // Removed the this.ready check to allow initial scaling during loadLogo
    if (this.logoSize.x === 0 && this.logoSize.y === 0) return;

    let multiplier = 6.0;
    if (window.innerWidth < 640) {
      multiplier = 3.0;
    } else if (window.innerWidth < 1024) {
      multiplier = 4.5;
    }

    this.baseScale = multiplier / Math.max(this.logoSize.x, this.logoSize.y);
  };

  private handleResize = () => {
    const canvas = this.renderer.domElement;
    const parent = canvas.parentElement;
    const width = parent ? parent.clientWidth : window.innerWidth;
    const height = parent ? parent.clientHeight : window.innerHeight;
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.updateBaseScale();
  };

  private handlePointer = (e: PointerEvent) => {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  /** Chamado pelo ScrollTrigger a cada frame de scroll, t entre 0 e 1. */
  setProgress(t: number) {
    this.progress = THREE.MathUtils.clamp(t, 0, 1);
  }

  getOpacity() {
    return 1 - THREE.MathUtils.smoothstep(this.progress, 0.72, 1);
  }

  /** easeOutBack simplificado — dá um leve "estouro" na entrada da marca. */
  private easeOutBack(x: number) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  }

  private tick = () => {
    if (this.disposed) return;
    this.frameId = requestAnimationFrame(this.tick);

    const elapsed = this.clock.getElapsedTime();
    const delta = this.clock.getDelta();

    // Partículas de fundo giram devagar o tempo todo — dá vida mesmo
    // antes/depois do scroll interativo.
    if (!this.reducedMotion) {
      this.particles.rotation.y += delta * 0.015;
      this.particles.rotation.x += delta * 0.004;
    }

    if (this.ready) {
      const t = this.progress;
      const eased = THREE.MathUtils.smoothstep(t, 0, 1);

      // Animação de entrada: a marca "monta" com um leve estouro elástico
      // assim que a logo termina de carregar, independente do scroll.
      const introT = Math.min(1, (elapsed - this.introStart) / 1.15);
      const introEase = this.reducedMotion ? 1 : this.easeOutBack(introT);
      const scale = this.baseScale * Math.max(introEase, 0.001);
      this.pieceFrame.scale.setScalar(scale);
      this.pieceGlyph.scale.setScalar(scale);

      // Pequena "respiração" contínua quando o usuário ainda não rolou —
      // evita que a cena pareça uma imagem parada.
      const idle = this.reducedMotion ? 0 : (1 - eased) * Math.sin(elapsed * 0.6) * 0.06;

      // A moldura (hexágono) se afasta para trás e para os lados;
      // o glifo "N" avança em direção à câmera — a abertura entre
      // as duas peças reais da marca é por onde a câmera "entra".
      this.pieceFrame.position.set(-eased * 2.6, eased * 0.4, -eased * 3.2);
      this.pieceFrame.rotation.y = eased * 0.5 + idle;

      this.pieceGlyph.position.set(eased * 1.1, -eased * 0.2, eased * 1.4);
      this.pieceGlyph.rotation.y = -eased * 0.25 - idle;

      this.camera.position.z = 9 - eased * 5.6;
      this.camera.position.y = eased * 0.35;

      if (!this.reducedMotion) {
        const parallax = 0.26 * (1 - eased * 0.5);
        this.camera.position.x = this.pointer.x * parallax;
        this.camera.rotation.z = -this.pointer.x * 0.02 * (1 - eased * 0.4);
        this.camera.lookAt(0, 0, 0);
        this.rimLight.position.x = -3 + this.pointer.x * 2;
      }

      const opacity = this.getOpacity() * Math.max(introEase, 0);
      this.setGroupOpacity(this.pieceFrame, opacity);
      this.setGroupOpacity(this.pieceGlyph, opacity);

      // O brilho acompanha a marca e se intensifica levemente durante a
      // separação, como se a "energia" da fenda estivesse crescendo.
      const glowMat = this.glow.material as THREE.SpriteMaterial;
      glowMat.opacity = (0.85 - eased * 0.35) * Math.max(introEase, 0);
      this.glow.scale.setScalar(9 + eased * 3);
    }

    this.renderer.render(this.scene, this.camera);
  };

  private setGroupOpacity(group: THREE.Group, opacity: number) {
    group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        const mat = obj.material as THREE.MeshStandardMaterial;
        mat.transparent = true;
        mat.opacity = opacity;
      }
    });
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('pointermove', this.handlePointer);
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
        obj.geometry.dispose();
        const mat = obj.material as THREE.Material | THREE.Material[];
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      }
    });
    this.renderer.dispose();
  }
}
