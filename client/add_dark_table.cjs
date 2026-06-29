const fs = require('fs');

const cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const darkTableCSS = `
/* ===== Dark Spec Table Styles (Earthing Cables) ===== */
.dark-spec-table {
  width: 100%;
  border-collapse: collapse !important;
  text-align: center;
  border: 1px solid #444 !important;
  margin-top: 0 !important;
  background-color: #1e1e1e;
}
.dark-spec-table thead th {
  background-color: #a3a3a3;
  color: #000000;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 1.4;
  padding: 10px 6px;
  border: 1px solid #555 !important;
  text-align: center;
}
.dark-spec-table thead tr.sub-header-row th {
  font-size: 12.5px;
  font-weight: 600;
}
.dark-spec-table tbody tr:nth-child(even) {
  background-color: #2a2a2a;
}
.dark-spec-table tbody tr:nth-child(odd) {
  background-color: #1e1e1e;
}
.dark-spec-table tbody tr:hover {
  background-color: #333333;
}
.dark-spec-table tbody td {
  padding: 8px 6px;
  font-size: 13.5px;
  color: #e5e5e5;
  border: 1px solid #444 !important;
  text-align: center;
  font-weight: 500;
}
`;

if (!cssContent.includes('.dark-spec-table')) {
  fs.writeFileSync(cssPath, cssContent + '\n' + darkTableCSS);
  console.log("Added dark-spec-table to index.css");
}

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

// Replace premium-spec-table with dark-spec-table for earthing cables
const earthingIndex = content.indexOf("name: 'Earthing Cables'");
if (earthingIndex !== -1) {
  const tableIndex = content.indexOf('premium-spec-table', earthingIndex);
  if (tableIndex !== -1) {
    content = content.substring(0, tableIndex) + 'dark-spec-table' + content.substring(tableIndex + 'premium-spec-table'.length);
    fs.writeFileSync(productDataPath, content);
    console.log("Updated productData.js to use dark-spec-table for Earthing Cables");
  }
}
