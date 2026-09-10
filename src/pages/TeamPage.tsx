import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../data/team';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import './team.css';

export default function TeamPage() {
  useSeo({
    title: 'Equipe — [NEV]²',
    description:
      'Conheça o time de engenharia, design e automação por trás dos projetos da [NEV]².'
  });

  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, '.team__card', { stagger: 0.08 });

  return (
    <section className="section team">
      <div className="container">
        <p className="eyebrow">Equipe</p>
        <h1 className="section-title team__title">
          As pessoas por trás de cada projeto.
        </h1>
        <p className="section-lede">
          Um time enxuto de engenharia, design e automação — pequeno o
          suficiente para decisões rápidas, experiente o suficiente para
          projetos complexos.
        </p>
      </div>

      <div className="team__grid container" ref={ref}>
        {TEAM.map((member) => (
          <div className="team__card" key={member.name}>
            <div className="team__avatar" aria-hidden="true">
              {member.name
                .split(' ')
                .slice(0, 2)
                .map((w) => w[0])
                .join('')}
            </div>
            <h2>{member.name}</h2>
            <span className="team__role">{member.role}</span>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="container team__cta">
        <p>Quer fazer parte do time ou trabalhar com a gente?</p>
        <Link to="/contato" className="cta__button" style={{ border: 'none' }}>
          Fale com a [NEV]²
        </Link>
      </div>
    </section>
  );
}
