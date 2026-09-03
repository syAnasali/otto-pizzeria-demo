import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If on the hotel page, active tab is always Hotel GVR
      if (location.pathname === '/hotel') {
        setActiveTab('Hotel GVR');
        return;
      }

      // If scrolled near the bottom of the page, activate Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveTab('Contact');
        return;
      }

      // Section IDs in exact vertical layout order on Home page
      const sections = [
        { id: 'hero', name: 'Hero' },
        { id: 'anatomy', name: 'Craft Anatomy' },
        { id: 'menu', name: 'Menu' },
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
    { name: 'Craft Anatomy', href: '/#anatomy' },
    { name: 'Menu', href: '/#menu' },
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

  const isHotelPage = location.pathname === '/hotel';

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <nav aria-label="Main Navigation" className="bg-white/95 backdrop-blur-md retro-border rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-2 sm:py-3 shadow-pop transition-all">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Brand Logo - Redirects to Hero */}
          <Link 
            aria-label="Burger Signature Home & Hero" 
            className="flex items-center gap-2 sm:gap-3 group shrink-0 cursor-pointer" 
            to="/#hero" 
            onClick={handleLogoClick}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-cheddar-yellow rounded-xl sm:rounded-2xl retro-border flex items-center justify-center text-xl sm:text-2xl transform group-hover:rotate-12 transition-transform shadow-pop-sm">
              🍔
            </div>
            <div className="flex flex-col">
              <span className="font-funky text-xl sm:text-3xl text-retro-brown tracking-wide leading-none group-hover:text-burnt-orange transition-colors">
                Burger<span className="text-burnt-orange">.</span>
              </span>
              <span className="text-[9px] sm:text-[11px] font-extrabold text-cheddar-yellow uppercase tracking-widest leading-none mt-0.5">
                बर्गर सिगनेचर • Jaipur
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav Links (Centered Section Anchor Links with Generous Spacing) */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 font-bold text-sm tracking-wide">
            {sectionLinks.map((item) => {
              const isActive = !isHotelPage && activeTab === item.name;
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

          {/* Right Controls: Hotel GVR Button + Call 24/7 & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            {/* Hotel GVR Distinct Page Link (Right-Shifted) */}
            <Link
              to="/hotel"
              onClick={() => {
                setActiveTab('Hotel GVR');
                setIsMobileMenuOpen(false);
              }}
              className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl border-2 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isHotelPage
                  ? 'bg-brioche-deep text-parchment-subtle border-retro-brown shadow-pop-sm'
                  : 'bg-cream-soft text-retro-brown border-retro-brown/40 hover:border-retro-brown hover:bg-cheddar-yellow/30 shadow-pop-sm'
              }`}
            >
              <span className="text-base">🏨</span>
              <span className="font-chunky text-xs uppercase tracking-wider">Hotel GVR</span>
              <span
                className={`text-[9px] font-chunky px-1.5 py-0.5 rounded-lg border transition-colors ${
                  isHotelPage
                    ? 'bg-cheddar-amber text-brioche-deep border-cheddar-amber'
                    : 'bg-sun-gold text-retro-brown border-retro-brown'
                }`}
              >
                AC STAY
              </span>
            </Link>

            {/* Direct Call Button */}
            <a 
              className="inline-flex items-center gap-1.5 bg-retro-brown text-white font-chunky text-[11px] sm:text-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all transform active:translate-x-0.5 active:translate-y-0.5" 
              href="tel:+916376302275"
            >
              <span>CALL 24/7</span>
            </a>
            
            {/* Mobile Hamburger Button */}
            <button 
              aria-label="Toggle navigation menu"
              className="md:hidden p-1.5 sm:p-2 bg-cream-soft rounded-xl retro-border hover:bg-cheddar-yellow transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-retro-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t-2 border-retro-brown/10">
            <ul className="flex flex-col gap-3 font-bold text-base">
              {/* Section Anchor Links */}
              {sectionLinks.map((item) => {
                const isActive = !isHotelPage && activeTab === item.name;
                return (
                  <li key={item.name}>
                    <a 
                      className={`nav-wavy-link flex items-center justify-between transition-colors ${
                        isActive 
                          ? 'active text-burnt-orange font-extrabold' 
                          : 'text-retro-brown hover:text-burnt-orange'
                      }`} 
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}

              {/* Featured Hotel GVR Card in Mobile Drawer */}
              <li className="py-1">
                <Link
                  to="/hotel"
                  onClick={() => {
                    setActiveTab('Hotel GVR');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all ${
                    isHotelPage
                      ? 'bg-brioche-deep text-parchment-subtle border-retro-brown shadow-pop-sm'
                      : 'bg-cream-soft text-retro-brown border-retro-brown hover:bg-cheddar-yellow/30 shadow-pop-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏨</span>
                    <div className="flex flex-col text-left">
                      <span className="font-chunky text-sm uppercase leading-tight">Hotel GVR</span>
                      <span className={`text-[10px] font-bold ${isHotelPage ? 'text-cheddar-amber' : 'text-zinc-500'}`}>
                        Boutique AC Rooms from ₹2,000 · Separate Page
                      </span>
                    </div>
                  </div>
                  <span className="bg-sun-gold text-retro-brown text-[10px] font-chunky px-2 py-1 rounded-lg retro-border">
                    AC STAY
                  </span>
                </Link>
              </li>

              <li className="pt-2 flex flex-col gap-2">
                <a className="flex items-center justify-center gap-2 w-full bg-retro-brown text-white font-chunky text-sm px-4 py-3 rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange transition-colors" href="tel:+916376302275">
                  <span>CALL: +91 6376302275</span>
                </a>
                <a className="flex items-center justify-center gap-2 w-full bg-cream-soft text-retro-brown font-chunky text-xs px-4 py-2 rounded-xl retro-border hover:bg-cheddar-yellow transition-colors" href="tel:+917014639336">
                  <span>ALT: +91 7014639336</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
