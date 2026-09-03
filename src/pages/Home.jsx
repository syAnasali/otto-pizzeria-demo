import React, { useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
  // Script logic
  


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
<main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24" id="hero">
{/* Background Pop Art Graphic Circles */}
<div className="absolute top-12 left-1/4 w-80 h-80 bg-sun-gold/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-burnt-orange/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
{/* Left Column: Chunky Retro Typography & CTA Buttons */}
<div className="lg:col-span-6 flex flex-col items-start z-10">
{/* Funky Sticker Badge */}
<div className="inline-flex items-center gap-2 bg-cheddar-yellow/30 retro-border px-4 py-1.5 rounded-full mb-6 transform -rotate-2 shadow-pop-sm">
<span className="text-base">🔥</span>
<span className="font-chunky text-xs sm:text-sm text-retro-brown tracking-wide uppercase">THE ORIGINAL SMASH BURGER · JAGATPURA</span>
</div>
{/* Giant Display Headline */}
<h1 className="font-chunky text-4xl sm:text-6xl xl:text-7xl text-retro-brown uppercase leading-[1.08] tracking-tight mb-6">
          SAVORY &amp; <br/>
<span className="font-funky lowercase text-5xl sm:text-7xl xl:text-8xl text-burnt-orange block mt-1 tracking-normal font-normal">
            crazy delicious
          </span>
</h1>
<p className="text-base sm:text-lg text-retro-brown/80 font-semibold max-w-lg leading-relaxed mb-8">
          Fresh double-pressed smash patties, sizzling aged cheddar cascade, and artisan brioche baked fresh every morning in Pink City. Served with piping hot secret dip!
        </p>
{/* CTA Button Group */}
<div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
<a className="w-full sm:w-auto text-center px-8 py-4 bg-burnt-orange text-white font-chunky text-sm uppercase tracking-wider rounded-2xl retro-border shadow-pop hover:-translate-y-1 hover:bg-retro-brown transition-all" href="#menu">
            Explore Now 🚀
          </a>
<a className="w-full sm:w-auto text-center px-8 py-4 bg-white text-retro-brown font-chunky text-sm uppercase tracking-wider rounded-2xl retro-border shadow-pop hover:-translate-y-1 hover:bg-cheddar-yellow transition-all flex items-center justify-center gap-2" href="tel:09982844485">
<span>Call for Takeaway</span>
<span>→</span>
</a>
</div>
{/* Quick Proof Indicators */}
<div className="mt-10 pt-8 border-t-2 border-retro-brown/15 w-full flex flex-wrap items-center gap-6 sm:gap-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-cheddar-yellow retro-border flex items-center justify-center font-chunky text-retro-brown shadow-pop-sm">
              4.8
            </div>
<div>
<p className="font-chunky text-xs uppercase text-retro-brown">TOP RATED</p>
<p className="text-xs font-bold text-retro-brown/70">Google Reviews (Jaipur)</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-white retro-border flex items-center justify-center text-xl shadow-pop-sm">
              🌙
            </div>
<div>
<p className="font-chunky text-xs uppercase text-retro-brown">MIDNIGHT CRAVINGS</p>
<p className="text-xs font-bold text-retro-brown/70">Open &amp; Delivering 24/7</p>
</div>
</div>
</div>
</div>
{/* Right Column: Hero Burger Visual Centerpiece & Dynamic Stickers */}
<div className="lg:col-span-6 relative flex items-center justify-center">
{/* Large Glowing Backboard Plate */}
<div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-cheddar-yellow/40 rounded-full blur-2xl -z-10"></div>
{/* Rotating Starburst Badge (Top Right) */}
<div className="absolute -top-4 -right-2 sm:right-6 z-20 transform rotate-12 hover:rotate-0 transition-transform">
<div className="starburst-badge bg-burnt-orange text-white w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-2 text-center shadow-pop">
<span className="font-chunky text-xl sm:text-2xl leading-none">4.9</span>
<span className="text-[9px] sm:text-[10px] font-extrabold uppercase mt-1 leading-tight tracking-tighter">★ SUPER TASTE</span>
</div>
</div>
{/* Floating Tag Left: Melted Cheese */}
<div className="absolute top-1/3 -left-4 sm:left-2 z-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-sm retro-border px-3.5 py-2 rounded-2xl shadow-pop transform -rotate-6">
<span className="text-lg">🧀</span>
<div>
<p className="font-chunky text-[11px] leading-none text-retro-brown">EXTRA CHEDDAR</p>
<p className="text-[9px] font-bold text-zinc-500">Melted to perfection</p>
</div>
</div>
{/* Floating Tag Bottom Right: Free Fries */}
<div className="absolute bottom-6 right-2 sm:right-10 z-20 flex items-center gap-2 bg-cheddar-yellow text-retro-brown retro-border px-4 py-2 rounded-2xl shadow-pop transform rotate-3">
<span className="text-xl">🍟</span>
<div>
<p className="font-chunky text-xs leading-none">FREE FRIES</p>
<p className="text-[10px] font-extrabold">Included in every order</p>
</div>
</div>
{/* Center Dynamic Burger Splash Image */}
<div className="relative w-full max-w-[500px] animate-gentle-float">
<img alt="Funky mouth-watering gourmet double smash cheese burger with melting liquid cheddar dripping down, crispy bacon, fresh lettuce, toasted sesame brioche bun, flying ingredients splash" className="w-full h-auto object-contain drop-shadow-[0_30px_35px_rgba(42,18,8,0.28)] transform scale-105 hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG4EJ0cNST5iO6AqaNP6O5qdb6CJ8l3jnGG0bJKUq1AXCX5tSofPCiA4bTxDMb653Y77P36SDrlJ_-vT_V9lrJkiy7E9CdIQ5nvxk_Ua8AUoB6FeaQCjyfIjzQH6YxTrVY7LjPeeNXLLMqZg6AgrwmuxRi1nbMhwB2r4Kby-PKc3T90KiT9wpIex4K5yW13ybjYPD3yQalSrS-opMfwmK_bIUSkTuEqRPGHaKffARAWIh11Qsb27qVUw"/>
</div>
</div>
</div>
{/* Floating Interactive Quick-Add Product Row (Reference 2 Inspired) */}
<div className="mt-12 sm:mt-16 pt-8 border-t-2 border-retro-brown/15" data-purpose="quick-items-tray">
<div className="flex items-center justify-between mb-6">
<div>
<span className="text-xs font-chunky text-burnt-orange uppercase tracking-wider">Fast Cravings</span>
<h2 className="text-2xl font-chunky text-retro-brown uppercase">Trending Right Now in Jagatpura</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-1 font-extrabold text-sm text-retro-brown hover:text-burnt-orange" href="#menu">
<span>View Full 40+ Item Menu</span>
<span>→</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Card 1: Maharaja Double Smash */}
<article className="bg-white rounded-3xl retro-border p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4">
<div>
<span className="bg-sun-gold/40 text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1.5">Bestseller</span>
<h3 className="font-chunky text-base text-retro-brown group-hover:text-burnt-orange transition-colors">The Maharaja Double Smash</h3>
<p className="text-xs font-bold text-zinc-500 mt-1">Dual smashed beef/veg patty, dripping cheese &amp; relish</p>
</div>
<div className="w-16 h-16 rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🍔
            </div>
