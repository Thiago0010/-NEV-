import './technology.css';

const STACK = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'JS'] },
  { group: 'Motion & 3D', items: ['Three.js', 'GSAP', 'WebGL'] },
  { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'Java', 'Python', 'Go'] },
  { group: 'Infra & IA', items: ['AWS', 'Docker', 'LLMs aplicados'] }
];

export default function Technology() {
  return (
    <section className="section technology" id="tecnologia">
      <div className="container technology__grid">
        <div>
          <p className="eyebrow">Tecnologia</p>
          <h2 className="section-title technology__title">
            Ferramentas escolhidas, não acumuladas.
          </h2>
          <p className="section-lede">
            Cada camada da stack existe porque resolve um problema real de
            desempenho, confiabilidade ou velocidade de entrega — nunca por
            tendência.
          </p>
        </div>
        <div className="technology__columns">
          {STACK.map((s) => (
            <div className="technology__column" key={s.group}>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
