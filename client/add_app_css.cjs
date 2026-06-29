const fs = require('fs');
const cssPath = 'src/index.css';

let cssContent = fs.readFileSync(cssPath, 'utf8');

const newCSS = `
/* ===== MVCC Application Cards Styles ===== */
.app-cards-container {
  padding: 16px 24px 32px 24px;
}

.app-cards-intro {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.app-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media (min-width: 768px) {
  .app-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .app-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.app-card {
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px -3px rgba(0,0,0,0.02);
  transition: all 0.3s ease;
}

.app-card:hover {
  box-shadow: 0 10px 25px -5px rgba(31, 111, 95, 0.1);
  transform: translateY(-2px);
  border-color: #e2e8f0;
}

.app-card-title {
  color: #1f6f5f;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
}

.app-card-desc {
  color: #64748b;
  font-size: 13.5px;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 8px;
}
.app-card-desc:last-child {
  margin-bottom: 0;
}
`;

if (!cssContent.includes('.app-cards-container')) {
  fs.writeFileSync(cssPath, cssContent + newCSS);
  console.log("Added CSS classes to index.css");
} else {
  console.log("CSS already added");
}
