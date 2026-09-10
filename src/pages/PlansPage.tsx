import { useSeo } from '../hooks/useSeo';
import Plans from '../components/Plans';
import { Link } from 'react-router-dom';
import './plans-page.css';

export default function PlansPage() {
  useSeo({
    title: 'Planos — [NEV]²',
    description: 'Conheça nossos modelos de investimento para transformar a tecnologia da sua empresa.',
  });

  return (
    <div className="plans-page">
      <section className="section">
        <div className="container plans-page__header">
          <p className="eyebrow">Investimento</p>
          <h1 className="section-title plans-page__title">
            Planos transparentes para cada etapa do seu negócio.
          </h1>
          <p className="section-lede">
            Escolha a solução que melhor se0o adapta ao seu momento atual.
          </p>
        </div >
      </section>

      <Plans />

      <section className="section plans-page__contact">
        <div className="container">
          <div className="plans-page__contact-inner">
            <div className="plans-page__contact-text">
              <h2 className="section-title">Ficou com alguma dúvida?</h2>
              <p className="section-lede">
                Estamos prontos para analisar seu projeto e indicar o melhor caminho.
              </p>
            </div >
            <div className="plans-page__contact-links">
              <a href="mailto:contato@nev2dev.com" className="contact-link">
                <span className="contact-link__label">E-mail</span>
                <span className="contact-link__value">contato@nev2dev.com</span>
              </a>
              <a href="https://wa.me/SEU_NUMERO" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link__label">WhatsApp</span>
                <span className="contact-link__value">Falar com especialista</span>
              </a>
            </div >
          </div >
        </div >
      </section>
    </div >
  );
}
