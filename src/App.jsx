import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Home from './pages/Home';
import Hotel from './pages/Hotel';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && 
      (('ontouchstart' in window) || navigator.maxTouchPoints > 0 || window.innerWidth <= 768);

    let lenis = null;
    let rfId = null;

    if (!isTouch) {
      // Desktop smooth scroll with Lenis
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 0,
        infinite: false,
      });

      window.lenis = lenis;

      const raf = (time) => {
        lenis?.raf(time);
        rfId = requestAnimationFrame(raf);
      };
      rfId = requestAnimationFrame(raf);
    } else {
      // Mobile native fallback
      window.lenis = {
        scrollTo: (target, opts) => {
          const el = typeof target === 'string' ? document.querySelector(target) : target;
          if (el) {
            const offset = opts?.offset || 0;
            const top = el.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        },
      };
    }

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
          threshold: 0.05,
          rootMargin: '0px 0px -20px 0px',
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
          if (lenis) {
            lenis.scrollTo(el, { offset: -80, duration: 1.2 });
          } else {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (rfId) cancelAnimationFrame(rfId);
      if (lenis) {
        lenis.destroy();
      }
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
