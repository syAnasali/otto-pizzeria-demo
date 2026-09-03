import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      // If we are on the hotel page, the active tab is always Upstairs Suites
      if (location.pathname === '/hotel') {
        setActiveTab('Upstairs Suites');
        return;
      }

      // IDs of sections on the home page in order
      const sections = ['hero', 'menu', 'anatomy', 'reviews'];
      const scrollPosition = window.scrollY + 200; // offset for the sticky header

      let currentSection = 'hero';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          currentSection = sectionId;
          break;
        }
      }

      const tabNames = {
        'hero': 'Home',
        'menu': 'Funky Menu',
        'anatomy': 'Craft Anatomy',
        'reviews': 'Reviews'
      };
      
      setActiveTab(tabNames[currentSection]);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state based on current scroll position or route
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'Funky Menu', href: '/#menu' },
    { name: 'Craft Anatomy', href: '/#anatomy' },
    { name: 'Upstairs Suites', href: '/hotel', badge: 'AC' },
    { name: 'Reviews', href: '/#reviews' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav aria-label="Main Navigation" className="bg-white/95 backdrop-blur-md retro-border rounded-3xl px-5 py-3 shadow-pop flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <Link aria-label="Burger Signature Home" className="flex items-center gap-3 group" to="/">
          <div className="w-11 h-11 bg-cheddar-yellow rounded-2xl retro-border flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform shadow-pop-sm">
            🍔
          </div>
          <div className="flex flex-col">
            <span className="font-funky text-2xl sm:text-3xl text-retro-brown tracking-wide leading-none">
              Burger<span className="text-burnt-orange">.</span>
            </span>
            <span className="text-[11px] font-extrabold text-cheddar-yellow uppercase tracking-widest leading-none mt-0.5">
              बर्गर सिगनेचर • Jaipur
            </span>
          </div>
        </Link>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.badge ? (
                <a 
                  className={`flex items-center gap-1.5 transition-colors ${activeTab === item.name ? 'text-burnt-orange underline decoration-wavy decoration-2 underline-offset-4' : 'text-retro-brown hover:text-burnt-orange'}`} 
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span>{item.name}</span>
                  <span className="bg-sun-gold text-[10px] font-chunky px-1.5 py-0.5 rounded retro-border">{item.badge}</span>
                </a>
              ) : (
                <a 
                  className={`transition-colors ${activeTab === item.name ? 'text-burnt-orange underline decoration-wavy decoration-2 underline-offset-4' : 'text-retro-brown hover:text-burnt-orange'}`} 
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* User Cart & Profile Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button aria-label="Cart 4 items" className="relative p-2.5 bg-cream-soft rounded-2xl retro-border hover:bg-cheddar-yellow hover:scale-105 transition-all shadow-pop-sm" type="button">
            <svg className="w-5 h-5 text-retro-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-burnt-orange text-white text-[10px] font-chunky w-5 h-5 rounded-full flex items-center justify-center retro-border">
              4
            </span>
          </button>
          <div className="hidden sm:flex items-center gap-2.5 bg-cream-soft py-1.5 px-3 rounded-2xl retro-border">
            <div className="w-7 h-7 rounded-full bg-cheddar-yellow flex items-center justify-center text-xs font-black border border-retro-brown">
              👑
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold leading-none">M. Jabel</p>
              <p className="text-[9px] text-zinc-500 font-bold leading-none mt-0.5">Jaipur VIP</p>
            </div>
            <svg className="w-3.5 h-3.5 text-retro-brown ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <a className="hidden lg:inline-flex items-center gap-2 bg-retro-brown text-white font-chunky text-xs px-4 py-2.5 rounded-2xl shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all transform active:translate-x-0.5 active:translate-y-0.5" href="tel:09982844485">
            <span>CALL 24/7</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
