import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './projects.css';

export default function ProjectsTeaser() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      track.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.case-card');
    const amount = card ? card.getBoundingClientRect().width + 24 : 360;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <section className="section carousel" id="projetos">
      <div className="container carousel__header">
        <div>
          <p className="eyebrow">Projetos</p>
          <h2 className="section-title carousel__title">Trabalho selecionado</h2>
        </div>
        <div className="carousel__controls">
          <Link to="/projetos" className="carousel__all">
            Ver todos →
          </Link>
          <div className="carousel__arrows">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Projeto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Próximo projeto"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="carousel__track" ref={trackRef}>
        <div className="carousel__spacer" aria-hidden="true" />
        {PROJECTS.map((p) => (
          <Link to={`/projetos/${p.slug}`} className="case-card" key={p.slug}>
            <img src={p.image} alt={p.name} className="case-card__media" />
            <div className="case-card__body">
              <span className="case-card__category">{p.category}</span>
              <h3 className="case-card__name">{p.name}</h3>
              <p className="case-card__summary">{p.summary}</p>
              <span className="case-card__link">Ver projeto ↗</span>
            </div>
          </Link>
        ))}
        <div className="carousel__spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
