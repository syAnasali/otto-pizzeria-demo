import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled near the bottom of the page, activate Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveTab('Contact');
        return;
      }

      // Section IDs in exact vertical layout order on Home page
      const sections = [
        { id: 'hero', name: 'Hero' },
        { id: 'anatomy', name: 'Crust Craft' },
        { id: 'menu', name: 'Pizza Menu' },
        { id: 'reviews', name: 'Reviews' },
        { id: 'contact', name: 'Contact' }
      ];

      const scrollPosition = window.scrollY + 220; // offset for sticky header

      let current = 'Hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          current = sections[i].name;
          break;
        }
      }

      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const sectionLinks = [
    { name: 'Crust Craft', href: '/#anatomy' },
    { name: 'Pizza Menu', href: '/#menu' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    setActiveTab('Hero');

    if (location.pathname === '/') {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        if (window.lenis) {
          window.lenis.scrollTo(heroEl, { offset: -90, duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (e, item) => {
    setActiveTab(item.name);
    setIsMobileMenuOpen(false);

    if (item.href.startsWith('/#')) {
      const sectionId = item.href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -90, duration: 1.2 });
          } else {
            const headerOffset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    }
  };

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <nav aria-label="Main Navigation" className="bg-white/95 backdrop-blur-md retro-border rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-2 sm:py-3 shadow-pop transition-all">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Brand Logo - Redirects to Hero */}
          <Link 
            aria-label="Otto Pizzeria Home & Hero" 
            className="flex items-center gap-2 sm:gap-3 group shrink-0 cursor-pointer" 
            to="/#hero" 
            onClick={handleLogoClick}
          >
            <div className="h-9 sm:h-11 px-2.5 py-1 bg-cream-soft rounded-xl sm:rounded-2xl retro-border flex items-center justify-center transform group-hover:scale-105 transition-all shadow-pop-sm">
              <img src="/otto-logo.svg" alt="Otto Pizzeria Logo" className="h-5 sm:h-7 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-funky text-xl sm:text-2xl text-retro-brown tracking-wide leading-none group-hover:text-burnt-orange transition-colors flex items-center gap-1.5">
                Otto<span className="font-chunky text-[11px] sm:text-xs text-burnt-orange uppercase tracking-wider">Pizzeria</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-burnt-orange uppercase tracking-widest leading-none mt-0.5">
                Wood-Fired • Dubai
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 font-bold text-sm tracking-wide">
            {sectionLinks.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <li key={item.name} className="flex items-center">
                  <a 
                    className={`nav-wavy-link group text-[13px] lg:text-[14px] font-extrabold tracking-wide px-2 py-1 transition-colors whitespace-nowrap ${
                      isActive 
                        ? 'active text-burnt-orange font-black' 
                        : 'text-retro-brown/90 hover:text-burnt-orange'
                    }`} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Controls: WhatsApp Quick Button + Call 24/7 & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            <a
              href="https://wa.me/971503788009?text=Hello%20Otto%20Pizzeria!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-cream-soft text-retro-brown border-2 border-retro-brown/40 hover:border-retro-brown hover:bg-cheddar-yellow/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-pop-sm"
            >
              <span className="text-base">💬</span>
              <span className="font-chunky text-xs uppercase tracking-wider">WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a 
              className="inline-flex items-center gap-1.5 bg-retro-brown text-white font-chunky text-[11px] sm:text-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all transform active:translate-x-0.5 active:translate-y-0.5" 
              href="tel:+971503788009"
            >
              <span>CALL 24/7</span>
            </a>
            
            {/* Mobile Menu Toggle Button with Smooth Hamburger-to-Cross Morph */}
            <button 
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 p-1.5 sm:p-2 bg-cream-soft rounded-xl retro-border hover:bg-cheddar-yellow transition-colors flex items-center justify-center cursor-pointer shadow-pop-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                {/* Top Bar -> Rotates 45deg & translates down */}
                <span 
                  className={`w-full h-0.5 bg-retro-brown rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                    isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0'
                  }`}
                />
                {/* Middle Bar -> Scales to 0 & fades */}
                <span 
                  className={`w-full h-0.5 bg-retro-brown rounded-full transition-all duration-200 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                {/* Bottom Bar -> Rotates -45deg & translates up */}
                <span 
                  className={`w-full h-0.5 bg-retro-brown rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                    isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Accordion & Staggered Reveal */}
        <div 
          className={`grid md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-2 border-retro-brown/10' 
              : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 border-transparent pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-2.5 font-bold text-base py-1">
              {/* Section Anchor Links with Subtle Cascade */}
              {sectionLinks.map((item, idx) => {
                const isActive = activeTab === item.name;
                return (
                  <li 
                    key={item.name}
                    className="transform transition-all duration-300 ease-out"
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${idx * 40}ms` : '0ms',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-6px)'
                    }}
                  >
                    <a 
                      className={`nav-wavy-link flex items-center justify-between px-1 py-1.5 transition-colors ${
                        isActive 
                          ? 'active text-burnt-orange font-extrabold' 
                          : 'text-retro-brown hover:text-burnt-orange'
                      }`} 
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      <span className="text-sm font-chunky">{item.name}</span>
                      <span className="text-burnt-orange text-xs font-chunky opacity-75">→</span>
                    </a>
                  </li>
                );
              })}

              <li 
                className="pt-2 flex flex-col gap-2 transform transition-all duration-300 ease-out"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${sectionLinks.length * 40}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-6px)'
                }}
              >
                <a 
                  className="flex items-center justify-center gap-2 w-full bg-retro-brown text-white font-chunky text-xs uppercase px-4 py-2.5 rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange transition-colors cursor-pointer" 
                  href="tel:+971503788009"
                >
                  <span>📞 CALL: +971 50 378 8009</span>
                </a>
                <a 
                  className="flex items-center justify-center gap-2 w-full bg-cream-soft text-retro-brown font-chunky text-xs uppercase px-4 py-2 rounded-xl retro-border hover:bg-cheddar-yellow transition-colors cursor-pointer" 
                  href="https://wa.me/971503788009?text=Hello%20Otto%20Pizzeria!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>💬 WHATSAPP: +971 50 378 8009</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
