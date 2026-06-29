const fs = require('fs');
let content = fs.readFileSync('src/data/productData.js', 'utf8');

// We need to use exact string match because regex with HTML can be tricky due to line breaks or parsing
// But in productData.js, the string is on one line.
content = content.replace('<h4 class="flex items-center gap-2 mt-20 mb-2 font-bold text-[#1e3a8a] text-lg">      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>      Electrical characteristics    </h4>', '');

fs.writeFileSync('src/data/productData.js', content);
console.log("Removed Electrical characteristics heading");
