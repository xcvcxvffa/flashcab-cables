export const productCategories = [
  {
    id: 'single-core-wires',
    name: 'Single Core Wires',
    image: '/assets/images/Product_Image/SINGAL CORE VERTICAL.png',
    image2: '/assets/images/Product_Image/Single Core.png',
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
    id: 'house-wires',
    name: 'Building wire (House wire)',
    image: '/assets/images/Product_Image/building Wires Vertical.png',
    image2: '/assets/images/Product_Image/Building wire.jpeg',
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
    id: 'solar-cable',
    name: 'Solar Cable',
    image: '/assets/images/Product_Image/SOLAR CABLE VERTICAL.png',
    image2: '/assets/images/Product_Image/Solar cable wire.jpg.jpeg',
    subCategories: [],
    specs: {
      cableStandard: 'EN 50618',
      standardPacking: {
        'Conductor': 'Flexible Electrolytic fine Tinned copper class-5 conductor according to IEC 60228',
        'Insulation': 'XLPO (Crosslinked Halogen Free & Flame Retardant)',
        'Sheath': 'XLPO (Crosslinked Halogen Free & Flame Retardant)'
      },
      salientFeatures: [
        'UV resistant',
        'Weather resistant',
        'Ozone resistant',
        'Moisture resistant',
        'Abrasion resistant',
        'Oil resistant',
        'Flexible for easy installation',
        'Halogen free',
        'Low smoke emission'
      ],
      technicalData: {
        'Electrical Characteristics': '',
        'Rated Voltage': '0.6/1 kV AC',
        'Rated DC Voltage': '1.5 kV',
        'Maximum Permitted DC Voltage': '1.8 kV (conductor/conductor,non earthen system, circuit not under load)',
        'Maximum Permitted AC Voltage': '1 KV',
        'Working Voltage': 'DC 1000 V',
        'Spark Test': '6000 V. ac (8400 Vdc)',
        'Voltage Withstand': '6500 V as per EN50395 for 5 min',
        'Ampacity': 'According to requirements for cables for PV systems'
      },
      coreColour: 'Red, Black and also available black color with red lining',
      application: [
        'Solar panel interconnection, PV string wiring, Inverter connections',
        'Battery energy storage systems'
      ],
      specificationTable: {
        headerRows: [
          [
            { label: 'Cable<br/>Size' },
            { label: 'Max. Conductor<br/>D.C. Resistance<br/>at 20°C' },
            { label: 'Insulation<br/>Thickness' },
            { label: 'Sheath<br/>Thickness' },
            { label: 'Outer<br/>Diameter' },
            { label: 'Current Rating<br/>Under Continues<br/>Operation 90°C<br/>And Ambient<br/>Temperature 40°C<br/>(in A)', rowSpan: 2 },
            { label: 'Short Circuit<br/>Current Rating<br/>For 1 sec.<br/>Duration (in KA)', rowSpan: 2 }
          ],
          [
            { label: 'sq.mm' },
            { label: 'ohm /km' },
            { label: '(Nominal) mm' },
            { label: '(Nominal) mm' },
            { label: 'mm' }
          ]
        ],
        rows: [
          ['1.5', '13.7', '0.60', '0.70', '4.30', '22', '0.189'],
          ['2.5', '8.21', '0.70', '0.80', '5.0', '30', '0.315'],
          ['4.0', '5.09', '0.70', '0.80', '5.60', '42', '0.504'],
          ['6.0', '3.39', '0.80', '0.90', '6.20', '52', '0.756'],
          ['10.0', '1.95', '0.80', '0.90', '7.10', '76', '1.26'],
          ['16.0', '1.24', '0.90', '1.0', '8.30', '95', '2.02']
        ]
      }
    }
  },
  {
    id: 'round-flexible-cable',
    name: 'Industrial Flexible Cable',
    image: '/assets/images/Product_Image/Industrial Round Flexible Cables.png',
    image2: '/assets/images/Product_Image/round-flexible.png',
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
    id: 'ariel-bunched-cables',
    name: 'LT AB (Aerial Bunch) 1100V Cable',
    image: '/assets/images/Product_Image/LT-AB-Cable-Main.png',
    image2: '/assets/images/Product_Image/LT-AB-Cable-Construction.png',
    subCategories: [],
    specs: {
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
      application: 'Aerial Bunched Cables (ABC) are designed for safe and reliable overhead power distribution. Their insulated bundled construction minimizes power theft, short circuits, and environmental damage while ensuring reduced maintenance and enhanced operational safety. Ideal for urban, rural, and residential electrification projects.'
    }
  },
  {
    id: 'mvcc',
    name: 'MVCC (MEDIUM VOLTAGE COVERED CONDUCTOR)',
    image: '/assets/images/Product_Image/mvcc.png',
    image2: '/assets/images/Product_Image/mvcc.png',
    imgList: [
      { img: '/assets/images/Product_Image/mvcc.png' }
    ],
    subCategories: [],
    specs: {
      cableStandard: 'IEC: 61089, IS : 398 -2, IEC: 61089, BS EN : 50182/50397',
      construction: {
        'Conductor': 'Longitudinally watertight stranded all aluminium alloy (AAAC), AL-7, AL-59, or AL-59 Aluminium Clad Steel (ACS).',
        'Shielding': 'Semi Conducting Cross-Linked Polymer.',
        'Inner Covering': 'Low-Density track resistance cross-linked Polyethylene (Without Carbon Black)',
        'Outer Covering': 'High-density UV & track resistance Cross-linked Polyethylene'
      },
      application: [
        'Overhead Power Distribution Lines',
        'Urban and Suburban Areas',
        'High Environmental Stress Areas',
        'Areas with Vegetation',
        'Coastal and Harsh Environments',
        'High-Altitude Installations',
        'Industrial Facilities',
        'Renewable Energy Projects',
        'Railway Electrification'
      ]
    }
  }
];