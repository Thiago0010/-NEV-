import { FormEvent, useState } from 'react';
import { useSeo } from '../hooks/useSeo';
import './contact.css';

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const INITIAL: FormState = {
  name: '',
  email: '',
  company: '',
  budget: 'ate-30k',
  message: ''
};

const BUDGETS = [
  { value: 'ate-1k', label: 'Até R$ 1 mil' },
  { value: '2k-9k', label: 'R$ 2 mil – R$ 9 mil' },
  { value: '10k-12k', label: 'R$ 10 mil – R$ 12 mil' },
  { value: 'acima-12k', label: 'Acima de R$ 12 mil' }
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactPage() {
  useSeo({
    title: 'Contato — [NEV]²',
    description:
      'Fale com a [NEV]² por formulário, WhatsApp, telefone ou e-mail e receba uma resposta em até um dia útil.'
  });

  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = 'Informe seu nome completo.';
    if (!isValidEmail(form.email)) next.email = 'Informe um e-mail válido.';
    if (form.company.trim().length < 2) next.company = 'Informe o nome da empresa.';
    if (form.message.trim().length < 10)
      next.message = 'Conte um pouco mais sobre o projeto (mínimo 10 caracteres).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      // Não há backend configurado neste projeto. Substitua o bloco abaixo
      // pela chamada real (ex.: fetch para sua API, um endpoint de formulário
      // como Formspree/Resend, ou uma function serverless) quando publicar.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="section contact">
        <div className="container contact__success">
          <p className="eyebrow">Recebido</p>
          <h1 className="section-title">Obrigado — sua mensagem chegou.</h1>
          <p className="section-lede">
            Nossa equipe analisa cada projeto individualmente e retorna em até
            um dia útil com os próximos passos.
          </p>
          <button className="cta__button" onClick={() => setStatus('idle')}>
            Enviar outra mensagem
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Contato</p>
          <h1 className="section-title contact__title">
            Conte-nos sobre o seu projeto.
          </h1>
          <p className="section-lede">
            Preencha os campos ao lado com o máximo de contexto possível.
            Quanto mais claro o problema, mais rápido conseguimos responder
            com um plano concreto.
          </p>
          <div className="contact__channels">
            <div className="contact__channel">
              <span className="contact__channel-label">WhatsApp</span>
              <a
                href="https://wa.me/5561998889542"
                target="_blank"
                rel="noreferrer"
              >
                (61) 9 9888-9542
              </a>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-label">E-mail</span>
              <a href="mailto:contato@nev2dev.com">contato@nev2dev.com</a>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-label">Telefone</span>
              <a href="tel:+5561998889542">(61) 9 9888-9542</a>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-label">Endereço</span>
              <span>DF — Brasil</span>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-label">Horário de atendimento</span>
              <span>Seg. a sex., 9h às 18h</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <span className="contact__error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__row">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <span className="contact__error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact__row">
            <label htmlFor="company">Empresa</label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={update('company')}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? 'company-error' : undefined}
              autoComplete="organization"
            />
            {errors.company && (
              <span className="contact__error" id="company-error">
                {errors.company}
              </span>
            )}
          </div>

          <div className="contact__row">
            <label htmlFor="budget">Orçamento estimado</label>
            <select id="budget" name="budget" value={form.budget} onChange={update('budget')}>
              {BUDGETS.map((b) => (
                <option value={b.value} key={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div className="contact__row">
            <label htmlFor="message">Sobre o projeto</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span className="contact__error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          {status === 'error' && (
            <p className="contact__error" role="alert">
              Não foi possível enviar agora. Tente novamente ou escreva para
              contato@nev2dev.com.
            </p>
          )}

          <button type="submit" className="cta__button" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando…' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}
