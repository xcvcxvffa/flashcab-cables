const fs = require('fs');

const path = 'src/data/productData.js';
let content = fs.readFileSync(path, 'utf8');

// Find MVCC specifically
const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  // Extract specificationHtml
  const specHtmlStart = content.indexOf("specificationHtml: '", mvccIndex) + "specificationHtml: '".length;
  if (specHtmlStart > mvccIndex) {
    const specHtmlEnd = content.indexOf("'", specHtmlStart);
    let fullHtml = content.substring(specHtmlStart, specHtmlEnd);
    
    // Split the HTML
    // applicationHtml: <div class="mt-8 mb-8"> ... </div> (until <!-- Tables Section -->)
    const tablesStart = fullHtml.indexOf('<!-- Tables Section -->');
    if (tablesStart !== -1) {
      let applicationHtml = fullHtml.substring(0, tablesStart);
      
      // Remove the "Application of MVCC" paragraph heading from the HTML because Products.jsx will add it
      applicationHtml = applicationHtml.replace('<p class="font-semibold text-gray-700 mb-4 text-[20px]">Application of MVCC</p>', '');
      applicationHtml = applicationHtml.replace('<!-- Applications Section -->', '');
      
      let tablesHtml = fullHtml.substring(tablesStart);
      
      // We will replace the entire specificationHtml string with applicationHtml and specificationHtml
      const beforeHtml = content.substring(0, specHtmlStart - "specificationHtml: '".length);
      const afterHtml = content.substring(specHtmlEnd + 1); // +1 to skip the closing quote
      
      const newBlock = \`applicationHtml: '\${applicationHtml}',\n      specificationHtml: '\${tablesHtml}'\`;
      
      content = beforeHtml + newBlock + afterHtml;
      fs.writeFileSync(path, content);
      console.log("Successfully split HTML in productData.js");
    } else {
      console.log("Could not find <!-- Tables Section -->");
    }
  } else {
    console.log("Could not find specificationHtml");
  }
} else {
  console.log("Could not find MVCC");
}