</div>
<div className="mt-5 pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-xl text-retro-brown">₹280</p>
</div>
{/* Quick Stepper / Bag Action (Ref 2) */}
<div className="flex items-center gap-2 bg-cream-soft px-2 py-1.5 rounded-2xl retro-border shadow-pop-sm">
<button aria-label="Decrease quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">-</button>
<span className="font-chunky text-xs px-1">1</span>
<button aria-label="Increase quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">+</button>
<button aria-label="Add to bag" className="w-8 h-8 rounded-xl bg-burnt-orange text-white flex items-center justify-center hover:bg-retro-brown transition-colors ml-1" type="button">
                🛒
              </button>
</div>
</div>
</article>
{/* Card 2: Spicy Paneer Tikka Volcano */}
<article className="bg-white rounded-3xl retro-border p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4">
<div>
<span className="bg-sauce-red/20 text-sauce-red text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1.5">Spicy 🔥</span>
<h3 className="font-chunky text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Paneer Tikka Volcano</h3>
<p className="text-xs font-bold text-zinc-500 mt-1">Smoked tandoori paneer steak with spicy chipotle salsa</p>
</div>
<div className="w-16 h-16 rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🧀
            </div>
</div>
<div className="mt-5 pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-xl text-retro-brown">₹190</p>
</div>
<div className="flex items-center gap-2 bg-cream-soft px-2 py-1.5 rounded-2xl retro-border shadow-pop-sm">
<button aria-label="Decrease quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">-</button>
<span className="font-chunky text-xs px-1">1</span>
<button aria-label="Increase quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">+</button>
<button aria-label="Add to bag" className="w-8 h-8 rounded-xl bg-burnt-orange text-white flex items-center justify-center hover:bg-retro-brown transition-colors ml-1" type="button">
                🛒
              </button>
