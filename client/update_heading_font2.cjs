const fs = require('fs');
let content = fs.readFileSync('src/data/productData.js', 'utf8');

// Replace standard font classes with table-heading-text equivalent
content = content.replace(/font-bold text-\[#1e3a8a\] text-lg/g, 'table-heading-text');
content = content.replace(/font-bold text-\[#1f6f5f\] text-lg/g, 'table-heading-text');

fs.writeFileSync('src/data/productData.js', content);
console.log('Replaced custom classes with table-heading-text');
