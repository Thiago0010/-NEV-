import { useEffect, useRef, useState } from 'react';
import './lead-qualifier.css';

const WHATSAPP_NUMBER = '5561998889542'; // troque pelo número real, formato 55DDDNUMERO

interface Step {
  question: string;
  options: string[];
}

const STEPS: Step[] = [
  {
    question: 'Você já tem um site ou sistema hoje?',
    options: ['Sim, já tenho', 'Não, ainda não tenho']
  },
  {
    question: 'O que você mais precisa agora?',
    options: ['Site', 'Sistema personalizado', 'Automação', 'Inteligência artificial', 'Ainda não sei']
  },
  {
    question: 'Quando você quer começar?',
    options: ['O quanto antes', 'Esse mês', 'Só pesquisando por enquanto']
  }
];

function buildMessage(answers: string[]) {
  const [hasSite, need, timing] = answers;
  return (
    `Olá! Vim pelo site da [NEV]².\n` +
    `- Já tem site/sistema: ${hasSite}\n` +
    `- O que precisa: ${need}\n` +
    `- Quando quer começar: ${timing}\n` +
    `Quero entender como vocês podem ajudar.`
  );
}

export default function LeadQualifier() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const choose = (option: string) => {
    const next = [...answers, option];
    setAnswers(next);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  const isDone = step >= STEPS.length;
  const whatsappUrl = isDone
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(answers))}`
    : '#';

  return (
    <section className="lead-qualifier" ref={rootRef}>
      <div className={`container lead-qualifier__inner ${visible ? 'lead-qualifier__inner--visible' : ''}`}>
        <div className="lead-qualifier__card">
          {!isDone ? (
            <>
              <div className="lead-qualifier__progress">
                {STEPS.map((_, i) => (
                  <span key={i} className={i <= step ? 'is-active' : ''} />
                ))}
              </div>
              <p className="lead-qualifier__eyebrow">Vamos descobrir por onde começar</p>
              <h2 className="lead-qualifier__question">{STEPS[step].question}</h2>
              <div className="lead-qualifier__options">
                {STEPS[step].options.map((opt) => (
                  <button key={opt} type="button" onClick={() => choose(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  className="lead-qualifier__back"
                  onClick={() => {
                    setAnswers((a) => a.slice(0, -1));
                    setStep((s) => s - 1);
                  }}
                >
                  ← Voltar
                </button>
              )}
            </>
          ) : (
            <div className="lead-qualifier__result">
              <span className="lead-qualifier__badge">É você mesmo que a gente ajuda</span>
              <h2>
                Perfeito — pelo que você respondeu, a [NEV]² é exatamente o
                parceiro certo pra esse momento.
              </h2>
              <p>
                Clique abaixo para continuar no WhatsApp com essas respostas
                já preenchidas. É rápido.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="lead-qualifier__whatsapp"
              >
                Continuar no WhatsApp →
              </a>
              <button type="button" className="lead-qualifier__restart" onClick={restart}>
                Responder de novo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
