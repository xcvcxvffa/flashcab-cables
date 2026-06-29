const fs = require('fs');

const path = 'src/data/productData.js';
let content = fs.readFileSync(path, 'utf8');

const splitKey = "<!-- Tables Section -->";

// Find MVCC block
const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  const specKey = "specificationHtml: '";
  const specStart = content.indexOf(specKey, mvccIndex);
  
  if (specStart !== -1) {
    const htmlStart = specStart + specKey.length;
    // Find the end by looking for the last single quote before the closing brace
    const blockEnd = content.indexOf("\n    }\n  }", htmlStart);
    const htmlEnd = content.lastIndexOf("'", blockEnd);
    
    let htmlStr = content.substring(htmlStart, htmlEnd);
    
    const splitIndex = htmlStr.indexOf(splitKey);
    if (splitIndex !== -1) {
      let appHtml = htmlStr.substring(0, splitIndex);
      let tablesHtml = htmlStr.substring(splitIndex);
      
      appHtml = appHtml.replace('<p class="font-semibold text-gray-700 mb-4 text-[20px]">Application of MVCC</p>', '');
      appHtml = appHtml.replace('<!-- Applications Section -->', '');
      
      const newProps = "applicationHtml: '" + appHtml + "',\n      specificationHtml: '" + tablesHtml + "'";
      
      content = content.substring(0, specStart) + newProps + content.substring(htmlEnd + 1);
      
      fs.writeFileSync(path, content);
      console.log("Successfully split HTML");
    } else {
      console.log("Could not find splitKey in htmlStr of length " + htmlStr.length);
      console.log(htmlStr.substring(0, 100));
    }
  }
}
