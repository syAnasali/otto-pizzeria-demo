const fs = require('fs');
const hotelPath = 'src/pages/Hotel.jsx';
let hotelContent = fs.readFileSync(hotelPath, 'utf8');

// The section to remove starts with <section className="w-full bg-cheddar-amber text-brioche-deep
// and ends with </section>
const regex = /<section className="w-full bg-cheddar-amber[^>]*>[\s\S]*?<\/section>/i;
hotelContent = hotelContent.replace(regex, '');

fs.writeFileSync(hotelPath, hotelContent);
console.log('Removed orange banner from Hotel.jsx');
