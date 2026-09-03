const fs = require('fs');
const hotelPath = 'src/pages/Hotel.jsx';
let hotelContent = fs.readFileSync(hotelPath, 'utf8');

const targetStr = '<div className="bg-tomato-crimson text-on-primary py-space-2xs px-gutter-mobile overflow-hidden"><div className="flex items-center justify-between max-w-container-max mx-auto text-center"><div className="w-full flex items-center justify-center gap-space-xs font-label-badge text-label-badge uppercase tracking-wider"><span className="material-symbols-outlined text-[16px] text-cheddar-amber">emergency</span><span>LIVE: 24/7 MIDNIGHT CHECK-IN &amp; ROOM SERVICE • NEAR CBI FATAK, JAGATPURA, JAIPUR • FREE CRISPY PERI-PERI FRIES WITH EVERY ROOM ORDER! • CALL: 099828 44485</span></div></div></div>';

hotelContent = hotelContent.replace(targetStr, '');

fs.writeFileSync(hotelPath, hotelContent);
console.log('Removed red banner');
