import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const LINKS = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/planos', label: 'Planos' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/faq', label: 'FAQ' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${isHome ? (scrolled ? 'nav--scrolled' : '') : 'nav--inner'}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__mark" aria-label="[NEV]² — início">
            {/* {!isHome && <img src="/brand/logo.svg" alt="" className="nav__logo" />} */}
            <span>[NEV]²</span>
          </Link>
          <nav className="nav__links" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link to="/contato" className="nav__cta">
            Iniciar projeto
          </Link>
        </div >
      </header>
    </>
  );
}
