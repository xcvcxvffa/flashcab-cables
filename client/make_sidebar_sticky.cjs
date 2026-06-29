const fs = require('fs');

const cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const targetStr = `
@media (min-width: 1024px) {
  .cable-detail-sidebar {
    width: 310px;
    /* Standardize sidebar width with nice visual space */
  }
}`;

const targetStrAlt = `@media (min-width: 1024px) {
  .cable-detail-sidebar {
    width: 310px;
    /* Standardize sidebar width with nice visual space */
  }
}`;

const newStr = `
@media (min-width: 1024px) {
  .cable-detail-sidebar {
    width: 310px;
    position: sticky;
    top: 120px;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    /* Hide scrollbar for cleaner look */
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
  }
  .cable-detail-sidebar::-webkit-scrollbar {
    width: 6px;
  }
  .cable-detail-sidebar::-webkit-scrollbar-track {
    background: transparent;
  }
  .cable-detail-sidebar::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 10px;
  }
}`;

if (cssContent.includes(targetStr)) {
  cssContent = cssContent.replace(targetStr, newStr);
  fs.writeFileSync(cssPath, cssContent);
  console.log("Successfully added sticky positioning to sidebar.");
} else if (cssContent.includes(targetStrAlt)) {
  cssContent = cssContent.replace(targetStrAlt, newStr.trimStart());
  fs.writeFileSync(cssPath, cssContent);
  console.log("Successfully added sticky positioning to sidebar (alt).");
} else {
  console.log("Could not find the target string.");
  // Let's just search for it manually
  const sidebarIndex = cssContent.indexOf('.cable-detail-sidebar {', cssContent.indexOf('@media (min-width: 1024px)'));
  if (sidebarIndex !== -1) {
      const braceIndex = cssContent.indexOf('}', sidebarIndex);
      const before = cssContent.substring(0, braceIndex);
      const after = cssContent.substring(braceIndex);
      cssContent = before + `    position: sticky;
    top: 120px;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
` + after;
      fs.writeFileSync(cssPath, cssContent);
      console.log("Successfully added sticky positioning using fallback.");
  }
}
