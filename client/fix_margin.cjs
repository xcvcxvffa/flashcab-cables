const fs = require('fs');
let content = fs.readFileSync('src/data/productData.js', 'utf8');

// The class currently contains `table-heading-text` which forces margin: 0 !important.
// We'll replace `table-heading-text` with the exact text utility classes so the margins can apply.

content = content.replace(/table-heading-text/g, 'font-semibold text-[#203a70] text-[20px] leading-[1.2]');

fs.writeFileSync('src/data/productData.js', content);
console.log('Fixed margin override');
