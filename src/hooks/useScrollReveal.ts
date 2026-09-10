import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Revela, com um único tipo de movimento consistente, os elementos que
 * correspondem a `selector` dentro do container referenciado, conforme
 * entram na viewport. Usado com moderação — não em cada seção, apenas
 * onde o movimento ajuda a guiar a leitura (listas e grids longos).
 */
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement>,
  selector: string,
  options?: { stagger?: number }
) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    const items = root.querySelectorAll(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: {
            trigger: root,
            start: 'top 78%',
            once: true
          }
        }
      );
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, selector]);
}
