const fs = require('fs');
const path = 'src/pages/Products.jsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /className="overflow-x-auto spec-html-container">\s*<div dangerouslySetInnerHTML={{ __html: displayProduct.applicationHtml }} \/>/;

if (content.match(regex)) {
  content = content.replace(regex, `className="p-6 md:p-8">\n              <div dangerouslySetInnerHTML={{ __html: displayProduct.applicationHtml }} />`);
  fs.writeFileSync(path, content);
  console.log("Updated Products.jsx padding for Application block");
} else {
  console.log("Could not match regex");
}
