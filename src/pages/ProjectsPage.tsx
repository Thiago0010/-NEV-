import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import './projects-page.css';

export default function ProjectsPage() {
  useSeo({
    title: 'Projetos — [NEV]²',
    description:
      'Sistemas, aplicativos e produtos de inteligência artificial que a [NEV]² construiu e colocou em produção.'
  });

  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, '.case', { stagger: 0.08 });

  return (
    <section className="section projects-page">
      <div className="container">
        <p className="eyebrow">Trabalho</p>
        <h1 className="section-title projects-page__title">
          Projetos que saíram do papel.
        </h1>
        <p className="section-lede">
          Uma seleção do que construímos recentemente — sistemas, aplicativos
          e produtos de IA colocados em produção e em uso todos os dias.
        </p>
      </div>

      <div className="case-list container" ref={ref}>
        {PROJECTS.map((p, i) => (
          <Link to={`/projetos/${p.slug}`} className="case" key={p.slug}>
            <span className="case__sweep" aria-hidden="true" />
            <span className="case__index">{String(i + 1).padStart(2, '0')}</span>
            <div className="case__main">
              <div className="case__content">
                <h2 className="case__name">{p.name}</h2>
                <p className="case__summary">{p.summary}</p>
              </div>
              <img src={p.image} alt={p.name} className="case__thumb" />
            </div>
            <div className="case__meta">
              <span className="case__category">{p.category}</span>
              <span className="case__year">{p.year}</span>
              <span className="case__arrow" aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
