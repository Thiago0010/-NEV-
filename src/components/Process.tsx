import './process.css';

const STEPS = [
  { title: 'Ideia', note: 'Entendemos o problema antes de falar de solução.' },
  { title: 'Estratégia', note: 'Definimos escopo, riscos e critérios de sucesso.' },
  { title: 'Design', note: 'Desenhamos a experiência com intenção, não estilo.' },
  { title: 'Engenharia', note: 'Construímos com arquitetura pensada para durar.' },
  { title: 'Lançamento', note: 'Colocamos em produção com segurança e dados.' },
  { title: 'Evolução', note: 'Acompanhamos, medimos e melhoramos continuamente.' },
   { title: 'Evolução', note: 'Acompanhamos, medimos e melhoramos continuamente.' }
];

export default function Process() {
  return (
    <section className="section process" id="processo">
      <div className="container">
        <p className="eyebrow">Processo</p>
        <h2 className="section-title process__title">
          De ideia a produto, sem atalhos.
        </h2>
        <ol className="process__list">
          {STEPS.map((s, i) => (
            <li className="process__step" key={s.title}>
              <span className="process__number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
