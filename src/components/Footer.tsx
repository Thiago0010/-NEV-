import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__mark">[NEV]²</span>
          <p>Engenharia de software premium.</p>
        </div>
        <div className="footer__col">
          <h4>Empresa</h4>
          <Link to="/sobre">Sobre</Link>
          <Link to="/equipe">Equipe</Link>
          <Link to="/projetos">Projetos</Link>
        </div>
        <div className="footer__col">
          <h4>Serviços</h4>
          <Link to="/servicos">Software</Link>
          <Link to="/servicos">Aplicativos</Link>
          <Link to="/servicos">Automação &amp; IA</Link>
        </div>
        <div className="footer__col">
          <h4>Contato</h4>
          <Link to="/contato">Fale com a gente</Link>
          <Link to="/faq">Perguntas frequentes</Link>
          <a href="mailto:contato@nev2dev.com">contato@nev2dev.com</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} [NEV]². Todos os direitos reservados.                                   Developed by [NEV]²</span>
      </div>
    </footer>
  );
}
