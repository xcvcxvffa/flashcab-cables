const fs = require('fs');
const productDataPath = 'src/data/productData.js';
let content = fs.readFileSync(productDataPath, 'utf8');

const newProduct = `  {
    id: 'earthing-cables',
    name: 'Earthing Cables',
    description: 'This cable can be used in panels, cabinets, machines Earthing, internal wirings with switchgears, relays, controllers, equipment’s, controls units, etc.',
    image: '/assets/images/Product_Image/earthing-cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'Generally conforms to IS 694:2010, IEC60227, BS 6004',
      construction: {
        'Conductor': 'Annealed Plain bare Flexible Copper Class-2 as per IS:8130, IEC:60228',
        'Insulation': 'Extruded FR/FRLSH/HR-PVC as per IS:5831'
      },
      salientFeatures: [
        'Special heat resistant insulation',
        'Higher current carrying capacity',
        'Fine copper wires',
        'Highly thermal stable insulation',
        'Excellent resistant to moisture, abrasion, grace, oil',
        'Long Life',
        'Excellent mechanical & electrical properties'
      ],
      technicalData: {
        'Voltage Grade': 'Up to and including 1100V',
        'Operating Temp': 'Max.+70°C',
        'Nominal Voltage': '1.1 KV',
        'Test Voltage': '3.0 KV',
        'Flame propagation': 'Flame retardant test as per IS 10810-58,64, IEC 60332-1',
        'Color': 'Green, Black, Yellow/Green'
      },
      standardPacking: {
        'Packing': '100 Mtr, 200 Mtr, 500 Mtr'
      },
      application: [
        'This cable can be used in panels, cabinets, machines Earthing, internal wirings with switchgears, relays, controllers, equipment’s, controls units, etc.'
      ],
      specificationHtml: \`
        <div>
          <p class="font-semibold text-gray-700 mb-4 text-[18px]">Earthing Cables Specifications</p>
          <div class="premium-table-container">
            <table class="premium-spec-table w-full min-w-[800px]">
              <thead>
                <tr>
                  <th rowspan="2">Wire Size</th>
                  <th rowspan="2">No. of wire / Size of Wire</th>
                  <th rowspan="2">Insulation Thickness (Nominal)</th>
                  <th rowspan="2">OD</th>
                  <th rowspan="2">Max Conductor Resistance at 20°C</th>
                  <th rowspan="2">Current Rating</th>
                </tr>
                <tr class="sub-header-row">
                  <th>sq.mm</th>
                  <th>Nos./mm</th>
                  <th>mm</th>
                  <th>Mm</th>
                  <th>Ohm/km</th>
                  <th>Amps</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="primary-cell">6</td><td>7/1.0</td><td>0.8</td><td>5.10</td><td>3.08</td><td>31</td></tr>
                <tr><td class="primary-cell">10</td><td>7/1.30</td><td>1.0</td><td>6.50</td><td>1.83</td><td>52</td></tr>
                <tr><td class="primary-cell">16</td><td>7/1.70</td><td>1.0</td><td>8.0</td><td>1.15</td><td>70</td></tr>
                <tr><td class="primary-cell">25</td><td>7/2.13</td><td>1.2</td><td>10.0</td><td>0.727</td><td>88</td></tr>
                <tr><td class="primary-cell">35</td><td>7/2.52</td><td>1.2</td><td>11.50</td><td>0.524</td><td>112</td></tr>
                <tr><td class="primary-cell">50</td><td>19/1.83</td><td>1.4</td><td>13.50</td><td>0.387</td><td>146</td></tr>
                <tr><td class="primary-cell">70</td><td>19/2.16</td><td>1.4</td><td>16.0</td><td>0.268</td><td>190</td></tr>
                <tr><td class="primary-cell">95</td><td>19/2.52</td><td>1.6</td><td>17.5</td><td>0.193</td><td>250</td></tr>
                <tr><td class="primary-cell">120</td><td>37/2.0</td><td>1.6</td><td>19</td><td>0.153</td><td>310</td></tr>
                <tr><td class="primary-cell">150</td><td>37/2.25</td><td>1.8</td><td>21</td><td>0.124</td><td>355</td></tr>
                <tr><td class="primary-cell">185</td><td>37/2.52</td><td>2.0</td><td>23.5</td><td>0.0991</td><td>415</td></tr>
                <tr><td class="primary-cell">240</td><td>61/2.23</td><td>2.2</td><td>26.5</td><td>0.0754</td><td>500</td></tr>
                <tr><td class="primary-cell">300</td><td>61/2.50</td><td>2.4</td><td>29.5</td><td>0.0601</td><td>550</td></tr>
                <tr><td class="primary-cell">400</td><td>61/2.89</td><td>2.6</td><td>33.5</td><td>0.0470</td><td>670</td></tr>
                <tr><td class="primary-cell">500</td><td>61/3.23</td><td>2.8</td><td>37.5</td><td>0.0366</td><td>750</td></tr>
                <tr><td class="primary-cell">650</td><td>91/2.96</td><td>3.0</td><td>42</td><td>0.0283</td><td>875</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      \`
    }
  },`;

const insertIndex = content.indexOf('export const productCategories = [') + 'export const productCategories = ['.length;
content = content.substring(0, insertIndex) + '\n' + newProduct + content.substring(insertIndex);

fs.writeFileSync(productDataPath, content);
console.log("Successfully added Earthing Cables to productData.js");
