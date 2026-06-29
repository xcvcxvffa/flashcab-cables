const fs = require('fs');

const path = 'src/data/productData.js';
let content = fs.readFileSync(path, 'utf8');

const targetStr = "specificationHtml: ' <!-- Applications Section -->";
if (content.includes(targetStr)) {
  // Replace the property name
  content = content.replace(targetStr, "applicationHtml: '");
  
  // Also remove the "Application of MVCC" title paragraph since it'll have a box heading
  content = content.replace('<p class="font-semibold text-gray-700 mb-4 text-[20px]">Application of MVCC</p> ', '');
  
  // Replace the split point
  content = content.replace('<!-- Tables Section -->', "',\n      specificationHtml: '");
  
  fs.writeFileSync(path, content);
  console.log("Successfully replaced string perfectly");
} else {
  console.log("Could not find exact string to replace");
}
