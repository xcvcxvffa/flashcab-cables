const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

// The exact strings to replace
const replacements = [
  {
    target: '<table class="dark-spec-table w-full min-w-[800px]">',
    newStr: '<table class="premium-spec-table w-full min-w-[800px]">'
  }
];

let replaced = false;
for (const rep of replacements) {
  if (content.includes(rep.target)) {
    content = content.replace(rep.target, rep.newStr);
    replaced = true;
  }
}

if (replaced) {
  fs.writeFileSync(productDataPath, content);
  console.log("Successfully reverted to premium-spec-table.");
} else {
  console.log("Could not find targets");
}

const cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
const darkTableStart = cssContent.indexOf('/* ===== Dark Spec Table Styles (Earthing Cables) ===== */');
if (darkTableStart !== -1) {
  cssContent = cssContent.substring(0, darkTableStart);
  fs.writeFileSync(cssPath, cssContent);
  console.log("Successfully removed dark-spec-table from CSS.");
}
