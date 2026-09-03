const fs = require('fs');

const homePath = 'src/pages/Home.jsx';
let homeContent = fs.readFileSync(homePath, 'utf8');

// Remove TopAnnouncementTicker in Home.jsx
homeContent = homeContent.replace(/<aside[^>]*data-purpose="announcement-banner"[\s\S]*?<\/aside>/i, '');
// Update link to boutique stay
homeContent = homeContent.replace(/href="#boutique-stay"/g, 'href="/hotel"');

fs.writeFileSync(homePath, homeContent);

const hotelPath = 'src/pages/Hotel.jsx';
let hotelContent = fs.readFileSync(hotelPath, 'utf8');

// Update links in Hotel.jsx
hotelContent = hotelContent.replace(/data-path="home-cafe"\s*href="#"/g, 'data-path="home-cafe" href="/"');
hotelContent = hotelContent.replace(/data-path="boutique-suites"\s*href="#"/g, 'data-path="boutique-suites" href="/hotel"');

fs.writeFileSync(hotelPath, hotelContent);

console.log("Updated links and removed ticker");
