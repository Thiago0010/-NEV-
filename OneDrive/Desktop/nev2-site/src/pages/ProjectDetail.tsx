import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug, PROJECTS } from '../data/projects';
import { useSeo } from '../hooks/useSeo';
import './project-detail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useSeo({
    title: project ? `${project.name} — Projetos [NEV]²` : 'Projeto — [NEV]²',
    description: project?.summary ?? 'Estudo de caso de um projeto da [NEV]².'
  });

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <div className="container">
          <Link to="/projetos" className="project-detail__back">
            ← Todos os projetos
          </Link>
          <p className="eyebrow">{project.category}</p>
          <h1 className="project-detail__title">{project.name}</h1>
          <div className="project-detail__facts">
            <div>
              <span className="project-detail__fact-label">Cliente</span>
              <span>{project.client}</span>
            </div>
            <div>
              <span className="project-detail__fact-label">Ano</span>
              <span>{project.year}</span>
            </div>
            <div>
              <span className="project-detail__fact-label">Stack</span>
              <span>{project.stack.join(' · ')}</span>
            </div>
          </div>
        </div>
        <img src={project.image} alt={project.name} className="project-detail__media" />
      </header>

      <section className="section">
        <div className="container project-detail__body">
          <div>
            <h2>O desafio</h2>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h2>A solução</h2>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="section project-detail__results">
        <div className="container">
          <p className="eyebrow">Resultados</p>
          <div className="project-detail__results-grid">
            {project.results.map((r) => (
              <div key={r.label}>
                <span className="project-detail__result-value">{r.value}</span>
                <span className="project-detail__result-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-detail__next">
        <div className="container">
          <p className="eyebrow">Próximo projeto</p>
          <Link to={`/projetos/${next.slug}`} className="project-detail__next-link">
            {next.name} →
          </Link>
        </div>
      </section>
    </article>
  );
}
