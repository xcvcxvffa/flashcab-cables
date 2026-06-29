const fs = require('fs');
let content = fs.readFileSync('src/data/productData.js', 'utf8');

// Replace the <h5> with the new <h4> with the blue dot
const oldH5 = '<h5 class="ml-4 mb-4 font-medium text-gray-600">Current carrying capacity and maximum DC conductor resistance.</h5>';
const newH4 = '<h4 class="flex items-center gap-2 mt-20 mb-4 font-bold text-[#1f6f5f] text-lg">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Current carrying capacity and maximum DC conductor resistance.    </h4>';

content = content.replace(oldH5, newH4);

// Replace all #1e3a8a with #1f6f5f (the theme green color)
content = content.replace(/#1e3a8a/g, '#1f6f5f');

fs.writeFileSync('src/data/productData.js', content);
console.log("Updated heading and colors");
