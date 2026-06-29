const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

const oldConstruction = `      construction: {
        'Phase conductor': '<ul class="list-disc pl-5"><li>Stranded Circular or compacted aluminium Class-2 conductor to IS 8130</li><li>XLPE (Cross linked polyethylene) Insulation</li></ul>',
        'Messenger conductor': '<ul class="list-disc pl-5"><li>Stranded circular or compacted heat-treated aluminium-magnesium alloy wire to IS 398 (part 4)</li></ul>',
        'Streetlight conductor': '<ul class="list-disc pl-5"><li>Stranded aluminium conductor Class-2 to IS 8130</li><li>XLPE (Cross linked polyethylene) Insulation</li></ul>'
      },`;

const newConstruction = `      construction: {
        'Phase conductor': '<div class="flex flex-col gap-1"><span>Stranded compacted aluminium conductor to IS 8130 Class 2</span><span>Insulated with in-housed developed compounded XLPE (Cross linked polyethylene)</span></div>',
        'Messenger conductor': '<div class="flex flex-col gap-1"><span>Stranded circular or compacted heat-treated aluminium-magnesium alloy wire to IS 398 (part 4)</span><span>Insulated with in-housed developed compounded XLPE (if required)</span></div>',
        'Streetlight conductor': '<div class="flex flex-col gap-1"><span>Stranded aluminium conductor to IS 8130, class 2</span><span>Insulated with in-housed developed compounded XLPE</span></div>'
      },`;

content = content.replace(oldConstruction, newConstruction);

fs.writeFileSync('src/data/productData.js', content);
console.log("Updated construction to match image 2 text and image 1 layout");
