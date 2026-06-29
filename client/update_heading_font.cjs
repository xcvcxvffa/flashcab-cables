const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

// The current headings are:
// <h4 class="flex items-center gap-2 mt-8 mb-4 font-bold text-[#1f6f5f] text-lg">
// <h4 class="flex items-center gap-2 mt-20 mb-4 font-bold text-[#1f6f5f] text-lg">

// We want to replace `font-bold text-[#1f6f5f] text-lg` with `font-semibold text-[#203a70] text-[20px] leading-[1.2]`
// to exactly match the native table-heading-text style

content = content.replace(/font-bold text-\\[#1f6f5f\\] text-lg/g, 'font-semibold text-[#203a70] text-[20px] leading-[1.2]');

fs.writeFileSync('src/data/productData.js', content);
console.log('Updated font and colors for headings');
