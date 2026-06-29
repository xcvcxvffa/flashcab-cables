const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

// The exact strings to replace
const replacements = [
  {
    target: '<th rowspan="2">No. of wire / Size of Wire</th>',
    newStr: '<th rowspan="2">No. of wire / Size<br/>of Wire</th>'
  },
  {
    target: '<th rowspan="2">Insulation Thickness (Nominal)</th>',
    newStr: '<th rowspan="2">Insulation<br/>Thickness<br/>(Nominal)</th>'
  },
  {
    target: '<th rowspan="2">Max Conductor Resistance at 20°C</th>',
    newStr: '<th rowspan="2">Max Conductor Resistance<br/>at 20°C</th>'
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
  console.log("Successfully added line breaks to headers!");
} else {
  console.log("Could not find targets");
}
