import './metrics.css';

const METRICS = [
  {
    value: '50+',
    label: 'projetos entregues',
    note: 'de startups em fase inicial a operações consolidadas.'
  },
  {
    value: '98%',
    label: 'satisfação dos clientes',
    note: 'medida em cada entrega, não apenas no fechamento do contrato.'
  },
  {
    value: '24/7',
    label: 'suporte ativo',
    note: 'sistemas em produção acompanhados continuamente.'
  }
];

export default function Metrics() {
  return (
    <section className="section metrics" aria-label="Números da [NEV]²">
      <div className="container">
        <div className="metrics__row">
          {METRICS.map((m, i) => (
            <div className="metrics__item" key={m.label}>
              <span className="metrics__index">0{i + 1}</span>
              <span className="metrics__value">{m.value}</span>
              <span className="metrics__label">{m.label}</span>
              <p className="metrics__note">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