</div>
</div>
</article>
{/* Card 3: Classic Loaded Cheese Melt */}
<article className="bg-white rounded-3xl retro-border p-5 shadow-pop hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4">
<div>
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2 py-0.5 rounded-md retro-border inline-block mb-1.5">Cheesy Pick</span>
<h3 className="font-chunky text-base text-retro-brown group-hover:text-burnt-orange transition-colors">Loaded Cheese Melt</h3>
<p className="text-xs font-bold text-zinc-500 mt-1">Triple-layer gouda &amp; cheddar with garlic herb butter</p>
</div>
<div className="w-16 h-16 rounded-2xl bg-cream-soft retro-border flex items-center justify-center text-3xl shrink-0 group-hover:rotate-6 transition-transform">
              🔥
            </div>
</div>
<div className="mt-5 pt-4 border-t-2 border-dashed border-retro-brown/20 flex items-center justify-between">
<div>
<span className="text-xs font-extrabold text-zinc-400">PRICE</span>
<p className="font-chunky text-xl text-retro-brown">₹160</p>
</div>
<div className="flex items-center gap-2 bg-cream-soft px-2 py-1.5 rounded-2xl retro-border shadow-pop-sm">
<button aria-label="Decrease quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">-</button>
<span className="font-chunky text-xs px-1">1</span>
<button aria-label="Increase quantity" className="w-6 h-6 rounded-xl bg-white text-retro-brown font-chunky text-xs flex items-center justify-center hover:bg-cheddar-yellow transition-colors border border-retro-brown" type="button">+</button>
<button aria-label="Add to bag" className="w-8 h-8 rounded-xl bg-burnt-orange text-white flex items-center justify-center hover:bg-retro-brown transition-colors ml-1" type="button">
                🛒
              </button>
</div>
</div>
</article>
</div>
</div>
</main>
{/* END: HeroSection */}
{/* BEGIN: ExplodedAnatomySection */}
{/* Exploded Burger Stack Anatomy (Reference 1 Inspired) */}
<section className="bg-cheddar-yellow py-20 px-4 sm:px-6 lg:px-8 border-y-4 border-retro-brown relative overflow-hidden" id="anatomy">
{/* Bold Background Typography Watermark */}
<div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none overflow-hidden">
<span className="font-chunky text-[13vw] leading-none text-retro-brown whitespace-nowrap">
        SMOKY CHEESY CRAFT
      </span>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-block bg-retro-brown text-white font-chunky text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
          Inside Our Kitchen
        </span>
<h2 className="font-chunky text-3xl sm:text-5xl text-retro-brown uppercase tracking-tight">
          Anatomy of a Signature Smash
        </h2>
<p className="text-retro-brown font-bold text-sm sm:text-base mt-3">
          Every single layer is engineered for that sensational, dripping Jaipur midnight bite.
        </p>
