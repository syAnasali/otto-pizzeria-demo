const fs = require('fs');

function replaceHeaderWithComponent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the import block and add import Header
  if (!content.includes('import Header from')) {
    content = content.replace("import React, { useEffect } from 'react';", "import React, { useEffect } from 'react';\nimport Header from '../components/Header';");
  }

  // Find the entire <header>...</header> and replace it with <Header />
  const headerRegex = /<header className="sticky top-4 z-50[^>]*>[\s\S]*?<\/header>/i;
  content = content.replace(headerRegex, '<Header />');

  // On Hotel.jsx it might have the older header class if it was different, but I had already replaced it to be identical to Home.jsx. Let's just run the regex.
  const headerRegexHotel = /<header className="fixed top-0 left-0 right-0[^>]*>[\s\S]*?<\/header>/i;
  content = content.replace(headerRegexHotel, '<Header />');

  fs.writeFileSync(filePath, content);
}

replaceHeaderWithComponent('src/pages/Home.jsx');
replaceHeaderWithComponent('src/pages/Hotel.jsx');

console.log('Replaced inline headers with Header component');
