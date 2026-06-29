const fs = require('fs');

let html = `
  <!-- Table 1 -->
  <div>
    <h4 class="flex items-center gap-2 mt-8 mb-4 font-bold text-[#1e3a8a] text-lg">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      Phase Conductor + Messenger (Bare)
    </h4>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full min-w-[1000px]">
        <thead>
          <tr>
            <th>Construction<br/>n x mm²</th>
            <th>Insulation<br/>thickness<br/>mm</th>
            <th>Phase conductor<br/>Overall diameter<br/>mm</th>
            <th>messenger<br/>Overall diameter<br/>mm</th>
            <th>Weight<br/>(Approx.)</th>
            <th>Minimum<br/>Breaking load<br/>of messenger</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">1 x16 +1 x 25</td><td>1.20</td><td>7.53</td><td>6.45</td><td class="mono-cell">139</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">3 x16 +1 x 25</td><td>1.20</td><td>7.53</td><td>6.45</td><td class="mono-cell">278</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">1 x25 +1 x 25</td><td>1.20</td><td>8.85</td><td>6.45</td><td class="mono-cell">170</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">3 x25 +1 x 25</td><td>1.20</td><td>8.85</td><td>6.45</td><td class="mono-cell">371</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">1 x35 +1 x 25</td><td>1.20</td><td>10.00</td><td>6.45</td><td class="mono-cell">202</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">3 x35 +1 x 25</td><td>1.20</td><td>10.00</td><td>6.45</td><td class="mono-cell">466</td><td class="highlight-cell">7</td></tr>
          <tr><td class="primary-cell">1 x50 +1 x 35</td><td>1.50</td><td>12.05</td><td>7.60</td><td class="mono-cell">286</td><td class="highlight-cell">9.8</td></tr>
          <tr><td class="primary-cell">3 x50 +1 x 35</td><td>1.50</td><td>12.05</td><td>7.60</td><td class="mono-cell">667</td><td class="highlight-cell">9.8</td></tr>
          <tr><td class="primary-cell">1 x70 +1 x 50</td><td>1.50</td><td>13.73</td><td>9.05</td><td class="mono-cell">391</td><td class="highlight-cell">14</td></tr>
          <tr><td class="primary-cell">3 x70 +1 x 50</td><td>1.50</td><td>13.73</td><td>9.05</td><td class="mono-cell">899</td><td class="highlight-cell">14</td></tr>
          <tr><td class="primary-cell">1 x95 +1 x 70</td><td>1.50</td><td>15.52</td><td>10.77</td><td class="mono-cell">526</td><td class="highlight-cell">19.7</td></tr>
          <tr><td class="primary-cell">3 x95 +1 x 70</td><td>1.50</td><td>15.52</td><td>10.77</td><td class="mono-cell">1191</td><td class="highlight-cell">19.7</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 2 -->
  <div>
    <h4 class="flex items-center gap-2 mt-10 mb-4 font-bold text-[#1e3a8a] text-lg">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      Phase Conductor + Messenger (Bare) + Street Light
    </h4>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full min-w-[1000px]">
        <thead>
          <tr>
            <th rowspan="2">Construction<br/>n x mm²</th>
            <th colspan="2">Insulation<br/>thickness<br/>mm</th>
            <th rowspan="2">Phase conductor<br/>Overall diameter<br/>mm</th>
            <th rowspan="2">messenger<br/>Overall diameter<br/>mm</th>
            <th rowspan="2">Street<br/>light<br/>Overall diameter<br/>mm</th>
            <th rowspan="2">Weight<br/>(Approx.)</th>
            <th rowspan="2">Minimum<br/>Breaking load<br/>of messenger</th>
          </tr>
          <tr class="sub-header-row">
            <th>Phase<br/>mm</th>
            <th>Street<br/>light</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">3 x16 +1 x 25+1 x 16</td><td>1.2</td><td>1.2</td><td>7.5</td><td>6.5</td><td>7.5</td><td class="mono-cell">7.0</td><td class="highlight-cell">7.0</td></tr>
          <tr><td class="primary-cell">3 x25 +1 x 25+1 x 16</td><td>1.2</td><td>1.2</td><td>8.9</td><td>6.5</td><td>7.5</td><td class="mono-cell">7.0</td><td class="highlight-cell">7.0</td></tr>
          <tr><td class="primary-cell">3 x35 +1 x 25+1 x 16</td><td>1.2</td><td>1.2</td><td>10.0</td><td>6.5</td><td>7.5</td><td class="mono-cell">7.0</td><td class="highlight-cell">7.0</td></tr>
          <tr><td class="primary-cell">3 x50 +1 x 35+1 x 16</td><td>1.5</td><td>1.2</td><td>12.0</td><td>7.6</td><td>7.5</td><td class="mono-cell">9.8</td><td class="highlight-cell">9.8</td></tr>
          <tr><td class="primary-cell">3 x70 +1 x 50+1 x 16</td><td>1.5</td><td>1.2</td><td>13.7</td><td>9.0</td><td>7.5</td><td class="mono-cell">14.0</td><td class="highlight-cell">14.0</td></tr>
          <tr><td class="primary-cell">3 x95 +1 x 70+1 x 16</td><td>1.5</td><td>1.2</td><td>15.5</td><td>10.8</td><td>7.5</td><td class="mono-cell">19.7</td><td class="highlight-cell">19.7</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 3 -->
  <div>
    <h4 class="flex items-center gap-2 mt-10 mb-2 font-bold text-[#1e3a8a] text-lg">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      Electrical characteristics
    </h4>
    <h5 class="ml-4 mb-4 font-medium text-gray-600">Current carrying capacity and maximum DC conductor resistance.</h5>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full min-w-[1000px]">
        <thead>
          <tr>
            <th rowspan="2">Nominal cross sectional<br/>area<br/>mm²</th>
            <th colspan="2">Maximum DC conductor resistance at<br/>20°C</th>
            <th rowspan="2">Reactance<br/>Ω/km</th>
            <th rowspan="2">Current carrying<br/>capacity in Air @ 40°C<br/>Amp.</th>
          </tr>
          <tr class="sub-header-row">
            <th>Phase<br/>Ω/km</th>
            <th>Messenger<br/>Ω/km</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">16</td><td>1.91</td><td>1.38</td><td class="mono-cell">0.0834</td><td class="highlight-cell">72</td></tr>
          <tr><td class="primary-cell">25</td><td>1.2</td><td>1.38</td><td class="mono-cell">0.0791</td><td class="highlight-cell">98</td></tr>
          <tr><td class="primary-cell">35</td><td>0.868</td><td>1.38</td><td class="mono-cell">0.0765</td><td class="highlight-cell">119</td></tr>
          <tr><td class="primary-cell">50</td><td>0.641</td><td>0.986</td><td class="mono-cell">0.0772</td><td class="highlight-cell">145</td></tr>
          <tr><td class="primary-cell">70</td><td>0.443</td><td>0.689</td><td class="mono-cell">0.0748</td><td class="highlight-cell">185</td></tr>
          <tr><td class="primary-cell">95</td><td>0.32</td><td>0.492</td><td class="mono-cell">0.0728</td><td class="highlight-cell">235</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 4 -->
  <div>
    <h4 class="flex items-center gap-2 mt-10 mb-4 font-bold text-[#1e3a8a] text-lg">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      De-Rating Factor
    </h4>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full min-w-[1000px]">
        <thead>
          <tr>
            <th>Air-Temperature</th>
            <th>25°C</th>
            <th>30°C</th>
            <th>35°C</th>
            <th>40°C</th>
            <th>45°C</th>
            <th>50°C</th>
            <th>55°C</th>
            <th>60°C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="primary-cell" style="font-weight:bold; color:white; background-color:#1e3a8a;">De-rating factor</td>
            <td>1.14</td>
            <td>1.1</td>
            <td>1.05</td>
            <td>1</td>
            <td>0.95</td>
            <td class="mono-cell">0.89</td>
            <td>0.84</td>
            <td class="highlight-cell">0.77</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

html = html.replace(/\n/g, '').replace(/'/g, "\\'");

let content = fs.readFileSync('src/data/productData.js', 'utf8');

const newBlock = `    specs: {
      cableStandard: 'IS 14255:1995',
      construction: {
        'Phase conductor': '<ul class="list-disc pl-5"><li>Stranded Circular or compacted aluminium Class-2 conductor to IS 8130</li><li>XLPE (Cross linked polyethylene) Insulation</li></ul>',
        'Messenger conductor': '<ul class="list-disc pl-5"><li>Stranded circular or compacted heat-treated aluminium-magnesium alloy wire to IS 398 (part 4)</li></ul>',
        'Streetlight conductor': '<ul class="list-disc pl-5"><li>Stranded aluminium conductor Class-2 to IS 8130</li><li>XLPE (Cross linked polyethylene) Insulation</li></ul>'
      },
      salientFeatures: [
        'Stranded Compact Aluminium Conductor',
        'High-density Polyethylene (HDPE) or XLPE Insulation',
        'Messenger Wire of Aluminium Alloy',
        'Anti-theft and highly safe overhead system'
      ],
      technicalData: {
        'Conductor Material': 'Stranded Aluminium (Class 2)',
        'Insulation': 'XLPE / Weather Resistant HDPE',
        'Messenger Wire': 'Standard Aluminium Alloy',
        'Voltage Grade': 'Up to 1100 V',
        'Temperature Range': '-15°C to +90°C',
        'Application': 'Overhead distribution power transmission'
      },
      coreColour: 'Black (UV Resistant Insulation) with Ribs.',
      application: 'Aerial Bunched Cables (ABC) are designed for safe and reliable overhead power distribution. Their insulated bundled construction minimizes power theft, short circuits, and environmental damage while ensuring reduced maintenance and enhanced operational safety. Ideal for urban, rural, and residential electrification projects.',
      specificationHtml: '${html}'
    }
  },`;

const lines = content.split(/\r?\n/);
let startIndex = -1;
let endIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("id: 'ariel-bunched-cables'")) {
    for (let j = i; j < lines.length; j++) {
      if (lines[j].includes('    specs: {')) {
        startIndex = j;
        break;
      }
    }
    for (let j = startIndex; j < lines.length; j++) {
      if (lines[j].trim() === '},' && lines[j+1] && lines[j+1].trim() === '{') {
        endIndex = j;
        break;
      }
    }
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  lines.splice(startIndex, endIndex - startIndex + 1, newBlock);
  fs.writeFileSync('src/data/productData.js', lines.join('\n'));
  console.log("Successfully rebuilt LT AB HTML tables exactly like native theme!");
} else {
  console.log("Could not find boundaries! startIndex:", startIndex, "endIndex:", endIndex);
}
