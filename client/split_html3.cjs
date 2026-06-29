const fs = require('fs');

const path = 'src/data/productData.js';
let content = fs.readFileSync(path, 'utf8');

const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  const specKey = "specificationHtml: '";
  const specStart = content.indexOf(specKey, mvccIndex);
  if (specStart !== -1) {
    const htmlStart = specStart + specKey.length;
    const htmlEnd = content.indexOf("'", htmlStart);
    const htmlStr = content.substring(htmlStart, htmlEnd);
    
    // Split by <!-- Tables Section -->
    const splitKey = "<!-- Tables Section -->";
    const tablesIndex = htmlStr.indexOf(splitKey);
    
    if (tablesIndex !== -1) {
      let appHtml = htmlStr.substring(0, tablesIndex);
      let tablesHtml = htmlStr.substring(tablesIndex);
      
      // Remove the paragraph title
      appHtml = appHtml.replace('<p class="font-semibold text-gray-700 mb-4 text-[20px]">Application of MVCC</p>', '');
      appHtml = appHtml.replace('<!-- Applications Section -->', '');
      
      const replacement = "applicationHtml: '" + appHtml + "',\n      specificationHtml: '" + tablesHtml + "'";
      
      content = content.substring(0, specStart) + replacement + content.substring(htmlEnd + 1);
      fs.writeFileSync(path, content);
      console.log("SUCCESS");
    } else {
      console.log("Could not find splitKey");
    }
  }
}
