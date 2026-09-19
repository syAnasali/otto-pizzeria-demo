import React, { useState, useEffect } from 'react';

const SplashLoader = () => {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('Heating 450°C Hearth...');
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.has('skip-splash');
    }
    return false;
  });

  useEffect(() => {
    if (isRemoved) return;

    // Smooth progress counter simulation (0 to 100% over ~1.6s)
    const startTime = performance.now();
    const duration = 1600;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const current = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(current);

      if (current < 35) {
        setPhaseText('Heating 450°C Hearth...');
      } else if (current < 75) {
        setPhaseText('Stretching 48H Sourdough...');
      } else if (current < 100) {
        setPhaseText('Wood-Firing Fresh Slices...');
      } else {
        setPhaseText('Fired & Ready! 🍕');
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger upward card slide-out animation
        setTimeout(() => {
          setIsExiting(true);
          // Fully remove from DOM after slide-up transition completes (1150ms + 100ms buffer)
          setTimeout(() => {
            setIsRemoved(true);
          }, 1250);
        }, 240);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, [isRemoved]);

  if (isRemoved) return null;

  return (
    <div 
      id="otto-splash-card"
      aria-label="Loading Otto Pizzeria"
      className={`fixed inset-x-0 top-0 h-[100dvh] z-[9999] bg-[#FFF9F2] text-retro-brown flex flex-col justify-between items-center px-4 py-6 sm:py-10 select-none overflow-hidden border-b-4 border-retro-brown rounded-b-[36px] sm:rounded-b-[56px] shadow-[0_30px_60px_rgba(42,18,8,0.35)] transition-transform ${
        isExiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      style={{
        transitionDuration: '1150ms',
        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
      }}
    >
      {/* Background Decorative Pattern & Hearth Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#2A1208_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-burnt-orange/15 via-sun-gold/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Top Bar: Brand Pill */}
      <div className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white retro-border shadow-pop-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-sauce-red animate-ping"></span>
        <span className="font-chunky text-[10px] sm:text-xs text-retro-brown uppercase tracking-widest">
          Otto Pizzeria · Nad Al Sheba 4 · Dubai
        </span>
      </div>

      {/* Centerpiece: Animated Wood-Fired Pizza & Brand Identity */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full max-w-sm sm:max-w-md">
        
        {/* Animated Pizza Presentation */}
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 mb-5 sm:mb-7 flex items-center justify-center">
          {/* Pulsing Hearth Ember Aura */}
          <div className="absolute inset-0 m-auto w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-burnt-orange/20 blur-xl animate-pulse"></div>

          {/* Rotating Hearth Glow Rays */}
          <div className="absolute inset-0 m-auto w-44 h-44 sm:w-60 sm:h-60 rounded-full border-2 border-dashed border-burnt-orange/30 animate-spin-slow pointer-events-none"></div>

          {/* Steaming Heat Wisps */}
          <div className="absolute -top-6 sm:-top-8 flex items-center gap-4 text-burnt-orange opacity-75 animate-gentle-float">
            <span className="text-sm sm:text-base font-extrabold rotate-[-10deg]">~</span>
            <span className="text-base sm:text-lg font-extrabold rotate-[5deg]">~</span>
            <span className="text-sm sm:text-base font-extrabold rotate-[15deg]">~</span>
          </div>

          {/* SVG Artisanal Neapolitan Pizza */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 relative transform transition-transform hover:scale-105 duration-300">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
              {/* Outer Golden Puffed Cornicione Crust */}
              <circle cx="100" cy="100" r="92" fill="#FAF2E8" stroke="#2A1208" strokeWidth="4" />
              
              {/* Crust Oven Char Leopard Spots */}
              <circle cx="35" cy="85" r="4" fill="#2A1208" opacity="0.4" />
              <circle cx="48" cy="50" r="3.5" fill="#2A1208" opacity="0.35" />
              <circle cx="95" cy="16" r="4.5" fill="#2A1208" opacity="0.45" />
              <circle cx="145" cy="28" r="4" fill="#2A1208" opacity="0.4" />
              <circle cx="180" cy="80" r="5" fill="#2A1208" opacity="0.45" />
              <circle cx="170" cy="135" r="4.5" fill="#2A1208" opacity="0.4" />
              <circle cx="125" cy="180" r="5" fill="#2A1208" opacity="0.45" />
              <circle cx="65" cy="172" r="4" fill="#2A1208" opacity="0.35" />
              
              {/* San Marzano Sauce Base Layer */}
              <circle cx="100" cy="100" r="76" fill="#D9531E" />
              <circle cx="100" cy="100" r="76" stroke="#2A1208" strokeWidth="2.5" strokeOpacity="0.2" />

              {/* Molten Fior di Latte Mozzarella Melts */}
              <circle cx="100" cy="100" r="68" fill="#FDF4E7" opacity="0.85" />
              <path d="M70 70 Q 100 45 130 70 Q 155 100 130 130 Q 100 155 70 130 Q 45 100 70 70 Z" fill="#FFFFFF" />

              {/* Cutting Slice Division Lines */}
              <path d="M100 24 L100 176" stroke="#2A1208" strokeWidth="1.8" strokeDasharray="3 3" strokeOpacity="0.35" />
              <path d="M24 100 L176 100" stroke="#2A1208" strokeWidth="1.8" strokeDasharray="3 3" strokeOpacity="0.35" />
              <path d="M46 46 L154 154" stroke="#2A1208" strokeWidth="1.8" strokeDasharray="3 3" strokeOpacity="0.35" />
              <path d="M154 46 L46 154" stroke="#2A1208" strokeWidth="1.8" strokeDasharray="3 3" strokeOpacity="0.35" />

              {/* Roasted Halal Pepperonis with Crisped Edges */}
              <g className="pepperonis">
                <circle cx="75" cy="65" r="14" fill="#DC2626" stroke="#2A1208" strokeWidth="2" />
                <circle cx="73" cy="63" r="2.5" fill="#2A1208" opacity="0.2" />
                
                <circle cx="128" cy="68" r="13" fill="#DC2626" stroke="#2A1208" strokeWidth="2" />
                <circle cx="130" cy="66" r="2.5" fill="#2A1208" opacity="0.2" />
                
                <circle cx="135" cy="120" r="15" fill="#DC2626" stroke="#2A1208" strokeWidth="2" />
                <circle cx="133" cy="118" r="2.5" fill="#2A1208" opacity="0.2" />
                
                <circle cx="72" cy="125" r="13.5" fill="#DC2626" stroke="#2A1208" strokeWidth="2" />
                <circle cx="70" cy="123" r="2.5" fill="#2A1208" opacity="0.2" />
                
                <circle cx="102" cy="98" r="14" fill="#DC2626" stroke="#2A1208" strokeWidth="2" />
                <circle cx="104" cy="96" r="2.5" fill="#2A1208" opacity="0.2" />
              </g>

              {/* Fresh Sweet Basil Leaves */}
              <g className="basil">
                <path d="M96 55 C 88 46, 92 36, 104 38 C 112 46, 108 58, 96 55 Z" fill="#2A9D8F" stroke="#2A1208" strokeWidth="1.5" />
                <path d="M142 95 C 152 90, 156 100, 148 108 C 140 110, 134 100, 142 95 Z" fill="#2A9D8F" stroke="#2A1208" strokeWidth="1.5" />
                <path d="M60 98 C 52 104, 48 94, 56 88 C 64 88, 68 96, 60 98 Z" fill="#2A9D8F" stroke="#2A1208" strokeWidth="1.5" />
                <path d="M102 144 C 94 152, 104 158, 112 150 C 112 142, 104 140, 102 144 Z" fill="#2A9D8F" stroke="#2A1208" strokeWidth="1.5" />
              </g>
            </svg>

            {/* Popping Slice Floating Accent (Top Right Slice Lifting slightly) */}
            <div className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-sun-gold text-retro-brown font-chunky text-[9px] sm:text-[10px] retro-border shadow-pop-sm animate-bounce">
              🔥 450°C
            </div>
          </div>
        </div>

        {/* Brand Name Typography */}
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="h-9 px-2.5 py-1 bg-white rounded-xl retro-border flex items-center justify-center shadow-pop-sm">
            <img src="/otto-logo.svg" alt="Otto Pizzeria Logo" className="h-5 w-auto object-contain" />
          </div>
          <h1 className="font-funky text-3xl sm:text-4xl text-retro-brown leading-none">
            Otto Pizzeria<span className="text-burnt-orange">.</span>
          </h1>
        </div>
        <p className="font-chunky text-[11px] sm:text-xs text-burnt-orange uppercase tracking-wider mb-5">
          Wood-Fired Neapolitan • 48H Sourdough
        </p>

        {/* Tactile Retro Progress Bar */}
        <div className="w-full bg-white rounded-2xl retro-border p-1.5 shadow-pop-sm">
          <div 
            className="h-3.5 sm:h-4 bg-gradient-to-r from-burnt-orange via-cheddar-yellow to-sun-gold rounded-xl transition-all duration-150 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Animated Shine Bar */}
            <div className="absolute inset-0 bg-white/25 skew-x-12 animate-marquee pointer-events-none"></div>
          </div>
        </div>

        {/* Status Phase Text & Percentage */}
        <div className="flex items-center justify-between w-full mt-2.5 px-1 font-chunky text-xs sm:text-sm text-retro-brown">
          <span className="truncate">{phaseText}</span>
          <span className="text-burnt-orange font-black ml-2">{progress}%</span>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-zinc-500">
        <span>🍕</span>
        <span>Stone-Baked Fresh Around the Clock in Nad Al Sheba</span>
      </div>
    </div>
  );
};

export default SplashLoader;
