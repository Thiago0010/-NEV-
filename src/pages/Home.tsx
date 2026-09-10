import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import StatusBar from '../components/StatusBar';
import Ribbon from '../components/Ribbon';
import Manifesto from '../components/Manifesto';
import LeadQualifier from '../components/LeadQualifier';
import Metrics from '../components/Metrics';
import Services from '../components/Services';
import ProjectsTeaser from '../components/ProjectsTeaser';
import Testimonials from '../components/Testimonials';
import Software from '../components/Software';
import Technology from '../components/Technology';
import Process from '../components/Process';
import About from '../components/About';
import Plans from '../components/Plans';
import CTA from '../components/CTA';
import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo({
    title: '[NEV]² — Software, TI, automações e Inteligência Artificial sob medida',
    description:
      'A [NEV]² desenvolve softwares, sites, aplicativos, sistemas personalizados, automações e soluções de inteligência artificial para empresas que querem vender mais e operar melhor.'
  });

  return (
    <>
      <StatusBar />
      <Hero3D />
      <Ribbon />
      <Manifesto />
      <LeadQualifier />
      <Metrics />
      <Services />
      <Ribbon label="PROJETOS SELECIONADOS" />
      <ProjectsTeaser />
      <Testimonials />
      <Software />
      <Technology />
      <Process />
      <About />
      <Ribbon label="INVESTIMENTO" />
      <Plans />
      <Ribbon label="[NEV]² É O PRÓXIMO PASSO" />
      <CTA>
        <Link to="/contato" className="cta__button">
          Falar com um especialista
        </Link>
      </CTA>
    </>
  );
}
