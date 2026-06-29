const fs = require('fs');

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  // We need to replace the image block.
  // Currently it looks like:
  /*
    image: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png',
    image2: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png',
    imgList: [
      { img: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png' }
    ],
  */
  
  const endImgList = content.indexOf('],', mvccIndex) + 2;
  const oldBlock = content.substring(mvccIndex, endImgList);
  
  const newBlock = `name: 'Medium Voltage Covered Conductor (MVCC)',
    image: '/assets/images/Product_Image/MVCC.png',
    image2: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png',
    imgList: [
      { img: '/assets/images/Product_Image/MVCC.png' },
      { img: '/assets/images/Product_Image/Medium Voltage Covered Conductor (MVCC).png' }
    ],`;

  if (oldBlock.includes('image:')) {
    content = content.replace(oldBlock, newBlock);
    fs.writeFileSync(productDataPath, content);
    console.log("Successfully updated MVCC images for listings vs details.");
  } else {
    console.log("Failed to find image block to replace.");
  }
} else {
  console.log("Failed to find MVCC product.");
}
