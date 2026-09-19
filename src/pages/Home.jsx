import React, { useEffect, useState, useCallback } from 'react';
import Header from '../components/Header';

const REVIEWS = [
  {
    id: 1,
    name: "Raja Kotwal",
    role: "Local Guide · Dubai",
    initials: "RK",
    avatarBg: "bg-sun-gold text-retro-brown",
    rating: 5,
    favorite: "Otto Margherita Classica",
    quote: "Hands down, the best wood-fired pizza in Nad Al Sheba! The 48-hour fermented crust has that airy leopard spotting and the burrata was pure heaven. We ordered at 2:30 AM and got it piping hot in 20 minutes!",
    tag: "Wood-Fired Neapolitan",
  },
  {
    id: 2,
    name: "Praveen Meena",
    role: "Food Blogger · Dubai",
    initials: "PM",
    avatarBg: "bg-cheddar-yellow text-retro-brown",
    rating: 5,
    favorite: "Garlic Knots & Shake",
    quote: "The warm garlic sourdough knots with marinara dip are unbelievable! Also had the mango gelato shake which is super thick and creamy. Perfect midnight hangout spot with great funky vibes.",
    tag: "Garlic Knots & Shakes",
  },
  {
    id: 3,
    name: "Chandrakesh",
    role: "Verified Customer · Nad Al Sheba",
    initials: "CK",
    avatarBg: "bg-burnt-orange text-white",
    rating: 5,
    favorite: "Wild Truffle & Burrata",
    quote: "Ordered the Wild Truffle Burrata pizza for a midnight gathering at 1 AM in Nad Al Sheba. Crisp airy crust, sensational flavor, piping hot delivery, and literally 24-hour service. 10/10 recommendation!",
    tag: "24/7 Midnight Delivery",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Meydan Resident · Dubai",
    initials: "SJ",
    avatarBg: "bg-lettuce-teal/30 text-retro-brown",
    rating: 5,
    favorite: "Spicy Diavola Sizzle",
    quote: "The blistered leopard crust cornicione is true Neapolitan perfection! We order the Spicy Diavola with hot honey every Friday. Easily the highest quality crust in the entire Meydan & Nad Al Sheba area.",
    tag: "Artisanal Hot Honey",
  },
  {
    id: 5,
    name: "Tariq Al Mansoor",
    role: "Villa Host · Nad Al Sheba 4",
    initials: "TM",
    avatarBg: "bg-sun-gold text-retro-brown",
    rating: 5,
    favorite: "Live Villa Pizza Catering",
    quote: "Booked their live pizza catering for our villa gathering on Street 2. The mobile stone oven setup was a showstopper and the Quattro Formaggi pizzas were devoured instantly. Super professional team!",
    tag: "Live Villa Catering",
  },
  {
    id: 6,
    name: "Maya Chen",
    role: "Food Enthusiast · Downtown Dubai",
    initials: "MC",
    avatarBg: "bg-cheddar-yellow/40 text-retro-brown",
    rating: 5,
    favorite: "San Marzano D.O.P. Classica",
    quote: "Midnight pizza done right in Dubai! Pinged them on WhatsApp at 1:45 AM, and 25 minutes later we had steaming wood-fired slices with charred bubbles and real San Marzano tomatoes. Sensational!",
    tag: "Fast WhatsApp Order",
  },
];

const DISPLAY_REVIEWS = [...REVIEWS, ...REVIEWS.slice(0, 3)];

