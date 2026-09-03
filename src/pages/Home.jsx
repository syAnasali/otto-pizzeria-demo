import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const inquiry = formData.get('inquiry') || 'General Inquiry';
    const message = formData.get('message') || '';

    setContactSubmitted(true);

    const whatsappText = encodeURIComponent(
      `Hello Burger Signature! 👋\nName: ${name}\nPhone: ${phone}\nInquiry: ${inquiry}\nMessage: ${message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/916376302275?text=${whatsappText}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen">
      
{/* BEGIN: TopAnnouncementTicker */}
{/* Top 24/7 Hotline & Free Fries Ticker Strip */}

{/* END: TopAnnouncementTicker */}
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
<div className="lg:col-span-7 flex flex-col items-start justify-between z-10 reveal-on-scroll reveal-left pt-1 sm:pt-4">
<div>
{/* Display Headline */}
<h1 className="font-chunky text-3xl sm:text-5xl xl:text-[68px] text-retro-brown uppercase leading-[1.04] tracking-tight mb-6 sm:mb-10 lg:mb-14">
          Smash Burgers &amp; <br/>
<span className="font-funky lowercase text-4xl sm:text-7xl xl:text-[80px] text-burnt-orange block mt-1 tracking-normal font-normal">
            boutique stays
          </span>
</h1>
{/* Dual CTA Button Group (Compact 2-col on mobile, flex on desktop) */}
<div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 w-full sm:w-auto mt-2 sm:mt-4">
<a className="w-full sm:w-auto text-center px-3.5 py-3 sm:px-6 sm:py-3.5 bg-burnt-orange text-white font-chunky text-[11px] sm:text-sm uppercase tracking-wider rounded-xl retro-border shadow-pop-sm hover:-translate-y-0.5 hover:bg-retro-brown transition-all flex items-center justify-center gap-1.5 sm:gap-2" href="#menu">
<span>🍔 Explore Menu</span>
</a>
<Link className="w-full sm:w-auto text-center px-3.5 py-3 sm:px-6 sm:py-3.5 bg-sun-gold text-retro-brown font-chunky text-[11px] sm:text-sm uppercase tracking-wider rounded-xl retro-border shadow-pop-sm hover:-translate-y-0.5 hover:bg-cheddar-yellow transition-all flex items-center justify-center gap-1.5 sm:gap-2" to="/hotel">
<span>🏨 Hotel GVR Suites</span>
</Link>
</div>
</div>
{/* Quick Proof Indicators - Compact 3-col on all screens */}
<div className="mt-8 sm:mt-12 lg:mt-14 pt-5 sm:pt-8 border-t-2 border-retro-brown/15 w-full grid grid-cols-3 gap-1.5 sm:gap-3.5">
<div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
<div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-cheddar-yellow retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
              🍔
            </div>
<div className="flex flex-col leading-tight min-w-0">
<p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">Smash Diner</p>
<p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">4.8★ Rated</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
<div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-sun-gold retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
              🏨
            </div>
<div className="flex flex-col leading-tight min-w-0">
<p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">Hotel GVR</p>
<p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">AC Suites</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/70 retro-border shadow-pop-sm">
<div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white retro-border flex items-center justify-center text-sm sm:text-xl shrink-0 shadow-pop-sm">
              🌙
            </div>
<div className="flex flex-col leading-tight min-w-0">
<p className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase truncate">Midnight</p>
<p className="text-[9px] sm:text-[11px] font-bold text-retro-brown/70 mt-0.5 whitespace-nowrap">24/7 Dining</p>
</div>
</div>
</div>
</div>
{/* Right Column: Hero Burger & Hotel GVR Visual Showcase */}
<div className="lg:col-span-5 relative flex items-center justify-center reveal-on-scroll reveal-scale delay-150 mt-2 lg:mt-0">
{/* Large Glowing Backboard Plate */}
<div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-cheddar-yellow/40 rounded-full blur-2xl -z-10"></div>
{/* Floating Hotel GVR Preview Card (Top Left) */}
<Link className="absolute -top-2 left-0 sm:-top-3 sm:-left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm retro-border p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-pop transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all max-w-[200px] sm:max-w-none" to="/hotel">
<div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-sun-gold retro-border flex items-center justify-center text-base sm:text-lg shrink-0">
    🏨
  </div>
<div className="text-left">
<p className="font-chunky text-[10px] sm:text-xs text-retro-brown leading-tight">HOTEL GVR UPSTAIRS</p>
<p className="text-[9px] sm:text-[10px] font-bold text-burnt-orange">AC Suites · ₹2,000</p>
<p className="text-[8px] sm:text-[9px] font-extrabold text-zinc-500 hidden sm:block">Tap to View Rooms →</p>
</div>
</Link>
{/* Rotating Starburst Badge (Top Right) */}
<div className="absolute -top-3 right-0 sm:-top-4 sm:right-4 z-20 transform rotate-12 hover:rotate-0 transition-transform">
<div className="starburst-badge bg-burnt-orange text-white w-16 h-16 sm:w-26 sm:h-26 flex flex-col items-center justify-center p-1 sm:p-2 text-center shadow-pop">
<span className="font-chunky text-sm sm:text-xl leading-none">4.8★</span>
<span className="text-[7px] sm:text-[9px] font-extrabold uppercase mt-0.5 leading-tight tracking-tighter">HOTSPOT</span>
</div>
</div>
{/* Floating Tag Bottom Right: 100% Fresh Smashed Patty */}
<div className="absolute bottom-1 right-0 sm:bottom-3 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-cheddar-yellow text-retro-brown retro-border px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-pop transform rotate-2">
<span className="text-base sm:text-xl">🔥</span>
<div className="text-left">
<p className="font-chunky text-[10px] sm:text-xs leading-none">100% FRESH SMASH</p>
<p className="text-[8px] sm:text-[10px] font-extrabold text-burnt-orange">Cast-Iron Sizzled Patties</p>
</div>
</div>
{/* Center Dynamic Burger Splash Image */}
<div className="relative w-full max-w-[310px] sm:max-w-[460px] animate-gentle-float my-2 sm:my-4">
<img alt="Burger Signature double smash gourmet burger and Hotel GVR hospitality in Jagatpura Jaipur" className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(42,18,8,0.20)] transform scale-105 hover:scale-110 transition-transform duration-500" src="/burger_hero_transparent.png"/>
</div>
</div>
</div>
{/* Floating Interactive Quick-Add Product Row (Reference 2 Inspired) */}
<div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t-2 border-retro-brown/15 reveal-on-scroll" data-purpose="quick-items-tray">
<div className="flex items-center justify-between mb-4 sm:mb-6">
<div>
<span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase tracking-wider">Fast Cravings</span>
<h2 className="text-xl sm:text-2xl font-chunky text-retro-brown uppercase">Trending Right Now in Jagatpura</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-1 font-extrabold text-sm text-retro-brown hover:text-burnt-orange" href="#menu">
<span>View Full 40+ Item Menu</span>
<span>→</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
{/* Card 1: Maharaja Double Smash */}
<article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-100">
<div className="flex items-start justify-between gap-3 sm:gap-4">
<div>
<span className="bg-sun-gold/40 text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Bestseller</span>
<h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">The Maharaja Double Smash</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">Dual smashed prime patty, dripping cheese &amp; relish</p>
</div>
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🍔
            </div>
</div>
<div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-lg sm:text-xl text-retro-brown">₹280</p>
</div>
<span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-[11px] sm:text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</article>
{/* Card 2: Spicy Paneer Tikka Volcano */}
<article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-200">
<div className="flex items-start justify-between gap-3 sm:gap-4">
<div>
<span className="bg-sauce-red/20 text-sauce-red text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Spicy 🔥</span>
<h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Paneer Tikka Volcano</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">Smoked tandoori paneer steak with spicy chipotle salsa</p>
</div>
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🧀
            </div>
</div>
<div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-lg sm:text-xl text-retro-brown">₹190</p>
</div>
<span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-[11px] sm:text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</article>
{/* Card 3: Classic Loaded Cheese Melt */}
<article className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group reveal-on-scroll delay-300">
<div className="flex items-start justify-between gap-3 sm:gap-4">
<div>
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1">Cheesy Pick</span>
<h3 className="font-chunky text-sm sm:text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Loaded Cheese Melt</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-0.5 sm:mt-1">Triple-layer gouda &amp; cheddar with garlic herb butter</p>
</div>
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🔥
            </div>
</div>
<div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-[10px] sm:text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-lg sm:text-xl text-retro-brown">₹160</p>
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
{/* Exploded Burger Stack Anatomy (Reference 1 Inspired) */}
<section className="bg-cheddar-yellow py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-y-4 border-retro-brown relative overflow-hidden" id="anatomy">
{/* Bold Background Typography Watermark */}
<div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none overflow-hidden">
<span className="font-chunky text-[13vw] leading-none text-retro-brown whitespace-nowrap">
        SMOKY CHEESY CRAFT
      </span>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 reveal-on-scroll">
<span className="inline-block bg-retro-brown text-white font-chunky text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-3">
          Inside Our Kitchen
        </span>
<h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-retro-brown uppercase tracking-tight">
          Anatomy of a Signature Smash
        </h2>
<p className="text-retro-brown font-bold text-xs sm:text-base mt-2">
          Every single layer is engineered for that sensational, dripping Jaipur midnight bite.
        </p>
</div>
{/* Exploded Stack Visual Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
{/* Left Side Layer Explanations */}
<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-6 order-2 lg:order-1">
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-100">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 01</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Toasted Sesame Brioche</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Freshly baked butter buns with a slight caramel crunch crust.</p>
</div>
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-200">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 02</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Cascade Liquid Cheddar</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Aged dairy cheese melted straight on top of the griddle.</p>
</div>
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-left delay-300">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 03</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Charcoal Smashed Patty</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Ultra-crispy lacy edges locked with savory seasonings.</p>
</div>
</div>
{/* Center Image Showcase */}
<div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 reveal-on-scroll reveal-pop delay-150">
<div className="relative max-w-[310px] sm:max-w-[340px] w-full bg-cream-soft rounded-2xl sm:rounded-3xl p-4 sm:p-6 retro-border shadow-pop-lg text-center">
<div className="w-full bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 retro-border mb-3 sm:mb-4">
<span className="font-chunky text-burnt-orange text-xs sm:text-sm uppercase">🍔 100% HANDCRAFTED</span>
<p className="font-extrabold text-[11px] sm:text-xs text-retro-brown mt-0.5 sm:mt-1">Never frozen, smashed to order under cast-iron press.</p>
</div>
{/* Mini Visual Layers Representation */}
<div className="flex flex-col gap-2 sm:gap-2.5 py-2 sm:py-4 font-chunky text-[11px] sm:text-xs tracking-wide text-retro-brown uppercase">
<div className="bg-sun-gold/50 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Top Brioche Crown</div>
<div className="bg-cheddar-yellow py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Melting Cheddar Blankets</div>
<div className="bg-sauce-red/20 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Crisp Lettuce &amp; Pickles</div>
<div className="bg-retro-brown text-white py-2 sm:py-2.5 rounded-xl border-2 border-white shadow-pop-sm">Smash Sizzle Patty (2x)</div>
<div className="bg-burnt-orange/30 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Secret Signature Pink Dip</div>
<div className="bg-sun-gold/50 py-1.5 sm:py-2 rounded-xl retro-border shadow-pop-sm">Golden Toasted Heel</div>
</div>
<div className="mt-3 sm:mt-4 bg-retro-brown text-cheddar-yellow py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl font-chunky text-[11px] sm:text-xs">
              ★ ALWAYS SERVED WITH FREE PERI-PERI FRIES
            </div>
</div>
</div>
{/* Right Side Layer Explanations */}
<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-6 order-3">
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-100">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 04</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Pink City Pickles &amp; Slaw</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Hand-sliced spicy dill pickles and crunchy greens.</p>
</div>
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-200">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">LAYER 05</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Secret Drip Sauce</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">House-crafted creamy aioli with smoked paprika &amp; relish.</p>
</div>
<div className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-right delay-300">
<span className="font-chunky text-burnt-orange text-[10px] sm:text-xs">EXTRA BONUS</span>
<h3 className="font-chunky text-base sm:text-lg text-retro-brown mt-0.5">Crisp Peri-Peri Fries</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1">Golden potato matchsticks tossed in signature spice dust!</p>
</div>
</div>
</div>
</div>
</section>
{/* END: ExplodedAnatomySection */}
{/* BEGIN: FunkyMenuSection */}
{/* Full Interactive Menu Grid with Prices in ₹ */}
<section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 reveal-on-scroll">
<div>
<div className="inline-flex items-center gap-1.5 bg-sun-gold/30 px-3 py-1 rounded-full retro-border mb-2 sm:mb-3 font-chunky text-xs text-retro-brown">
<span>🍴</span> FULL TASTE SPREAD
        </div>
<h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-retro-brown uppercase">
          Signature Smashes &amp; Shakes
        </h2>
<p className="text-xs sm:text-base font-bold text-zinc-600 mt-1 sm:mt-2">
          Hand-crafted hot off the griddle. Free signature crispy fries included on all burger orders!
        </p>
</div>
{/* Quick Delivery Pill Banner */}
<div className="bg-white p-3 sm:p-4 rounded-2xl retro-border shadow-pop flex items-center gap-3 sm:gap-4 shrink-0">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-burnt-orange text-white flex items-center justify-center font-chunky text-lg sm:text-xl">
          ⚡
        </div>
<div>
<p className="font-chunky text-[11px] sm:text-xs uppercase text-retro-brown">30-MIN JAIPUR EXPRESS</p>
<p className="text-[10px] sm:text-xs font-extrabold text-zinc-500">Jagatpura, Malviya Nagar &amp; CBI Road</p>
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
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">The Maharaja Double Smash</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            Double smashed prime patties, melted triple cheddar, caramelized onions, jalapeños &amp; secret pink dripping dip.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹280</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
{/* Item 2 */}
<div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-200">
<div>
<div className="flex justify-between items-start mb-2 sm:mb-3">
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Veg Hero</span>
<span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.8 (310)</span>
</div>
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">Spicy Paneer Tikka Volcano</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            Thick charcoal-grilled cottage cheese block, smoky tandoori sauce, crunchy bell peppers &amp; melted mozzarella drizzle.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹190</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
{/* Item 3 */}
<div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-300">
<div>
<div className="flex justify-between items-start mb-2 sm:mb-3">
<span className="bg-sun-gold text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Smoky Crunch</span>
<span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.8 (190)</span>
</div>
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">Smoky BBQ Bacon Crunch</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            Smoky glaze crunch strips, caramelized brown sugar onions, double melted cheese on buttered brioche bun.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹220</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
{/* Item 4 */}
<div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-150">
<div>
<div className="flex justify-between items-start mb-2 sm:mb-3">
<span className="bg-cream-soft text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">All-Time Fav</span>
<span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.7 (540)</span>
</div>
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">Classic Loaded Cheese Melt</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            The staple that started it all in Jaipur: Double cheese cascade, crispy golden crust, and our heritage garlic butter.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹160</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
{/* Item 5: Shake */}
<div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-250">
<div>
<div className="flex justify-between items-start mb-2 sm:mb-3">
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Chilled Shake</span>
<span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.9 (280)</span>
</div>
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">Alphonso Mango Thick Shake</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            Real Ratnagiri mango pulp, rich full-cream ice cream, topped with chopped pistachios &amp; whipped cream cap.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-cheddar-yellow">🥭 100% Real Alphonso Pulp</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹140</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
{/* Item 6: Shake */}
<div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between reveal-on-scroll delay-350">
<div>
<div className="flex justify-between items-start mb-2 sm:mb-3">
<span className="bg-burnt-orange text-white text-[10px] font-chunky px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg retro-border uppercase">Crowd Fav Shake</span>
<span className="font-chunky text-[11px] sm:text-xs text-retro-brown">★ 4.9 (350)</span>
</div>
<h3 className="font-chunky text-base sm:text-xl text-retro-brown">Blueberry Swirl Shake</h3>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-1 sm:mt-2 leading-relaxed">
            Wild blueberries blended into dense velvety cream shake, layered with graham crumb crunch and berry coulis.
          </p>
<span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-extrabold text-burnt-orange">🫐 Wild Berry Infusion</span>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-xl sm:text-2xl text-retro-brown">₹160</span>
<span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cream-soft text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm">
  Dine-In • Takeaway
</span>
</div>
</div>
</div>
</section>
{/* END: FunkyMenuSection */}
{/* BEGIN: UpstairsStayCallout */}
{/* 'Feast Downstairs, Crash at Hotel GVR' Stay Callout Card */}
<section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="boutique-stay">
<div className="bg-retro-brown text-buttermilk rounded-2xl sm:rounded-3xl retro-border p-5 sm:p-8 lg:p-12 shadow-pop-lg relative overflow-hidden reveal-on-scroll reveal-scale">
{/* Background pattern */}
<div className="absolute -right-10 -bottom-10 opacity-10 text-9xl select-none pointer-events-none">
        🏨
      </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-1.5 bg-sun-gold text-retro-brown px-3 py-1 rounded-full font-chunky text-xs uppercase mb-3 sm:mb-4 retro-border">
<span>✨</span> HOTEL GVR • BOUTIQUE AC STAY
          </div>
<h2 className="font-chunky text-2xl sm:text-4xl lg:text-5xl text-sun-gold uppercase leading-tight">
            Feast Downstairs, <br className="hidden sm:inline"/>Crash at Hotel GVR!
          </h2>
<p className="text-xs sm:text-base font-semibold text-buttermilk/80 mt-2 sm:mt-4 max-w-2xl leading-relaxed">
            Traveling through Jaipur or craving a midnight food-staycation? <strong>Hotel GVR</strong> features clean, modern boutique AC hotel suites right above the diner starting at just <strong>₹2,000/night</strong> with direct 24/7 room service delivery right to your bed!
          </p>
<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 text-[11px] sm:text-xs font-extrabold uppercase">
<span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">🛏️ Plush Queen Beds</span>
<span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">❄️ Chilled Split AC</span>
<span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">⚡ 100 Mbps Wi-Fi</span>
<span className="bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/20 text-center">🍔 In-Bed 24/7 Dining</span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
<div className="bg-cream-soft text-retro-brown p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop text-center w-full max-w-xs mx-auto lg:mx-0">
<span className="text-[10px] sm:text-xs font-chunky text-burnt-orange uppercase">Hotel GVR Suites From</span>
<p className="font-chunky text-2xl sm:text-3xl text-retro-brown my-1">₹2,000<span className="text-xs sm:text-sm font-sans font-bold text-zinc-500"> / night</span></p>
<p className="text-[10px] sm:text-[11px] font-extrabold text-zinc-600 mb-3 sm:mb-4">Aravali Hills Colony, Jagatpura</p>
<a className="w-full inline-block py-2.5 sm:py-3 bg-burnt-orange text-white font-chunky text-xs uppercase rounded-xl retro-border hover:bg-retro-brown transition-colors" href="tel:+916376302275">
              Book Hotel GVR: +91 6376302275
            </a>
</div>
</div>
</div>
</div>
</section>
{/* END: UpstairsStayCallout */}
{/* BEGIN: ReviewsSection */}
{/* Verified Google Reviews Grid */}
<section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="reviews">
<div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 reveal-on-scroll">
<div className="inline-flex items-center gap-1.5 bg-cheddar-yellow/30 px-3 py-1 rounded-full retro-border mb-2 sm:mb-3 font-chunky text-xs text-retro-brown">
<span>★ ★ ★ ★ ★</span> GOOGLE VERIFIED
      </div>
<h2 className="font-chunky text-2xl sm:text-4xl text-retro-brown uppercase">
        Loved by Jaipur's Night Owls
      </h2>
<p className="text-xs sm:text-base font-bold text-zinc-600 mt-1 sm:mt-2">
        From Jagatpura locals to hungry midnight road-trippers near CBI Phatak.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
{/* Review 1 */}
<div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-pop delay-100">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-xs sm:text-sm mb-2 sm:mb-3">
            ★★★★★
          </div>
<p className="text-xs sm:text-sm font-bold text-retro-brown leading-relaxed italic">
            "Hands down, the juiciest burger in Jagatpura! Smashed patties have that crispy edge and the cheese was literally overflowing. We ordered at 2:30 AM and got it piping hot in 20 minutes!"
          </p>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sun-gold retro-border flex items-center justify-center font-chunky text-xs text-retro-brown">
            RK
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Raja Kotwal</h4>
<p className="text-[10px] sm:text-[11px] font-bold text-zinc-500">Local Guide · Jaipur</p>
</div>
</div>
</div>
{/* Review 2 */}
<div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-pop delay-200">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-xs sm:text-sm mb-2 sm:mb-3">
            ★★★★★
          </div>
<p className="text-xs sm:text-sm font-bold text-retro-brown leading-relaxed italic">
            "The free peri-peri fries with every burger is such a great touch! Also had the mango shake which is super thick and creamy. Perfect midnight hangout spot with great funky vibes."
          </p>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cheddar-yellow retro-border flex items-center justify-center font-chunky text-xs text-retro-brown">
            PM
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Praveen Meena</h4>
<p className="text-[10px] sm:text-[11px] font-bold text-zinc-500">Food Blogger · Jaipur</p>
</div>
</div>
</div>
{/* Review 3 */}
<div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform reveal-on-scroll reveal-pop delay-300">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-xs sm:text-sm mb-2 sm:mb-3">
            ★★★★★
          </div>
<p className="text-xs sm:text-sm font-bold text-retro-brown leading-relaxed italic">
            "Stayed upstairs in their AC room after traveling and ordered the Maharaja burger right from my bed. Clean rooms, sensational food, and literally 24-hour service. 10/10 recommendation!"
          </p>
</div>
<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-burnt-orange text-white retro-border flex items-center justify-center font-chunky text-xs">
            CK
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Chandrakesh</h4>
<p className="text-[10px] sm:text-[11px] font-bold text-zinc-500">Verified Customer</p>
</div>
</div>
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
      Whether you want to pre-book a table gathering, reserve an AC room at Hotel GVR, or place a midnight takeaway order.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
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
          Got midnight hunger or arriving late at Jagatpura Railway Station? Our reception &amp; kitchen team is always awake to help.
        </p>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3">
          <a 
            href="tel:+916376302275" 
            className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-burnt-orange text-white font-chunky text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-retro-brown transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center"
          >
            <span>CALL: 6376302275</span>
          </a>
          <a 
            href="tel:+917014639336" 
            className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-white text-retro-brown font-chunky text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-cream-soft transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center"
          >
            <span>ALT: 7014639336</span>
          </a>
          <a 
            href="https://wa.me/916376302275?text=Hello%20Burger%20Signature!%20I%20have%20an%20inquiry." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="col-span-2 sm:col-span-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-sun-gold text-retro-brown font-chunky text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl retro-border shadow-pop hover:-translate-y-0.5 hover:bg-cheddar-yellow transition-all flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <span>💬 WHATSAPP CHAT</span>
          </a>
        </div>
      </div>

      {/* Location Specs Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-8 shadow-pop">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-soft retro-border rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-pop-sm">
            📍
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-chunky text-burnt-orange uppercase tracking-wider">Physical Address</span>
            <h4 className="font-chunky text-sm sm:text-lg text-retro-brown">Burger Signature &amp; Hotel GVR</h4>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1 leading-relaxed">
              77 A/2, Aravali Hills Colony, Near CBI Phatak, Jagatpura, Jaipur, Rajasthan – 302017
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t-2 border-dashed border-retro-brown/15 text-[11px] sm:text-xs font-bold text-zinc-600">
          <div className="flex items-center gap-2 bg-cream-soft p-2.5 sm:p-3 rounded-xl retro-border">
            <span>🚆</span>
            <span>3 Mins from Jagatpura Railway Stn</span>
          </div>
          <div className="flex items-center gap-2 bg-cream-soft p-2.5 sm:p-3 rounded-xl retro-border">
            <span>✈️</span>
            <span>15 Mins from Jaipur Int'l Airport</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <a 
            href="https://maps.google.com/?q=Burger+Signature+Jagatpura+Jaipur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-cream-soft text-retro-brown font-chunky text-xs uppercase rounded-xl retro-border shadow-pop-sm hover:bg-cheddar-yellow transition-colors"
          >
            <span>🗺️ OPEN IN GOOGLE MAPS</span>
          </a>
        </div>
      </div>
    </div>

    {/* Right Column: Interactive Quick Inquiry Form */}
    <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl retro-border p-4 sm:p-8 shadow-pop reveal-on-scroll reveal-right delay-200">
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
            Thank you! Our 24/7 Jagatpura desk has received your details and is ready to assist.
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
                placeholder="e.g. +91 6376302275" 
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
              <option value="Dine-in / Table Inquiry">🍔 Dine-In / Menu Question</option>
              <option value="Hotel GVR Room Booking">🏨 Hotel GVR AC Room Booking</option>
              <option value="Midnight Takeaway Order">🌙 Midnight Takeaway / Pickup</option>
              <option value="Party / Bulk Gathering">🎉 Party &amp; Group Gathering</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] sm:text-xs font-chunky text-retro-brown uppercase">Message / Special Request</label>
            <textarea 
              name="message" 
              rows="2" 
              placeholder="Tell us what you need (e.g. table for 6 tonight, room availability, etc.)..."
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
            ⚡ Instant 24/7 direct response from our Jagatpura counter staff.
          </span>
        </form>
      )}
    </div>
  </div>
</section>
{/* END: ContactSection */}
{/* BEGIN: MainFooter */}
{/* Funky Footer with Location, Helpline & Quick Ordering Info */}
<footer className="bg-cream-soft border-t-4 border-retro-brown pt-10 sm:pt-16 pb-8 sm:pb-12 px-3.5 sm:px-6 lg:px-8 reveal-on-scroll">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b-2 border-retro-brown/20">
{/* Brand & Address */}
<div className="lg:col-span-5">
<div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
<div className="w-9 h-9 sm:w-10 sm:h-10 bg-cheddar-yellow rounded-xl sm:rounded-2xl retro-border flex items-center justify-center text-lg sm:text-xl shadow-pop-sm">
              🍔
            </div>
<span className="font-funky text-xl sm:text-2xl text-retro-brown">Burger Signature<span className="text-burnt-orange">.</span></span>
</div>
<p className="font-chunky text-[11px] sm:text-xs text-retro-brown mb-1.5 sm:mb-2">बर्गर सिगनेचर &amp; Hotel GVR · Near CBI Phatak</p>
<p className="text-xs font-bold text-zinc-600 leading-relaxed max-w-sm">
            77 A/2, Aravali Hills Colony, Near CBI Phatak, Jagatpura, Jaipur, Rajasthan – 302017. Serving hot smashed burgers, loaded fries &amp; thick shakes with Hotel GVR boutique AC stays 24 Hours a day!
          </p>
<div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
<a className="bg-burnt-orange text-white font-chunky text-[11px] sm:text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl retro-border shadow-pop-sm hover:bg-retro-brown transition-colors" href="tel:+916376302275">
              📞 +91 6376302275
            </a>
<a className="bg-white text-retro-brown font-chunky text-[11px] sm:text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl retro-border shadow-pop-sm hover:bg-cream-soft transition-colors" href="tel:+917014639336">
              📞 +91 7014639336
            </a>
<span className="text-[11px] sm:text-xs font-extrabold text-sauce-red flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-sauce-red animate-pulse"></span>
              Always Open (24 Hours)
            </span>
</div>
</div>
{/* Quick Links */}
<div className="lg:col-span-3">
<h4 className="font-chunky text-xs sm:text-sm text-retro-brown uppercase mb-3 sm:mb-4">Hungry Quick Links</h4>
<ul className="space-y-2 text-xs font-extrabold text-zinc-600">
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">The Maharaja Double Smash</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">Spicy Paneer Tikka Volcano</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">Alphonso Mango Thick Shake</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="/hotel">Hotel GVR (Boutique AC Stay)</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#contact">24/7 Contact &amp; Directions</a></li>
</ul>
</div>
{/* Takeaway / Midnight Ordering Box */}
<div className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border shadow-pop">
<h4 className="font-chunky text-xs sm:text-sm text-retro-brown uppercase mb-1">Instant Midnight Orders</h4>
<p className="text-[11px] sm:text-xs font-bold text-zinc-500 mb-3 sm:mb-4">Direct kitchen WhatsApp/Calling helpline for swift pickup or doorstep delivery.</p>
<div className="space-y-2">
<a className="w-full flex items-center justify-center gap-2 bg-cheddar-yellow text-retro-brown font-chunky text-xs py-2.5 sm:py-3 rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-colors" href="tel:+916376302275">
<span>CALL: +91 6376302275</span>
</a>
<a className="w-full flex items-center justify-center gap-2 bg-cream-soft text-retro-brown font-chunky text-xs py-2 rounded-xl retro-border hover:bg-cheddar-yellow transition-colors" href="tel:+917014639336">
<span>ALT: +91 7014639336</span>
</a>
<a className="w-full flex items-center justify-center gap-2 bg-cream-soft text-retro-brown font-chunky text-xs py-2 rounded-xl retro-border hover:bg-white transition-colors" href="https://maps.google.com/?q=Burger+Signature+Jagatpura+Jaipur" rel="noopener noreferrer" target="_blank">
<span>📍 OPEN IN GOOGLE MAPS</span>
</a>
</div>
</div>
</div>
{/* Copyright & Bottom Bar */}
<div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-extrabold text-zinc-500 text-center sm:text-left">
<p>© 2025 Burger Signature &amp; Hotel GVR (बर्गर सिगनेचर • होटल GVR) · All Rights Reserved.</p>
<p className="text-zinc-500">
  CBI Phatak • Jagatpura • Jaipur
</p>
</div>
</div>
</footer>
{/* END: MainFooter */}

    </div>
  );
};

export default Home;
