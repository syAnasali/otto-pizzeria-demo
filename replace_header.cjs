const fs = require('fs');

const homePath = 'src/pages/Home.jsx';
const hotelPath = 'src/pages/Hotel.jsx';

const homeContent = fs.readFileSync(homePath, 'utf8');
let hotelContent = fs.readFileSync(hotelPath, 'utf8');

// Extract the header from Home.jsx
// It starts with <header className="sticky top-4 z-50 and ends with </header>
const headerRegex = /<header className="sticky top-4 z-50[^>]*>[\s\S]*?<\/header>/i;
const homeHeaderMatch = homeContent.match(headerRegex);

if (homeHeaderMatch) {
  const homeHeader = homeHeaderMatch[0];
  
  // Replace the header in Hotel.jsx
  // It starts with <header className="fixed top-0 left-0 right-0 and ends with </header>
  const hotelHeaderRegex = /<header className="fixed top-0 left-0 right-0[^>]*>[\s\S]*?<\/header>/i;
  hotelContent = hotelContent.replace(hotelHeaderRegex, homeHeader);
  
  fs.writeFileSync(hotelPath, hotelContent);
  console.log('Successfully copied Home.jsx header to Hotel.jsx');
} else {
  console.error('Could not find header in Home.jsx');
}
