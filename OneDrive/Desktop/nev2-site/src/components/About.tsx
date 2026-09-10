import { Link } from 'react-router-dom';
import './about.css';

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">Sobre a [NEV]²</p>
          <h2 className="section-title about__title">
            Uma empresa de engenharia que trata software como produto.
          </h2>
        </div>
        <div>
          <p className="about__body">
            A [NEV]² nasceu para preencher uma lacuna simples: a maioria das
            empresas de tecnologia entrega código, poucas entregam produto.
            Nós construímos sistemas, aplicativos e plataformas com o mesmo
            padrão de acabamento que se espera de qualquer bom produto —
            pensado do início ao fim, sustentado depois do lançamento e
            evoluído com disciplina.
          </p>
          <Link to="/sobre" className="about__more">
            Conheça a [NEV]² a fundo →
          </Link>
        </div>
      </div>
    </section>
  );
}
