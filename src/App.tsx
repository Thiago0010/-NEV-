import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PlansPage from './pages/PlansPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/planos" element={<PlansPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:slug" element={<ProjectDetail />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
