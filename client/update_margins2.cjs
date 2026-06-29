const fs = require('fs');
let content = fs.readFileSync('src/data/productData.js', 'utf8');

// The HTML contains these exactly:
// <h4 class="flex items-center gap-2 mt-8 mb-4 font-bold text-[#1e3a8a] text-lg">
// <h4 class="flex items-center gap-2 mt-10 mb-4 font-bold text-[#1e3a8a] text-lg">
// <h4 class="flex items-center gap-2 mt-10 mb-2 font-bold text-[#1e3a8a] text-lg">

// Let's replace 'mt-10' with 'mt-16' and add a big margin 'mt-20' to the Electrical characteristics one.

content = content.replace(
  'mt-10 mb-4 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Phase Conductor + Messenger (Bare) + Street Light',
  'mt-16 mb-4 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Phase Conductor + Messenger (Bare) + Street Light'
);

content = content.replace(
  'mt-10 mb-2 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Electrical characteristics',
  'mt-20 mb-2 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Electrical characteristics'
);

content = content.replace(
  'mt-10 mb-4 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      De-Rating Factor',
  'mt-16 mb-4 font-bold text-[#1e3a8a] text-lg"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      De-Rating Factor'
);

// We should also replace it globally if the exact string matching fails due to minification
content = content.replace(/mt-10/g, 'mt-20');

fs.writeFileSync('src/data/productData.js', content);
console.log("Updated margins to mt-20 in productData.js");
