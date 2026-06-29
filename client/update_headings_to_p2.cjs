const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

const replacements = [
  [
    '<h4 class="flex items-center gap-2 mt-8 mb-4 font-semibold text-[#203a70] text-[20px] leading-[1.2]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Phase Conductor + Messenger (Bare)    </h4>',
    '<p class="font-semibold text-gray-700 mb-4 mt-6">Phase Conductor + Messenger (Bare)</p>'
  ],
  [
    '<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-[#203a70] text-[20px] leading-[1.2]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Phase Conductor + Messenger (Bare) + Street Light    </h4>',
    '<p class="font-semibold text-gray-700 mb-4 mt-6">Phase Conductor + Messenger (Bare) + Street Light</p>'
  ],
  [
    '<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-[#203a70] text-[20px] leading-[1.2]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Current carrying capacity and maximum DC conductor resistance.    </h4>',
    '<p class="font-semibold text-gray-700 mb-4 mt-6">Current carrying capacity and maximum DC conductor resistance.</p>'
  ],
  [
    '<h4 class="flex items-center gap-2 mt-20 mb-4 font-semibold text-[#203a70] text-[20px] leading-[1.2]">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      De-Rating Factor    </h4>',
    '<p class="font-semibold text-gray-700 mb-4 mt-6">De-Rating Factor</p>'
  ]
];

for (let [oldStr, newStr] of replacements) {
  content = content.replace(oldStr, newStr);
}

fs.writeFileSync('src/data/productData.js', content);
console.log('Done literal replacement');
