import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HeroScene } from '../three/HeroScene';
import './hero3d.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!canvas || !wrapper || !content) return;

    const scene = new HeroScene(canvas);
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    gsap.set(content, { autoAlpha: 0, y: 24 });

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: '+=220%',
      scrub: 0.6,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        scene.setProgress(self.progress);
        const revealFrom = 0.55;
        const revealTo = 0.85;
        const revealProgress = gsap.utils.clamp(
          0,
          1,
          (self.progress - revealFrom) / (revealTo - revealFrom)
        );
        gsap.set(content, {
          autoAlpha: revealProgress,
          y: 24 * (1 - revealProgress)
        });
      }
    });

    if (reducedMotion) {
      // Sem scroll-jacking para quem prefere menos movimento:
      // mostra a marca estática e o conteúdo já revelado.
      scene.setProgress(1);
      gsap.set(content, { autoAlpha: 1, y: 0 });
      st.kill();
    }

    // A fonte Raleway carrega de forma assíncrona (Google Fonts) e pode
    // mudar a altura de elementos após o cálculo inicial do ScrollTrigger.
    // Recalculamos quando a página termina de carregar por completo.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      st.kill();
      scene.dispose();
    };
  }, []);

  return (
    <section className="hero3d" ref={wrapperRef} aria-label="Abertura [NEV]²">
      <div className="hero3d__stage">
        <canvas ref={canvasRef} className="hero3d__canvas" />
        <div className="hero3d__content" ref={contentRef}>
          <p className="eyebrow hero3d__eyebrow">[NEV]² — TI, software e automação</p>
          <h1 className="hero3d__title">
            Tecnologia que
            <br />
            vende por você.
          </h1>
          <p className="section-lede hero3d__lede">
            Softwares, sites, aplicativos, automações e Inteligência
            Artificial — construídos com o rigor de engenharia e o
            acabamento de um produto premium, do primeiro esboço ao
            resultado no seu caixa.
          </p>
          <div className="hero3d__scroll-cue" aria-hidden="true">
            <span />
            role para entrar
          </div>
        </div>
      </div>
    </section>
  );
}