const Home = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isReviewTransitioning, setIsReviewTransitioning] = useState(true);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  const nextReview = useCallback(() => {
    setIsReviewTransitioning(true);
    setReviewIndex((prev) => prev + 1);
  }, []);

  const prevReview = useCallback(() => {
    setIsReviewTransitioning(true);
    setReviewIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isReviewPaused) return;
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [isReviewPaused, nextReview]);

  const handleReviewTransitionEnd = () => {
    if (reviewIndex >= REVIEWS.length) {
      setIsReviewTransitioning(false);
      setReviewIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsReviewTransitioning(true);
        });
      });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
          } else {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 120);
      }
    }
  }, []);

  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
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
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const inquiry = formData.get('inquiry') || 'General Inquiry';
    const message = formData.get('message') || '';

    setContactSubmitted(true);

    const whatsappText = encodeURIComponent(
      `Hello Otto Pizzeria! 🍕\nName: ${name}\nPhone: ${phone}\nInquiry: ${inquiry}\nMessage: ${message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/971503788009?text=${whatsappText}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen">
      
{/* BEGIN: MainHeader */}
{/* Floating Clean & Playful Navigation Bar */}
<Header />
{/* END: MainHeader */}

{/* BEGIN: HeroSection */}
{/* Main Funky Landing Hero Canvas */}
<main className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20" id="hero">
  {/* Background Pop Art Graphic Circles */}
  <div className="absolute top-12 left-1/4 w-80 h-80 bg-sun-gold/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-burnt-orange/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
  
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
    {/* Left Column: Chunky Retro Typography & CTA Buttons */}
    <div className="lg:col-span-7 flex flex-col items-start justify-between z-10 pt-1 sm:pt-4">
      <div>
        {/* Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-soft retro-border mb-3 sm:mb-4 shadow-pop-sm">
          <img src="/otto-logo.svg" alt="Otto" className="h-4 w-auto object-contain" loading="eager" decoding="async" />
          <span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase tracking-wider">
            Wood-Fired Neapolitan • Nad Al Sheba, Dubai
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-chunky text-3xl sm:text-5xl xl:text-[66px] text-retro-brown uppercase leading-[1.04] tracking-tight mb-6 sm:mb-10 lg:mb-14">
          Artisanal Pizza &amp; <br/>
          <span className="font-funky lowercase text-4xl sm:text-7xl xl:text-[80px] text-burnt-orange block mt-1 tracking-normal font-normal">
            wood-fired craft
          </span>
        </h1>

        {/* Dual CTA Button Group */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 w-full sm:w-auto mt-2 sm:mt-4">
          <a 
            className="w-full sm:w-auto text-center px-3.5 py-3 sm:px-6 sm:py-3.5 bg-burnt-orange text-white font-chunky text-[11px] sm:text-sm uppercase tracking-wider rounded-xl retro-border shadow-pop-sm hover:-translate-y-0.5 hover:bg-retro-brown transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer" 
            href="#menu"
            onClick={(e) => scrollToSection(e, 'menu')}
          >
            <span>🍕 Explore Pizzas</span>
          </a>
          <a 
            className="w-full sm:w-auto text-center px-3.5 py-3 sm:px-6 sm:py-3.5 bg-sun-gold text-retro-brown font-chunky text-[11px] sm:text-sm uppercase tracking-wider rounded-xl retro-border shadow-pop-sm hover:-translate-y-0.5 hover:bg-cheddar-yellow transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer" 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span>💬 Reserve / WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Quick Proof Indicators - Compact 3-col on all screens */}
      <div className="mt-8 sm:mt-12 lg:mt-14 pt-5 sm:pt-8 border-t-2 border-retro-brown/15 w-full grid grid-cols-3 gap-1.5 sm:gap-3.5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-cheddar-yellow retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
            🍕
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">Wood-Fired</p>
            <p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">4.9★ Rated</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-sun-gold retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
            🔥
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">450°C Stone Oven</p>
            <p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">Neapolitan Hearth</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
            🌙
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">Midnight</p>
            <p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">24/7 Slices</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Hero Pizza Visual Showcase */}
    <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
      {/* Large Glowing Backboard Plate */}
      <div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-cheddar-yellow/40 rounded-full blur-2xl -z-10"></div>

      {/* Floating Artisanal Proof Card (Top Left) */}
      <div className="absolute -top-2 left-0 sm:-top-3 sm:-left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm retro-border p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-pop transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all max-w-[200px] sm:max-w-none">
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-burnt-orange text-white retro-border flex items-center justify-center text-base sm:text-lg shrink-0">
          ✨
        </div>
        <div className="text-left">
          <p className="font-chunky text-[10px] sm:text-xs text-retro-brown leading-tight">100% ARTISANAL</p>
          <p className="text-[9px] sm:text-[10px] font-bold text-burnt-orange">Wood-Fired Neapolitan</p>
          <p className="text-[8px] sm:text-[9px] font-extrabold text-zinc-500 hidden sm:block">Hand-Stretched Daily →</p>
        </div>
      </div>

      {/* Rotating Starburst Badge (Top Right) */}
      <div className="absolute -top-3 right-0 sm:-top-4 sm:right-4 z-20 transform rotate-12 hover:rotate-0 transition-transform">
        <div className="starburst-badge bg-burnt-orange text-white w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center p-1 sm:p-2 text-center shadow-pop">
          <span className="font-chunky text-sm sm:text-xl leading-none">4.9★</span>
          <span className="text-[7px] sm:text-[9px] font-extrabold uppercase mt-0.5 leading-tight tracking-tighter">HOTSPOT</span>
        </div>
      </div>

      {/* Floating Tag Bottom Right: 48-Hour Sourdough */}
      <div className="absolute bottom-1 right-0 sm:bottom-3 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-cheddar-yellow text-retro-brown retro-border px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-pop transform rotate-2">
        <span className="text-base sm:text-xl">🔥</span>
        <div className="text-left">
          <p className="font-chunky text-[10px] sm:text-xs leading-none">48-HR SOURDOUGH</p>
          <p className="text-[8px] sm:text-[10px] font-extrabold text-burnt-orange">450°C Stone Oven Blistered</p>
        </div>
      </div>

      {/* Center Dynamic Pizza Splash Image */}
      <div className="relative w-full max-w-[310px] sm:max-w-[460px] animate-gentle-float my-2 sm:my-4">
        <img 
          alt="Otto Pizzeria authentic artisanal wood-fired Neapolitan pizza with blistered crust and melting fior di latte in Nad Al Sheba Dubai" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(42,18,8,0.20)] transform scale-105 hover:scale-110 transition-transform duration-500" 
          src="/pizza_hero_transparent.png"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>

  {/* Interactive Scroll Down Prompt */}
  <div className="flex justify-center mt-6 sm:mt-10 mb-2">
    <button 
      onClick={(e) => scrollToSection(e, 'anatomy')}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-cheddar-yellow retro-border shadow-pop-sm transition-all duration-300 text-retro-brown hover:-translate-y-0.5 cursor-pointer"
      aria-label="Scroll to explore wood-fired crust craft & menu"
    >
      <span className="font-chunky text-[10px] sm:text-xs uppercase tracking-wider">
        Scroll to Explore Crust &amp; Menu
      </span>
      <span className="inline-block transform group-hover:translate-y-1 transition-transform animate-bounce text-xs sm:text-sm text-burnt-orange">
        ↓
      </span>
    </button>
  </div>

  {/* Floating Interactive Quick-Add Product Row */}
  <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t-2 border-retro-brown/15 reveal-on-scroll" data-purpose="quick-items-tray">
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div>
        <span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase tracking-wider">Fast Cravings</span>
        <h2 className="text-xl sm:text-2xl font-chunky text-retro-brown uppercase">Trending Right Now in Nad Al Sheba</h2>
      </div>
      <a className="hidden sm:inline-flex items-center gap-1 font-extrabold text-sm text-retro-brown hover:text-burnt-orange" href="#menu">
        <span>View Full Artisanal Menu</span>
        <span>→</span>
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
      {/* Card 1: Otto Margherita Classica */}
      <article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-100">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <span className="bg-sun-gold/40 text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Bestseller</span>
            <h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Otto Margherita Classica</h3>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">San Marzano D.O.P., melted Fior di Latte, basil &amp; EVOO</p>
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
            🍕
          </div>
        </div>
        <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
            <p className="font-chunky text-lg sm:text-xl text-retro-brown">AED 48</p>
          </div>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-[11px] sm:text-xs rounded-xl retro-border shadow-pop-sm">
            Dine-In • Takeaway
          </span>
        </div>
      </article>

      {/* Card 2: Spicy Diavola & Jalapeño Crunch */}
      <article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-200">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <span className="bg-sauce-red/20 text-sauce-red text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Spicy 🔥</span>
            <h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Spicy Diavola Sizzle</h3>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">Smoky marinara, spiced paneer/pepperoni cut &amp; hot honey</p>
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
            🌶️
          </div>
        </div>
        <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
            <p className="font-chunky text-lg sm:text-xl text-retro-brown">AED 58</p>
          </div>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-[11px] sm:text-xs rounded-xl retro-border shadow-pop-sm">
            Dine-In • Takeaway
          </span>
        </div>
      </article>

      {/* Card 3: Quattro Formaggi & Hot Honey */}
      <article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-300">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Cheesy Pick</span>
            <h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Quattro Formaggi</h3>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">Four cheeses: Fior di latte, aged gouda, ricotta &amp; chili honey</p>
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
            🧀
          </div>
        </div>
        <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
            <p className="font-chunky text-lg sm:text-xl text-retro-brown">AED 62</p>
          </div>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-[11px] sm:text-xs rounded-xl retro-border shadow-pop-sm">
            Dine-In • Takeaway
          </span>
        </div>
      </article>
    </div>
  </div>
</main>
{/* END: HeroSection */}

{/* BEGIN: ExplodedAnatomySection */}
{/* Exploded Pizza Anatomy Section */}
<section className="bg-cheddar-yellow py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-y-4 border-retro-brown relative overflow-hidden" id="anatomy">
  {/* Bold Background Typography Watermark */}
  <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none overflow-hidden">
    <span className="font-chunky text-[13vw] leading-none text-retro-brown whitespace-nowrap">
      WOOD-FIRED CRUST CRAFT
    </span>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 reveal-on-scroll">
      <span className="inline-block bg-retro-brown text-white font-chunky text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-3">
        Inside Our Pizzeria
      </span>
      <h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-retro-brown uppercase tracking-tight">
        Anatomy of an Artisanal Wood-Fired Pizza
      </h2>
      <p className="text-retro-brown font-bold text-xs sm:text-base mt-2">
        Every single crust is naturally fermented for 48 hours and flash-fired at 450°C in our stone hearth.
      </p>
    </div>

    {/* Exploded Stack Visual Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      {/* Left Side Layer Explanations */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-6 order-2 lg:order-1">
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-100">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 01</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">48-Hr Fermented Sourdough</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">High-hydration Caputo '00' flour, slow proved for light airy digestibility.</p>
        </div>
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-200">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 02</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">San Marzano D.O.P. Sauce</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Sun-ripened crushed Italian plum tomatoes with sea salt &amp; fresh basil.</p>
        </div>
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-300">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 03</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Fior di Latte &amp; Mozzarella</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Fresh whole-milk mozzarella torn by hand into creamy melting pools.</p>
        </div>
      </div>

      {/* Center Showcase */}
      <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 reveal-on-scroll reveal-pop delay-150">
        <div className="relative max-w-[310px] sm:max-w-[340px] w-full bg-cream-soft rounded-2xl sm:rounded-3xl p-4 sm:p-6 retro-border shadow-pop-lg text-center">
          <div className="w-full bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 retro-border mb-3 sm:mb-4">
            <span className="font-chunky text-burnt-orange text-xs sm:text-sm uppercase">🍕 100% HAND-STRETCHED</span>
            <p className="font-extrabold text-[11px] sm:text-xs text-retro-brown mt-0.5 sm:mt-1">Never roller-pinned, hand-stretched &amp; stone-fired in 90 seconds.</p>
          </div>
          {/* Mini Visual Layers Representation */}
          <div className="flex flex-col gap-2 sm:gap-2.5 py-2 sm:py-4 font-chunky text-[11px] sm:text-xs tracking-wide text-retro-brown uppercase">
            <div className="bg-burnt-orange text-white py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Blistered Leopard Cornicione</div>
            <div className="bg-cream-soft py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Molten Fior di Latte Pools</div>
            <div className="bg-lettuce-teal/20 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Sweet Basil &amp; Sicilian EVOO</div>
            <div className="bg-tomato-crimson text-white py-2 sm:py-2.5 rounded-xl border-2 border-white shadow-pop-sm">San Marzano D.O.P. Tomato</div>
            <div className="bg-sun-gold/50 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">48-Hr Sourdough Base</div>
            <div className="bg-cheddar-yellow py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Hot Honey Finishing Glaze</div>
          </div>
          <div className="mt-3 sm:mt-4 bg-retro-brown text-cheddar-yellow py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl font-chunky text-[11px] sm:text-xs">
            ★ SERVED WITH WARM GARLIC SOURDOUGH KNOTS
          </div>
        </div>
      </div>

      {/* Right Side Layer Explanations */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-6 order-3">
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-100">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 04</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Blistered Leopard Cornicione</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Puffy, charred micro-bubbles baked with intense 450°C stone oven flame.</p>
        </div>
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-200">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 05</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Garden Basil &amp; Cold EVOO</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Bruised aromatic sweet basil leaves and first-press cold olive oil.</p>
        </div>
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-300">
          <span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">EXTRA BONUS</span>
          <h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Garlic Sourdough Knots</h3>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Hand-twisted sourdough bites drenched in parsley garlic butter &amp; marinara!</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* END: ExplodedAnatomySection */}

{/* BEGIN: FunkyMenuSection */}
{/* Full Interactive Pizza Menu Grid */}
<section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 reveal-on-scroll">
    <div>
      <div className="inline-flex items-center gap-1.5 bg-sun-gold/30 px-3 py-1 rounded-full retro-border mb-2 sm:mb-3 font-chunky text-xs text-retro-brown">
        <span>🍕</span> FULL PIZZERIA SPREAD
      </div>
      <h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-retro-brown uppercase">
        Artisanal Pizzas, Knots &amp; Shakes
      </h2>
      <p className="text-xs sm:text-base font-bold text-zinc-600 mt-1 sm:mt-2">
        Hand-stretched and baked fresh in our 450°C stone oven. Hot garlic herb knots included with every 12" pizza!
      </p>
    </div>

    {/* Quick Delivery Pill Banner */}
    <div className="bg-white p-3 sm:p-4 rounded-2xl retro-border shadow-pop flex items-center gap-3 sm:gap-4 shrink-0">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-burnt-orange text-white flex items-center justify-center font-chunky text-lg sm:text-xl">
        ⚡
      </div>
      <div>
        <p className="font-chunky text-[11px] sm:text-xs uppercase text-retro-brown">30-MIN DUBAI EXPRESS</p>
        <p className="text-[10px] sm:text-xs font-extrabold text-zinc-500">Nad Al Sheba, Meydan &amp; Downtown Dubai</p>
      </div>
    </div>
  </div>

  {/* Menu Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    {/* Item 1 */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-100">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-burnt-orange text-white text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Chef Special</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.9 (420)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Otto Margherita Classica</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          San Marzano D.O.P. crushed tomatoes, pools of fresh Fior di Latte mozzarella, fragrant sweet basil, and Sicilian cold-pressed EVOO.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🧄 + Free Garlic Sourdough Knots Included</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 48</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>

    {/* Item 2 */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-200">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Spicy Hero</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.8 (310)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Spicy Diavola &amp; Jalapeño</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          Smoky chili marinara, spiced paneer &amp; charred bell peppers, fresh jalapeños, melted mozzarella, and chili hot honey drizzle.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🧄 + Free Garlic Sourdough Knots Included</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 58</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>

    {/* Item 3 */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-300">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-sun-gold text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Gourmet Special</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.9 (240)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Wild Truffle &amp; Burrata</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          Roasted wild forest mushrooms, garlic cream base, aged parmesan, fresh burrata tear, and Italian black truffle essence.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🧄 + Free Garlic Sourdough Knots Included</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 68</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>

    {/* Item 4 */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-150">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-cream-soft text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Cheese Lover</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.8 (540)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Quattro Formaggi Hot Honey</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          Four artisan cheeses: Fior di Latte, aged cheddar, gorgonzola crumble, whipped ricotta, kissed with wildflower chili honey.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🧄 + Free Garlic Sourdough Knots Included</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 62</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>

    {/* Item 5: Pesto Bocconcini */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-250">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-lettuce-teal/20 text-lettuce-teal text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Herb &amp; Fresh</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.7 (190)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Pesto Genovese &amp; Bocconcini</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          House-ground pine nut basil pesto, slow-roasted sundried tomatoes, mini bocconcini pearls, and toasted pine seeds.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-lettuce-teal">🌿 100% Fresh Genovese Pesto</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 54</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>

    {/* Item 6: Shake */}
    <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-350">
      <div>
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="bg-burnt-orange text-white text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Italian Dolce</span>
          <span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.9 (350)</span>
        </div>
        <h3 className="font-chunky text-base sm:text-xl text-retro-brown">Alphonso Gelato Thick Shake</h3>
        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
          Real Ratnagiri mango pulp blended with rich Italian vanilla bean gelato, topped with chopped roasted pistachios &amp; whipped cream.
        </p>
        <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🥭 Real Alphonso &amp; Gelato</span>
      </div>
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
        <span className="font-chunky text-xl sm:text-2xl text-retro-brown">AED 28</span>
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
          Dine-In • Takeaway
        </span>
      </div>
    </div>
  </div>
</section>
{/* END: FunkyMenuSection */}

{/* BEGIN: CateringAndEventsSection */}
{/* 24/7 Stone Oven & Private Pizza Catering Showcase */}
<section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="catering-events">
  <div className="bg-retro-brown text-buttermilk rounded-2xl sm:rounded-3xl retro-border p-5 sm:p-8 lg:p-12 shadow-pop-lg relative overflow-hidden reveal-on-scroll reveal-scale">
    {/* Background pattern */}
    <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl select-none pointer-events-none">
      🍕
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
      <div className="lg:col-span-8">
        <div className="inline-flex items-center gap-1.5 bg-sun-gold text-retro-brown px-3 py-1 rounded-full font-chunky text-xs uppercase mb-3 sm:mb-4 retro-border">
          <span>🔥</span> 24/7 STONE HEARTH • LIVE PIZZA CATERING
        </div>
        <h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-sun-gold uppercase leading-tight">
          Fired at 450°C, <br className="hidden sm:inline"/>Served 24 Hours in Dubai!
        </h2>
        <p className="text-xs sm:text-base font-semibold text-buttermilk/80 mt-2 sm:mt-4 max-w-2xl leading-relaxed">
          Planning a private villa gathering, birthday party, or late-night pizza feast in Dubai? <strong>Otto Pizzeria</strong> fires authentic 48-hour fermented Neapolitan sourdough pizzas round the clock with live on-site catering and blazing-fast delivery across Nad Al Sheba, Meydan, and Downtown Dubai!
        </p>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 text-[11px] sm:text-xs font-extrabold uppercase">
          <span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">🔥 450°C Stone Hearth</span>
          <span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">⚡ 30-Min Fast Express</span>
          <span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">🧄 Free Garlic Knots</span>
          <span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">🎉 Villa &amp; Event Catering</span>
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
        <div className="bg-cream-soft text-retro-brown p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop text-center w-full max-w-xs mx-auto lg:mx-0">
          <span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase">Catering &amp; Orders 24/7</span>
          <p className="font-chunky text-xl sm:text-2xl text-retro-brown my-1">Party &amp; Midnight Orders</p>
          <p className="text-[10px] sm:text-[11px] font-extrabold text-zinc-600 mb-3 sm:mb-4">Nad Al Sheba 4, Dubai</p>
          <a className="w-full inline-block py-2.5 sm:py-3 bg-burnt-orange text-white font-chunky text-xs uppercase rounded-xl retro-border hover:bg-retro-brown transition-colors" href="https://wa.me/971503788009?text=Hello%20Otto%20Pizzeria!%20I%20want%20to%20inquire%20about%20catering%20or%20a%20large%20order." target="_blank" rel="noopener noreferrer">
            Order / Inquire: +971 50 378 8009
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* END: CateringAndEventsSection */}

{/* BEGIN: ReviewsSection */}
{/* Verified Google Reviews Grid & Smooth Sliding Carousel */}
<section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="reviews">
  <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 reveal-on-scroll">
    <div className="inline-flex items-center gap-1.5 bg-cheddar-yellow/30 px-3 py-1 rounded-full retro-border mb-2 sm:mb-3 font-chunky text-xs text-retro-brown shadow-pop-sm">
      <span>★ ★ ★ ★ ★</span> GOOGLE VERIFIED • 4.9★
    </div>
    <h2 className="font-chunky text-2xl sm:text-4xl text-retro-brown uppercase">
      Loved by Dubai's Pizza Aficionados
    </h2>
    <p className="text-xs sm:text-base font-bold text-zinc-600 mt-1 sm:mt-2">
      From Nad Al Sheba locals to midnight foodies across Dubai craving authentic wood-fired crusts.
    </p>
  </div>

  {/* Carousel Navigation Toolbar */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 reveal-on-scroll">
    {/* Active Window Sequence Pill */}
    <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full retro-border shadow-pop-sm text-xs font-chunky text-retro-brown">
      <span className="w-2.5 h-2.5 rounded-full bg-burnt-orange animate-pulse"></span>
      <span>
        Showing Reviews #{((reviewIndex % 6) + 1)}, #{(((reviewIndex + 1) % 6) + 1)}, #{(((reviewIndex + 2) % 6) + 1)} of 6
      </span>
      <span className="text-zinc-300 hidden sm:inline">|</span>
      <span className="text-[10px] uppercase text-burnt-orange hidden sm:inline">
        {isReviewPaused ? 'Paused' : 'Auto-Cycling ⚡'}
      </span>
    </div>

    {/* Controls: Jump Dots + Arrow Buttons */}
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 mr-1">
        {REVIEWS.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => {
              setIsReviewTransitioning(true);
              setReviewIndex(dotIdx);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              (reviewIndex % 6) === dotIdx ? 'w-7 bg-burnt-orange' : 'w-2.5 bg-retro-brown/20 hover:bg-retro-brown/40'
            }`}
            aria-label={`Jump to review ${dotIdx + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={prevReview}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-cheddar-yellow text-retro-brown retro-border shadow-pop-sm flex items-center justify-center font-chunky text-base transition-all hover:-translate-y-0.5 cursor-pointer"
          aria-label="Previous review"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextReview}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-burnt-orange hover:bg-retro-brown text-white retro-border shadow-pop-sm flex items-center justify-center font-chunky text-base transition-all hover:-translate-y-0.5 cursor-pointer"
          aria-label="Next review"
        >
          →
        </button>
      </div>
    </div>
  </div>

  {/* Sliding Track Viewport */}
  <div 
    className="relative overflow-hidden w-full py-3 -my-3 reveal-on-scroll"
    onMouseEnter={() => setIsReviewPaused(true)}
    onMouseLeave={() => setIsReviewPaused(false)}
  >
    <div 
      className="flex w-[900%] sm:w-[450%] lg:w-[300%] will-change-transform"
      style={{
        transform: `translateX(-${(reviewIndex * 100) / DISPLAY_REVIEWS.length}%)`,
        transition: isReviewTransitioning ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
      }}
      onTransitionEnd={handleReviewTransitionEnd}
    >
      {DISPLAY_REVIEWS.map((review, idx) => (
        <div 
          key={`${review.id}-${idx}`}
          className="w-[11.111111%] flex-shrink-0 px-2 sm:px-3.5 flex flex-col"
        >
          <article className="h-full bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl retro-border shadow-pop flex flex-col justify-between hover:-translate-y-1.5 transition-all group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1 text-cheddar-yellow text-sm">
                  {'★'.repeat(review.rating)}
                </div>
                <span className="text-[10px] sm:text-xs font-chunky text-burnt-orange bg-cream-soft px-2.5 py-0.5 rounded-full retro-border shadow-pop-sm">
                  {review.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-retro-brown leading-relaxed italic">
                "{review.quote}"
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-dashed border-retro-brown/15 inline-flex items-center gap-1 text-[11px] font-extrabold text-burnt-orange">
                <span>🍕 Favorite:</span>
                <span className="text-retro-brown">{review.favorite}</span>
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t-2 border-retro-brown/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full retro-border flex items-center justify-center font-chunky text-xs shadow-pop-sm ${review.avatarBg}`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-chunky text-xs sm:text-sm text-retro-brown group-hover:text-burnt-orange transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] font-bold text-zinc-500">{review.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-chunky text-retro-brown/40 bg-cream-soft px-2 py-0.5 rounded-md retro-border">
                #{review.id}
              </span>
            </div>
          </article>
        </div>
      ))}
    </div>
  </div>
