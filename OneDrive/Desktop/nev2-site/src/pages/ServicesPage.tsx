import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import './services-page.css';

const OFFERINGS = [
  {
    title: 'Desenvolvimento de software',
    description:
      'Produtos web e back-ends sob medida, projetados para crescer com a sua operação.',
    deliverables: ['Arquitetura escalável', 'APIs e integrações', 'Testes automatizados'],
    starting: 'A partir de R$ 931'
  },
  {
    title: 'Websites institucionais e comerciais',
    description: 'Presença digital rápida, responsiva e otimizada para converter visitantes em clientes.',
    deliverables: ['Design sob medida', 'SEO técnico', 'Formulários de captação'],
    starting: 'A partir de R$ 456,99'
  },
  {
    title: 'Aplicativos',
    description: 'Apps nativos e híbridos com desempenho de produto premium para iOS e Android.',
    deliverables: ['UI/UX dedicado', 'Publicação nas lojas', 'Monitoramento pós-lançamento'],
    starting: 'A partir de R$ 2.000'
  },
  {
    title: 'TI e infraestrutura',
    description: 'Consultoria, suporte e infraestrutura em nuvem para sua tecnologia nunca ser um problema.',
    deliverables: ['Suporte contínuo', 'Segurança e backups', 'Monitoramento 24/7'],
    starting: 'Sob consulta'
  },
  {
    title: 'Sistemas personalizados',
    description: 'Ferramentas internas desenhadas em torno do processo real da sua equipe.',
    deliverables: ['Mapeamento de processos', 'Painéis e relatórios', 'Controle de acesso'],
    starting: 'A partir de R$ 1.200'
  },
  {
    title: 'Automação',
    description: 'Eliminação de trabalho manual repetitivo com integrações e pipelines confiáveis.',
    deliverables: ['Integração entre sistemas', 'Robôs de processo', 'Alertas e monitoramento'],
    starting: 'A partir de R$ 2.000'
  },
  {
    title: 'Inteligência artificial',
    description: 'Modelos e agentes aplicados a problemas reais de negócio, com métricas claras de impacto.',
    deliverables: ['Agentes de atendimento', 'Automação de decisões', 'Análise preditiva'],
    starting: 'A partir de R$ 6.000'
  },
  {
    title: 'E o que mais você imaginar',
    description: 'Se envolve tecnologia, é bem provável que a gente resolva. Conte o seu problema.',
    deliverables: ['Diagnóstico gratuito', 'Proposta em até 48h', 'Sem compromisso'],
    starting: 'Vamos conversar'
  }
];

export default function ServicesPage() {
  useSeo({
    title: 'Serviços — [NEV]²',
    description:
      'Software, sites, aplicativos, TI, sistemas personalizados, automação e inteligência artificial — tudo em um só lugar, com a [NEV]².'
  });

  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, '.services-page__card', { stagger: 0.06 });

  return (
    <>
      <section className="section services-page">
        <div className="container">
          <p className="eyebrow">Serviços</p>
          <h1 className="section-title services-page__title">
            Tecnologia, do jeito que a sua empresa precisa.
          </h1>
          <p className="section-lede">
            Trabalhamos com escopo fechado, prazos realistas e comunicação
            direta. Veja abaixo as principais frentes — e se o que você
            precisa não estiver na lista, é só chamar a gente.
          </p>
        </div >

        <div className="services-page__grid container" ref={ref}>
          {OFFERINGS.map((o) => (
            <div className="services-page__card" key={o.title}>
              <h2>{o.title}</h2>
              <p>{o.description}</p>
              <ul>
                {o.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="services-page__card-footer">
                <span>{o.starting}</span>
                <Link to="/contato">Solicitar orçamento →</Link>
              </div >
            </div>
          ))}
        </div >
      </section>

      <section className="section services-page__cta">
        <div className="container services-page__cta-inner">
          <h2>Não sabe por onde começar?</h2>
          <p>
            Fale com a gente e recebemos um diagnóstico gratuito do seu
            problema em até 48 horas — sem compromisso.
          </p>
          <Link to="/contato" className="cta__button" style={{ border: 'none' }}>
            Pedir diagnóstico gratuito
          </Link>
        </div >
      </section>
    </>
  );
}
