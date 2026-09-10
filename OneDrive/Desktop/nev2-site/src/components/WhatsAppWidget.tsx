import { FormEvent, useState } from 'react';
import './whatsapp-widget.css';

const WHATSAPP_NUMBER = '5561998889542'; // troque pelo número real, formato 55DDDNUMERO

const NEEDS = [
  'Site institucional',
  'Sistema personalizado',
  'Aplicativo',
  'Automação',
  'Inteligência artificial',
  'Ainda não sei — quero conversar'
];

function buildMessage(name: string, need: string) {
  const intro = name.trim() ? `Olá, meu nome é ${name.trim()}.` : 'Olá!';
  return `${intro} Tenho interesse em: ${need}. Vim pelo site da [NEV]² e quero saber mais.`;
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [need, setNeed] = useState(NEEDS[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = buildMessage(name, need);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <div className="wa-widget" aria-live="polite">
      {open && (
        <div className="wa-widget__panel" role="dialog" aria-label="Falar no WhatsApp com a [NEV]²">
          <div className="wa-widget__panel-header">
            <div>
              <strong>Fale agora com a [NEV]²</strong>
              <span>Resposta rápida, sem enrolação.</span>
            </div>
            <button
              type="button"
              className="wa-widget__close"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>

          <form className="wa-widget__form" onSubmit={handleSubmit}>
            <label htmlFor="wa-name">Seu nome</label>
            <input
              id="wa-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Como podemos te chamar?"
              autoComplete="name"
            />

            <label htmlFor="wa-need">O que você precisa?</label>
            <select id="wa-need" value={need} onChange={(e) => setNeed(e.target.value)}>
              {NEEDS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>

            <button type="submit" className="wa-widget__submit">
              Continuar no WhatsApp
            </button>
            <span className="wa-widget__note">
              Você será direcionado ao WhatsApp com a mensagem já pronta.
            </span>
          </form>
        </div>
      )}

      <button
        type="button"
        className="wa-widget__fab"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Falar com a [NEV]² no WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.66 6.12L4 29l8.06-1.62a12.9 12.9 0 0 0 3.96.62c6.63 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm0 21.86c-1.34 0-2.65-.32-3.82-.94l-.27-.15-4.78.96.98-4.66-.18-.28a9.83 9.83 0 0 1-1.5-5.27c0-5.46 4.44-9.9 9.9-9.9s9.9 4.44 9.9 9.9-4.44 9.9-9.9 9.9Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          />
        </svg>
      </button>
    </div>
  );
}