</div>
{/* Exploded Stack Visual Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
{/* Left Side Layer Explanations */}
<div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">LAYER 01</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Toasted Sesame Brioche</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">Freshly baked butter buns with a slight caramel crunch crust.</p>
</div>
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">LAYER 02</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Cascade Liquid Cheddar</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">Aged dairy cheese melted straight on top of the scorching griddle.</p>
</div>
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">LAYER 03</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Charcoal Smashed Patty</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">Ultra-crispy lacy edges locked with savory spiced seasonings.</p>
</div>
</div>
{/* Center Image Showcase (From Ref 1 Exploded Concept) */}
<div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
<div className="relative max-w-[340px] w-full bg-cream-soft rounded-3xl p-6 retro-border shadow-pop-lg text-center">
<div className="w-full bg-white rounded-2xl p-4 retro-border mb-4">
<span className="font-chunky text-burnt-orange text-sm uppercase">🍔 100% HANDCRAFTED</span>
<p className="font-extrabold text-xs text-retro-brown mt-1">Never frozen, smashed to order under heavy cast-iron press.</p>
</div>
{/* Mini Visual Layers Representation */}
<div className="flex flex-col gap-2.5 py-4 font-chunky text-xs tracking-wide text-retro-brown uppercase">
<div className="bg-sun-gold/50 py-2 rounded-xl retro-border shadow-pop-sm">Top Brioche Crown</div>
<div className="bg-cheddar-yellow py-2 rounded-xl retro-border shadow-pop-sm">Melting Cheddar Blankets</div>
<div className="bg-sauce-red/20 py-2 rounded-xl retro-border shadow-pop-sm">Crisp Lettuce &amp; Pickles</div>
<div className="bg-retro-brown text-white py-2.5 rounded-xl border-2 border-white shadow-pop-sm">Smash Sizzle Patty (2x)</div>
<div className="bg-burnt-orange/30 py-2 rounded-xl retro-border shadow-pop-sm">Secret Signature Pink Dip</div>
<div className="bg-sun-gold/50 py-2 rounded-xl retro-border shadow-pop-sm">Golden Toasted Heel</div>
</div>
<div className="mt-4 bg-retro-brown text-cheddar-yellow py-2 px-3 rounded-xl font-chunky text-xs">
              ★ ALWAYS SERVED WITH FREE PERI-PERI FRIES
            </div>
</div>
</div>
{/* Right Side Layer Explanations */}
<div className="lg:col-span-4 space-y-6 order-3">
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">LAYER 04</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Pink City Pickles &amp; Slaw</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">Hand-sliced spicy dill pickles and crunchy garden hydroponic greens.</p>
</div>
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform -rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">LAYER 05</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Secret Drip Sauce</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">House-crafted creamy aioli with smoked paprika &amp; tangy relish punch.</p>
</div>
<div className="bg-white p-5 rounded-3xl retro-border shadow-pop transform rotate-1 hover:rotate-0 transition-transform">
<span className="font-chunky text-burnt-orange text-xs">EXTRA BONUS</span>
<h3 className="font-chunky text-lg text-retro-brown mt-0.5">Crisp Peri-Peri Fries</h3>
<p className="text-xs font-bold text-zinc-600 mt-1">Golden potato matchsticks tossed in our signature spice dust on us!</p>
</div>
</div>
</div>
</div>
</section>
{/* END: ExplodedAnatomySection */}
{/* BEGIN: FunkyMenuSection */}
{/* Full Interactive Menu Grid with Prices in ₹ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<div className="inline-flex items-center gap-2 bg-sun-gold/30 px-3 py-1 rounded-full retro-border mb-3 font-chunky text-xs text-retro-brown">
<span>🍴</span> FULL TASTE SPREAD
        </div>
<h2 className="font-chunky text-3xl sm:text-5xl text-retro-brown uppercase">
          Signature Smashes &amp; Shakes
        </h2>
<p className="text-sm sm:text-base font-bold text-zinc-600 mt-2">
          Hand-crafted hot off the griddle. Free signature crispy fries included on all burger orders!
        </p>
</div>
{/* Quick Delivery Pill Banner */}
<div className="bg-white p-4 rounded-2xl retro-border shadow-pop flex items-center gap-4 shrink-0">
<div className="w-12 h-12 rounded-xl bg-burnt-orange text-white flex items-center justify-center font-chunky text-xl">
          ⚡
        </div>
