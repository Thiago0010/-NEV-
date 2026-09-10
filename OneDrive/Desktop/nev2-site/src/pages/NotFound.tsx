import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
          Essa página não existe.
        </h1>
        <p className="section-lede" style={{ margin: '1rem auto 2rem' }}>
          O conteúdo pode ter sido movido. Volte para o início ou explore os
          projetos da [NEV]².
        </p>
        <Link to="/" className="cta__button" style={{ border: 'none' }}>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
