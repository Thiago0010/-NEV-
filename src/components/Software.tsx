import './software.css';

const PRODUCTS = [
  {
    name: 'NEV2 Agent',
    tagline: 'Agente de monitoramento de aplicações em produção.'
  },
  {
    name: 'NEV2 Observability',
    tagline: 'Plataforma de observabilidade para aplicações em produção.'
  },
  {
    name: 'NEV2 Studio',
    tagline: 'Plataforma de desenvolvimento low-code para aplicações web e mobile.'
  }
];

export default function Software() {
  return (
    <section className="section software" id="softwares">
      <div className="container">
        <p className="eyebrow">Softwares</p>
        <h2 className="section-title software__title">
          Um ecossistema construído para sustentar tudo o que fazemos.
        </h2>
        <div className="software__list">
          {PRODUCTS.map((p, i) => (
            <div className="software__row" key={p.name}>
              <span className="software__index">0{i + 1}</span>
              <span className="software__name">{p.name}</span>
              <span className="software__tagline">{p.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
