const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const regex1 = /<th rowspan="2">Wire Size<\/th>/;
const regex2 = /<th rowspan="2">No\. of wire \/ Size<br\/>of Wire<\/th>/;
const regex3 = /<th rowspan="2">Insulation<br\/>Thickness<br\/>\(Nominal\)<\/th>/;
const regex4 = /<th rowspan="2">OD<\/th>/;
const regex5 = /<th rowspan="2">Max Conductor Resistance<br\/>at 20°C<\/th>/;
const regex6 = /<th rowspan="2">Current Rating<\/th>/;

content = content.replace(regex1, '<th>Wire Size</th>');
content = content.replace(regex2, '<th>No. of wire / Size<br/>of Wire</th>');
content = content.replace(regex3, '<th>Insulation<br/>Thickness<br/>(Nominal)</th>');
content = content.replace(regex4, '<th>OD</th>');
content = content.replace(regex5, '<th>Max Conductor Resistance<br/>at 20°C</th>');
content = content.replace(regex6, '<th>Current Rating</th>');

fs.writeFileSync(productDataPath, content);
console.log("Successfully removed rowspan=2 from table headers.");
