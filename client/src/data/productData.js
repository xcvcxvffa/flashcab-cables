export const productCategories = [
  {
    id: '11kv-ht-cable',
    name: '11 kv HT cable',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/11 KV HT CABLE 2.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/11 KV HT CABLE 2.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 7098 (Part 2) / IEC 60502-2',
      salientFeatures: [
        'XLPE (Cross Linked Polyethylene) Insulation',
        'Galvanized Steel Wire / Steel Strip Armour',
        'Stranded Class 2 Aluminium / Copper Conductor',
        'By Color Coding Core Identification',
        'Suitable for Indoor, Outdoor, Underground & Duct Installation',
        'Short Circuit Temperature up to 250°C'
      ],
      technicalData: {
        'Voltage Grade': '11 KV',
        'Operating Temp': '-15°C to +90°C',
        'Short Circuit Temp': 'Up to 250°C',
        'Installation': 'Indoor, Outdoor, Underground & Duct'
      },
      standardPacking: {
        'Conductor': 'Aluminium / Copper (Class 2 Stranded)',
        'Insulation': 'XLPE (Cross Linked Polyethylene)',
        'Armour': 'Galvanized Steel Wire / Steel Strip Armour',
        'Core Identification': 'By Color Coding'
      },
      coreColour: 'By Color Coding (Red, Yellow, Blue for 3 Core, or as per standard specifications).',
      application: '11 KV HT Cable is engineered for reliable high-voltage power transmission across industrial, commercial, and infrastructure applications. With advanced XLPE insulation and robust construction, it ensures maximum safety, minimal power loss, and consistent performance over long distances. Suitable for: Industrial Plants, Infrastructure Projects, Renewable & Commercial Installations, Power Distribution.',
      specificationTable: {
        headerRows: [
          [
            'Size',
            'Conductor Type',
            'Insulation Thickness (mm)',
            'Core OD (mm)',
            'Sheath Thickness (mm)',
            'Overall 3-Core OD (mm)',
            'Overall 4-Core OD (mm)',
            'Max Resistance (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['3C x 35', 'Stranded', '3.40', '18.5', '1.80', '45.0', 'N/A', '0.868', '110'],
          ['3C x 50', 'Stranded', '3.40', '19.8', '1.80', '48.2', 'N/A', '0.641', '130'],
          ['3C x 70', 'Stranded', '3.40', '21.6', '2.0', '52.5', 'N/A', '0.443', '160'],
          ['3C x 95', 'Stranded', '3.40', '23.8', '2.0', '57.8', 'N/A', '0.320', '190'],
          ['3C x 120', 'Stranded', '3.40', '25.4', '2.20', '61.5', 'N/A', '0.253', '220'],
          ['3C x 150', 'Stranded', '3.40', '27.0', '2.20', '65.2', 'N/A', '0.206', '250']
        ]
      },
      tableNotes: [
        'Tested as per IS 7098 (Part 2) standards.',
        'Custom lengths and packaging can be provided upon request.'
      ]
    }
  },
  {
    id: '11kv-medium-voltage-cable',
    name: '11 Kv Medium Voltage cable',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/11 Kv Medium Voltage cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/11 KV MEDIUM VOLTAGE CABLE.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 7098 (Part 1)',
      salientFeatures: [
        'XLPE / Covered Insulation',
        'Weather Resistant PE / PVC Outer Covering',
        'Stranded Compact Aluminium / Aluminium Alloy Conductor',
        'Suitable for Overhead Distribution Installation',
        'Operating Temperature up to 90°C',
        'Short Circuit Temperature up to 250°C'
      ],
      technicalData: {
        'Voltage Grade': '11 KV',
        'Conductor Material': 'Aluminium / Aluminium Alloy',
        'Conductor Type': 'Stranded Compact',
        'Operating Temp': 'Up to 90°C',
        'Short Circuit Temp': 'Up to 250°C',
        'Installation': 'Overhead Distribution'
      },
      standardPacking: {
        'Conductor': 'Aluminium / Aluminium Alloy (Stranded Compact)',
        'Insulation': 'XLPE / Covered Insulation',
        'Outer Covering': 'Weather Resistant PE / PVC',
        'Core Identification': 'By Color Coding'
      },
      coreColour: 'By Color Coding as per standard specifications.',
      application: 'Engineered for dependable power and control transmission, these cables perform efficiently in harsh industrial conditions. Their durable construction offers excellent resistance to temperature variations, moisture, and chemicals, ensuring safe, stable, and uninterrupted operation across industrial and automation applications. Suitable for: Industrial Facilities, Automation Systems, Heavy Machinery & Equipment, Power Distribution Panels.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Wires / Diameter (mm)',
            'Insulation Thickness (mm)',
            'Approx Outer OD (mm)',
            'Max Resistance at 20°C (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['16.0', '7/1.70', '1.0', '8.5', '1.91', '75'],
          ['25.0', '7/2.14', '1.2', '10.0', '1.20', '100'],
          ['35.0', '7/2.52', '1.2', '11.2', '0.868', '120'],
          ['50.0', '19/1.78', '1.4', '13.0', '0.641', '145'],
          ['70.0', '19/2.14', '1.4', '14.8', '0.443', '180']
        ]
      },
      tableNotes: [
        'Standard compliance to IS 7098 overhead guidelines.'
      ]
    }
  },
  {
    id: 'single-core-wires',
    name: 'Single Core Wires',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Single Core & Multi Core Flexible Cables.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Single Core & Multi Core Flexible Cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'Generally conforms to IS 694:2010, BS6004',
      salientFeatures: [
        'Special heat resistant insulation',
        'Higher current carrying capacity.',
        'Fine copper wires',
        'Highly thermal stable insulation',
        'Excellent resistant to moisture, abrasion, grace, oil',
        'Long Life',
        'Excellent mechanical & electrical properties'
      ],
      technicalData: {
        'Voltage Grade': 'Up to and including 1100V',
        'Operating Temp': '-10°C to max. +90°C',
        'Nominal Voltage': '1.1 KV',
        'Test Voltage': '3.0 KV',
        'Flame propagation': 'Flame retardant test as per IS 10810-58,64, IEC 60332-1'
      },
      standardPacking: {
        'Conductor': 'Annealed Plain bare Flexible Copper Class-2/Class-5 as per IS:8130, IEC:60228',
        'Insulation': 'Extruded FR/FRLSH/HR-PVC as per IS:5831',
        'Packing': '100 Mtr, 200 Mtr, 500 Mtr'
      },
      coreColour: 'Red, Yellow, Blue, Green, Black, Grey',
      application: "Flexible single core cable with Flame Retardant PVC insulation. This cable can be used in panels, cabinets, machines and internal wirings with switchgears, relays, controllers, equipment's, controls units, etc.",
      specificationTable: {
        headerRows: [
          [
            'Size of Wire',
            'No. of Wire / Size of Wire',
            'Insulation Thickness',
            'OD',
            'Max conductor resistance at 20°C',
            'Current Rating'
          ],
          [
            'sq. mm',
            'Nos/mm',
            '(Nominal) mm',
            'mm',
            'Ohm/km.',
            'Amps'
          ]
        ],
        rows: [
          ['0.50', '16/0.20', '0.6', '1.90', '39', '6'],
          ['0.75', '24/0.20', '0.6', '2.20', '26', '9'],
          ['1.0', '14/0.30', '0.6', '2.40', '19.5', '14'],
          ['1.5', '22/0.30', '0.6', '2.80', '13.3', '18'],
          ['2.5', '36/0.30', '0.7', '3.35', '7.98', '24'],
          ['4.0', '56/0.30', '0.8', '3.80', '4.95', '32'],
          ['6.0', '84/0.30', '0.8', '4.80', '3.3', '42'],
          ['10.0', '140/0.30', '1.0', '6.0', '1.91', '55'],
          ['16.0', '224/0.30', '1.0', '7.50', '1.21', '75'],
          ['25.0', '350/0.30', '1.2', '9.50', '0.78', '100'],
          ['35.0', '490/0.30', '1.2', '11.0', '0.554', '125'],
          ['50.0', '703/0.30', '1.4', '13.0', '0.386', '165'],
          ['70.0', '988/0.30', '1.4', '16.0', '0.272', '240'],
          ['95.0', '1349/0.30', '1.6', '17.5', '0.206', '300'],
          ['120.0', '608/0.50', '1.6', '19.0', '0.161', '325'],
          ['150.0', '767/0.50', '1.8', '21.0', '0.129', '352'],
          ['185.0', '943/0.50', '2.0', '23.5', '0.106', '400'],
          ['240.0', '1223/0.50', '2.2', '26.5', '0.0801', '475'],
          ['300.0', '1525/0.50', '2.4', '29.5', '0.0641', '550'],
          ['400.0', '2035/0.50', '2.6', '33.5', '0.0486', '670'],
          ['500.0', '2553/0.50', '2.8', '37.5', '0.0384', '750'],
          ['630.0', '3219/0.50', '2.8', '42.0', '0.0287', '875']
        ]
      }
    }
  },
  {
    id: 'industrial-power-control-cables',
    name: 'Industrial Power & Control Cables',
    image: '/assets/images/cables.png',
    image2: '/assets/images/industrial_cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'IEC 60228 / IEC 60502-1 / IS 1554',
      salientFeatures: [
        'Electrolytic Copper Conductor (Annealed)',
        'LSZH or XLPE Insulation Type',
        'Aluminium or Copper Tape / Braid Shielding',
        'Flame Retardant (FR / LSZH)'
      ],
      technicalData: {
        'Voltage Grade': 'Up to 1.1 kV',
        'Conductor Material': 'Electrolytic Copper (Annealed)',
        'Conductor Type': 'Stranded / Flexible Class 5',
        'Insulation Type': 'LSZH / XLPE',
        'Shielding': 'Aluminium / Copper Tape or Braid',
        'Flame Retardant': 'FR / LSZH (IEC 60332-1)',
        'Temperature Range': '-20°C to +90°C (LSZH)',
        'Installation Type': 'Indoor, Outdoor, Direct Burial, Tray, Duct & Conduit',
        'Standard Compliance': 'IEC 60228 / IEC 60502-1 / IS 1554'
      },
      standardPacking: {
        'Conductor': 'Stranded / Flexible Class 5',
        'Insulation': 'LSZH / XLPE',
        'Shielding': 'Aluminium / Copper Tape/Braid'
      },
      coreColour: 'Color coded or numbered cores as per standard specs.',
      application: 'Engineered for performance. Built to last. Our industrial power and control cables deliver dependable power transmission and control signal integrity in the most demanding environments. Designed with advanced insulation and premium conductivity, they ensure maximum safety, operational reliability, and long service life across a wide range of industrial applications.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Cores',
            'Insulation Thickness (mm)',
            'Armour Thickness (mm)',
            'Outer Sheath Thickness (mm)',
            'Approx Overall OD (mm)',
            'Current Rating in Ground (Amps)'
          ]
        ],
        rows: [
          ['1.5', '2C', '0.8', '0.9', '1.24', '12.5', '22'],
          ['2.5', '2C', '0.9', '0.9', '1.24', '13.8', '29'],
          ['4.0', '2C', '1.0', '0.9', '1.24', '15.0', '38'],
          ['1.5', '3C', '0.8', '0.9', '1.24', '13.0', '18'],
          ['2.5', '3C', '0.9', '0.9', '1.24', '14.5', '24'],
          ['4.0', '3C', '1.0', '0.9', '1.24', '16.0', '32'],
          ['1.5', '4C', '0.8', '0.9', '1.24', '14.0', '18'],
          ['2.5', '4C', '0.9', '0.9', '1.24', '15.8', '24'],
          ['4.0', '4C', '1.0', '0.9', '1.24', '17.5', '32']
        ]
      },
      tableNotes: [
        'Applicable for standard industrial control installation setups.',
        'High dielectric properties with low signal noise.'
      ]
    }
  },
  {
    id: 'submersible-flat-cables',
    name: 'Submersible Pump Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Submersible Flat Cables.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Submersible Flat Cables.png',
    subCategories: [
      {
        id: '3-core-pvc-flat-cable',
        name: '3 Core PVC Flat Cable',
        specs: {
          cableStandard: 'IS 694:2010, BS 6500, IEC 60227',
          salientFeatures: [
            'Excellent flexibility',
            'Excellent resistant to moisture, abrasion, grease, oil',
            'Long Life',
            'Excellent mechanical & electrical properties'
          ],
          technicalData: {
            'Operating Temp': '-20°C to Max.+90°C',
            'Nominal Voltage': '1.1 KV',
            'Test Voltage': '3.0 KV',
            'Min. Bending Radius': '6x Cable Diameter'
          },
          standardPacking: {
            'Packing': 'Coils 100, 200, 300, 500, 1000m',
            'Conductor': 'Flexible Bare Bunch Copper as per IS:8130',
            'Insulation': 'PVC As Par IS:5831',
            'Outer Sheath': 'PVC As Par IS:5831'
          },
          coreColour: 'As Par IS:694:2010 - 3C - Red, Yellow, Blue, 4c - Red, Yellow, Blue Or Black. As Par IEC:60227 3C Black, Blue, Brown. 4c - Black, Blue, Brown, Green or Yellow/Green',
          application: 'Ideal For Irrigation Pumps, Drinking Water Supply Pumps, Submersible Pump Motor Power Supply.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Total Thickness of Double Sheath and Diameter', colSpan: 3 },
                { label: 'Conductor Resistance at 20°C (max)', rowSpan: 3 },
                { label: 'Current Rating 40°C', rowSpan: 3 }
              ],
              [
                { label: 'size of cable', rowSpan: 2 },
                { label: 'No. of Wire/ Size of Wire', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Core OD', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Overall size', colSpan: 2 }
              ],
              [
                { label: '3 Core' },
                { label: '4 Core' }
              ],
              [
                { label: 'sq.mm' },
                { label: 'Nos.mm' },
                { label: 'Nos.mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'Ω/km.' },
                { label: 'Amps.' }
              ]
            ],
            rows: [
              ['1.0', '14/0.30', '0.60', '2.60', '0.90', '9.90 X 4.70', '12.50 X 4.80', '18.1', '11'],
              ['1.5', '22/0.30', '0.60', '2.80', '0.90', '10.50 X 4.80', '14.20 X 5.10', '12.1', '14'],
              ['2.5', '36/0.30', '0.70', '3.35', '1.0', '12.60 X 5.90', '17.50 X 7.0', '7.41', '18'],
              ['4.0', '56/0.30', '0.80', '4.0', '1.0', '14.50 X 6.70', '20.0 X 7.90', '4.95', '26'],
              ['6.0', '84/0.30', '0.80', '5.0', '1.0', '17.50 X 7.50', '23.50 X 9.0', '3.30', '31'],
              ['10.0', '140/0.30', '1.0', '6.5', '1.40', '22.80 X 9.90', '29.0 X 9.90', '1.91', '42'],
              ['16.0', '224/0.30', '1.0', '8.0', '1.40', '28.0 X 13.0', '36.0 X 11.40', '1.21', '57'],
              ['25.0', '350/0.30', '1.20', '10.0', '2.0', '24.50 X 14.80', '45.0 X 14.70', '0.780', '72'],
              ['35.0', '490/0.30', '1.20', '11.50', '2.0', '38.0 X 17.0', '50.0 X 16.20', '0.554', '90'],
              ['50.0', '700/0.30', '1.40', '13.50', '2.20', '46.0 X 20.50', '58.0 X 18.30', '0.386', '115'],
              ['70.0', '980/0.30', '1.40', '15.30', '2.20', '53.0 X 23.0', '66.5 X 20.0', '0.272', '143'],
              ['95.0', '1330/0.30', '1.60', '18.0', '2.40', '60.0 X 28.0', '77.3 X 23.50', '0.206', '165']
            ]
          },
          tableNotes: [
            'Standard packing in 100, 500, and 1000m drums.',
            'Cables generally conform to IS 694 guidelines.'
          ]
        }
      },
      {
        id: '4-core-pvc-flat-cable',
        name: '4 Core PVC Flat Cable',
        specs: {
          cableStandard: 'IS 694:2010, BS 6500, IEC 60227',
          salientFeatures: [
            'Excellent flexibility',
            'Excellent resistant to moisture, abrasion, grease, oil',
            'Long Life',
            'Excellent mechanical & electrical properties'
          ],
          technicalData: {
            'Operating Temp': '-20°C to Max.+90°C',
            'Nominal Voltage': '1.1 KV',
            'Test Voltage': '3.0 KV',
            'Min. Bending Radius': '6x Cable Diameter'
          },
          standardPacking: {
            'Packing': 'Coils 100, 200, 300, 500, 1000m',
            'Conductor': 'Flexible Bare Bunch Copper as per IS:8130',
            'Insulation': 'PVC As Par IS:5831',
            'Outer Sheath': 'PVC As Par IS:5831'
          },
          coreColour: 'As Par IS:694:2010 - 4c - Red, Yellow, Blue Or Black.',
          application: 'Ideal For Irrigation Pumps, Drinking Water Supply Pumps, Submersible Pump Motor Power Supply.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Total Thickness of Double Sheath and Diameter', colSpan: 3 },
                { label: 'Conductor Resistance at 20°C (max)', rowSpan: 3 },
                { label: 'Current Rating 40°C', rowSpan: 3 }
              ],
              [
                { label: 'size of cable', rowSpan: 2 },
                { label: 'No. of Wire/ Size of Wire', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Core OD', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Overall size', colSpan: 2 }
              ],
              [
                { label: '3 Core' },
                { label: '4 Core' }
              ],
              [
                { label: 'sq.mm' },
                { label: 'Nos.mm' },
                { label: 'Nos.mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'Ω/km.' },
                { label: 'Amps.' }
              ]
            ],
            rows: [
              ['1.0', '14/0.30', '0.60', '2.60', '0.90', '9.90 X 4.70', '12.50 X 4.80', '18.1', '11'],
              ['1.5', '22/0.30', '0.60', '2.80', '0.90', '10.50 X 4.80', '14.20 X 5.10', '12.1', '14'],
              ['2.5', '36/0.30', '0.70', '3.35', '1.0', '12.60 X 5.90', '17.50 X 7.0', '7.41', '18'],
              ['4.0', '56/0.30', '0.80', '4.0', '1.0', '14.50 X 6.70', '20.0 X 7.90', '4.95', '26'],
              ['6.0', '84/0.30', '0.80', '5.0', '1.0', '17.50 X 7.50', '23.50 X 9.0', '3.30', '31'],
              ['10.0', '140/0.30', '1.0', '6.5', '1.40', '22.80 X 9.90', '29.0 X 9.90', '1.91', '42'],
              ['16.0', '224/0.30', '1.0', '8.0', '1.40', '28.0 X 13.0', '36.0 X 11.40', '1.21', '57'],
              ['25.0', '350/0.30', '1.20', '10.0', '2.0', '24.50 X 14.80', '45.0 X 14.70', '0.780', '72'],
              ['35.0', '490/0.30', '1.20', '11.50', '2.0', '38.0 X 17.0', '50.0 X 16.20', '0.554', '90'],
              ['50.0', '700/0.30', '1.40', '13.50', '2.20', '46.0 X 20.50', '58.0 X 18.30', '0.386', '115'],
              ['70.0', '980/0.30', '1.40', '15.30', '2.20', '53.0 X 23.0', '66.5 X 20.0', '0.272', '143'],
              ['95.0', '1330/0.30', '1.60', '18.0', '2.40', '60.0 X 28.0', '77.3 X 23.50', '0.206', '165']
            ]
          },
          tableNotes: [
            'Reuses standard flat cable parameters.',
            'Cables conform to IS 694 standard.'
          ]
        }
      },
      {
        id: '3-core-rubber-flat-cable',
        name: '3 Core Rubber Flat Cable',
        specs: {
          cableStandard: 'IS 694:2010, BS 6500',
          salientFeatures: [
            'High flexibility and toughness',
            'Excellent weather and water resistance',
            'Long Life'
          ],
          technicalData: {
            'Operating Temp': '-25°C to Max.+90°C'
          },
          standardPacking: {
            'Packing': 'Coils 100, 200, 300m',
            'Conductor': 'Flexible copper'
          },
          coreColour: 'Red, Yellow, Blue.',
          application: 'Submersible Pump Motor Power Supply.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Total Thickness of Double Sheath and Diameter', colSpan: 3 },
                { label: 'Conductor Resistance at 20°C (max)', rowSpan: 3 },
                { label: 'Current Rating 40°C', rowSpan: 3 }
              ],
              [
                { label: 'size of cable', rowSpan: 2 },
                { label: 'No. of Wire/ Size of Wire', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Core OD', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Overall size', colSpan: 2 }
              ],
              [
                { label: '3 Core' },
                { label: '4 Core' }
              ],
              [
                { label: 'sq.mm' },
                { label: 'Nos.mm' },
                { label: 'Nos.mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'Ω/km.' },
                { label: 'Amps.' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.60', '2.80', '0.90', '10.50 X 4.80', '14.20 X 5.10', '12.1', '14'],
              ['2.5', '36/0.30', '0.70', '3.35', '1.0', '12.60 X 5.90', '17.50 X 7.0', '7.41', '18'],
              ['4.0', '56/0.30', '0.80', '4.0', '1.0', '14.50 X 6.70', '20.0 X 7.90', '4.95', '26'],
              ['6.0', '84/0.30', '0.80', '5.0', '1.0', '17.50 X 7.50', '23.50 X 9.0', '3.30', '31'],
              ['10.0', '140/0.30', '1.0', '6.5', '1.40', '22.80 X 9.90', '29.0 X 9.90', '1.91', '42']
            ]
          },
          tableNotes: [
            'Rubber insulation offers excellent flexibility in freezing water conditions.'
          ]
        }
      },
      {
        id: '4-core-rubber-flat-cable',
        name: '4 Core Rubber Flat Cable',
        specs: {
          cableStandard: 'IS 694:2010, BS 6500',
          salientFeatures: [
            'High flexibility and toughness',
            'Excellent weather and water resistance'
          ],
          technicalData: {
            'Operating Temp': '-25°C to Max.+90°C'
          },
          standardPacking: {
            'Packing': 'Coils 100, 200, 300m'
          },
          coreColour: 'Red, Yellow, Blue, Black.',
          application: 'Submersible Pump Motor Power Supply.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Total Thickness of Double Sheath and Diameter', colSpan: 3 },
                { label: 'Conductor Resistance at 20°C (max)', rowSpan: 3 },
                { label: 'Current Rating 40°C', rowSpan: 3 }
              ],
              [
                { label: 'size of cable', rowSpan: 2 },
                { label: 'No. of Wire/ Size of Wire', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Core OD', rowSpan: 2 },
                { label: 'Thickness', rowSpan: 2 },
                { label: 'Overall size', colSpan: 2 }
              ],
              [
                { label: '3 Core' },
                { label: '4 Core' }
              ],
              [
                { label: 'sq.mm' },
                { label: 'Nos.mm' },
                { label: 'Nos.mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'mm' },
                { label: 'Ω/km.' },
                { label: 'Amps.' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.60', '2.80', '0.90', '10.50 X 4.80', '14.20 X 5.10', '12.1', '14'],
              ['2.5', '36/0.30', '0.70', '3.35', '1.0', '12.60 X 5.90', '17.50 X 7.0', '7.41', '18'],
              ['4.0', '56/0.30', '0.80', '4.0', '1.0', '14.50 X 6.70', '20.0 X 7.90', '4.95', '26'],
              ['6.0', '84/0.30', '0.80', '5.0', '1.0', '17.50 X 7.50', '23.50 X 9.0', '3.30', '31']
            ]
          },
          tableNotes: [
            'Rubber insulation conforms to heavy-duty industrial application standards.'
          ]
        }
      },
      {
        id: '3-core-pvc-round-cable',
        name: '3 Core PVC Round Cable',
        specs: {
          cableStandard: 'IS 694:2010',
          salientFeatures: ['Excellent flexibility', 'Excellent PVC insulation'],
          technicalData: { 'Operating Temp': '-20°C to Max.+90°C' },
          standardPacking: { 'Packing': 'Coils 100m' },
          coreColour: 'Red, Yellow, Blue.',
          application: 'Power supply to submersible pumps.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Sheath Thickness (mm)', rowSpan: 2 },
                { label: 'Approx Outer OD (mm)', rowSpan: 2 },
                { label: 'Max Resistance at 20°C (Ω/km)', rowSpan: 2 },
                { label: 'Current Rating (Amps)', rowSpan: 2 }
              ],
              [
                { label: 'Size (sq.mm)' },
                { label: 'No. of Wires / Size (mm)' },
                { label: 'Thickness (mm)' },
                { label: 'Core OD (mm)' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.6', '2.8', '0.9', '8.4', '12.1', '14'],
              ['2.5', '36/0.30', '0.7', '3.3', '1.0', '10.2', '7.41', '18'],
              ['4.0', '56/0.30', '0.8', '4.0', '1.0', '12.0', '4.95', '26']
            ]
          },
          tableNotes: [
            'Round cross-section configuration.'
          ]
        }
      },
      {
        id: '4-core-pvc-round-cable',
        name: '4 Core PVC Round Cable',
        specs: {
          cableStandard: 'IS 694:2010',
          salientFeatures: ['Excellent flexibility', 'Excellent PVC insulation'],
          technicalData: { 'Operating Temp': '-20°C to Max.+90°C' },
          standardPacking: { 'Packing': 'Coils 100m' },
          coreColour: 'Red, Yellow, Blue, Black.',
          application: 'Power supply to submersible pumps.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Sheath Thickness (mm)', rowSpan: 2 },
                { label: 'Approx Outer OD (mm)', rowSpan: 2 },
                { label: 'Max Resistance at 20°C (Ω/km)', rowSpan: 2 },
                { label: 'Current Rating (Amps)', rowSpan: 2 }
              ],
              [
                { label: 'Size (sq.mm)' },
                { label: 'No. of Wires / Size (mm)' },
                { label: 'Thickness (mm)' },
                { label: 'Core OD (mm)' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.6', '2.8', '0.9', '9.2', '12.1', '14'],
              ['2.5', '36/0.30', '0.7', '3.3', '1.0', '11.2', '7.41', '18'],
              ['4.0', '56/0.30', '0.8', '4.0', '1.0', '13.2', '4.95', '26']
            ]
          },
          tableNotes: [
            'Round cross-section configuration.'
          ]
        }
      },
      {
        id: '3-core-rubber-round-cable',
        name: '3 Core Rubber Round Cable',
        specs: {
          cableStandard: 'IS 694',
          salientFeatures: ['Flexible rubber outer sheath'],
          technicalData: { 'Operating Temp': '-25°C to Max.+90°C' },
          standardPacking: { 'Packing': 'Coils 100m' },
          coreColour: 'Red, Yellow, Blue.',
          application: 'Power supply to submersible pumps.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Sheath Thickness (mm)', rowSpan: 2 },
                { label: 'Approx Outer OD (mm)', rowSpan: 2 },
                { label: 'Max Resistance at 20°C (Ω/km)', rowSpan: 2 },
                { label: 'Current Rating (Amps)', rowSpan: 2 }
              ],
              [
                { label: 'Size (sq.mm)' },
                { label: 'No. of Wires / Size (mm)' },
                { label: 'Thickness (mm)' },
                { label: 'Core OD (mm)' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.6', '2.8', '1.0', '8.9', '12.1', '14'],
              ['2.5', '36/0.30', '0.7', '3.3', '1.1', '10.8', '7.41', '18'],
              ['4.0', '56/0.30', '0.8', '4.0', '1.2', '12.6', '4.95', '26']
            ]
          },
          tableNotes: [
            'Tough rubber insulation for wet applications.'
          ]
        }
      },
      {
        id: '4-core-rubber-round-cable',
        name: '4 Core Rubber Round Cable',
        specs: {
          cableStandard: 'IS 694',
          salientFeatures: ['Flexible rubber outer sheath'],
          technicalData: { 'Operating Temp': '-25°C to Max.+90°C' },
          standardPacking: { 'Packing': 'Coils 100m' },
          coreColour: 'Red, Yellow, Blue, Black.',
          application: 'Power supply to submersible pumps.',
          specificationTable: {
            headerRows: [
              [
                { label: 'Conductor', colSpan: 2 },
                { label: 'Insulation', colSpan: 2 },
                { label: 'Sheath Thickness (mm)', rowSpan: 2 },
                { label: 'Approx Outer OD (mm)', rowSpan: 2 },
                { label: 'Max Resistance at 20°C (Ω/km)', rowSpan: 2 },
                { label: 'Current Rating (Amps)', rowSpan: 2 }
              ],
              [
                { label: 'Size (sq.mm)' },
                { label: 'No. of Wires / Size (mm)' },
                { label: 'Thickness (mm)' },
                { label: 'Core OD (mm)' }
              ]
            ],
            rows: [
              ['1.5', '22/0.30', '0.6', '2.8', '1.0', '9.8', '12.1', '14'],
              ['2.5', '36/0.30', '0.7', '3.3', '1.1', '11.8', '7.41', '18'],
              ['4.0', '56/0.30', '0.8', '4.0', '1.2', '13.8', '4.95', '26']
            ]
          },
          tableNotes: [
            'Tough rubber insulation for wet applications.'
          ]
        }
      }
    ],
    specs: {
      cableStandard: 'IS 694 / IS 1554 (as applicable)',
      salientFeatures: [
        'Flexible Class 5 bunch copper conductor',
        'PVC / XLPE insulation',
        'Flat profile configuration',
        'Underwater & wet environments application'
      ],
      technicalData: {
        'Conductor Material': 'Annealed Copper',
        'Conductor Type': 'Flexible (Class 5)',
        'Insulation': 'PVC / XLPE',
        'Core Identification': 'By Color Coding',
        'Cable Type': 'Flat',
        'Voltage Grade': 'Up to 1100 V',
        'Temperature Range': '-15°C to +70°C',
        'Application': 'Underwater & Wet Environments',
        'Standard': 'IS 694 / IS 1554 (as applicable)'
      },
      standardPacking: {
        'Conductor': 'Flexible Bare Bunch Copper as per IS:8130',
        'Insulation': 'PVC / XLPE',
        'Outer Sheath': 'PVC / Rubber'
      },
      coreColour: 'As Par IS:694:2010 - 3C - Red, Yellow, Blue. As Par IEC:60228 3C Black, Blue, Brown.',
      application: 'Submersible Flat Cables are engineered for reliable power transmission in underwater and wet applications such as borewells, submersible pumps, and water treatment systems. Designed with a durable flat profile, they offer excellent flexibility, superior water resistance, and long-lasting performance in demanding environments.',
      specificationTable: {
        headerRows: [
          [
            { label: 'Conductor', colSpan: 2 },
            { label: 'Insulation', colSpan: 2 },
            { label: 'Total Thickness of Double Sheath and Diameter', colSpan: 3 },
            { label: 'Conductor Resistance at 20°C (max)', rowSpan: 3 },
            { label: 'Current Rating 40°C', rowSpan: 3 }
          ],
          [
            { label: 'size of cable', rowSpan: 2 },
            { label: 'No. of Wire/ Size of Wire', rowSpan: 2 },
            { label: 'Thickness', rowSpan: 2 },
            { label: 'Core OD', rowSpan: 2 },
            { label: 'Thickness', rowSpan: 2 },
            { label: 'Overall size', colSpan: 2 }
          ],
          [
            { label: '3 Core' },
            { label: '4 Core' }
          ],
          [
            { label: 'sq.mm' },
            { label: 'Nos.mm' },
            { label: 'Nos.mm' },
            { label: 'mm' },
            { label: 'mm' },
            { label: 'mm' },
            { label: 'mm' },
            { label: 'Ω/km.' },
            { label: 'Amps.' }
          ]
        ],
        rows: [
          ['1.0', '14/0.30', '0.60', '2.60', '0.90', '9.90 X 4.70', '12.50 X 4.80', '18.1', '11'],
          ['1.5', '22/0.30', '0.60', '2.80', '0.90', '10.50 X 4.80', '14.20 X 5.10', '12.1', '14'],
          ['2.5', '36/0.30', '0.70', '3.35', '1.0', '12.60 X 5.90', '17.50 X 7.0', '7.41', '18'],
          ['4.0', '56/0.30', '0.80', '4.0', '1.0', '14.50 X 6.70', '20.0 X 7.90', '4.95', '26']
        ]
      },
      tableNotes: [
        'Cables conform to standard IS 694 parameters.'
      ]
    }
  },
  {
    id: 'ariel-bunched-cables',
    name: 'Ariel Bunched Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Ariel Bunched Cables.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Ariel Bunched Cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 14255:1995',
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
      standardPacking: {
        'Conductor': 'Stranded Compact Aluminium (Class 2)',
        'Insulation': 'XLPE / Weather Resistant HDPE',
        'Messenger Wire': 'Standard Aluminium Alloy (Stranded)',
        'Core Identification': 'By longitudinal ribs'
      },
      coreColour: 'Black (UV Resistant Insulation) with Ribs.',
      application: 'Aerial Bunched Cables (ABC) are designed for safe and reliable overhead power distribution. Their insulated bundled construction minimizes power theft, short circuits, and environmental damage while ensuring reduced maintenance and enhanced operational safety. Ideal for urban, rural, and residential electrification projects.',
      specificationTable: {
        headerRows: [
          [
            'Size of Phase Conductor (sq.mm)',
            'Insulation Thickness (mm)',
            'Messenger Wire Size (sq.mm)',
            'Approx Overall Bundle OD (mm)',
            'Max Conductor Resistance (Ω/km)',
            'Current Rating in Air (Amps)'
          ]
        ],
        rows: [
          ['16.0', '1.2', '25.0', '15.5', '1.91', '60'],
          ['25.0', '1.2', '25.0', '17.8', '1.20', '80'],
          ['35.0', '1.2', '35.0', '19.5', '0.868', '100'],
          ['50.0', '1.5', '50.0', '22.8', '0.641', '120'],
          ['70.0', '1.5', '50.0', '25.5', '0.443', '150'],
          ['95.0', '1.5', '70.0', '28.8', '0.320', '185']
        ]
      },
      tableNotes: [
        'Tested under overhead bundle distribution specifications.'
      ]
    }
  },
  {
    id: 'house-wires',
    name: 'Building wire (House wire)',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/House Wires.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/House Wires.png',
    subCategories: [],
    specs: {
      cableStandard: 'Generally conforms to IS 694:2010, BS6004',
      salientFeatures: [
        'High conductivity for lower power loss',
        'Flame retardant insulation',
        'Extra flexible conductor',
        'High insulation resistance',
        'Protection against short circuits',
        'Long service life',
        'RoHS compliant materials',
        'Easy installation and stripping'
      ],
      technicalData: {
        'Voltage Grade': 'Up to and including 1100V',
        'Operating Temp': '-15°C to max. +70°C',
        'Nominal Voltage': '1.1 KV',
        'Test Voltage': '3.0 KV',
        'Flame propagation': 'Flame retardant test as per IS 10810-58,64, IEC 60332-1'
      },
      standardPacking: {
        'Conductor': 'Annealed Plain bare Flexible Copper Class-1/ Class-2/Class-5 as per IS:8130, IEC:60228',
        'Insulation': 'Extruded FR/FRLSH/HR-PVC as per IS:5831',
        'Packing': '90 Mtr, 180 Mtr, 360 Mtr',
        'Color': 'Red, Yellow, Blue, Green, Black, Grey, Pink'
      },
      coreColour: 'Red, Yellow, Blue, Green, Black, Grey, Pink.',
      application: 'Residential buildings, Commercial complexes, Offices, Educational institutions, Hospitals Industrial facilities.',
      specificationTable: {
        headerRows: [
          [
            'Wire Size',
            'No. of wire / Diameter of Wire',
            'Insulation Thickness',
            'OD',
            'Max Conductor Resistance at 20°C',
            'Current Rating'
          ],
          [
            'sq.mm',
            'No./mm',
            'mm',
            'mm',
            'Ω/km',
            'Amps'
          ]
        ],
        rows: [
          ['0.50', '16/0.20', '0.60', '2.10', '39.0', '4'],
          ['0.75', '10/0.30* OR 24/0.20', '0.60', '2.40', '26.0', '8'],
          ['1.0', '14/0.30 OR 32/0.20', '0.60', '2.65', '18.10', '11'],
          ['1.5', '22/0.30* OR 30/0.250', '0.70', '3.0', '12.10', '13'],
          ['2.5', '36/0.30* OR 50/0.250', '0.80', '3.6', '7.41', '18'],
          ['4.0', '56/0.30', '0.80', '4.0', '4.95', '24'],
          ['6.0', '84/0.30', '0.80', '5.1', '3.30', '31'],
          ['10.0', '140/0.30', '1.0', '6.3', '1.91', '52'],
          ['16.0', '224/0.30', '1.0', '8.0', '1.21', '70']
        ]
      },
      tableNotes: [
        'Class-2 Conductor.',
        'If Required Tinned copper conductor also available.'
      ]
    }
  },
  {
    id: 'dc-solar-cable',
    name: 'Solar Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/DC Solar cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/DC Solar cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'EN 50618 / IEC 62930 / IS 17293',
      salientFeatures: [
        'Tinned Flexible Copper Conductor for oxidation resistance',
        'Cross-linked Polyolefin (XLPO) Insulation & Sheath',
        'Halogen-free and Low Smoke emission',
        'Excellent UV, Ozone, and weather resistance'
      ],
      technicalData: {
        'Voltage Grade': '1.5 KV DC (1.8 KV max)',
        'Operating Temp': '-40°C to +90°C (Max. conductor 120°C)',
        'Short Circuit Temp': '250°C',
        'Expected Lifespan': '25 Years'
      },
      standardPacking: {
        'Conductor': 'Class 5 Flexible Tinned Copper',
        'Insulation': 'Halogen-Free Cross-Linked Polyolefin (XLPO)',
        'Outer Sheath': 'Halogen-Free Cross-Linked Polyolefin (XLPO)',
        'Coils/Drums': '1000m on non-returnable wooden/plastic drums'
      },
      coreColour: 'Black or Red.',
      application: 'Specifically designed for cabling solar panels in photovoltaic plants, solar parks, and commercial/residential solar rooftops. Suitable for direct burial or cable trays.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Wires / Diameter (mm)',
            'Insulation Thickness (mm)',
            'Outer Diameter (mm)',
            'Max Resistance at 20°C (Ω/km)',
            'Current Rating in Air (Amps)'
          ]
        ],
        rows: [
          ['2.5', '50/0.25', '0.70', '5.0', '8.21', '30'],
          ['4.0', '56/0.30', '0.70', '5.8', '5.09', '41'],
          ['6.0', '84/0.30', '0.80', '6.6', '3.39', '55'],
          ['10.0', '140/0.30', '0.80', '7.8', '1.95', '76']
        ]
      },
      tableNotes: [
        'Halogen free compound as per EN 50618.'
      ]
    }
  },
  {
    id: 'round-flexible-cable',
    name: 'Round Flexible Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Round flexible cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Round flexible cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 694',
      salientFeatures: [
        'Multi-core configuration in a round profile',
        'High flexibility and smooth outer finish',
        'FR PVC insulation and sheath compounds',
        'Durable structure resists kinking and twists'
      ],
      technicalData: {
        'Standard': 'IS 694:2010 / BS 6500',
        'Conductor': 'Flexible Bare Copper',
        'Insulation': 'PVC Insulated',
        'Voltage Grade': '1.1 KV',
        'Working Temperature': 'Up to +70°C',
        'Test Voltage': '3.0 KV',
        'Core Configuration': '2 Core / 3 Core / 4 Core',
        'Minimum Bending Radius': '6 × Cable Diameter',
        'Packing Length': '100m / 200m / 300m / 500m / 1000m'
      },
      standardPacking: {
        'Conductor': 'Flexible Bare Copper (Class 5)',
        'Insulation': 'FR PVC Compound',
        'Outer Sheath': 'FR PVC (White, Black, or Gray)'
      },
      coreColour: '2 Core: Red & Black. 3 Core: Red, Yellow & Blue. 4 Core: Red, Yellow, Blue & Green/Yellow.',
      application: 'Round Flexible Cables are manufactured for applications requiring superior flexibility and dependable electrical performance. Built with high-quality copper conductors and durable PVC insulation, these cables provide excellent resistance to moisture, abrasion, and mechanical stress, making them ideal for industrial and domestic use.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Wires / Diameter (mm)',
            'Insulation Thickness (mm)',
            'Sheath Thickness (mm)',
            'Max Resistance at 20°C (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['0.5', '16/0.20', '0.60', '0.90', '39.0', '4'],
          ['0.75', '24/0.20', '0.60', '0.90', '26.0', '7'],
          ['1.0', '32/0.20', '0.60', '0.90', '19.5', '11'],
          ['1.5', '30/0.25', '0.60', '0.90', '13.3', '15'],
          ['2.5', '50/0.25', '0.70', '1.00', '7.98', '20'],
          ['4.0', '56/0.30', '0.80', '1.00', '4.95', '26']
        ]
      },
      tableNotes: [
        'Suitable for internal equipment connection wiring.'
      ]
    }
  },
  {
    id: 'welding-cable',
    name: 'Welding Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Welding cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Welding cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'Generally conforms to, Based on IS:9857-1990 VDE 0282, IEC 245-6, BS 6899',
      salientFeatures: [
        'Ultra high performance flexible welding lead, double insulated for longer life and added safety',
        'Better flame retardant properties',
        'Outstanding toughness & durability',
        'High resistance to cuts, tears & abrasion',
        'Resistance to oil, solvents and chemicals',
        'Excellent ozone and weather resistant'
      ],
      technicalData: {
        'Operating Temp': '-20°C to max.+90°C',
        'Nominal Voltage': '600 V',
        'Spark Test': '3.0 KV(ac)',
        'Min. Bending Radius': '6 x Cable Diameter'
      },
      standardPacking: {
        'Coils': '100, 200, 300 and 500m',
        'Conductor': 'High conductivity, bare annealed copper flexible conductor, EC copper class 5 & class 6 generally conforms to IS:8130-1984, IEC 60228',
        'Separation': 'Polyester tape',
        'Insulation': 'Double Insulated / single insulated flexible Nitrile rubber HOFR insulated as per IS:6380-1984 Orange / Black Jacket'
      },
      coreColour: 'Orange / Black Jacket.',
      application: 'Designed for the secondary (high current) connection to automatic or hand-held metal arc welding electrodes. It is suitable for flexible use under rugged conditions, on assembly lines & conveyor systems, in machine tool and automatically operated line & spot welding machines.',
      specificationTable: {
        headerRows: [
          [
            { label: 'Cable Size', rowSpan: 2 },
            { label: 'Insulation Thickness', colSpan: 2 },
            { label: 'Cable Diameter (approx)', colSpan: 2 },
            { label: 'Max Resistance at 20°C', rowSpan: 2 },
            { label: 'Current Rating (Welding Duty Cycles)', colSpan: 5 },
            { label: 'Non-Welding Current', rowSpan: 2 }
          ],
          [
            { label: 'Inner Ins. (mm)' },
            { label: 'Outer Sheath (mm)' },
            { label: 'Single Ins. (mm)' },
            { label: 'Double Ins. (mm)' },
            { label: '100% Duty' },
            { label: '85% Duty' },
            { label: '60% Duty' },
            { label: '30% Duty' },
            { label: '20% Duty' }
          ],
          [
            'sq.mm',
            'mm',
            'mm',
            'mm',
            'mm',
            'Ω/km',
            'Amps.',
            'Amps.',
            'Amps.',
            'Amps.',
            'Amps.',
            'Amps.'
          ]
        ],
        rows: [
          ['10.0', '1.0', '1.10', '7.0', '8.50', '1.910', '105', '115', '135', '190', '235', '110'],
          ['16.0', '1.10', '1.30', '9.0', '10.0', '1.210', '135', '145', '175', '245', '302', '138'],
          ['25.0', '1.20', '1.40', '10.30', '12.0', '0.780', '180', '195', '230', '330', '402', '187'],
          ['35.0', '1.20', '1.60', '11.85', '13.50', '0.554', '225', '245', '290', '410', '503', '233'],
          ['50.0', '1.30', '1.70', '14.0', '15.20', '0.386', '285', '310', '370', '520', '637', '295'],
          ['70.0', '1.40', '1.80', '15.80', '18.0', '0.272', '355', '385', '460', '650', '794', '372'],
          ['95.0', '1.80', '2.0', '17.70', '20.60', '0.206', '430', '470', '560', '790', '961', '449'],
          ['120.0', '2.0', '2.10', '19.50', '23.0', '0.161', '500', '540', '650', '910', '1118', '523']
        ]
      },
      tableNotes: [
        'Duty cycles based on manual or automatic operations.',
        'HOFR (Heat, Oil & Flame Retardant) compounds.'
      ]
    }
  },
  {
    id: 'auto-cable',
    name: 'Auto Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/auto cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/auto cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'ISO 6722 / DIN 72551',
      salientFeatures: [
        'Thin-wall insulation reduces overall cable diameter & weight',
        'Highly flexible conductor design',
        'Excellent resistance to heat, fuel, oil, and battery acid',
        'Mechanically tough and abrasion resistant'
      ],
      technicalData: {
        'Standard': 'Annealed Copper',
        'Conductor': 'Flexible (Class 5)',
        'Insulation': 'Double Insulated Rubber',
        'Cable Type': 'Oil & Flame Retardant Rubber',
        'Temperature Range': '600 V',
        'Flexibility': '-20°C to +90°C',
        'Mechanical Strength': 'High',
        'Electrical Performance': 'Excellent',
        'Packing Length': '100m / 200m / 500m / 1000m Coils'
      },
      standardPacking: {
        'Conductor': 'Class 5 Flexible Bare Copper',
        'Insulation': 'Auto Grade PVC / Cross-linked PVC',
        'Coils': '100m, 500m spool reels'
      },
      coreColour: 'Red, Black, Yellow, Blue, Green, White, and various dual-color striped combinations.',
      application: 'Auto Cables are designed for automotive wiring and harness applications, offering reliable electrical performance and long service life. Made with flexible bare copper conductors and durable PVC insulation, they provide excellent flexibility, durability, and resistance to heat, oil, and mechanical stress. Ideal for use in various vehicle electrical systems.',
      specificationTable: {
        headerRows: [
          [
            'Nominal Area (sq.mm)',
            'No. of Wires / Diameter (mm)',
            'Wall Thickness (mm)',
            'Max Outer Diameter (mm)',
            'Max Resistance at 20°C (mΩ/m)',
            'Current Rating at 30°C (Amps)'
          ]
        ],
        rows: [
          ['0.5', '16/0.20', '0.60', '2.3', '38.2', '9'],
          ['0.75', '24/0.20', '0.60', '2.5', '25.4', '12'],
          ['1.0', '32/0.20', '0.60', '2.7', '19.1', '15'],
          ['1.5', '30/0.25', '0.60', '3.0', '12.7', '21'],
          ['2.5', '50/0.25', '0.70', '3.6', '7.6', '30'],
          ['4.0', '56/0.30', '0.80', '4.4', '4.7', '41']
        ]
      },
      tableNotes: [
        'Meets automotive DIN specifications.'
      ]
    }
  },
  {
    id: 'battery-cable',
    name: 'Battery Cables',
    image: '/assets/images/WEB WIRE IMAGE/VERTICAL/Battery cable.png',
    image2: '/assets/images/WEB WIRE IMAGE/HORIZONTAL/Battery cable.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 2465 / BS 6862',
      salientFeatures: [
        'Extra flexible large cross-section conductor',
        'Excellent resistance to battery acid, gasoline, and grease',
        'Heavy-duty insulation resists cracking and high currents',
        'Outstanding durability under engine hood temperatures'
      ],
      technicalData: {
        'Standard': 'SAE J1127, VDE 0295, IEC 60228, IS 2465, BS 6862',
        'Conductor': 'Flexible Bare Copper (Class 5 / Class 6)',
        'Insulation': 'HR PVC / HOFR (TPR Rubber)',
        'Voltage Rating': 'Low Voltage Automotive Applications',
        'Temperature Range': '20°C to 105°C',
        'Flexibility': 'Excellent',
        'Mechanical Strength': 'High',
        'Electrical Performance': 'Excellent Flame Retardant Properties',
        'Packing Length': '25m, 50m, 100m, 200m & 500m Coils'
      },
      standardPacking: {
        'Conductor': 'Flexible Bare Copper (Class 5/6)',
        'Insulation': 'Heavy-duty Automotive PVC / TPE / Rubber',
        'Coils': '30m, 50m, 100m reels'
      },
      coreColour: 'Red or Black.',
      application: 'Battery Cables are specially designed for low-voltage automotive electrical systems, delivering reliable power transmission and excellent flexibility. Manufactured using flexible bare copper conductors with high-quality insulation, these cables offer superior resistance to water, petrol, diesel, acids, lubricating oils, grease, and mechanical stress. Ideal for vehicle and motorcycle battery connections where durability and flexibility are essential.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Wires / Diameter (mm)',
            'Insulation Thickness (mm)',
            'Approx Outer OD (mm)',
            'Max Conductor Resistance (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['16.0', '126/0.40', '1.2', '8.5', '1.210', '110'],
          ['25.0', '196/0.40', '1.4', '10.2', '0.780', '150'],
          ['35.0', '276/0.40', '1.4', '11.8', '0.554', '185'],
          ['50.0', '396/0.40', '1.6', '13.6', '0.386', '230'],
          ['70.0', '360/0.50', '1.6', '15.5', '0.272', '290'],
          ['95.0', '475/0.50', '1.8', '18.0', '0.206', '360']
        ]
      },
      tableNotes: [
        'Heavy-duty battery lead connections.'
      ]
    }
  },
  {
    id: 'fire-survival-cable',
    name: 'Fire Survival Cable',
    image: '/assets/images/cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'BS 7846 / BS 6387',
      salientFeatures: ['Fire resistant', 'Low smoke zero halogen'],
      technicalData: {
        'Voltage Grade': '600/1000V',
        'Operating Temp': '-15°C to +90°C',
        'Fire Resistance': 'Category CWZ (BS 6387)',
        'Insulation': 'Mica Glass Tape + XLPE'
      },
      standardPacking: {
        'Packing': 'Drums 500m, 1000m'
      },
      coreColour: 'Red, Black, Blue, Yellow.',
      application: 'Designed for systems that must function during a fire, such as emergency lighting and fire alarms.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Cores',
            'Insulation Thickness (mm)',
            'Approx OD (mm)',
            'Max Resistance (Ω/km)',
            'Current Rating in Air (Amps)'
          ]
        ],
        rows: [
          ['1.5', '2C', '0.7', '10.5', '12.1', '18'],
          ['2.5', '2C', '0.7', '11.5', '7.41', '24'],
          ['4.0', '2C', '0.7', '12.5', '4.95', '32'],
          ['1.5', '4C', '0.7', '12.5', '12.1', '15'],
          ['2.5', '4C', '0.7', '13.8', '7.41', '20']
        ]
      },
      tableNotes: [
        'Maintains circuits for 3 hours under extreme fire conditions.'
      ]
    }
  },
  {
    id: 'twin-cable-with-earth',
    name: 'Twin Cable With Earth',
    image: '/assets/images/cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 694:2010',
      salientFeatures: ['Twin flat configuration with a central bare earth conductor'],
      technicalData: {
        'Voltage Grade': 'Up to 1100V',
        'Operating Temp': '70°C',
        'Application': 'Domestic wiring circuit'
      },
      standardPacking: {
        'Packing': 'Coils 90m, 100m'
      },
      coreColour: 'Red & Black (Phase/Neutral), Bare Copper (Earth).',
      application: 'Widely used in domestic wiring for socket outlets and lighting circuits.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'Earth Wire Size (sq.mm)',
            'Insulation Thickness (mm)',
            'Approx Dimensions (mm)',
            'Max Resistance (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['1.0', '1.0', '0.6', '4.5 x 9.2', '18.1', '11'],
          ['1.5', '1.0', '0.7', '5.2 x 10.5', '12.1', '14'],
          ['2.5', '1.5', '0.8', '6.0 x 12.0', '7.41', '18'],
          ['4.0', '1.5', '0.8', '6.5 x 13.0', '4.95', '24']
        ]
      },
      tableNotes: [
        'Flat parallel wiring configuration.'
      ]
    }
  },
  {
    id: 'instrumentation-cable',
    name: 'Instrumentation Cable',
    image: '/assets/images/cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'BS 5308 / EN 50288',
      salientFeatures: ['Individual and overall shielding for noise reduction'],
      technicalData: {
        'Voltage Rating': '300/500V',
        'Shielding': 'Aluminium Foil Tape',
        'Insulation': 'PVC / PE'
      },
      standardPacking: {
        'Packing': 'Drums 500m, 1000m'
      },
      coreColour: 'Pairs: Black & White with pair numbers.',
      application: 'Used in industrial automation and control loops for signal transmission.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Pairs',
            'Insulation Thickness (mm)',
            'Approx OD (mm)',
            'Conductor Resistance (Ω/km)',
            'Mutual Capacitance (nF/km)'
          ]
        ],
        rows: [
          ['0.5', '1 Pair', '0.5', '6.5', '39.2', '115'],
          ['0.75', '1 Pair', '0.6', '7.2', '26.0', '115'],
          ['0.5', '5 Pairs', '0.5', '12.5', '39.2', '115'],
          ['0.75', '5 Pairs', '0.6', '14.2', '26.0', '115']
        ]
      },
      tableNotes: [
        'Individual pair shielding prevents cross-talk loop noise.'
      ]
    }
  },
  {
    id: 'harmonize-cables',
    name: 'Harmonize Cables',
    image: '/assets/images/cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'HAR standard / VDE 0281/0282',
      salientFeatures: ['Globally harmonized specifications for easy export/use'],
      technicalData: {
        'Voltage Rating': '450/750V',
        'HAR Code': 'H07V-K / H05V-K',
        'Insulation': 'PVC'
      },
      standardPacking: {
        'Packing': 'Coils 100m, Reels'
      },
      coreColour: 'Various single core solid colors.',
      application: 'Standardized wiring for electronic equipment and export machinery.',
      specificationTable: {
        headerRows: [
          [
            'HAR Type',
            'Size (sq.mm)',
            'Wall Thickness (mm)',
            'Approx Outer OD (mm)',
            'Max Resistance at 20°C (Ω/km)',
            'Current Rating (Amps)'
          ]
        ],
        rows: [
          ['H05V-K', '0.5', '0.6', '2.1', '39.0', '3'],
          ['H05V-K', '0.75', '0.6', '2.3', '26.0', '6'],
          ['H07V-K', '1.0', '0.7', '2.8', '19.5', '10'],
          ['H07V-K', '1.5', '0.7', '3.1', '13.3', '16'],
          ['H07V-K', '2.5', '0.8', '3.8', '7.98', '21']
        ]
      },
      tableNotes: [
        'Tested as per globally recognized HAR directive guidelines.'
      ]
    }
  },
  {
    id: 'armoured-cables',
    name: 'Armoured Cables',
    image: '/assets/images/cables.png',
    subCategories: [],
    specs: {
      cableStandard: 'IS 7098 (Part 1/2) / IS 1554',
      salientFeatures: ['Steel wire / strip armouring for mechanical protection'],
      technicalData: {
        'Voltage Grade': '1.1 KV',
        'Armour': 'Galvanized Steel Wire',
        'Insulation': 'XLPE / PVC'
      },
      standardPacking: {
        'Packing': 'Drums 500m, 1000m'
      },
      coreColour: 'Red, Yellow, Blue, Black.',
      application: 'Underground power transmission, heavy industrial installations, direct burial.',
      specificationTable: {
        headerRows: [
          [
            'Size (sq.mm)',
            'No. of Cores',
            'Insulation Thickness (mm)',
            'Armour Size (mm)',
            'Approx OD (mm)',
            'Current Rating in Ground (Amps)'
          ]
        ],
        rows: [
          ['4.0', '3C', '0.7', '1.4', '15.5', '35'],
          ['6.0', '3C', '0.7', '1.4', '16.8', '43'],
          ['10.0', '3C', '0.7', '1.4', '18.5', '58'],
          ['16.0', '3C', '0.7', '1.4', '20.5', '76']
        ]
      },
      tableNotes: [
        'Steel wire armouring offers excellent tensile strength for burial.'
      ]
    }
  }
];
