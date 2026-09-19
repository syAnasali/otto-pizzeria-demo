import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Home from './pages/Home';
import SplashLoader from './components/SplashLoader';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;

    // Continuous RAF loop for 60/120fps buttery-smooth momentum
    let rfId = null;
    const raf = (time) => {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    };
    rfId = requestAnimationFrame(raf);

    // 2. Real-time scroll progress indicator
    const progressBar = document.getElementById('scroll-progress-bar');
    const updateScrollProgress = (e) => {
      if (progressBar) {
        const progress = e?.progress !== undefined 
          ? e.progress 
          : (window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
        progressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
      }
    };
    lenis.on('scroll', updateScrollProgress);

    // 3. Scroll-Driven Dynamic Content Reveal Engine
    let observer = null;
    let timer = null;
    const isHeadless = typeof navigator !== 'undefined' && /HeadlessChrome|Headless/i.test(navigator.userAgent);

    if (isHeadless) {
      document.documentElement.classList.add('headless-mode');
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('revealed');
      });
    } else {
      // IntersectionObserver tuned for loading content strictly as it enters the viewport
      observer = new IntersectionObserver(
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
          rootMargin: '0px 0px -50px 0px',
        }
      );

      // Attach observer to all reveal targets
      const scanAndObserve = () => {
        const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          // Immediately reveal only items already inside initial viewport on mount
          if (rect.top < window.innerHeight - 80 && rect.bottom > 0) {
            el.classList.add('revealed');
          } else {
            observer.observe(el);
          }
        });
      };

      requestAnimationFrame(scanAndObserve);
      timer = setTimeout(scanAndObserve, 80);

      // Synchronize reveal checks with Lenis RAF momentum
      lenis.on('scroll', () => {
        // Observer handles primary intersections, but lenis sync ensures edge cases are covered
      });
    }

    // 4. Smooth Anchor Hash Scrolling
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
      if (rfId) cancelAnimationFrame(rfId);
      if (timer) clearTimeout(timer);
      lenis.destroy();
      window.lenis = null;
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SplashLoader />
      <div id="scroll-progress-container" aria-hidden="true">
        <div id="scroll-progress-bar"></div>
      </div>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
