const fs = require('fs');
const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const targetStr = '<div class="app-cards-container"> <div class="app-cards-grid">';
const newStr = '<div class="app-cards-container"> <p class="app-cards-intro">In some applications, medium voltage-covered conductor cables are superior to bare conductors due to several benefits. Here are a few main benefits:</p> <div class="app-cards-grid">';

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync(productDataPath, content);
  console.log("Successfully added the new intro text!");
} else {
  // Try another variation if whitespace is different
  const altTargetStr = '<div class="app-cards-container"><div class="app-cards-grid">';
  const altNewStr = '<div class="app-cards-container"><p class="app-cards-intro">In some applications, medium voltage-covered conductor cables are superior to bare conductors due to several benefits. Here are a few main benefits:</p><div class="app-cards-grid">';
  if (content.includes(altTargetStr)) {
    content = content.replace(altTargetStr, altNewStr);
    fs.writeFileSync(productDataPath, content);
    console.log("Successfully added the new intro text! (alt)");
  } else {
    // Just inject right after <div class="app-cards-container">
    const thirdTarget = '<div class="app-cards-container">';
    if (content.includes(thirdTarget)) {
      content = content.replace(thirdTarget, thirdTarget + ' <p class="app-cards-intro">In some applications, medium voltage-covered conductor cables are superior to bare conductors due to several benefits. Here are a few main benefits:</p> ');
      fs.writeFileSync(productDataPath, content);
      console.log("Successfully added the new intro text! (third try)");
    } else {
      console.log("Could not find insertion point.");
    }
  }
}
