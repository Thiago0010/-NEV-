import { Link } from 'react-router-dom';
import './services.css';

const SERVICES = [
  {
    title: 'Desenvolvimento de software',
    description:
      'Produtos web e back-ends robustos, projetados para crescer junto com a operação — não para serem refeitos em dois anos.',
    size: 'lg'
  },
  {
    title: 'Websites',
    description:
      'Presença digital que comunica precisão desde o primeiro segundo.',
    size: 'sm'
  },
  {
    title: 'Aplicativos',
    description: 'Apps nativos e híbridos com desempenho de produto premium.',
    size: 'sm'
  },
  {
    title: 'TI e infraestrutura',
    description:
      'Consultoria, suporte e infraestrutura para a tecnologia da sua empresa nunca ser um problema.',
    size: 'sm'
  },
  {
    title: 'Sistemas personalizados',
    description:
      'Ferramentas internas desenhadas em torno do processo real da sua equipe, não do processo genérico de um template.',
    size: 'md'
  },
  {
    title: 'Automação',
    description:
      'Eliminação de trabalho manual repetitivo através de integrações e pipelines confiáveis.',
    size: 'sm'
  },
  {
    title: 'Inteligência artificial',
    description:
      'Modelos e agentes aplicados a problemas reais de negócio, com métricas claras de impacto.',
    size: 'md'
  },
  {
    title: 'E o que mais você imaginar',
    description:
      'Se envolve tecnologia, provavelmente a gente resolve. Conte o seu problema e a gente te diz como.',
    size: 'sm'
  }
];

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container services__header">
        <div className="services__header-content">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="section-title services__title">
              Software, TI, automações — e tudo que você imaginar.
            </h2>
          </div>
          <Link to="/planos" className="projects__all">
            Ver todos os serviços e valores →
          </Link>
        </div>
        <div className="services__code-block">
          <div className="code-window">
            <div className="code-window__header">
              <div className="code-window__dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-window__title">nev-solution.ts</div>
            </div>
            <pre className="code-window__content">
              <code>{`class NevSolution {
  private quality = "premium";
  private innovation = 100;

  async createProject(idea: Idea) {
    const solution = await this.analyze(idea);
    return this.deliver(solution);
  }

  deliver(project: Project) {
    return {
      ...project,
      quality: this.quality,
      onTime: true,
      scalable: true
    };
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services__grid">
          {SERVICES.map((s) => (
            <article className={`services__item services__item--${s.size}`} key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div >
    </section>
  );
}
