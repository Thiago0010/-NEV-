import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import './about-page.css';

const VALUES = [
  {
    title: 'Clareza acima de tudo',
    text: 'Escopo, prazo e preço combinados antes de começar — sem letras miúdas.'
  },
  {
    title: 'Engenharia de verdade',
    text: 'Código pensado para durar, não para ser refeito em dois anos.'
  },
  {
    title: 'Resultado mensurável',
    text: 'Cada projeto tem uma métrica de sucesso definida desde o início.'
  }
];

export default function AboutPage() {
  useSeo({
    title: 'Sobre a [NEV]²',
    description:
      'Conheça a história, os valores e a forma de trabalhar da [NEV]² — uma empresa de tecnologia que trata software como produto.'
  });

  return (
    <>
      <section className="section about-page">
        <div className="container">
          <p className="eyebrow">Sobre a [NEV]²</p>
          <h1 className="section-title about-page__title">
            Tecnologia levada a sério, do jeito que deveria sempre ter sido.
          </h1>
          <p className="section-lede about-page__lede">
            A [NEV]² nasceu para preencher uma lacuna simples: a maioria das
            empresas de tecnologia entrega código, poucas entregam produto.
            Construímos sistemas, sites, aplicativos, automações e soluções
            de inteligência artificial com o mesmo padrão de acabamento que
            se espera de qualquer bom produto.
          </p>
        </div>
      </section>

      <section className="section about-page__values">
        <div className="container">
          <p className="eyebrow">Como trabalhamos</p>
          <div className="about-page__values-grid">
            {VALUES.map((v, i) => (
              <div className="about-page__value" key={v.title}>
                <span>0{i + 1}</span>
                <h2>{v.title}</h2>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-page__cta">
        <div className="container about-page__cta-inner">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Conte o que sua empresa precisa resolver.</h2>
          </div>
          <div className="about-page__cta-actions">
            <Link to="/contato" className="cta__button" style={{ border: 'none' }}>
              Falar com a [NEV]²
            </Link>
            <Link to="/equipe" className="about-page__cta-link">
              Conheça o time →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
