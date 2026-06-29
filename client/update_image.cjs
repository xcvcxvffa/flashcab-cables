const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

// The exact strings to replace
const targetStr = "image: '/assets/images/Product_Image/mvcc.png',";
const newStr = "image: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png',";

const targetStr2 = "image2: '/assets/images/Product_Image/mvcc.png',";
const newStr2 = "image2: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png',";

const targetStr3 = "{ img: '/assets/images/Product_Image/mvcc.png' }";
const newStr3 = "{ img: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png' }";


let replaced = false;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  replaced = true;
}
if (content.includes(targetStr2)) {
  content = content.replace(targetStr2, newStr2);
  replaced = true;
}
if (content.includes(targetStr3)) {
  content = content.replace(targetStr3, newStr3);
  replaced = true;
}

if (replaced) {
  fs.writeFileSync(productDataPath, content);
  console.log("Successfully updated image paths.");
} else {
  console.log("Could not find targets");
}
