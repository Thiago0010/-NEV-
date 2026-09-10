import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoOptions {
  title: string;
  description: string;
}

const SITE_URL = 'https://nev2dev.com';

/**
 * Define título, meta description e canonical por página. Como este é um
 * SPA (React puro, sem SSR), motores de busca dependem de renderizar
 * JavaScript para ver esse conteúdo — funciona, mas SSR/prerender
 * (Next.js, Vite SSG, etc.) tende a indexar mais rápido e melhor.
 * Ver README para detalhes sobre SEO.
 */
export function useSeo({ title, description }: SeoOptions) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${SITE_URL}${location.pathname}`, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${location.pathname}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, location.pathname]);
}
