const fs = require('fs');

let html = `
  <div class="px-2 py-2">
    <p class="text-gray-600 mb-8 text-[15px] leading-relaxed">Medium voltage-covered conductors are used in a variety of electrical power distribution system scenarios. The following are a few typical uses:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Card 1 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Overhead Power Distribution Lines
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Medium-voltage electricity is delivered from substations to residential, commercial, and industrial areas via overhead power distribution lines, which frequently use covered conductors.</p>
        <p class="text-gray-600 text-[14px] mt-2 leading-relaxed">By shielding the conductors from the elements, the insulation lowers the possibility of electrical failures brought on by exposure to pollutants, moisture, or other impurities.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Urban and Suburban Areas
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors can be used to increase the visual impact of power lines and reduce the possibility of unintentional contact with live parts in urban and suburban settings where aesthetics and safety are valued.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          High Environmental Stress Areas
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Over an extended period, bare conductor performance may deteriorate in environments with elevated pollution, moisture, or corrosive elements. The power distribution system's longevity is increased by covered conductors, which offer an extra degree of defense against these types of environmental stresses.</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Areas with Vegetation
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">In places with a lot of vegetation, where there is a greater chance of branches or trees coming into contact with power lines, covered conductors are appropriate. The insulation lessens the possibility of faults and outages caused by vegetation.</p>
      </div>

      <!-- Card 5 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Coastal and Harsh Environments
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors offer an extra layer of defense against corrosion and environmental damage in coastal areas and other harsh environmental regions where exposure to salt, humidity, and extreme weather is a concern.</p>
      </div>

      <!-- Card 6 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          High-Altitude Installations
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Given their greater exposure to inclement weather, covered conductors may be recommended in mountainous or high-altitude areas. The insulation aids in shielding the conductors from environmental hazards like snow and ice.</p>
      </div>

      <!-- Card 7 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Industrial Facilities
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Industrial facilities may use medium voltage-covered conductors to distribute power from the main substation to different areas of the building. Harsh operating conditions and the presence of industrial chemicals are two things that the insulation helps shield against.</p>
      </div>

      <!-- Card 8 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Renewable Energy Projects
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors can be used for medium voltage interconnection within the power generation facility and for connecting the facility to the larger electrical grid in renewable energy projects, such as solar or wind farms.</p>
      </div>

      <!-- Card 9 -->
      <div class="bg-white rounded-xl p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3">
          Railway Electrification
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">In electrified railway systems, where trains are powered by medium voltage, covered conductors may be used. Insulation improves safety by reducing electrical interference.</p>
      </div>

    </div>
  </div>
`;

// Compress HTML
html = html.replace(/\n/g, '').replace(/\s{2,}/g, ' ');
html = html.replace(/'/g, "\\'");

const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  const appHtmlStartStr = "applicationHtml: '";
  const appHtmlStart = content.indexOf(appHtmlStartStr, mvccIndex);
  if (appHtmlStart !== -1) {
    const htmlStart = appHtmlStart + appHtmlStartStr.length;
    const specHtmlStart = content.indexOf("specificationHtml:", htmlStart);
    if (specHtmlStart !== -1) {
      // the end of applicationHtml is the quote before the comma before specificationHtml
      const htmlEnd = content.lastIndexOf("',", specHtmlStart);
      content = content.substring(0, htmlStart) + html + content.substring(htmlEnd);
      fs.writeFileSync(productDataPath, content);
      console.log("Successfully removed icons and improved padding!");
    }
  }
}
