import './testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'A [NEV]² entendeu exatamente o que a operação precisava. O sistema entrou no ar sem nenhuma dor de cabeça.',
    author: 'Cliente · Fintech'
  },
  {
    quote:
      'Time comprometido e direto ao ponto. O app ficou rápido, estável e do jeito que a gente pediu.',
    author: 'Cliente · Logística'
  },
  {
    quote:
      'A automação eliminou um trabalho que tomava horas toda semana. Impacto imediato no time.',
    author: 'Cliente · Infraestrutura'
  },
  {
    quote:
      'Profissionalismo do começo ao fim. Sempre soubemos em que pé o projeto estava.',
    author: 'Cliente · Varejo'
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <p className="eyebrow">Depoimentos</p>
        <h2 className="section-title testimonials__title">
          Quem trabalhou com a gente, confirma.
        </h2>
      </div>
      <div className="testimonials__grid container">
        {TESTIMONIALS.map((t) => (
          <blockquote className="testimonials__card" key={t.quote}>
            <p>“{t.quote}”</p>
            <cite>{t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
