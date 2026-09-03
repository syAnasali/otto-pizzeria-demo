const fs = require('fs');

function fixLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the Burger Signature Logo link
  content = content.replace(
    '<a aria-label="Burger Signature Home" className="flex items-center gap-3 group" href="#">',
    '<a aria-label="Burger Signature Home" className="flex items-center gap-3 group" href="/">'
  );

  // Fix the "Home" text link
  content = content.replace(
    '<a className="text-burnt-orange font-chunky text-sm sm:text-base flex flex-col items-center gap-1 group" href="#">',
    '<a className="text-burnt-orange font-chunky text-sm sm:text-base flex flex-col items-center gap-1 group" href="/">'
  );

  fs.writeFileSync(filePath, content);
}

fixLinks('src/pages/Home.jsx');
fixLinks('src/pages/Hotel.jsx');

console.log('Fixed home navigation links');
