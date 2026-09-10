import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './route-transition.css';

type Phase = 'idle' | 'cover' | 'reveal';

/**
 * Cortina de transição entre páginas.
 *
 * IMPORTANTE: este overlay é renderizado como IRMÃO do conteúdo da página
 * (fixed, fora da árvore do <main>), nunca como ancestral. Um `transform`
 * aplicado a um ancestral do hero 3D quebra o `position: fixed` usado pelo
 * GSAP ScrollTrigger para pinnar a cena (já vimos esse bug antes) — por
 * isso a animação acontece aqui, isolada, e nunca no wrapper que envolve
 * as páginas.
 */
export default function RouteTransitionOverlay() {
  const location = useLocation();
  const [phase, setPhase] = useState<Phase>('idle');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    setPhase('cover');
    const revealTimer = setTimeout(() => setPhase('reveal'), 360);
    const idleTimer = setTimeout(() => setPhase('idle'), 360 + 420);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(idleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (phase === 'idle') return null;

  return (
    <div className={`route-overlay route-overlay--${phase}`} aria-hidden="true">
      <span className="route-overlay__mark">[NEV]²</span>
    </div>
  );
}
