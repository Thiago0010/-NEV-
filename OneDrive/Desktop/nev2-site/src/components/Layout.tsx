import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import WhatsAppWidget from './WhatsAppWidget';
import RouteTransitionOverlay from './RouteTransitionOverlay';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div id="top">
      <RouteTransitionOverlay />
      <CustomCursor />
      <Nav />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