<div>
<p className="font-chunky text-xs uppercase text-retro-brown">30-MIN JAIPUR EXPRESS</p>
<p className="text-xs font-extrabold text-zinc-500">Jagatpura, Malviya Nagar &amp; CBI Road</p>
</div>
</div>
</div>
{/* Menu Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Item 1 */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-burnt-orange text-white text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">Chef Special</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.9 (420)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">The Maharaja Double Smash</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            Double smashed prime patties, melted triple cheddar, caramelized onions, jalapeños &amp; secret pink dripping dip.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹280</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
{/* Item 2 */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">Veg Hero</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.8 (310)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">Spicy Paneer Tikka Volcano</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            Thick charcoal-grilled cottage cheese block, smoky tandoori sauce, crunchy bell peppers &amp; melted mozzarella drizzle.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹190</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
{/* Item 3 */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-sun-gold text-retro-brown text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">Smoky Crunch</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.8 (190)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">Smoky BBQ Bacon Crunch</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            Smoky glaze crunch strips, caramelized brown sugar onions, double melted cheese on buttered brioche bun.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹220</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
{/* Item 4 */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-cream-soft text-retro-brown text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">All-Time Fav</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.7 (540)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">Classic Loaded Cheese Melt</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            The staple that started it all in Jaipur: Double cheese cascade, crispy golden crust, and our heritage garlic butter.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-burnt-orange">🍟 + Free Peri-Peri Fries Included</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹160</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
{/* Item 5: Shake */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-cheddar-yellow text-retro-brown text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">Chilled Shake</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.9 (280)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">Alphonso Mango Thick Shake</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            Real Ratnagiri mango pulp, rich full-cream ice cream, topped with chopped pistachios &amp; whipped cream cap.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-cheddar-yellow">🥭 100% Real Alphonso Pulp</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹140</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
{/* Item 6: Shake */}
<div className="bg-white rounded-3xl retro-border p-6 shadow-pop hover:-translate-y-2 transition-all flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<span className="bg-burnt-orange text-white text-[10px] font-chunky px-2.5 py-1 rounded-lg retro-border uppercase">Crowd Fav Shake</span>
<span className="font-chunky text-xs text-retro-brown">★ 4.9 (350)</span>
</div>
<h3 className="font-chunky text-xl text-retro-brown">Blueberry Swirl Shake</h3>
<p className="text-xs font-bold text-zinc-500 mt-2 leading-relaxed">
            Wild blueberries blended into dense velvety cream shake, layered with graham crumb crunch and berry coulis.
          </p>
<span className="inline-block mt-3 text-[11px] font-extrabold text-burnt-orange">🫐 Wild Berry Infusion</span>
</div>
<div className="mt-6 pt-4 border-t-2 border-retro-brown/10 flex items-center justify-between">
<span className="font-chunky text-2xl text-retro-brown">₹160</span>
<button className="px-5 py-2.5 bg-cheddar-yellow text-retro-brown font-chunky text-xs rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-all flex items-center gap-1.5" type="button">
<span>+ ADD TO BAG</span>
</button>
</div>
</div>
</div>
</section>
{/* END: FunkyMenuSection */}
{/* BEGIN: UpstairsStayCallout */}
{/* 'Feast Downstairs, Crash Upstairs' Boutique Stay Callout Card */}
<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="boutique-stay">
<div className="bg-retro-brown text-buttermilk rounded-3xl retro-border p-8 sm:p-12 shadow-pop-lg relative overflow-hidden">
{/* Background pattern */}
<div className="absolute -right-10 -bottom-10 opacity-10 text-9xl select-none pointer-events-none">
        🏨
      </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-2 bg-sun-gold text-retro-brown px-3 py-1 rounded-full font-chunky text-xs uppercase mb-4 retro-border">
<span>✨</span> UNIQUE JAIPUR CONCEPT
          </div>
<h2 className="font-chunky text-3xl sm:text-4xl lg:text-5xl text-sun-gold uppercase leading-tight">
            Feast Downstairs, <br className="hidden sm:inline"/>Crash Upstairs!
          </h2>
<p className="text-sm sm:text-base font-semibold text-buttermilk/80 mt-4 max-w-2xl leading-relaxed">
            Traveling through Jaipur or craving a midnight food-staycation? Burger Signature features clean, modern boutique AC hotel suites right above the diner starting at just <strong>₹2,000/night</strong> with direct 24/7 room service delivery right to your bed!
          </p>
<div className="flex flex-wrap gap-4 mt-6 text-xs font-extrabold uppercase">
<span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">🛏️ Plush Queen Beds</span>
<span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">❄️ Chilled High-Cool AC</span>
<span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">⚡ High-Speed Wi-Fi</span>
<span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">🍔 24/7 Midnight Burger In-Bed</span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
<div className="bg-cream-soft text-retro-brown p-6 rounded-3xl retro-border shadow-pop text-center w-full max-w-xs">
<span className="text-xs font-chunky text-burnt-orange uppercase">Suites From</span>
<p className="font-chunky text-3xl text-retro-brown my-1">₹2,000<span className="text-sm font-sans font-bold text-zinc-500"> / night</span></p>
<p className="text-[11px] font-extrabold text-zinc-600 mb-4">Railway Colony, Jagatpura, Jaipur</p>
<a className="w-full inline-block py-3 bg-burnt-orange text-white font-chunky text-xs uppercase rounded-xl retro-border hover:bg-retro-brown transition-colors" href="tel:09982844485">
              Book Room: 099828 44485
            </a>
</div>
</div>
</div>
</div>
</section>
{/* END: UpstairsStayCallout */}
{/* BEGIN: ReviewsSection */}
{/* Verified Google Reviews Grid */}
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="reviews">
<div className="text-center max-w-2xl mx-auto mb-14">
<div className="inline-flex items-center gap-1.5 bg-cheddar-yellow/30 px-3 py-1 rounded-full retro-border mb-3 font-chunky text-xs text-retro-brown">
<span>★ ★ ★ ★ ★</span> GOOGLE VERIFIED
      </div>
<h2 className="font-chunky text-3xl sm:text-4xl text-retro-brown uppercase">
        Loved by Jaipur's Night Owls
      </h2>
<p className="text-sm sm:text-base font-bold text-zinc-600 mt-2">
        From Jagatpura locals to hungry midnight road-trippers near CBI Fatak.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Review 1 */}
<div className="bg-white p-6 rounded-3xl retro-border shadow-pop flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-sm mb-3">
            ★★★★★
          </div>
<p className="text-sm font-bold text-retro-brown leading-relaxed italic">
            "Hands down, the juiciest burger in Jagatpura! Smashed patties have that crispy edge and the cheese was literally overflowing. We ordered at 2:30 AM and got it piping hot in 20 minutes!"
          </p>
</div>
<div className="mt-6 pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sun-gold retro-border flex items-center justify-center font-chunky text-xs text-retro-brown">
            RK
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Raja Kotwal</h4>
<p className="text-[11px] font-bold text-zinc-500">Local Guide · Jaipur</p>
</div>
</div>
</div>
{/* Review 2 */}
<div className="bg-white p-6 rounded-3xl retro-border shadow-pop flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-sm mb-3">
            ★★★★★
          </div>
<p className="text-sm font-bold text-retro-brown leading-relaxed italic">
            "The free peri-peri fries with every burger is such a great touch! Also had the mango shake which is super thick and creamy. Perfect midnight hangout spot with great funky vibes."
          </p>
</div>
<div className="mt-6 pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cheddar-yellow retro-border flex items-center justify-center font-chunky text-xs text-retro-brown">
            PM
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Praveen Meena</h4>
<p className="text-[11px] font-bold text-zinc-500">Food Blogger · Jaipur</p>
</div>
</div>
</div>
{/* Review 3 */}
<div className="bg-white p-6 rounded-3xl retro-border shadow-pop flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform">
<div>
<div className="flex items-center gap-1 text-cheddar-yellow text-sm mb-3">
            ★★★★★
          </div>
<p className="text-sm font-bold text-retro-brown leading-relaxed italic">
            "Stayed upstairs in their AC room after traveling and ordered the Maharaja burger right from my bed. Clean rooms, sensational food, and literally 24-hour service. 10/10 recommendation!"
          </p>
</div>
<div className="mt-6 pt-4 border-t border-retro-brown/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-burnt-orange text-white retro-border flex items-center justify-center font-chunky text-xs">
            CK
          </div>
<div>
<h4 className="font-chunky text-xs text-retro-brown">Chandrakesh</h4>
<p className="text-[11px] font-bold text-zinc-500">Verified Customer</p>
</div>
</div>
</div>
</div>
</section>
{/* END: ReviewsSection */}
{/* BEGIN: MainFooter */}
{/* Funky Footer with Location, Helpline & Quick Ordering Info */}
<footer className="bg-cream-soft border-t-4 border-retro-brown pt-16 pb-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b-2 border-retro-brown/20">
{/* Brand & Address */}
<div className="lg:col-span-5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-cheddar-yellow rounded-2xl retro-border flex items-center justify-center text-xl shadow-pop-sm">
              🍔
            </div>
<span className="font-funky text-2xl text-retro-brown">Burger Signature<span className="text-burnt-orange">.</span></span>
</div>
<p className="font-chunky text-xs text-retro-brown mb-2">बर्गर सिगनेचर · Near CBI Fatak</p>
<p className="text-xs font-bold text-zinc-600 leading-relaxed max-w-sm">
            ARAWALI HILLS, 77 A/2, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017. Serving hot smashed burgers, loaded fries &amp; thick shakes 24 Hours a day!
          </p>
<div className="mt-4 flex items-center gap-3">
<a className="bg-burnt-orange text-white font-chunky text-xs px-4 py-2 rounded-xl retro-border shadow-pop-sm hover:bg-retro-brown transition-colors" href="tel:09982844485">
              📞 099828 44485
            </a>
<span className="text-xs font-extrabold text-sauce-red flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-sauce-red animate-pulse"></span>
              Always Open (24 Hours)
            </span>
</div>
</div>
{/* Quick Links */}
<div className="lg:col-span-3">
<h4 className="font-chunky text-sm text-retro-brown uppercase mb-4">Hungry Quick Links</h4>
<ul className="space-y-2.5 text-xs font-extrabold text-zinc-600">
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">The Maharaja Double Smash</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">Spicy Paneer Tikka Volcano</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#menu">Alphonso Mango Thick Shake</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="/hotel">Upstairs AC Boutique Stay</a></li>
<li><a className="hover:text-burnt-orange transition-colors" href="#reviews">Jaipur Foodie Reviews</a></li>
</ul>
</div>
{/* Takeaway / Midnight Ordering Box */}
<div className="lg:col-span-4 bg-white p-6 rounded-3xl retro-border shadow-pop">
<h4 className="font-chunky text-sm text-retro-brown uppercase mb-1">Instant Midnight Orders</h4>
<p className="text-xs font-bold text-zinc-500 mb-4">Direct kitchen WhatsApp/Calling helpline for swift pickup or doorstep delivery.</p>
<div className="space-y-2">
<a className="w-full flex items-center justify-center gap-2 bg-cheddar-yellow text-retro-brown font-chunky text-xs py-3 rounded-xl retro-border shadow-pop-sm hover:bg-burnt-orange hover:text-white transition-colors" href="tel:09982844485">
<span>CALL: 099828 44485</span>
</a>
<a className="w-full flex items-center justify-center gap-2 bg-cream-soft text-retro-brown font-chunky text-xs py-2.5 rounded-xl retro-border hover:bg-white transition-colors" href="https://maps.google.com/?q=Burger+Signature+Jagatpura+Jaipur" rel="noopener noreferrer" target="_blank">
<span>📍 OPEN IN GOOGLE MAPS</span>
</a>
</div>
</div>
</div>
{/* Copyright & Bottom Bar */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-extrabold text-zinc-500">
<p>© 2025 Burger Signature (बर्गर सिगनेचर) · All Rights Reserved.</p>
<p className="flex items-center gap-2">
<span>Fresh Buns</span> • <span>Smashed with Love in Jaipur</span> • <span>Free Fries Forever</span>
</p>
</div>
</div>
</footer>
{/* END: MainFooter */}

    </div>
  );
};

export default Home;
