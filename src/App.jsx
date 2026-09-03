import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Home from './pages/Home';
import Hotel from './pages/Hotel';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
      infinite: false,
    });

    window.lenis = lenis;

    let rfId;
    function raf(time) {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    }
    rfId = requestAnimationFrame(raf);

    // Setup IntersectionObserver for scroll-driven animations
    const setupRevealObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
      
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = setupRevealObserver();

    // Check for target hash scrolling
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -90, duration: 1.2 });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      cancelAnimationFrame(rfId);
      lenis.destroy();
      window.lenis = null;
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
