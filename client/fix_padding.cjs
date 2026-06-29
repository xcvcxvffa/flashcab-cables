const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const regex = /<p class="app-cards-intro">Medium voltage-covered conductors are used in a variety of electrical power distribution system scenarios\. The following are a few typical uses:<\/p>/;
if (content.match(regex)) {
  content = content.replace(regex, '');
  fs.writeFileSync(productDataPath, content);
  console.log("Removed intro paragraph");
} else {
  console.log("Could not find intro paragraph");
}

const cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
const oldPadding = /\/\* padding: 16px 24px 32px 24px; \*\//;
if (cssContent.match(oldPadding)) {
  // Let's add nice symmetric padding that looks perfect on all screens
  cssContent = cssContent.replace(oldPadding, 'padding: 24px 28px 32px 28px;');
  fs.writeFileSync(cssPath, cssContent);
  console.log("Updated padding in CSS");
}

