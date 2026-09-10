import './plans.css';

const PLANS = [
  {
    title: 'Básico',
    price: 'R$ 700',
    period: '/projeto',
    description: 'Para quem precisa de uma presença digital profissional e direta.',
    features: [
      'Landing page profissional',
      'Design responsivo',
      'SEO básico',
      '1 rodada de revisões',
      'Entrega em até 7 dias',
      'Suporte prioritário',
    ],
    featured: false,
  },
  {
    title: 'Profissional',
    price: 'R$ 2.200',
    period: '/projeto',
    description: 'A solução ideal para empresas que buscam escala e autoridade.',
    features: [
      'Site institucional completo',
      'Até 10 páginas internas',
      'SEO avançado',
      'Painel administrativo',
      '3 rodadas de revisões',
      'Suporte por 30 dias',
    ],
    featured: true,
  },
  {
    title: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: 'Sistemas complexos e arquiteturas sob medida para grandes operações.',
    features: [
      'Sistema personalizado',
      'Páginas e revisões ilimitadas',
      'Integrações avançadas',
      'Arquitetura escalável',
      'Suporte dedicado 24/7',
      'Consultoria estratégica',
    ],
    featured: false,
  },
];

export default function Plans() {
  return (
    <section className="section plans" id="planos">
      <div className="container">
       

        <div className="plans__grid">
          {PLANS.map((plan) => (
            <article className={`plans__card ${plan.featured ? 'plans__card--featured' : ''}`} key={plan.title}>
              <div className="plans__card-body">
                <h3 className="plans__plan-name">{plan.title}</h3>
                <div className="plans__price-container">
                  <span className="plans__price">{plan.price}</span>
                  <span className="plans__period">{plan.period}</span>
                </div >
                <p className="plans__description">{plan.description}</p>

                <ul className="plans__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <svg className="plans__check" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div >

              <div className="plans__card-footer">
                <a href="/contato" className={`plans__button ${plan.featured ? 'plans__button--primary' : ''}`}>
                  {plan.featured ? 'Começar agora' : 'Saber mais'}
                </a>
              </div >
            </article>
          ))}
        </div >
      </div >
    </section>
  );
}
