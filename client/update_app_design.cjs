const fs = require('fs');

let html = `
  <div class="mt-4 mb-4">
    <p class="text-gray-600 mb-8 text-[15px] leading-relaxed">Medium voltage-covered conductors are used in a variety of electrical power distribution system scenarios. The following are a few typical uses:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Card 1 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </span>
          <span>Overhead Power Distribution Lines</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Medium-voltage electricity is delivered from substations to residential, commercial, and industrial areas via overhead power distribution lines, which frequently use covered conductors.</p>
        <p class="text-gray-600 text-[14px] mt-2 leading-relaxed">By shielding the conductors from the elements, the insulation lowers the possibility of electrical failures brought on by exposure to pollutants, moisture, or other impurities.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
          </span>
          <span>Urban and Suburban Areas</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors can be used to increase the visual impact of power lines and reduce the possibility of unintentional contact with live parts in urban and suburban settings where aesthetics and safety are valued.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </span>
          <span>High Environmental Stress Areas</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Over an extended period, bare conductor performance may deteriorate in environments with elevated pollution, moisture, or corrosive elements. The power distribution system's longevity is increased by covered conductors, which offer an extra degree of defense against these types of environmental stresses.</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10"/><path d="M12 21a9 9 0 0 0-9-9H2a10 10 0 0 0 10 10Z"/><path d="M12 12a9 9 0 0 0 9-9h1a10 10 0 0 1-10 10Z"/></svg>
          </span>
          <span>Areas with Vegetation</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">In places with a lot of vegetation, where there is a greater chance of branches or trees coming into contact with power lines, covered conductors are appropriate. The insulation lessens the possibility of faults and outages caused by vegetation.</p>
      </div>

      <!-- Card 5 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>
          </span>
          <span>Coastal and Harsh Environments</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors offer an extra layer of defense against corrosion and environmental damage in coastal areas and other harsh environmental regions where exposure to salt, humidity, and extreme weather is a concern.</p>
      </div>

      <!-- Card 6 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
          </span>
          <span>High-Altitude Installations</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Given their greater exposure to inclement weather, covered conductors may be recommended in mountainous or high-altitude areas. The insulation aids in shielding the conductors from environmental hazards like snow and ice.</p>
      </div>

      <!-- Card 7 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </span>
          <span>Industrial Facilities</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Industrial facilities may use medium voltage-covered conductors to distribute power from the main substation to different areas of the building. Harsh operating conditions and the presence of industrial chemicals are two things that the insulation helps shield against.</p>
      </div>

      <!-- Card 8 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/></svg>
          </span>
          <span>Renewable Energy Projects</span>
        </h4>
        <p class="text-gray-600 text-[14px] leading-relaxed">Covered conductors can be used for medium voltage interconnection within the power generation facility and for connecting the facility to the larger electrical grid in renewable energy projects, such as solar or wind farms.</p>
      </div>

      <!-- Card 9 -->
      <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(32,58,112,0.15)] transition-all duration-300 hover:-translate-y-1">
        <h4 class="text-[#203a70] font-bold text-[16px] mb-3 flex items-start gap-2">
          <span class="text-blue-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16"/><path d="M5 11 3 22"/><path d="M19 11l2 11"/><path d="M9 11v11"/><path d="M15 11v11"/><path d="M2 15h20"/><path d="M2 19h20"/><path d="M15 11 9 3H4"/></svg>
          </span>
          <span>Railway Electrification</span>
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

// 1. Remove application array from MVCC
const mvccIndex = content.indexOf("name: 'Medium Voltage Covered Conductor (MVCC)'");
if (mvccIndex !== -1) {
  const appStart = content.indexOf("application: [", mvccIndex);
  if (appStart !== -1 && appStart < content.indexOf("applicationHtml:", mvccIndex)) {
    const appEnd = content.indexOf("],", appStart) + 2;
    content = content.substring(0, appStart) + content.substring(appEnd);
  }
}

// 2. Replace applicationHtml
const appHtmlStartStr = "applicationHtml: '";
const appHtmlStart = content.indexOf(appHtmlStartStr, mvccIndex);
if (appHtmlStart !== -1) {
  const htmlStart = appHtmlStart + appHtmlStartStr.length;
  const specHtmlStart = content.indexOf("specificationHtml:", htmlStart);
  if (specHtmlStart !== -1) {
    // the end of applicationHtml is the quote before the comma before specificationHtml
    const htmlEnd = content.lastIndexOf("',", specHtmlStart);
    content = content.substring(0, htmlStart) + html + content.substring(htmlEnd);
  }
}

fs.writeFileSync(productDataPath, content);
console.log("Updated Application HTML with a beautiful card design, removed the image, and removed the old application list!");
