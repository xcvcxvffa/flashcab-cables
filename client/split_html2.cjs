const fs = require('fs');

const path = 'src/data/productData.js';
let content = fs.readFileSync(path, 'utf8');

const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  const specHtmlStart = content.indexOf("specificationHtml: '", mvccIndex) + "specificationHtml: '".length;
  if (specHtmlStart > mvccIndex) {
    const specHtmlEnd = content.indexOf("'", specHtmlStart);
    let fullHtml = content.substring(specHtmlStart, specHtmlEnd);
    
    const tablesStart = fullHtml.indexOf('<!-- Tables Section -->');
    if (tablesStart !== -1) {
      let applicationHtml = fullHtml.substring(0, tablesStart);
      
      applicationHtml = applicationHtml.replace('<p class="font-semibold text-gray-700 mb-4 text-[20px]">Application of MVCC</p>', '');
      applicationHtml = applicationHtml.replace('<!-- Applications Section -->', '');
      
      let tablesHtml = fullHtml.substring(tablesStart);
      
      const beforeHtml = content.substring(0, specHtmlStart - "specificationHtml: '".length);
      const afterHtml = content.substring(specHtmlEnd + 1); 
      
      const newBlock = "applicationHtml: '" + applicationHtml + "',\n      specificationHtml: '" + tablesHtml + "'";
      
      content = beforeHtml + newBlock + afterHtml;
      fs.writeFileSync(path, content);
      console.log("Successfully split HTML in productData.js");
    }
  }
}
