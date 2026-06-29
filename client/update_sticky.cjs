const fs = require('fs');

const cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace the top value
const targetStr = `
@media (min-width: 1024px) {
  .cable-detail-sidebar {
    width: 310px;
    position: sticky;
    top: 120px;
    max-height: calc(100vh - 140px);`;

const newStr = `
@media (min-width: 1024px) {
  .cable-detail-sidebar {
    width: 310px;
    position: sticky;
    top: 30px;
    max-height: calc(100vh - 60px);`;

const targetStrAlt = `    position: sticky;
    top: 120px;
    max-height: calc(100vh - 140px);`;

const newStrAlt = `    position: sticky;
    top: 30px;
    max-height: calc(100vh - 60px);`;

if (cssContent.includes(targetStr)) {
  cssContent = cssContent.replace(targetStr, newStr);
  fs.writeFileSync(cssPath, cssContent);
  console.log("Successfully updated sticky top value.");
} else if (cssContent.includes(targetStrAlt)) {
  cssContent = cssContent.replace(targetStrAlt, newStrAlt);
  fs.writeFileSync(cssPath, cssContent);
  console.log("Successfully updated sticky top value (alt).");
} else {
  console.log("Could not find the target string.");
}
