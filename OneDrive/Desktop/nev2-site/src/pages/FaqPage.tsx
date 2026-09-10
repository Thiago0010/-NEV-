import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import './faq.css';

const FAQS = [
  {
    q: 'Como funciona o preço?',
    a: 'Depende do escopo. Sites e sistemas costumam ser por projeto; automações e suporte de TI podem ser mensais. O valor exato fecha depois de entendermos o problema, numa proposta sem compromisso.'
  },
  {
    q: 'Quanto tempo leva um projeto?',
    a: 'Um site institucional leva de 2 a 4 semanas; sistemas e aplicativos, de 6 a 12 semanas, dependendo da complexidade. Automação e suporte de TI costumam ser contínuos. O prazo exato entra na proposta.'
  },
  {
    q: 'Dá para contratar só um serviço?',
    a: 'Dá. A gente encaixa no ponto que você precisa — só o site, só a automação, só o sistema, ou o pacote inteiro. Se você já tem algo pronto, a gente parte do que existe.'
  },
  {
    q: 'Vocês cuidam de tudo ou só da parte técnica?',
    a: 'Tudo: levantamento de requisitos, design, desenvolvimento, testes, deploy e suporte pós-lançamento saem do mesmo time — sem repasse para terceiros no meio do caminho.'
  },
  {
    q: 'O que entra no suporte de TI?',
    a: 'Monitoramento, backups, segurança, atualizações e um canal direto para resolver problemas do dia a dia — sem depender de abrir chamado e esperar dias por resposta.'
  },
  {
    q: 'Atendem fora da minha cidade?',
    a: 'Atendemos o Brasil todo, 100% remoto. Reuniões por chamada de vídeo e tudo registrado por escrito.'
  },
  {
    q: 'Como é o primeiro passo?',
    a: 'Você manda uma mensagem pelo formulário, WhatsApp ou e-mail. A gente entende o problema e volta com um diagnóstico e o caminho recomendado — sem compromisso.'
  }
];

export default function FaqPage() {
  useSeo({
    title: 'Perguntas frequentes — [NEV]²',
    description:
      'Tire dúvidas sobre preço, prazo, escopo e como funciona trabalhar com a [NEV]² antes de pedir um orçamento.'
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq">
      <div className="container faq__header">
        <p className="eyebrow">FAQ</p>
        <h1 className="section-title faq__title">Perguntas frequentes.</h1>
        <p className="section-lede">
          As dúvidas que mais aparecem antes de começar um projeto. Não
          achou a sua? É só chamar a gente.
        </p>
      </div>

      <div className="container faq__list">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq__question"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && <p className="faq__answer">{item.a}</p>}
            </div>
          );
        })}
      </div>

      <div className="container faq__cta">
        <p>Ainda com dúvidas?</p>
        <Link to="/contato" className="cta__button" style={{ border: 'none' }}>
          Fale com a [NEV]²
        </Link>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
          })
        }}
      />
    </section>
  );
}
