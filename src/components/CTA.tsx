import type { ReactNode } from 'react';
import './cta.css';

interface CTAProps {
  children?: ReactNode;
}

export default function CTA({ children }: CTAProps) {
  return (
    <section className="section cta" id="cta-final">
      <div className="container cta__inner">
        <h2 className="cta__title">
          Vamos construir o próximo produto
          <br />
          inevitável da sua empresa.
        </h2>
        {children ?? (
          <a href="mailto:contato@nev2dev.com" className="cta__button">
            Iniciar um projeto
          </a>
        )}
        <span className="cta__meta">contato@nev2dev.com</span>
      </div>
    </section>
  );
}
