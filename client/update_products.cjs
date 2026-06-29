const fs = require('fs');

const path = 'src/pages/Products.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add applicationHtml to mapStaticProduct
const mapStaticProductRegex = /specificationHtml: tableHtml \|\| prod\.specs\?\.specificationHtml \|\| '',/;
if (content.match(mapStaticProductRegex)) {
  content = content.replace(mapStaticProductRegex, `applicationHtml: prod.specs?.applicationHtml || '',\n    specificationHtml: tableHtml || prod.specs?.specificationHtml || '',`);
}

// 2. Add the applicationHtml render block right before the Dynamic Table Grid
const dynamicTableGridRegex = /\{\/\* Dynamic Table Grid \*\/\}/;
if (content.match(dynamicTableGridRegex)) {
  const applicationHtmlBlock = `        {/* Detailed Application HTML */}
        {displayProduct.applicationHtml && (
          <div className="detail-section-card spec-table mt-12 overflow-x-auto">
            <div className="table-heading-container">
              <span className="table-heading-bar"></span>
              <h3 className="table-heading-text">Application of MVCC</h3>
            </div>
            <div className="overflow-x-auto spec-html-container">
              <div dangerouslySetInnerHTML={{ __html: displayProduct.applicationHtml }} />
            </div>
          </div>
        )}

        {/* Dynamic Table Grid */}`;
  content = content.replace(dynamicTableGridRegex, applicationHtmlBlock);
}

fs.writeFileSync(path, content);
console.log("Updated Products.jsx");
