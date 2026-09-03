import React from 'react';
import Header from '../components/Header';

const Hotel = () => {
  // Script logic
  
    const selectRoomTier = (tierName) => {
      const selectElement = document.getElementById('selected-room-tier');
      if (selectElement) {
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].text.includes(tierName.split(' ')[0])) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }
    }

    const handleDirectBooking = (event) => {
      event.preventDefault();
      const guestName = document.getElementById('guest-name').value;
      const guestPhone = document.getElementById('guest-phone').value;
      const selectedTier = document.getElementById('selected-room-tier').value;
      const successMessage = document.getElementById('booking-success-message');
      
      if (successMessage) {
        successMessage.classList.remove('hidden');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Pre-format WhatsApp link and open for immediate convenience
      const text = encodeURIComponent(`Hi Hotel GVR & Burger Signature! I would like to reserve the ${selectedTier}. Guest Name: ${guestName}, Phone: ${guestPhone}. Please confirm my check-in!`);
      setTimeout(() => {
        window.open(`https://wa.me/916376302275?text=${text}`, '_blank');
      }, 900);
    }
  

  return (
    <div className="min-h-screen">
      <Header /><main className="w-full pt-20 sm:pt-28 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Dynamic Notification Bar / Ticker */}

{/* Hero Section */}
<section className="relative w-full py-8 sm:py-space-2xl md:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop overflow-hidden bg-surface">
{/* Ambient Backdrop Flares */}
<div className="absolute -top-16 -left-20 w-80 h-80 rounded-full bg-cheddar-amber/15 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-tomato-crimson/10 blur-3xl pointer-events-none"></div>
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-space-xl items-center">
{/* Left Hero Copy */}
<div className="lg:col-span-7 flex flex-col gap-3 sm:gap-space-md reveal-on-scroll reveal-left">
{/* Tilted Retro Stickers Row */}
<div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 sm:px-space-sm py-1 rounded-full bg-tomato-crimson text-on-primary font-label-badge text-[10px] sm:text-label-badge uppercase tracking-wider shadow-[2px_2px_0px_#1F0D03] -rotate-1">
<span className="material-symbols-outlined text-[14px] sm:text-[16px]">hotel</span> FEAST DOWNSTAIRS • HOTEL GVR!
            </span>
<span className="inline-flex items-center gap-1 px-2.5 sm:px-space-sm py-1 rounded-full bg-parchment-subtle text-brioche-deep font-label-badge text-[10px] sm:text-label-badge uppercase tracking-wider shadow-[2px_2px_0px_#1F0D03] rotate-1">
<span className="material-symbols-outlined text-cheddar-amber text-[14px] sm:text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.8 RATED
            </span>
<span className="inline-flex items-center gap-1 px-2.5 sm:px-space-sm py-1 rounded-full bg-lettuce-teal text-on-tertiary font-label-badge text-[10px] sm:text-label-badge uppercase tracking-wider shadow-[2px_2px_0px_#1F0D03] -rotate-1">
<span className="material-symbols-outlined text-[14px] sm:text-[16px]">room_service</span> 24/7 ROOM SERVICE
            </span>
</div>
{/* Headline */}
<div className="flex flex-col gap-1 sm:gap-space-2xs">
<span className="font-label-badge text-tomato-crimson font-black tracking-widest text-xs sm:text-body-lg uppercase">Hotel GVR • AC Stays &amp; Suites • Jagatpura</span>
<h1 className="font-headline-lg text-3xl sm:text-display-xl-mobile md:text-display-xl text-brioche-deep font-extrabold tracking-tight leading-[0.98]">
              HOTEL GVR <br className="hidden sm:inline"/>
<span className="text-tomato-crimson underline decoration-cheddar-amber decoration-wavy decoration-4">UPSTAIRS STAYS.</span>
</h1>
</div>
<p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Traveling through Jaipur or planning a nocturnal staycation? Hotel GVR offers ultra-clean, chilled air-conditioned boutique suites perched directly above Burger Signature diner. Gourmet burgers, peri-peri fries &amp; thick shakes served direct to your bed 24 hours a day!
          </p>
{/* Core Amenities Pill Bar */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-space-xs pt-1 sm:pt-space-xs">
<div className="flex items-center gap-2 p-2 sm:p-space-xs rounded-xl bg-surface-container-low shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-cheddar-amber text-[20px] sm:text-[22px]">king_bed</span>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-brioche-deep">Plush Beds</span>
<span className="font-body-md text-[10px] sm:text-[11px] text-charcoal-muted">High Comfort</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 sm:p-space-xs rounded-xl bg-surface-container-low shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-lettuce-teal text-[20px] sm:text-[22px]">ac_unit</span>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-brioche-deep">Split AC</span>
<span className="font-body-md text-[10px] sm:text-[11px] text-charcoal-muted">Super Chilled</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 sm:p-space-xs rounded-xl bg-surface-container-low shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-tomato-crimson text-[20px] sm:text-[22px]">wifi</span>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-brioche-deep">100 Mbps Wi-Fi</span>
<span className="font-body-md text-[10px] sm:text-[11px] text-charcoal-muted">Free &amp; Fast</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 sm:p-space-xs rounded-xl bg-surface-container-low shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-secondary text-[20px] sm:text-[22px]">lunch_dining</span>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-brioche-deep">24/7 Service</span>
<span className="font-body-md text-[10px] sm:text-[11px] text-charcoal-muted">In-Bed Dining</span>
</div>
</div>
</div>
{/* Hero Action CTAs */}
<div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-space-sm pt-2">
<a className="px-4 sm:px-space-lg py-3 sm:py-space-sm bg-cheddar-amber text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black shadow-[3px_3px_0px_#1F0D03] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center justify-center gap-2 text-center" href="#room-catalog">
<span className="material-symbols-outlined text-[18px] sm:text-[20px]">calendar_month</span>
<span>EXPLORE ROOM TIERS (FROM ₹2,000)</span>
</a>
<a className="px-4 sm:px-space-md py-2.5 sm:py-space-sm bg-surface-container-highest text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-bold shadow-[2px_2px_0px_#1F0D03] hover:bg-parchment-subtle transition-colors flex items-center justify-center gap-2 text-center" href="https://wa.me/916376302275?text=Hi%20Hotel%20GVR!%20I%20want%20to%20book%20a%20room%20in%20Jagatpura." target="_blank">
<span className="material-symbols-outlined text-lettuce-teal text-[18px] sm:text-[20px]">chat</span>
<span>WHATSAPP INSTANT DESK</span>
</a>
</div>
</div>
{/* Right Hero Visual Mosaic */}
<div className="lg:col-span-5 relative reveal-on-scroll reveal-scale delay-200 mt-2 lg:mt-0">
{/* Funky Layered Card Mosaic */}
<div className="relative w-full max-w-md mx-auto">
{/* Background tilted backdrop */}
<div className="absolute inset-0 bg-secondary-container rounded-2xl rotate-2 sm:rotate-3 shadow-[6px_6px_0px_#1F0D03]"></div>
{/* Main Featured Stay Card */}
<div className="relative bg-parchment-subtle rounded-2xl p-2.5 sm:p-space-sm shadow-[4px_4px_0px_#1F0D03] flex flex-col gap-2 sm:gap-space-sm">
<div className="relative overflow-hidden rounded-xl bg-surface-container-high h-52 sm:h-72">
<img className="w-full h-full object-cover" data-alt="A clean cozy boutique hotel suite bedroom in Jaipur with sleek polished mahogany bed frame crisp fresh white sheets scarlet runner pillows side table and warm recessed lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu6pqOJP-NXvoll2EHXW7_3E5dRwfGNiZwg3cWdWgdAw4Ku9uUGeNtjAeCMv4OUUpo3An8qZuSZ0EsjnYC5rGLuAlkQwT5YZt5n_1yiV-_1a-D53w6SIbRXQyb64B4yRaJpVlL9mb3qR1DeNb37f7oYdBAXsGbe_siWiQiRVSsuqvUiZb9ja2j-YB9LcpAYQoBH1tqbi2-7PJXyKCqT6t1LLwC7Ef0kezAzNaPNew6ZpwbGLNu-BtUjg"/>
<div className="absolute top-2.5 left-2.5 bg-brioche-deep text-parchment-subtle px-2 sm:px-space-xs py-1 rounded-lg font-label-badge text-[10px] sm:text-[11px] font-black uppercase shadow-[2px_2px_0px_#FFB800] flex items-center gap-1">
<span className="material-symbols-outlined text-cheddar-amber text-[12px] sm:text-[14px]">hotel</span>
<span>SUITE 204 • JAGATPURA</span>
</div>
<div className="absolute bottom-2.5 right-2.5 bg-cheddar-amber text-brioche-deep px-2.5 sm:px-space-sm py-1 rounded-xl font-label-badge text-[11px] sm:text-label-badge uppercase font-extrabold shadow-[2px_2px_0px_#1F0D03]">
                  ₹2,000 / NIGHT
                </div>
</div>
{/* Mini Detail Bar on Card */}
<div className="flex items-center justify-between px-1 py-1">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-tomato-crimson text-on-primary flex items-center justify-center font-black shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-[16px]">verified</span>
</div>
<div className="flex flex-col leading-tight">
<span className="font-headline-md text-sm sm:text-[17px] text-brioche-deep font-bold">Standard Queen Suite</span>
<span className="font-body-md text-[11px] sm:text-[13px] text-charcoal-muted">Hot Breakfast + Crispy Fries Included</span>
</div>
</div>
<div className="flex items-center gap-0.5 text-cheddar-amber">
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-badge text-xs sm:text-[13px] font-black text-brioche-deep">4.9</span>
</div>
</div>
{/* Overlapping Sticker Badges */}
<div className="absolute bottom-1 left-1 sm:-bottom-5 sm:-left-4 bg-tomato-crimson text-on-primary font-label-badge text-[10px] sm:text-[12px] font-black uppercase px-2.5 py-1 rounded-full shadow-[3px_3px_0px_#1F0D03] -rotate-2 sm:-rotate-6">
                🔥 FREE FRIES ON CHECK-IN!
              </div>
<div className="absolute top-1 right-1 sm:-top-4 sm:-right-4 bg-lettuce-teal text-on-tertiary font-label-badge text-[10px] sm:text-[12px] font-black uppercase px-2.5 py-1 rounded-full shadow-[3px_3px_0px_#1F0D03] rotate-2 sm:rotate-6">
                ✨ SANITIZED LINEN
              </div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 3 Accommodation Tiers Section */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop" id="room-catalog">
<div className="max-w-container-max mx-auto flex flex-col gap-6 sm:gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col items-center text-center gap-1 sm:gap-space-2xs max-w-2xl mx-auto reveal-on-scroll">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-xs uppercase font-black shadow-[2px_2px_0px_#1F0D03]">
          SIGNATURE COLLECTION • JAIPUR
        </span>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg-mobile md:text-headline-lg text-brioche-deep font-black tracking-tight">
          CHOOSE YOUR PERFECT ROOM TIER
        </h2>
<p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant">
          Handcrafted comfort with midnight culinary privileges. All suites feature high-speed Wi-Fi, 24/7 hot showers, and crisp white linens.
        </p>
</div>
{/* 3 Room Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-space-xl items-stretch">
{/* CARD 1: STANDARD ROOM */}
<div className="flex flex-col h-full bg-surface-container-low rounded-2xl overflow-hidden shadow-[6px_6px_0px_#1F0D03] transition-transform hover:-translate-y-1 reveal-on-scroll reveal-pop delay-100">
{/* Image Top with Price Tag */}
<div className="relative h-48 sm:h-60 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Standard hotel suite room with dark wooden queen bed frame pure white bedsheet red accent runner sleek horizontal window blinds and nightstand in Jagatpura Jaipur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwOoi0L7Xitw2mK5hzWKzOlOj6ubD1X6OvK8VQJn_U1uMrwbcuBGySv232G7VuLUaC-HkkYwjI7hKiC-o0BrwUnuRzEpSsTueH_1B3F8esDUqEQ_6HzM0WE_wsBtTv7gkno8iztCNd7S2u11sesYvLW6752gLHZLrNUfkRt-7xCgbIdOSJ8EhNgrgd5AZZb7oiIhwolBqrCY-pK3c-e_PiLl0iYfmqRcZTwqX8dSKThaYkIhdtOtKeYQ"/>
<div className="absolute top-2.5 left-2.5 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-md font-label-badge text-[10px] sm:text-[11px] font-black uppercase shadow-[2px_2px_0px_#1F0D03]">
              ⚡ VALUE PICK
            </div>
<div className="absolute bottom-2.5 right-2.5 bg-brioche-deep text-parchment-subtle px-3 py-1 rounded-lg font-headline-md text-base sm:text-title-lg font-bold shadow-[3px_3px_0px_#FFB800]">
              ₹2,000 <span className="text-[11px] sm:text-[12px] font-body-md text-outline-variant font-normal">/ night</span>
</div>
</div>
{/* Room Details Body */}
<div className="p-4 sm:p-space-lg flex flex-col flex-1 justify-between gap-3 sm:gap-space-md">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-bold">Standard Suite</h3>
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-lettuce-teal uppercase flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px] sm:text-[15px]">check_circle</span> Available
                </span>
</div>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
                Crisp, quiet sanctuary designed for solo voyagers, transit guests, and visiting couples looking for restful sleep.
              </p>
{/* Specs list */}
<div className="flex flex-col gap-1.5 sm:gap-space-2xs pt-1 font-body-md text-xs sm:text-[14px]">
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">person</span>
<span>1–2 Persons Capacity</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">bed</span>
<span>Standard Double Bed (Mahogany Frame)</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">coffee</span>
<span>Hot Breakfast Included Daily</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">wifi</span>
<span>High-Speed 100 Mbps Wi-Fi</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">shower</span>
<span>En-suite Sanitized Bath + 24/7 Hot Water</span>
</div>
</div>
{/* Culinary Perk Box */}
<div className="p-2 sm:p-space-xs rounded-xl bg-parchment-subtle shadow-[2px_2px_0px_#1F0D03] flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-cheddar-amber text-[20px] sm:text-[24px]">fastfood</span>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase font-bold text-brioche-deep">
                  Perk: Free Peri-Peri Crispy Fries with First Order! 🍟
                </span>
</div>
</div>
{/* Booking Actions */}
<div className="flex flex-col gap-2 pt-2 sm:pt-space-sm mt-auto">
<a className="w-full py-2.5 sm:py-space-xs bg-lettuce-teal hover:bg-lettuce-teal/90 text-on-tertiary rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black text-center shadow-[3px_3px_0px_#1F0D03] active:translate-x-0.5 active:translate-y-0.5 transition-all" href="#booking-form-section" onClick={() => { selectRoomTier('Standard Suite (₹2,000)') }}>
                BOOK STANDARD (₹2,000)
              </a>
<a className="w-full py-2 bg-surface-container-highest text-brioche-deep rounded-lg font-label-badge text-[11px] sm:text-[12px] uppercase font-bold text-center hover:bg-parchment-subtle transition-colors flex items-center justify-center gap-1" href="https://wa.me/916376302275?text=Hello,%20I%20want%20to%20book%20the%20Standard%20Room%20(₹2000)%20at%20Hotel%20GVR." target="_blank">
<span className="material-symbols-outlined text-[15px] text-lettuce-teal">chat</span> WhatsApp Quick Inquiry
              </a>
</div>
</div>
</div>
{/* CARD 2: EXECUTIVE KING ROOM (FEATURED / POPULAR) */}
<div className="flex flex-col h-full bg-parchment-subtle rounded-2xl overflow-hidden shadow-[8px_8px_0px_#1F0D03] ring-4 ring-cheddar-amber relative sm:-translate-y-2 reveal-on-scroll reveal-pop delay-200">
{/* Top Sticky Banner */}
<div className="bg-cheddar-amber text-brioche-deep py-1 text-center font-label-badge text-[10px] sm:text-[11px] font-black uppercase tracking-widest">
            ★ GUEST FAVORITE • MOST POPULAR CHOICE ★
          </div>
{/* Image Top with Price Tag */}
<div className="relative h-48 sm:h-64 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Executive hotel suite bedroom in Jagatpura with plush wooden king bed soft bedside rug dedicated wooden workspace desk warm modern hotel lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG9EIbFliEmPdYzfmKJwYBPsBZBVMuNenTC0bzDlAYG5r5acNtIrTP6ox58qsWqTFMVxYq7cYT52EsJv-VdhBAjPIh-1i9OnCGI3QXntCbuSEf8iAiC_iufWYGDEJeoKwHgn3Pn8LzP7mzpxfkekGkp92moxkTzHsx1cQaRDsMi_tXNdyw60ZIyIBa56Is1ucRfwxusTuMvV4RAqz-3tt-xYIt5ZfL2zktAj1AGyaLlq1z_aJE35xcUQ"/>
<div className="absolute top-2.5 left-2.5 bg-tomato-crimson text-on-primary px-2.5 py-1 rounded-md font-label-badge text-[10px] sm:text-[11px] font-black uppercase shadow-[2px_2px_0px_#1F0D03]">
              🔥 MOST POPULAR
            </div>
<div className="absolute bottom-2.5 right-2.5 bg-brioche-deep text-parchment-subtle px-3 py-1 rounded-lg font-headline-md text-base sm:text-title-lg font-bold shadow-[3px_3px_0px_#FFB800]">
              ₹2,500 <span className="text-[11px] sm:text-[12px] font-body-md text-outline-variant font-normal">/ night</span>
</div>
</div>
{/* Room Details Body */}
<div className="p-4 sm:p-space-lg flex flex-col flex-1 justify-between gap-3 sm:gap-space-md">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black">Executive King Suite</h3>
<span className="px-2 py-0.5 rounded-full bg-cheddar-amber text-brioche-deep font-label-badge text-[10px] sm:text-[11px] font-black uppercase">
                  Spacious
                </span>
</div>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
                Upgraded spacious haven featuring a premium plush mattress, work console, extra lounge room, and custom ambient lighting.
              </p>
{/* Specs list */}
<div className="flex flex-col gap-1.5 sm:gap-space-2xs pt-1 font-body-md text-xs sm:text-[14px]">
<div className="flex items-center gap-2 text-brioche-deep font-bold">
<span className="material-symbols-outlined text-cheddar-amber text-[16px] sm:text-[18px]">person</span>
<span>1–2 Persons (Extra mattress available)</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-cheddar-amber text-[16px] sm:text-[18px]">king_bed</span>
<span>Luxury King Bed + Orthopedic Mattress</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-cheddar-amber text-[16px] sm:text-[18px]">desk</span>
<span>Dedicated Work Desk + High Speed LAN</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-cheddar-amber text-[16px] sm:text-[18px]">tv</span>
<span>Smart LED TV with OTT streaming ready</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-cheddar-amber text-[16px] sm:text-[18px]">restaurant</span>
<span>Deluxe Hot Jaipuri Breakfast Included</span>
</div>
</div>
{/* Culinary Perk Box */}
<div className="p-2 sm:p-space-xs rounded-xl bg-secondary-container/20 shadow-[2px_2px_0px_#1F0D03] flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-tomato-crimson text-[20px] sm:text-[24px]">local_cafe</span>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase font-black text-brioche-deep">
                  Perk: Welcome Burger + Thick Shake In-Room Combo 🥤
                </span>
</div>
</div>
{/* Booking Actions */}
<div className="flex flex-col gap-2 pt-2 sm:pt-space-sm mt-auto">
<a className="w-full py-2.5 sm:py-space-xs bg-cheddar-amber hover:bg-cheddar-amber/90 text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black text-center shadow-[4px_4px_0px_#1F0D03] active:translate-x-0.5 active:translate-y-0.5 transition-all" href="#booking-form-section" onClick={() => { selectRoomTier('Executive King Suite (₹2,500)') }}>
                BOOK EXECUTIVE (₹2,500)
              </a>
<a className="w-full py-2 bg-brioche-deep text-parchment-subtle rounded-lg font-label-badge text-[11px] sm:text-[12px] uppercase font-bold text-center hover:bg-primary-container transition-colors flex items-center justify-center gap-1" href="https://wa.me/916376302275?text=Hello,%20I%20want%20to%20reserve%20the%20Executive%20King%20Room%20(₹2500)%20at%20Hotel%20GVR." target="_blank">
<span className="material-symbols-outlined text-[15px] text-cheddar-amber">chat</span> Fast-Track WhatsApp Desk
              </a>
</div>
</div>
</div>
{/* CARD 3: FAMILY SUITE */}
<div className="flex flex-col h-full bg-surface-container-low rounded-2xl overflow-hidden shadow-[6px_6px_0px_#1F0D03] transition-transform hover:-translate-y-1 reveal-on-scroll reveal-pop delay-300">
{/* Image Top with Price Tag */}
<div className="relative h-48 sm:h-60 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Family hotel suite room with large double bed carved wooden settee couch coffee table spacious wardrobe and bright tile flooring in Jaipur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVVnP3zh7YmiYaMnqTtWC0VzrZ3tvw8pXSHgQs-vWe44UaFnE6NfRe6NV9GYyzsngHL6ftWx0ru3VYLMn_vBbjVlfoJ4E7BokftegGR0oPUIWGh2tdiIWZ6nuSBJmf_CsM_HHVZUYdZzvoRFPcn-YtsHpmjAfAEgvGNSRZhyS4lRZXHMJu6w27JPr0M70UeX3rvToBTR665VwoJo69Mo0p4Sj75MIGv59NiYGYxQHT1CioBg8jGZHrg"/>
<div className="absolute top-2.5 left-2.5 bg-lettuce-teal text-on-tertiary px-2 py-0.5 rounded-md font-label-badge text-[10px] sm:text-[11px] font-black uppercase shadow-[2px_2px_0px_#1F0D03]">
              👨‍👩‍👧‍👦 SPACIOUS &amp; LUXE
            </div>
<div className="absolute bottom-2.5 right-2.5 bg-brioche-deep text-parchment-subtle px-3 py-1 rounded-lg font-headline-md text-base sm:text-title-lg font-bold shadow-[3px_3px_0px_#FFB800]">
              ₹3,000 <span className="text-[11px] sm:text-[12px] font-body-md text-outline-variant font-normal">/ night</span>
</div>
</div>
{/* Room Details Body */}
<div className="p-4 sm:p-space-lg flex flex-col flex-1 justify-between gap-3 sm:gap-space-md">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-bold">Family Grand Suite</h3>
<span className="font-label-badge text-[11px] sm:text-[12px] font-bold text-lettuce-teal uppercase flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px] sm:text-[15px]">group</span> Up to 4
                </span>
</div>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
                Generous multi-person suite equipped with double bedding, handcrafted traditional lounge settee, and expansive wardrobe space.
              </p>
{/* Specs list */}
<div className="flex flex-col gap-1.5 sm:gap-space-2xs pt-1 font-body-md text-xs sm:text-[14px]">
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">family_restroom</span>
<span>3–4 Persons Comfort Capacity</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">weekend</span>
<span>King Double Bed + Settee Lounge Couch</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">luggage</span>
<span>Extra Wardrobe &amp; Luggage Trunk Space</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">bakery_dining</span>
<span>Hot Breakfast Platter for the Whole Squad</span>
</div>
<div className="flex items-center gap-2 text-brioche-deep">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">balcony</span>
<span>Pleasant Natural Daylight &amp; Colony Views</span>
</div>
</div>
{/* Culinary Perk Box */}
<div className="p-2 sm:p-space-xs rounded-xl bg-parchment-subtle shadow-[2px_2px_0px_#1F0D03] flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-secondary text-[20px] sm:text-[24px]">lunch_dining</span>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase font-bold text-brioche-deep">
                  Perk: Squad Midnight Munchies Snack Basket Included 🍔
                </span>
</div>
</div>
{/* Booking Actions */}
<div className="flex flex-col gap-2 pt-2 sm:pt-space-sm mt-auto">
<a className="w-full py-2.5 sm:py-space-xs bg-lettuce-teal hover:bg-lettuce-teal/90 text-on-tertiary rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black text-center shadow-[3px_3px_0px_#1F0D03] active:translate-x-0.5 active:translate-y-0.5 transition-all" href="#booking-form-section" onClick={() => { selectRoomTier('Family Grand Suite (₹3,000)') }}>
                BOOK FAMILY (₹3,000)
              </a>
<a className="w-full py-2 bg-surface-container-highest text-brioche-deep rounded-lg font-label-badge text-[11px] sm:text-[12px] uppercase font-bold text-center hover:bg-parchment-subtle transition-colors flex items-center justify-center gap-1" href="https://wa.me/916376302275?text=Hello,%20I%20want%20to%20book%20the%20Family%20Suite%20(₹3000)%20at%20Hotel%20GVR." target="_blank">
<span className="material-symbols-outlined text-[15px] text-lettuce-teal">chat</span> WhatsApp Quick Inquiry
              </a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* High-Contrast Funky Feature Stage: "WHY STAY AT HOTEL GVR?" */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop bg-cheddar-amber relative overflow-hidden">
<div className="max-w-container-max mx-auto flex flex-col gap-6 sm:gap-space-2xl">
{/* Section Header on Gold */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-space-md reveal-on-scroll">
<div className="flex flex-col gap-1 sm:gap-space-2xs max-w-xl">
<span className="inline-flex items-center gap-1 px-3 py-1 bg-brioche-deep text-parchment-subtle rounded-full font-label-badge text-xs uppercase font-black w-fit shadow-[2px_2px_0px_#E63946]">
            THE ANATOMY OF A PERFECT BURGER STAY
          </span>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg-mobile md:text-headline-lg text-brioche-deep font-black tracking-tight">
            WHY STAY AT HOTEL GVR?
          </h2>
<p className="font-body-lg text-xs sm:text-body-lg text-brioche-deep/80 font-medium">
            We broke the mold of boring roadside hotels. Experience intimate boutique hospitality merged with a real 24-hour gourmet kitchen.
          </p>
</div>
<div className="flex items-center gap-space-xs">
<div className="p-3 sm:p-space-sm bg-parchment-subtle rounded-2xl shadow-[4px_4px_0px_#1F0D03] flex items-center gap-3 sm:gap-space-sm">
<span className="material-symbols-outlined text-tomato-crimson text-[28px] sm:text-[36px]">room_service</span>
<div className="flex flex-col">
<span className="font-headline-md text-base sm:text-[20px] text-brioche-deep font-extrabold leading-none">24/7 All Night</span>
<span className="font-label-badge text-[10px] sm:text-[11px] uppercase text-charcoal-muted font-bold">Midnight Room Service</span>
</div>
</div>
</div>
</div>
{/* 4 Stacked Retro Perk Blocks */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-space-lg">
{/* Perk 1 */}
<div className="bg-surface rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md relative group hover:-translate-y-1 transition-transform reveal-on-scroll reveal-pop delay-100">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-tomato-crimson text-on-primary flex items-center justify-center shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-[24px] sm:text-[28px]">lunch_dining</span>
</div>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase text-tomato-crimson font-black tracking-wider">01. CULINARY NIRVANA</span>
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black leading-tight">
              Midnight Smash Directly To Bed
            </h3>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
              Order piping hot double smash patties, loaded cheese fries, and dense Oreo shakes from your bedside intercom until sunrise.
            </p>
</div>
<div className="pt-2 font-label-badge text-[10px] sm:text-[11px] font-extrabold text-brioche-deep uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-tomato-crimson text-[14px] sm:text-[16px]">alarm_on</span> Instant 15-Min Delivery
          </div>
</div>
{/* Perk 2 */}
<div className="bg-surface rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md relative group hover:-translate-y-1 transition-transform reveal-on-scroll reveal-pop delay-200">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lettuce-teal text-on-tertiary flex items-center justify-center shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-[24px] sm:text-[28px]">location_on</span>
</div>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase text-lettuce-teal font-black tracking-wider">02. UNBEATABLE ACCESS</span>
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black leading-tight">
              Prime CBI Phatak Jagatpura Hub
            </h3>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
              Just 3 minutes from Jagatpura Railway Station and 15 mins from Jaipur International Airport. Peaceful, secure, green residential enclave.
            </p>
</div>
<div className="pt-2 font-label-badge text-[10px] sm:text-[11px] font-extrabold text-brioche-deep uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-lettuce-teal text-[14px] sm:text-[16px]">navigation</span> Easy Cab &amp; Auto Access
          </div>
</div>
{/* Perk 3 */}
<div className="bg-surface rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md relative group hover:-translate-y-1 transition-transform reveal-on-scroll reveal-pop delay-300">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cheddar-amber text-brioche-deep flex items-center justify-center shadow-[2px_2px_0px_#1F0D03]">
<span className="material-symbols-outlined text-[24px] sm:text-[28px]">sanitizer</span>
</div>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase text-secondary font-black tracking-wider">03. SPOTLESS HYGIENE</span>
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black leading-tight">
              Pristine Clean &amp; Sanitized
            </h3>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
              Triple-washed pure white bed linen, spotless gleaming bathrooms, high-pressure hot water, and quiet whisper-cool AC in every room.
            </p>
</div>
<div className="pt-2 font-label-badge text-[10px] sm:text-[11px] font-extrabold text-brioche-deep uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[14px] sm:text-[16px]">verified</span> Hospital-Grade Cleanliness
          </div>
</div>
{/* Perk 4 */}
<div className="bg-surface rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md relative group hover:-translate-y-1 transition-transform reveal-on-scroll reveal-pop delay-400">
<div className="flex flex-col gap-2 sm:gap-space-xs">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brioche-deep text-parchment-subtle flex items-center justify-center shadow-[2px_2px_0px_#FFB800]">
<span className="material-symbols-outlined text-[24px] sm:text-[28px]">coffee_maker</span>
</div>
<span className="font-label-badge text-[11px] sm:text-[12px] uppercase text-tomato-crimson font-black tracking-wider">04. WARM HOSPITALITY</span>
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black leading-tight">
              Hot Jaipuri Morning Breakfast
            </h3>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
              Every room tier enjoys a complimentary hot morning breakfast platter, aromatic Masala Chai, or fresh artisanal espresso.
            </p>
</div>
<div className="pt-2 font-label-badge text-[10px] sm:text-[11px] font-extrabold text-brioche-deep uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-cheddar-amber text-[14px] sm:text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> Included with Every Stay
          </div>
</div>
</div>
</div>
</section>
{/* Interactive Room Comparison Matrix & Amenities Table */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop bg-surface">
<div className="max-w-container-max mx-auto flex flex-col gap-6 sm:gap-space-xl">
<div className="flex flex-col items-center text-center gap-1 sm:gap-space-2xs max-w-2xl mx-auto reveal-on-scroll">
<span className="px-3 py-1 rounded-full bg-parchment-subtle text-brioche-deep font-label-badge text-xs uppercase font-black shadow-[2px_2px_0px_#1F0D03]">
          SIDE-BY-SIDE TRANSPARENCY
        </span>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg-mobile md:text-headline-lg text-brioche-deep font-black tracking-tight">
          SUITE COMPARISON MATRIX
        </h2>
<p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant">
          Pick the exact configuration that fits your trip. No hidden costs, no surprise checkout fees.
        </p>
</div>
{/* Responsive Comparison Table Container */}
<div className="w-full overflow-x-auto rounded-2xl shadow-[4px_4px_0px_#1F0D03] bg-surface-container-low reveal-on-scroll reveal-scale">
<table className="w-full text-left border-collapse min-w-[580px]">
<thead>
<tr className="bg-brioche-deep text-parchment-subtle">
<th className="p-3 sm:p-space-md font-headline-md text-sm sm:text-[18px] uppercase tracking-wider font-extrabold w-1/4">Suite Feature</th>
<th className="p-3 sm:p-space-md font-headline-md text-sm sm:text-[18px] uppercase font-bold text-center w-1/4">
                Standard Room<br/>
<span className="text-cheddar-amber font-body-md text-xs sm:text-[14px]">₹2,000 / night</span>
</th>
<th className="p-3 sm:p-space-md font-headline-md text-sm sm:text-[18px] uppercase font-bold text-center w-1/4 bg-secondary-container text-on-secondary-container">
                Executive King<br/>
<span className="text-brioche-deep font-body-md text-xs sm:text-[14px] font-black">₹2,500 / night ★</span>
</th>
<th className="p-3 sm:p-space-md font-headline-md text-sm sm:text-[18px] uppercase font-bold text-center w-1/4">
                Family Grand<br/>
<span className="text-cheddar-amber font-body-md text-xs sm:text-[14px]">₹3,000 / night</span>
</th>
</tr>
</thead>
<tbody className="font-body-md text-xs sm:text-[15px] text-brioche-deep">
{/* Row 1 */}
<tr className="bg-surface-container-lowest">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">group</span> Max Guests
              </td>
<td className="p-2.5 sm:p-space-sm text-center">1–2 Persons</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">1–2 (+ Extra Bed)</td>
<td className="p-2.5 sm:p-space-sm text-center font-bold">3–4 Persons</td>
</tr>
{/* Row 2 */}
<tr className="bg-surface-container-low">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">bed</span> Bed Setup
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Queen Bed</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">King Ortho Bed</td>
<td className="p-2.5 sm:p-space-sm text-center">Double + Settee</td>
</tr>
{/* Row 3 */}
<tr className="bg-surface-container-lowest">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">ac_unit</span> Climate Control
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Whisper Split AC</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">Whisper Split AC</td>
<td className="p-2.5 sm:p-space-sm text-center">Dual Ton Split AC</td>
</tr>
{/* Row 4 */}
<tr className="bg-surface-container-low">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">tv</span> Smart TV
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Standard LED</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">43" 4K Smart TV</td>
<td className="p-2.5 sm:p-space-sm text-center">43" 4K Smart TV</td>
</tr>
{/* Row 5 */}
<tr className="bg-surface-container-lowest">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">free_breakfast</span> Breakfast
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Included (Poha/Paratha)</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">Deluxe Platter + Chai</td>
<td className="p-2.5 sm:p-space-sm text-center">Squad Breakfast Included</td>
</tr>
{/* Row 6 */}
<tr className="bg-surface-container-low">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">lunch_dining</span> Food Voucher
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Free Peri-Peri Fries</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-black text-tomato-crimson">Burger &amp; Shake Combo</td>
<td className="p-2.5 sm:p-space-sm text-center font-bold">Midnight Munchies Basket</td>
</tr>
{/* Row 7 */}
<tr className="bg-surface-container-lowest">
<td className="p-2.5 sm:p-space-sm font-bold flex items-center gap-1.5 sm:gap-space-xs">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">schedule</span> 24/7 Check-in
              </td>
<td className="p-2.5 sm:p-space-sm text-center">Yes</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/10 font-bold">Yes (Priority Desk)</td>
<td className="p-2.5 sm:p-space-sm text-center">Yes</td>
</tr>
{/* Bottom CTA Row */}
<tr className="bg-surface-container">
<td className="p-2.5 sm:p-space-sm font-bold text-charcoal-muted">Select Tier</td>
<td className="p-2.5 sm:p-space-sm text-center">
<a className="inline-block px-3 py-1.5 bg-brioche-deep text-parchment-subtle rounded-lg font-label-badge text-[11px] uppercase font-bold hover:bg-tomato-crimson transition-colors" href="#booking-form-section" onClick={() => { selectRoomTier('Standard Suite (₹2,000)') }}>Select ₹2000</a>
</td>
<td className="p-2.5 sm:p-space-sm text-center bg-secondary-container/20">
<a className="inline-block px-3 py-1.5 bg-cheddar-amber text-brioche-deep rounded-lg font-label-badge text-[11px] uppercase font-black hover:bg-tomato-crimson hover:text-on-primary transition-colors shadow-[2px_2px_0px_#1F0D03]" href="#booking-form-section" onClick={() => { selectRoomTier('Executive King Suite (₹2,500)') }}>Select ₹2500</a>
</td>
<td className="p-2.5 sm:p-space-sm text-center">
<a className="inline-block px-3 py-1.5 bg-brioche-deep text-parchment-subtle rounded-lg font-label-badge text-[11px] uppercase font-bold hover:bg-tomato-crimson transition-colors" href="#booking-form-section" onClick={() => { selectRoomTier('Family Grand Suite (₹3,000)') }}>Select ₹3000</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/* Instant Booking & Express Request Form Section */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop bg-surface-container-high relative" id="booking-form-section">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-space-xl items-start">
{/* Left: Booking Form */}
<div className="lg:col-span-7 bg-surface rounded-2xl p-4 sm:p-space-lg lg:p-space-xl shadow-[6px_6px_0px_#1F0D03] flex flex-col gap-3 sm:gap-space-md reveal-on-scroll reveal-left">
<div className="flex flex-col gap-1 sm:gap-space-2xs">
<span className="inline-flex items-center gap-1 px-3 py-1 bg-tomato-crimson text-on-primary rounded-full font-label-badge text-[10px] sm:text-[11px] font-black uppercase w-fit shadow-[2px_2px_0px_#1F0D03]">
              DIRECT GUEST RESERVATION
            </span>
<h2 className="font-headline-lg text-xl sm:text-headline-md md:text-headline-lg text-brioche-deep font-black tracking-tight">
              RESERVE YOUR STAY NOW
            </h2>
<p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
              Submit below for instant WhatsApp reservation &amp; key handover confirmation directly from our Jagatpura reception desk.
            </p>
</div>
{/* Form Element */}
<form className="flex flex-col gap-3 sm:gap-space-md" id="express-reservation-form" onSubmit={(event) => { handleDirectBooking(event) }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Full Guest Name *
                </label>
<input className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none focus:bg-parchment-subtle" id="guest-name" placeholder="e.g. Vikram Sharma" required="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Phone / WhatsApp Number *
                </label>
<input className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none focus:bg-parchment-subtle" id="guest-phone" placeholder="e.g. +91 6376302275" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Chosen Suite Tier *
                </label>
<select className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none" id="selected-room-tier">
<option value="Executive King Suite (₹2,500)">Executive King Suite (₹2,500 / night)</option>
<option value="Standard Suite (₹2,000)">Standard Suite (₹2,000 / night)</option>
<option value="Family Grand Suite (₹3,000)">Family Grand Suite (₹3,000 / night)</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Estimated Check-In Time
                </label>
<select className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none" id="checkin-time">
<option>Standard Afternoon (12:00 PM – 4:00 PM)</option>
<option>Evening Arrival (4:00 PM – 9:00 PM)</option>
<option>Late Night Transit (9:00 PM – 12:00 AM)</option>
<option>Midnight / Early Hours (12:00 AM – 6:00 AM)</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Check-in Date
                </label>
<input className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none" id="booking-checkin" type="date" defaultValue="2025-05-15"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                  Total Nights
                </label>
<select className="w-full h-11 sm:h-12 px-3 sm:px-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none" id="booking-nights">
<option>1 Night Stay</option>
<option>2 Nights Stay</option>
<option>3 Nights Stay</option>
<option>Extended Stay (4+ Nights)</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-badge text-[11px] sm:text-[12px] uppercase tracking-wider text-brioche-deep font-black">
                Special Requests or Food Order Note (Optional)
              </label>
<textarea className="w-full p-2.5 sm:p-space-sm rounded-xl bg-surface-container-low text-brioche-deep font-body-md font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1F0D03] focus:outline-none" id="special-requests" placeholder="e.g. Please keep Maharaja Smash Burger &amp; Masala Chai ready on arrival, extra pillows..." rows="2"></textarea>
</div>
<div className="pt-1 flex flex-col gap-2">
<button className="w-full h-12 sm:h-14 bg-tomato-crimson hover:bg-tomato-crimson/95 text-on-primary rounded-xl font-label-badge text-xs sm:text-body-lg uppercase font-black tracking-wider shadow-[4px_4px_0px_#1F0D03] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
<span className="material-symbols-outlined text-[20px] sm:text-[24px]">send</span>
<span>CONFIRM &amp; RESERVE MY ROOM NOW ⚡</span>
</button>
<span className="text-center font-body-md text-[11px] sm:text-[12px] text-charcoal-muted">
                🛡️ Pay upon arrival at hotel reception • Free cancellation up to 4 hours before check-in.
              </span>
</div>
</form>
{/* Success Alert Popup Hook */}
<div className="hidden p-3 sm:p-space-md rounded-xl bg-lettuce-teal text-on-tertiary shadow-[4px_4px_0px_#1F0D03] flex items-center gap-2.5" id="booking-success-message">
<span className="material-symbols-outlined text-[24px] sm:text-[28px]">check_circle</span>
<div className="flex flex-col leading-tight">
<span className="font-headline-md text-sm sm:text-[18px] font-bold">Room Reserved Successfully!</span>
<span className="font-body-md text-xs sm:text-[13px]">Our Jagatpura desk is reaching out via WhatsApp with your room PIN and check-in details.</span>
</div>
</div>
</div>
{/* Right: 24/7 Hotline & Essential FAQ */}
<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-space-lg reveal-on-scroll reveal-right delay-200">
{/* Immediate Call Desk Card */}
<div className="bg-cheddar-amber rounded-2xl p-4 sm:p-space-lg shadow-[6px_6px_0px_#1F0D03] flex flex-col gap-2.5 sm:gap-space-sm">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brioche-deep text-cheddar-amber flex items-center justify-center shadow-[2px_2px_0px_#FFFFFF]">
<span className="material-symbols-outlined text-[20px] sm:text-[22px]">phone_in_talk</span>
</div>
<div className="flex flex-col">
<span className="font-label-badge text-[10px] sm:text-[11px] uppercase font-black text-brioche-deep">24/7 JAIPUR FRONT DESK</span>
<span className="font-headline-md text-lg sm:text-[22px] text-brioche-deep font-black tracking-tight leading-tight">Need A Room Right Now?</span>
</div>
</div>
<p className="font-body-md text-xs sm:text-body-md text-brioche-deep/90 font-medium leading-relaxed">
              Stuck at Jaipur Junction or landing late at the airport? Walk-ins and midnight arrivals are accommodated immediately with instant key handover.
            </p>
<div className="flex flex-col gap-2">
<a className="w-full py-2.5 sm:py-space-sm bg-brioche-deep text-parchment-subtle rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black text-center shadow-[3px_3px_0px_#FFFFFF] hover:bg-primary-container transition-colors flex items-center justify-center gap-2" href="tel:+916376302275">
<span className="material-symbols-outlined text-cheddar-amber text-[18px] sm:text-[20px]">call</span>
<span>CALL DIRECT: +91 6376302275</span>
</a>
<a className="w-full py-2 bg-parchment-subtle text-brioche-deep rounded-xl font-label-badge text-xs sm:text-[13px] uppercase font-bold text-center hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[2px_2px_0px_#1F0D03]" href="tel:+917014639336">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">call</span>
<span>ALT DESK: +91 7014639336</span>
</a>
</div>
<div className="flex items-center justify-between pt-1 font-label-badge text-[10px] sm:text-[11px] uppercase font-bold text-brioche-deep">
<span>✓ Instant Key Handover</span>
<span>✓ Safe Parking Outside</span>
</div>
</div>
{/* Stay FAQs Card */}
<div className="bg-parchment-subtle rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col gap-2.5 sm:gap-space-md">
<h3 className="font-title-lg text-base sm:text-title-lg text-brioche-deep font-black flex items-center gap-2">
<span className="material-symbols-outlined text-tomato-crimson text-[20px] sm:text-[22px]">help</span>
<span>Essential Stay Info</span>
</h3>
<div className="flex flex-col gap-2 sm:gap-space-sm font-body-md text-xs sm:text-[14px]">
{/* Item 1 */}
<div className="flex flex-col gap-0.5 p-2 sm:p-space-xs rounded-xl bg-surface shadow-[2px_2px_0px_#1F0D03]">
<span className="font-headline-md text-xs sm:text-[15px] font-bold text-brioche-deep">Check-in &amp; Check-out times?</span>
<span className="text-charcoal-muted leading-relaxed">Check-in is 12:00 PM, checkout at 11:00 AM. Flexible 24/7 midnight check-ins are accommodated on prior call.</span>
</div>
{/* Item 2 */}
<div className="flex flex-col gap-0.5 p-2 sm:p-space-xs rounded-xl bg-surface shadow-[2px_2px_0px_#1F0D03]">
<span className="font-headline-md text-xs sm:text-[15px] font-bold text-brioche-deep">What ID is required?</span>
<span className="text-charcoal-muted leading-relaxed">Valid Government photo ID (Aadhaar Card, Passport, or Driving License) for all adult guests.</span>
</div>
{/* Item 3 */}
<div className="flex flex-col gap-0.5 p-2 sm:p-space-xs rounded-xl bg-surface shadow-[2px_2px_0px_#1F0D03]">
<span className="font-headline-md text-xs sm:text-[15px] font-bold text-brioche-deep">Can we order food late at night?</span>
<span className="text-charcoal-muted leading-relaxed">Yes! Burger Signature's diner kitchen downstairs operates 24 hours a day with direct in-room delivery.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Local Jaipur Social Proof (Google Verified Reviews) */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop bg-surface">
<div className="max-w-container-max mx-auto flex flex-col gap-6 sm:gap-space-2xl">
{/* Section Header with Google Star Stamp */}
<div className="flex flex-wrap items-center justify-between gap-3 sm:gap-space-md reveal-on-scroll">
<div className="flex flex-col gap-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1 bg-parchment-subtle text-brioche-deep rounded-full font-label-badge text-xs uppercase font-extrabold shadow-[2px_2px_0px_#1F0D03] w-fit">
<span className="material-symbols-outlined text-tomato-crimson text-[14px] sm:text-[16px]">verified</span> GOOGLE VERIFIED STAY REVIEWS
          </span>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg-mobile md:text-headline-lg text-brioche-deep font-black tracking-tight">
            WORDS FROM OUR GUESTS
          </h2>
</div>
{/* Rating Pill Cluster */}
<div className="flex items-center gap-2.5 p-2.5 sm:p-space-sm rounded-2xl bg-surface-container-low shadow-[3px_3px_0px_#1F0D03]">
<div className="flex items-center gap-0.5 text-cheddar-amber">
<span className="material-symbols-outlined text-[20px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-lg sm:text-[22px] font-black text-brioche-deep leading-none">4.8 / 5.0</span>
<span className="font-body-md text-[11px] sm:text-[12px] text-charcoal-muted">500+ Reviews</span>
</div>
</div>
</div>
{/* 3 Testimonial Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-space-lg">
{/* Review 1 */}
<div className="bg-parchment-subtle rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md reveal-on-scroll reveal-pop delay-100">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-cheddar-amber">
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-badge text-[10px] sm:text-[11px] uppercase font-bold text-charcoal-muted">Stayed March 2025</span>
</div>
<p className="font-headline-md text-xs sm:text-[17px] text-brioche-deep font-semibold italic leading-relaxed">
              "Stayed at Hotel GVR upstairs after road-tripping into Jaipur past midnight. Ordered the signature Maharaja burger straight to the room at 2:30 AM! Clean, super comfortable bed, and sensational food."
            </p>
</div>
<div className="flex items-center gap-2 pt-2 border-t border-parchment-border">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cheddar-amber text-brioche-deep flex items-center justify-center font-black shadow-[2px_2px_0px_#1F0D03] text-xs">
              RK
            </div>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-xs sm:text-[14px] font-black text-brioche-deep">Raja Kotwal</span>
<span className="font-body-md text-[10px] sm:text-[12px] text-charcoal-muted">Local Guide • Jagatpura</span>
</div>
</div>
</div>
{/* Review 2 */}
<div className="bg-parchment-subtle rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md reveal-on-scroll reveal-pop delay-200">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-cheddar-amber">
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-badge text-[10px] sm:text-[11px] uppercase font-bold text-charcoal-muted">Stayed April 2025</span>
</div>
<p className="font-headline-md text-xs sm:text-[17px] text-brioche-deep font-semibold italic leading-relaxed">
              "The AC rooms are so quiet and spotless, and having the burger joint downstairs makes it the most unique hangout spot near CBI Phatak. Their peri-peri fries are unbeatable!"
            </p>
</div>
<div className="flex items-center gap-2 pt-2 border-t border-parchment-border">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tomato-crimson text-on-primary flex items-center justify-center font-black shadow-[2px_2px_0px_#1F0D03] text-xs">
              PM
            </div>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-xs sm:text-[14px] font-black text-brioche-deep">Praveen Meena</span>
<span className="font-body-md text-[10px] sm:text-[12px] text-charcoal-muted">Jaipur Food Blogger</span>
</div>
</div>
</div>
{/* Review 3 */}
<div className="bg-parchment-subtle rounded-2xl p-4 sm:p-space-lg shadow-[4px_4px_0px_#1F0D03] flex flex-col justify-between gap-3 sm:gap-space-md reveal-on-scroll reveal-pop delay-300">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-cheddar-amber">
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-badge text-[10px] sm:text-[11px] uppercase font-bold text-charcoal-muted">Stayed May 2025</span>
</div>
<p className="font-headline-md text-xs sm:text-[17px] text-brioche-deep font-semibold italic leading-relaxed">
              "Total value for money at ₹2000! Super friendly staff, zero hassle with luggage, fast Wi-Fi for remote work, and steaming hot poha and paratha breakfast in the morning."
            </p>
</div>
<div className="flex items-center gap-2 pt-2 border-t border-parchment-border">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-lettuce-teal text-on-tertiary flex items-center justify-center font-black shadow-[2px_2px_0px_#1F0D03] text-xs">
              CK
            </div>
<div className="flex flex-col leading-none">
<span className="font-label-badge text-xs sm:text-[14px] font-black text-brioche-deep">Chandrakesh</span>
<span className="font-body-md text-[10px] sm:text-[12px] text-charcoal-muted">Verified Hotel Guest</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Location, Landmarks & Google Maps Route Box */}
<section className="w-full py-10 sm:py-space-3xl px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low">
<div className="max-w-container-max mx-auto bg-surface rounded-2xl sm:rounded-3xl p-4 sm:p-space-lg lg:p-space-2xl shadow-[6px_6px_0px_#1F0D03]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-space-xl items-center">
{/* Left Location Copy */}
<div className="lg:col-span-6 flex flex-col gap-3 sm:gap-space-md reveal-on-scroll reveal-left">
<span className="px-3 py-1 rounded-full bg-tomato-crimson text-on-primary font-label-badge text-xs uppercase font-black shadow-[2px_2px_0px_#1F0D03] w-fit">
            📍 PRIME JAGATPURA LOCATION
          </span>
<h2 className="font-headline-lg text-xl sm:text-headline-md md:text-headline-lg text-brioche-deep font-black tracking-tight leading-tight">
            EASY TO FIND, HARD TO LEAVE
          </h2>
<p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant leading-relaxed">
            Located right near CBI Phatak in the peaceful Aravali Hills Colony sector of Jagatpura, just minutes from the airport and train hubs.
          </p>
{/* Address specs */}
<div className="flex flex-col gap-2 p-3 sm:p-space-md rounded-2xl bg-parchment-subtle shadow-[2px_2px_0px_#1F0D03]">
<div className="flex items-start gap-2 text-brioche-deep font-bold font-body-md text-xs sm:text-sm leading-relaxed">
<span className="material-symbols-outlined text-tomato-crimson text-[20px] mt-0.5">home_pin</span>
<span>77 A/2, Aravali Hills Colony, Near CBI Phatak, Jagatpura, Jaipur, Rajasthan – 302017</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-body-md text-xs text-charcoal-muted">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-cheddar-amber text-[16px]">train</span>
<span>3 mins from Jagatpura Railway Station</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-cheddar-amber text-[16px]">flight</span>
<span>15 mins from Jaipur Int'l Airport</span>
</div>
</div>
</div>
{/* Directions CTAs */}
<div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-space-sm">
<a className="col-span-2 sm:col-span-1 px-4 py-2.5 sm:px-space-md sm:py-space-sm bg-cheddar-amber text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-black shadow-[3px_3px_0px_#1F0D03] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center justify-center gap-1.5 text-center" href="https://maps.google.com/?q=Burger+Signature+Jagatpura+Jaipur" target="_blank">
<span className="material-symbols-outlined text-[18px] sm:text-[20px]">directions</span>
<span>MAPS NAVIGATION</span>
</a>
<a className="px-3 py-2 sm:px-space-md sm:py-space-sm bg-surface-container-highest text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-bold shadow-[2px_2px_0px_#1F0D03] hover:bg-parchment-subtle transition-colors flex items-center justify-center gap-1.5 text-center" href="tel:+916376302275">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">call</span>
<span>6376302275</span>
</a>
<a className="px-3 py-2 sm:px-space-md sm:py-space-sm bg-surface-container-highest text-brioche-deep rounded-xl font-label-badge text-xs sm:text-body-md uppercase font-bold shadow-[2px_2px_0px_#1F0D03] hover:bg-parchment-subtle transition-colors flex items-center justify-center gap-1.5 text-center" href="tel:+917014639336">
<span className="material-symbols-outlined text-tomato-crimson text-[16px] sm:text-[18px]">call</span>
<span>7014639336</span>
</a>
</div>
</div>
{/* Right Location Map Frame */}
<div className="lg:col-span-6 relative reveal-on-scroll reveal-right delay-200">
<div className="relative rounded-2xl overflow-hidden shadow-[4px_4px_0px_#1F0D03]">
<div className="w-full h-56 sm:h-80 bg-cover bg-center rounded-2xl" data-location="Jagatpura, Jaipur, Rajasthan" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNaNcFJUtt-KesJUqzdq0MOut_12YJsXPZZaBNcNfCLYTxbRnijREY0tJ7icRW7fh2IAOfaWwikQNQJYbkHJ1JGYZC_uSSkUSEJYTcWXp8M4MYgGAKIDvYLYEmFP0f_QNmccAvc83T9msVqzPiNBc3DaKM22-Gzw5gITP_E5DrnQIoCNogykTfb7i2JT9Vvs9FoHZA5bBN6HCQcfExPVCW9pCpuZPbnN0w2bjJI5SFeJzr7V0e0frGog')" }}></div>
<div className="absolute bottom-2.5 left-2.5 bg-brioche-deep text-parchment-subtle px-3 py-1 rounded-xl font-label-badge text-[11px] sm:text-[12px] font-bold uppercase shadow-[2px_2px_0px_#FFB800] flex items-center gap-1">
<span className="material-symbols-outlined text-cheddar-amber text-[14px] sm:text-[16px]">pin_drop</span>
<span>CBI Phatak • Jagatpura Jaipur</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Script for Smooth Interaction & Tier Auto-selection */}

</div></main><footer className="w-full bg-primary-container text-parchment-subtle reveal-on-scroll"><div className="max-w-container-max mx-auto px-3.5 sm:px-gutter-mobile lg:px-gutter-desktop py-10 sm:py-space-3xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-space-xl pb-6 sm:pb-space-2xl"><div className="flex flex-col gap-2 sm:gap-space-sm"><div className="flex items-center gap-2"><div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cheddar-amber flex items-center justify-center"><span className="material-symbols-outlined text-brioche-deep text-[22px] sm:text-[24px]">hotel</span></div><span className="font-headline-lg text-lg sm:text-title-lg text-parchment-subtle leading-tight font-extrabold">Hotel GVR</span></div><p className="font-body-md text-xs sm:text-body-md text-outline-variant leading-relaxed">Boutique AC Stay &amp; Gourmet Smash Burgers in Jagatpura. Combining traditional Rajasthani warmth with nocturnal American diner indulgence.</p><div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-badge text-[11px] sm:text-[12px] uppercase font-bold w-fit"><span className="material-symbols-outlined text-[14px] sm:text-[15px]">local_fire_department</span><span>24/7 Midnight Feast Open</span></div></div><div className="flex flex-col gap-2 sm:gap-space-sm"><h4 className="font-label-badge text-xs sm:text-label-badge uppercase tracking-wider text-cheddar-amber">Location &amp; Landmark</h4><p className="font-body-md text-xs sm:text-body-md text-parchment-subtle">77 A/2, Aravali Hills Colony, Near CBI Phatak, Jagatpura, Jaipur, Rajasthan – 302017</p><p className="font-body-md text-xs sm:text-body-md text-outline-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-cheddar-amber">train</span>3 mins from Jagatpura Railway Station</p><p className="font-body-md text-xs sm:text-body-md text-outline-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-cheddar-amber">flight</span>15 mins from Jaipur International Airport</p></div><div className="flex flex-col gap-2 sm:gap-space-sm"><h4 className="font-label-badge text-xs sm:text-label-badge uppercase tracking-wider text-cheddar-amber">24-Hour Hotlines</h4><div className="flex flex-col gap-1.5"><a className="font-body-lg text-xs sm:text-body-lg text-parchment-subtle hover:text-cheddar-amber transition-colors flex items-center gap-1.5" href="tel:+916376302275"><span className="material-symbols-outlined text-[16px] text-tomato-crimson">call</span>+91 6376302275 (Desk &amp; Rooms)</a><a className="font-body-lg text-xs sm:text-body-lg text-parchment-subtle hover:text-cheddar-amber transition-colors flex items-center gap-1.5" href="tel:+917014639336"><span className="material-symbols-outlined text-[16px] text-tomato-crimson">call</span>+91 7014639336 (24/7 Hotline)</a><span className="font-body-md text-outline-variant text-[11px] sm:text-[13px]">Instant Midnight Room Check-in Available</span></div><div className="pt-1"><a className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lettuce-teal text-on-tertiary rounded-lg font-label-badge text-xs uppercase font-bold transition-transform hover:scale-105" data-path="directions-location" href="https://maps.google.com/?q=Burger+Signature+Jagatpura+Jaipur" target="_blank"><span className="material-symbols-outlined text-[16px]">pin_drop</span><span>Get Google Maps Route</span></a></div></div><div className="flex flex-col gap-2 sm:gap-space-sm"><h4 className="font-label-badge text-xs sm:text-label-badge uppercase tracking-wider text-cheddar-amber">Explore Spaces</h4><div className="flex flex-col gap-1 text-xs sm:text-body-md"><a className="text-outline-variant hover:text-parchment-subtle transition-colors" data-path="boutique-suites" href="/hotel">Hotel GVR Suites</a><a className="text-outline-variant hover:text-parchment-subtle transition-colors" data-path="home-cafe" href="/">Artisanal Smash Burger Menu</a><a className="text-outline-variant hover:text-parchment-subtle transition-colors" data-path="feast-stay-perks" href="#">Complimentary Breakfast &amp; Fries</a><a className="text-outline-variant hover:text-parchment-subtle transition-colors" data-path="reviews" href="#reviews">Guest &amp; Diner Reviews (4.8★)</a></div></div></div><div className="pt-4 sm:pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-3 font-body-md text-[11px] sm:text-[13px] text-outline-variant text-center sm:text-left"><p>© 2025 Hotel GVR &amp; Burger Signature (होटल GVR • बर्गर सिगनेचर). All rights reserved.</p><div className="flex items-center gap-3"><span className="text-parchment-subtle font-bold">CBI Phatak • Jagatpura • Jaipur</span><span className="w-1.5 h-1.5 rounded-full bg-tomato-crimson"></span><span>Open 24 Hours / 365 Days</span></div></div></div></footer>
    </div>
  );
};

export default Hotel;
