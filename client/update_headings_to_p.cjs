const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

// The headings look like:
// <h4 class="flex items-center gap-2 mt-8 mb-4 font-semibold text-[#203a70] text-[20px] leading-[1.2]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Phase Conductor + Messenger (Bare)    </h4>
// We will replace all of them with:
// <p class="font-semibold text-gray-700 mb-4 mt-6">HEADING TEXT</p>
// except for the first one which has just `mb-4`. Let's just use `mb-4 mt-6` for all except we'll manually fix the first one if we need to.

content = content.replace(/<h4 class="flex items-center gap-2 mt-8 mb-4 font-semibold text-\\[#203a70\\] text-\\[20px\\] leading-\\[1.2\\]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"><\/span>      (Phase Conductor \+ Messenger \(Bare\))    <\/h4>/g, 
  '<p class="font-semibold text-gray-700 mb-4">$1</p>');

content = content.replace(/<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-\\[#203a70\\] text-\\[20px\\] leading-\\[1.2\\]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"><\/span>      (Phase Conductor \+ Messenger \(Bare\) \+ Street Light)    <\/h4>/g, 
  '<p class="font-semibold text-gray-700 mb-4 mt-6">$1</p>');

content = content.replace(/<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-\\[#203a70\\] text-\\[20px\\] leading-\\[1.2\\]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"><\/span>      (Current carrying capacity and maximum DC conductor resistance\.)    <\/h4>/g, 
  '<p class="font-semibold text-gray-700 mb-4 mt-6">$1</p>');

content = content.replace(/<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-\\[#203a70\\] text-\\[20px\\] leading-\\[1.2\\]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"><\/span>      (De-Rating Factor)    <\/h4>/g, 
  '<p class="font-semibold text-gray-700 mb-4 mt-6">$1</p>');


fs.writeFileSync('src/data/productData.js', content);
console.log('Replaced h4 with p tags as in live site');
