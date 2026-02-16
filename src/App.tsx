import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import C2C from './pages/C2C/C2C';
import Festival from './pages/Festival/Festival';
import About from './pages/About/About';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Legal from './pages/Legal/Legal';

/* ========================================================= */
/* SCROLL TO TOP COMPONENT */
/* ========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

/* ========================================================= */
/* APP */
/* ========================================================= */

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c2c" element={<C2C />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/about" element={<About />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;