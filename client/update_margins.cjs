const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

// The user wants more padding/margin above the headings for the later tables.
// The headings currently have \`mt-10\` in tables 2, 3, 4. I will replace them with \`mt-20\` (or \`mt-16\`).

content = content.replace(
  /<h4 class="flex items-center gap-2 mt-10 mb-4 font-bold text-\\[#1e3a8a\\] text-lg">/g,
  '<h4 class="flex items-center gap-2 mt-20 mb-4 font-bold text-[#1e3a8a] text-lg">'
);

content = content.replace(
  /<h4 class="flex items-center gap-2 mt-10 mb-2 font-bold text-\\[#1e3a8a\\] text-lg">/g,
  '<h4 class="flex items-center gap-2 mt-20 mb-4 font-bold text-[#1e3a8a] text-lg">'
);

fs.writeFileSync('src/data/productData.js', content);
console.log("Updated margins in productData.js");
