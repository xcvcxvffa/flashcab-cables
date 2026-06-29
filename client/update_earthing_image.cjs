const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const earthingIndex = content.indexOf("id: 'earthing-cables',");
if (earthingIndex !== -1) {
  const targetStr = "image: '/assets/images/Product_Image/earthing-cable.png',";
  const newStr = `image: '/assets/images/Product_Image/EARTHING WIRE.png',
    image2: '/assets/images/Product_Image/EARTHING WIRE VRTICAL.png',
    imgList: [
      { img: '/assets/images/Product_Image/EARTHING WIRE.png' },
      { img: '/assets/images/Product_Image/EARTHING WIRE VRTICAL.png' }
    ],`;
  
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync(productDataPath, content);
    console.log("Successfully updated Earthing Cables images.");
  } else {
    console.log("Target image string not found in productData.js");
  }
} else {
  console.log("Earthing cables ID not found.");
}
