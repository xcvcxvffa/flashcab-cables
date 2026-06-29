const fs = require('fs');

let html = `
  <!-- Applications Section -->
  <div class="mt-8 mb-8">
    <p class="font-semibold text-gray-700 mb-4 text-lg">Application of MVCC</p>
    <p class="text-gray-600 mb-6">Medium voltage-covered conductors are used in a variety of electrical power distribution system scenarios. The following are a few typical uses:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Overhead Power Distribution Lines:</h4>
          <p class="text-gray-600 text-[14px]">Medium-voltage electricity is delivered from substations to residential, commercial, and industrial areas via overhead power distribution lines, which frequently use covered conductors.</p>
          <p class="text-gray-600 text-[14px] mt-2">By shielding the conductors from the elements, the insulation lowers the possibility of electrical failures brought on by exposure to pollutants, moisture, or other impurities.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Urban and Suburban Areas:</h4>
          <p class="text-gray-600 text-[14px]">Covered conductors can be used to increase the visual impact of power lines and reduce the possibility of unintentional contact with live parts in urban and suburban settings where aesthetics and safety are valued.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> High Environmental Stress Areas:</h4>
          <p class="text-gray-600 text-[14px]">Over an extended period, bare conductor performance may deteriorate in environments with elevated pollution, moisture, or corrosive elements. The power distribution system's longevity is increased by covered conductors, which offer an extra degree of defense against these types of environmental stresses.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Areas with Vegetation:</h4>
          <p class="text-gray-600 text-[14px]">In places with a lot of vegetation, where there is a greater chance of branches or trees coming into contact with power lines, covered conductors are appropriate. The insulation lessens the possibility of faults and outages caused by vegetation</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Coastal and Harsh Environments:</h4>
          <p class="text-gray-600 text-[14px]">Covered conductors offer an extra layer of defense against corrosion and environmental damage in coastal areas and other harsh environmental regions where exposure to salt, humidity, and extreme weather is a concern.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> High-Altitude Installations:</h4>
          <p class="text-gray-600 text-[14px]">Given their greater exposure to inclement weather, covered conductors may be recommended in mountainous or high-altitude areas. The insulation aids in shielding the conductors from environmental hazards like snow and ice.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Industrial Facilities:</h4>
          <p class="text-gray-600 text-[14px]">Industrial facilities may use medium voltage-covered conductors to distribute power from the main substation to different areas of the building. Harsh operating conditions and the presence of industrial chemicals are two things that the insulation helps shield against</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Renewable Energy Projects:</h4>
          <p class="text-gray-600 text-[14px]">Covered conductors can be used for medium voltage interconnection within the power generation facility and for connecting the facility to the larger electrical grid in renewable energy projects, such as solar or wind farms.</p>
        </div>
        
        <div>
          <h4 class="text-[#203a70] font-bold text-[16px] mb-2 flex items-center gap-2"><span class="text-blue-600 text-xl leading-none">◆</span> Railway Electrification:</h4>
          <p class="text-gray-600 text-[14px]">In electrified railway systems, where trains are powered by medium voltage, covered conductors may be used. Insulation improves safety by reducing electrical interference.</p>
        </div>
      </div>
      
      <!-- Right Side Images if they want (Leaving empty or basic for now, or just not putting images since we don't have the assets) -->
    </div>
  </div>

  <!-- Tables Section -->
  <!-- Table 1 -->
  <div>
    <p class="font-semibold text-gray-700 mb-4 mt-6">Cross Section & Construction Details</p>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full">
        <thead>
          <tr>
            <th>Cross Section (Sq mm)</th>
            <th>Construction</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">50</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">55</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">70</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">80</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">90</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">100</td><td>7 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">120</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">125</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">148</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">159</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">160</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">232</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
          <tr><td class="primary-cell">241</td><td>19 Strands</td><td>AAAC / AL-7 / AL -59</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 2 -->
  <div>
    <p class="font-semibold text-gray-700 mb-4 mt-8">Cross Section & Construction (AL-59 ACS)</p>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full">
        <thead>
          <tr>
            <th rowspan="2">Cross Section (Sq mm)</th>
            <th colspan="2">Construction</th>
            <th rowspan="2">Type</th>
          </tr>
          <tr class="sub-header-row">
            <th>ACS</th>
            <th>AL-59</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">31.6</td><td>1 Strands</td><td>6 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">52.88</td><td>1 Strands</td><td>6 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">78.82</td><td>1 Strands</td><td>6 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">104.98</td><td>1 Strands</td><td>6 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">120</td><td>7 Strands</td><td>26 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">160</td><td>7 Strands</td><td>30 Strands</td><td>AL-59 ACS</td></tr>
          <tr><td class="primary-cell">241</td><td>7 Strands</td><td>30 Strands</td><td>AL-59 ACS</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 3 -->
  <div>
    <p class="font-semibold text-gray-700 mb-4 mt-8">Cable Attributes & Nominal Thickness</p>
    <div class="premium-table-container">
      <table class="premium-spec-table w-full min-w-[800px]">
        <thead>
          <tr>
            <th rowspan="2">Sr.NO</th>
            <th rowspan="2">Cable Attributes</th>
            <th rowspan="2">UOM</th>
            <th colspan="3">Nominal Thickness</th>
          </tr>
          <tr class="sub-header-row">
            <th>11 KV</th>
            <th>22 KV</th>
            <th>33 KV</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="primary-cell">1</td><td>Aluminium Alloy Wire</td><td>Sq.mm</td><td colspan="3" class="text-center font-semibold text-gray-600">As Per Requirement</td></tr>
          <tr><td class="primary-cell">2</td><td>Extruded Longitudinal Water Blocking Layer</td><td>mm</td><td colspan="3" class="text-center font-semibold text-gray-600">As Required to make Water Blocked Arrangement</td></tr>
          <tr><td class="primary-cell">3</td><td>Extruded Semi Conductive Layer</td><td>mm</td><td>0.3</td><td>0.3</td><td>0.4</td></tr>
          <tr><td class="primary-cell">4</td><td>Inner Insulation of XLPE Without Carbon Black</td><td>mm</td><td>1.2</td><td>1.32</td><td>2.43</td></tr>
          <tr><td class="primary-cell">5</td><td>Outer Insulaton with UV & Track Resistant XLPE</td><td>mm</td><td>1.1</td><td>1.1</td><td>1.2</td></tr>
        </tbody>
      </table>
    </div>
  </div>
`;

// Compress HTML
html = html.replace(/\n/g, '').replace(/\s{2,}/g, ' ');

const productData = fs.readFileSync('src/data/productData.js', 'utf8');

// Find MVCC product and insert specificationHtml
// Currently MVCC has `application: [...]`
// Let's replace the `application: [...]` with our `specificationHtml: '...'`

const regex = /name: 'Medium Voltage Covered Conductor \(MVCC\)',[\s\S]*?application: \[[\s\S]*?\]/;
const newContent = productData.replace(regex, (match) => {
  return match + `,\n      specificationHtml: '${html.replace(/'/g, "\\'")}'`;
});

fs.writeFileSync('src/data/productData.js', newContent);
console.log('Updated MVCC with new HTML');