</section>
{/* END: ReviewsSection */}

{/* BEGIN: ContactSection */}
{/* Interactive 24/7 Contact, Location & Inquiry Hub */}
<section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
  <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 reveal-on-scroll">
    <div className="inline-flex items-center gap-1.5 bg-sun-gold/30 px-3 py-1 rounded-full retro-border mb-2 sm:mb-3 font-chunky text-xs text-retro-brown shadow-pop-sm">
      <span>📍</span> DROP BY OR CONNECT 24/7
    </div>
    <h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-retro-brown uppercase">
      Get in Touch With Us
    </h2>
    <p className="text-xs sm:text-base font-bold text-zinc-600 mt-1 sm:mt-2">
      Whether you want to pre-book a pizza table gathering, arrange private event catering, or place a midnight delivery order.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">
    {/* Left Column: Direct Info Cards & Timings */}
    <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 reveal-on-scroll reveal-left">
      {/* 24/7 Direct Hotline Card */}
      <div className="bg-cheddar-yellow rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-8 shadow-pop relative overflow-hidden">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-retro-brown text-cheddar-yellow rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-pop-sm">
            📞
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-chunky text-retro-brown uppercase tracking-wider">Direct Hotline 24 Hours</span>
            <h3 className="font-chunky text-xl sm:text-2xl text-retro-brown leading-tight">Call or WhatsApp</h3>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-bold text-retro-brown/90 leading-relaxed mb-4 sm:mb-6">
          Got late-night pizza cravings or arriving in Nad Al Sheba? Our reception &amp; wood-fired oven team is always awake to assist.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          <a 
            href="tel:+971503788009" 
            className="w-full py-2.5 sm:py-3.5 px-4 bg-burnt-orange text-white font-chunky text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-retro-brown transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center cursor-pointer"
          >
            <span>📞 CALL: +971 50 378 8009</span>
          </a>
          <a 
            href="https://wa.me/971503788009?text=Hello%20Otto%20Pizzeria!%20I%20have%20an%20inquiry." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-2.5 sm:py-3.5 px-4 bg-white text-retro-brown font-chunky text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-cream-soft transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center cursor-pointer"
          >
            <span>💬 WHATSAPP: +971 50 378 8009</span>
          </a>
        </div>
      </div>

      {/* Animated & On-Theme Interactive Map Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-3 sm:p-4 shadow-pop relative overflow-hidden flex flex-col group">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cheddar-yellow retro-border flex items-center justify-center text-base shrink-0 shadow-pop-sm group-hover:rotate-6 transition-transform">
              📍
            </div>
            <div>
              <h4 className="font-chunky text-xs sm:text-sm text-retro-brown leading-tight">
                Otto Pizzeria Map · Nad Al Sheba 4
              </h4>
              <p className="text-[10px] sm:text-[11px] font-bold text-zinc-500 truncate max-w-[200px] sm:max-w-none">
                Area 617, Villa 2A, Street 2, Dubai
              </p>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-soft retro-border text-[10px] font-chunky text-burnt-orange shadow-pop-sm shrink-0">
            <span className="w-2 h-2 rounded-full bg-sauce-red animate-pulse"></span>
            <span>24/7 LIVE</span>
          </div>
        </div>

        {/* Map Viewport Container */}
        <div className="relative w-full h-64 sm:h-72 rounded-xl sm:rounded-2xl retro-border overflow-hidden bg-cream-soft shadow-inner">
          {/* Real Interactive Google Maps Iframe */}
          <iframe
            title="Otto Pizzeria Nad Al Sheba Location Map"
            src="https://maps.google.com/maps?q=Area+617+villa+2A+street+2+Nad+Al+Sheba+4+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter contrast-[1.04] saturate-[1.1]"
            loading="lazy"
            allowFullScreen
          ></iframe>

          {/* Animated Floating Pizza Pin Badge (Top Left of Map) */}
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl retro-border shadow-pop pointer-events-none transform hover:scale-105 transition-transform">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burnt-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-burnt-orange"></span>
            </span>
            <div className="text-left">
              <p className="font-chunky text-[10px] sm:text-xs text-retro-brown leading-none flex items-center gap-1">
                <span>🍕</span> OTTO PIZZERIA
              </p>
              <p className="text-[9px] font-extrabold text-burnt-orange mt-0.5">Wood-Fired Hearth</p>
            </div>
          </div>

          {/* Floating Action Button (Bottom Right of Map) */}
          <a
            href="https://maps.google.com/?q=Area+617+villa+2A+street+2+Nad+Al+Sheba+4+Dubai+United+Arab+Emirates"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2.5 right-2.5 z-10 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-burnt-orange hover:bg-retro-brown text-white font-chunky text-[10px] sm:text-xs uppercase rounded-xl retro-border shadow-pop transition-all flex items-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>🗺️ Open in Google Maps</span>
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Quick Travel & Arrival Indicator Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-[10px] sm:text-[11px] font-bold text-retro-brown">
          <div className="flex items-center gap-1.5 bg-cream-soft p-2 rounded-xl retro-border">
            <span>🚆</span>
            <span className="truncate">5m Meydan Track</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cream-soft p-2 rounded-xl retro-border">
            <span>✈️</span>
            <span className="truncate">15m Downtown/DXB</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 bg-sun-gold/40 p-2 rounded-xl retro-border font-chunky text-burnt-orange">
            <span>🚗</span>
            <span className="truncate">Free Valet &amp; Parking</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Interactive Quick Inquiry Form */}
    <div className="lg:col-span-6 lg:self-center bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-8 shadow-pop reveal-on-scroll reveal-right delay-200">
      <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
        <div>
          <span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase tracking-wider">Quick Connect</span>
          <h3 className="text-xl sm:text-2xl font-chunky text-retro-brown uppercase">Send Us a Direct Note</h3>
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-lg sm:text-xl shadow-pop-sm">
          ✉️
        </div>
      </div>

      {contactSubmitted ? (
        <div className="p-5 sm:p-6 bg-sun-gold/30 rounded-2xl retro-border shadow-pop text-center flex flex-col items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-burnt-orange text-white flex items-center justify-center text-xl sm:text-2xl">
            ✓
          </div>
          <h4 className="font-chunky text-base sm:text-lg text-retro-brown">Message Sent via WhatsApp!</h4>
          <p className="text-xs font-bold text-retro-brown/80 max-w-sm leading-relaxed">
            Thank you! Our 24/7 Nad Al Sheba pizzeria desk has received your details and is ready to assist.
          </p>
          <button 
            type="button" 
            onClick={() => setContactSubmitted(false)}
            className="mt-2 text-xs font-chunky text-burnt-orange underline hover:text-retro-brown uppercase"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-3 sm:gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] sm:text-xs font-chunky text-retro-brown uppercase">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="e.g. Rahul Sharma" 
                className="w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-cream-soft text-retro-brown text-xs font-bold retro-border focus:outline-none focus:bg-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] sm:text-xs font-chunky text-retro-brown uppercase">Phone / WhatsApp *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="e.g. +971 50 378 8009" 
                className="w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-cream-soft text-retro-brown text-xs font-bold retro-border focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] sm:text-xs font-chunky text-retro-brown uppercase">Inquiry Type</label>
            <select 
              name="inquiry" 
              className="w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-cream-soft text-retro-brown text-xs font-bold retro-border focus:outline-none focus:bg-white transition-colors"
            >
              <option value="Dine-in / Pizza Table Booking">🍕 Dine-In / Pizza Table Booking</option>
              <option value="Private Event & Party Catering">🎉 Private Event & Party Catering</option>
              <option value="Midnight Pizza Takeaway / Pickup">🌙 Midnight Pizza Takeaway / Pickup</option>
              <option value="Party / Bulk Pizza Gathering">🎉 Pizza Party &amp; Group Gathering</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] sm:text-xs font-chunky text-retro-brown uppercase">Message / Special Request</label>
            <textarea 
              name="message" 
              rows="2" 
              placeholder="Tell us what you need (e.g. table for 6 tonight, hot pizza delivery, private catering, etc.)..."
              className="w-full p-2.5 sm:p-3 rounded-xl bg-cream-soft text-retro-brown text-xs font-bold retro-border focus:outline-none focus:bg-white transition-colors"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 sm:py-3.5 bg-burnt-orange text-white font-chunky text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-retro-brown transition-all flex items-center justify-center gap-2 mt-1 sm:mt-2 cursor-pointer"
          >
            <span>SEND VIA WHATSAPP ⚡</span>
          </button>
          
          <span className="text-[10px] sm:text-[11px] font-bold text-center text-zinc-500">
            ⚡ Instant 24/7 direct response from our Nad Al Sheba counter staff.
          </span>
        </form>
      )}
    </div>
  </div>
