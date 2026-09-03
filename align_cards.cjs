const fs = require('fs');
const filePath = 'src/pages/Hotel.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Add h-full to the 3 card containers
content = content.replace(/className="flex flex-col bg-surface-container-low/g, 'className="flex flex-col h-full bg-surface-container-low');
content = content.replace(/className="flex flex-col bg-parchment-subtle/g, 'className="flex flex-col h-full bg-parchment-subtle');

// Add mt-auto to the booking actions container
content = content.replace(/className="flex flex-col gap-space-2xs pt-space-sm"/g, 'className="flex flex-col gap-space-2xs pt-space-sm mt-auto"');

fs.writeFileSync(filePath, content);
console.log('Fixed button alignment');