</section>
{/* END: ContactSection */}

{/* BEGIN: MainFooter */}
{/* Minimalist & Pizza-Themed Artisanal Footer */}
<footer className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF2E8] to-[#F4E7D5] text-retro-brown border-t-4 border-retro-brown relative overflow-hidden reveal-on-scroll">
  {/* 1. Continuous Animated Pizza Craft Ticker */}
  <div className="bg-burnt-orange text-white py-2 sm:py-2.5 overflow-hidden border-b-2 border-retro-brown select-none shadow-sm">
    <div className="animate-marquee whitespace-nowrap font-chunky text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-6">
      <span>🍕 48-HR SOURDOUGH FERMENTATION</span>
      <span>•</span>
      <span>🔥 450°C STONE HEARTH</span>
      <span>•</span>
      <span>🍕 100% HAND-STRETCHED</span>
      <span>•</span>
      <span>🍅 SAN MARZANO D.O.P.</span>
      <span>•</span>
      <span>🌿 FIOR DI LATTE MOZZARELLA</span>
      <span>•</span>
      <span>🌙 24/7 MIDNIGHT DELIVERY</span>
      <span>•</span>
      <span>📍 AREA 617, NAD AL SHEBA 4, DUBAI</span>
      <span>•</span>
      <span>📞 CALL / WHATSAPP: +971 50 378 8009</span>
      <span>•</span>
      {/* Duplicate for seamless infinite loop */}
      <span>🍕 48-HR SOURDOUGH FERMENTATION</span>
      <span>•</span>
      <span>🔥 450°C STONE HEARTH</span>
      <span>•</span>
      <span>🍕 100% HAND-STRETCHED</span>
      <span>•</span>
      <span>🍅 SAN MARZANO D.O.P.</span>
      <span>•</span>
      <span>🌿 FIOR DI LATTE MOZZARELLA</span>
      <span>•</span>
      <span>🌙 24/7 MIDNIGHT DELIVERY</span>
      <span>•</span>
      <span>📍 AREA 617, NAD AL SHEBA 4, DUBAI</span>
      <span>•</span>
      <span>📞 CALL / WHATSAPP: +971 50 378 8009</span>
      <span>•</span>
    </div>
  </div>

  {/* Subtle Pizza Stone & Hearth Radial Glow / Flour-Dust Pattern */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#2A1208_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-burnt-orange/10 rounded-full blur-3xl pointer-events-none"></div>

  {/* Artisanal Pizza Slice Watermark in Same Background Palette - Centered & Enlarged */}
  <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] lg:w-[740px] xl:w-[820px] h-[480px] sm:h-[620px] lg:h-[740px] xl:h-[820px] pointer-events-none select-none -rotate-6 opacity-45 sm:opacity-55 z-0 transition-transform">
    <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <filter id="dough-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="2" dy="5" stdDeviation="6" floodColor="#2A1208" floodOpacity="0.08"/>
      </filter>

      {/* Main Wedge (Same background sourdough tone) */}
      <path 
        d="M60 95 C 130 65, 250 65, 320 95 L 195 345 C 192 350, 188 350, 185 345 Z" 
        fill="#FAF2E8" 
        stroke="#2A1208" 
        strokeWidth="3" 
        strokeOpacity="0.25"
        strokeLinejoin="round"
        filter="url(#dough-shadow)" 
      />

      {/* Tomato Sauce Foundation Wash */}
      <path 
        d="M72 108 C 135 84, 245 84, 308 108 L 193 330 C 191 334, 189 334, 187 330 Z" 
        fill="#D9531E" 
        fillOpacity="0.14" 
      />

      {/* Melty Mozzarella Layer with Wavy Drips */}
      <path 
        d="M74 112 C 95 105, 115 118, 135 110 C 155 102, 175 115, 195 108 C 215 102, 235 116, 255 110 C 275 104, 295 115, 306 112 L 245 230 C 240 238, 235 232, 230 225 L 194 300 C 192 304, 188 304, 186 300 L 155 240 C 150 248, 145 242, 140 235 Z" 
        fill="#FFFDF9" 
        fillOpacity="0.65" 
        stroke="#2A1208" 
        strokeWidth="1.5" 
        strokeOpacity="0.12" 
      />

      {/* Sourdough Crust Rim (Same warm baked tone) */}
      <path 
        d="M48 92 C 85 55, 150 42, 190 42 C 230 42, 295 55, 332 92 C 336 98, 332 106, 322 104 C 255 78, 135 78, 58 104 C 48 106, 44 98, 48 92 Z" 
        fill="#F4E7D5" 
        stroke="#2A1208" 
        strokeWidth="3" 
        strokeOpacity="0.28"
        strokeLinejoin="round" 
      />

      {/* Crust Ridge Highlight */}
      <path 
        d="M70 82 C 95 68, 140 60, 190 60 C 240 60, 285 68, 310 82" 
        stroke="#FFFFFF" 
        strokeWidth="2.5" 
        strokeOpacity="0.45" 
        strokeLinecap="round" 
      />

      {/* 450°C Hearth Char Spots */}
      <circle cx="105" cy="74" r="4.5" fill="#2A1208" fillOpacity="0.2" />
      <circle cx="145" cy="62" r="3.5" fill="#2A1208" fillOpacity="0.16" />
      <circle cx="190" cy="56" r="5" fill="#2A1208" fillOpacity="0.22" />
      <circle cx="238" cy="63" r="4" fill="#2A1208" fillOpacity="0.18" />
      <circle cx="278" cy="73" r="5" fill="#2A1208" fillOpacity="0.2" />

      {/* Pepperoni Slices */}
      <ellipse cx="140" cy="145" rx="22" ry="20" fill="#D9531E" fillOpacity="0.2" stroke="#2A1208" strokeWidth="2" strokeOpacity="0.2" />
      <circle cx="136" cy="142" r="2.5" fill="#2A1208" fillOpacity="0.15" />
      <circle cx="145" cy="148" r="2" fill="#2A1208" fillOpacity="0.12" />

      <ellipse cx="238" cy="155" rx="24" ry="22" fill="#D9531E" fillOpacity="0.2" stroke="#2A1208" strokeWidth="2" strokeOpacity="0.2" />
      <circle cx="234" cy="152" r="3" fill="#2A1208" fillOpacity="0.15" />
      <circle cx="244" cy="160" r="2" fill="#2A1208" fillOpacity="0.12" />

      <ellipse cx="185" cy="215" rx="23" ry="21" fill="#D9531E" fillOpacity="0.2" stroke="#2A1208" strokeWidth="2" strokeOpacity="0.2" />
      <circle cx="182" cy="212" r="2.5" fill="#2A1208" fillOpacity="0.15" />
      <circle cx="190" cy="220" r="2" fill="#2A1208" fillOpacity="0.12" />

      <ellipse cx="192" cy="278" rx="18" ry="16" fill="#D9531E" fillOpacity="0.2" stroke="#2A1208" strokeWidth="2" strokeOpacity="0.2" />

      {/* Fresh Basil Leaves */}
      <path d="M125 195 C 115 185, 120 170, 135 172 C 145 182, 140 198, 125 195 Z" fill="#2A9D8F" fillOpacity="0.24" stroke="#2A1208" strokeWidth="1.5" strokeOpacity="0.16" />
      <path d="M235 220 C 248 215, 255 225, 248 236 C 238 238, 230 228, 235 220 Z" fill="#2A9D8F" fillOpacity="0.24" stroke="#2A1208" strokeWidth="1.5" strokeOpacity="0.16" />

      {/* Cheese Drip from Tip */}
      <path d="M188 340 C 187 355, 185 365, 182 372" stroke="#FFFDF9" strokeWidth="2.5" strokeOpacity="0.75" strokeLinecap="round" />
    </svg>
  </div>

  {/* 2. Main Minimalist Footer Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b-2 border-retro-brown/10">
      
      {/* Col 1: Brand, Nad Al Sheba Location & Live Hearth Status (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col items-start justify-between">
        <div>
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-11 px-3 py-1.5 bg-white rounded-2xl retro-border flex items-center justify-center shadow-pop-sm hover:scale-105 transition-transform cursor-pointer">
              <img src="/otto-logo.svg" alt="Otto Pizzeria" className="h-7 w-auto object-contain" loading="lazy" decoding="async" />
            </div>
            <div>
              <span className="font-funky text-2xl sm:text-3xl text-retro-brown leading-none">
                Otto Pizzeria<span className="text-burnt-orange">.</span>
              </span>
              <p className="text-[10px] font-chunky text-burnt-orange uppercase tracking-wider mt-0.5">
                Wood-Fired Neapolitan • Dubai
              </p>
            </div>
          </div>

          {/* Minimalist Live Oven Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white retro-border text-xs text-retro-brown mb-3.5 shadow-pop-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sauce-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sauce-red"></span>
            </span>
            <span className="font-chunky text-[10px] sm:text-[11px] uppercase tracking-wide">
              450°C Stone Hearth Firing • 24/7
            </span>
          </div>

          <p className="text-xs sm:text-[13px] font-semibold text-zinc-600 leading-relaxed max-w-sm mb-4">
            Slow-fermented 48-hour sourdough Neapolitan pizza baked fresh at 450°C. 
            Located in Nad Al Sheba 4, Dubai — serving hot handcrafted slices around the clock.
          </p>

          {/* Direct Hotline & Address */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-bold text-retro-brown">
            <a 
              href="tel:+971503788009"
              className="inline-flex items-center gap-1.5 hover:text-burnt-orange transition-colors"
            >
              <span>📞</span>
              <span className="underline decoration-burnt-orange decoration-2 underline-offset-2">+971 50 378 8009</span>
            </a>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-600 font-semibold text-[11px] sm:text-xs">
              <span>📍</span> Area 617, Villa 2A, Nad Al Sheba 4
            </span>
          </div>
        </div>
      </div>

      {/* Col 2: Artisanal Menu Links (lg:col-span-3) */}
      <div className="lg:col-span-3 sm:col-span-1">
        <h4 className="font-chunky text-xs sm:text-sm text-retro-brown uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
          <span>🍕</span> Artisanal Craft
        </h4>
        <ul className="space-y-2 text-xs font-bold text-zinc-600">
          <li>
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> Margherita Classica
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> Spicy Diavola Sizzle
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> Wild Truffle &amp; Burrata
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> Quattro Formaggi
            </a>
          </li>
          <li>
            <a 
              href="#anatomy" 
              onClick={(e) => scrollToSection(e, 'anatomy')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> 6-Layer Crust Anatomy
            </a>
          </li>
          <li>
            <a 
              href="#catering-events" 
              onClick={(e) => scrollToSection(e, 'catering-events')}
              className="hover:text-burnt-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
            >
              <span className="text-burnt-orange text-[10px]">→</span> Live Villa Catering
            </a>
          </li>
        </ul>
      </div>

      {/* Col 3: Minimalist Social & Direct Connect (lg:col-span-4) */}
      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <h4 className="font-chunky text-xs sm:text-sm text-retro-brown uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
            <span>✨</span> Connect &amp; Social
          </h4>
          
          {/* Minimalist 2x2 Interactive Social Pills */}
          <div className="grid grid-cols-2 gap-2">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-white text-retro-brown retro-border shadow-pop-sm hover:shadow-pop hover:-translate-y-0.5 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="font-chunky text-[11px] text-retro-brown block leading-tight truncate">Instagram</span>
                <span className="text-[9px] text-zinc-500 truncate block">@ottopizzeria</span>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-white text-retro-brown retro-border shadow-pop-sm hover:shadow-pop hover:-translate-y-0.5 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-retro-brown flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.13V9.38a6.38 6.38 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.66 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34v-5.91a8.16 8.16 0 0 0 4.91 1.63V7.93a4.85 4.85 0 0 1-1-.24z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="font-chunky text-[11px] text-retro-brown block leading-tight truncate">TikTok</span>
                <span className="text-[9px] text-zinc-500 truncate block">@ottopizzeria</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/971503788009?text=Hello%20Otto%20Pizzeria!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-white text-retro-brown retro-border shadow-pop-sm hover:shadow-pop hover:-translate-y-0.5 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="font-chunky text-[11px] text-retro-brown block leading-tight truncate">WhatsApp</span>
                <span className="text-[9px] text-zinc-500 truncate block">+971 50 378 8009</span>
              </div>
            </a>

            {/* Google Maps */}
            <a 
              href="https://maps.google.com/?q=Area+617+villa+2A+street+2+Nad+Al+Sheba+4+Dubai+United+Arab+Emirates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-white text-retro-brown retro-border shadow-pop-sm hover:shadow-pop hover:-translate-y-0.5 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-sun-gold text-retro-brown flex items-center justify-center text-xs shrink-0 group-hover:scale-110 transition-transform">
                📍
              </div>
              <div className="truncate">
                <span className="font-chunky text-[11px] text-retro-brown block leading-tight truncate">Maps GPS</span>
                <span className="text-[9px] text-zinc-500 truncate block">4.9★ Nad Al Sheba</span>
              </div>
            </a>
          </div>

          {/* Minimalist Pizza Craft Ribbon Stamp */}
          <div className="mt-3.5 p-2.5 rounded-xl bg-cream-soft/80 retro-border flex items-center justify-between gap-2 shadow-pop-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍕</span>
              <div>
                <p className="font-chunky text-[10px] text-retro-brown uppercase leading-tight">
                  Artisanal Neapolitan Hearth
                </p>
                <p className="text-[9px] font-bold text-burnt-orange">
                  48H Fermentation • 450°C Baked • 100% Halal
                </p>
              </div>
            </div>
            <span className="text-xs font-chunky text-sun-gold bg-retro-brown px-2 py-0.5 rounded-md shrink-0">
              DUBAI
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* 3. Bottom Minimalist Copyright & Back to Top Bar */}
    <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-zinc-600 text-center sm:text-left">
      <div>
        <p className="font-chunky text-retro-brown text-xs">
          © 2025 Otto Pizzeria · Area 617, Villa 2A, Street 2, Nad Al Sheba 4, Dubai, UAE.
        </p>
        <p className="text-[10px] text-zinc-500 mt-0.5 font-semibold">
          Wood-Fired Neapolitan Craft • 450°C Stone Oven • 24/7 Dubai Delivery
        </p>
      </div>

      {/* Interactive Back to Top Action */}
      <button 
        type="button"
        onClick={() => {
          if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-burnt-orange text-retro-brown hover:text-white retro-border shadow-pop-sm hover:-translate-y-0.5 transition-all cursor-pointer text-xs font-chunky"
        aria-label="Back to top of page"
      >
        <span>Back to Top</span>
        <span className="group-hover:-translate-y-0.5 transition-transform text-burnt-orange group-hover:text-white">↑</span>
      </button>
    </div>
  </div>
</footer>
{/* END: MainFooter */}

    </div>
  );
};

export default Home;
