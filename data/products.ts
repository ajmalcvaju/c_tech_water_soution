export interface Product {
  id: string;
  name: string;
  category: "water-purifiers" | "treatment-plants" | "industrial-gases" | "medical-oxygen";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  specs?: { label: string; value: string }[];
  badge?: string;
  isFeatured?: boolean;
}

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "water-purifiers", label: "Water Purifiers", count: 5 },
  { id: "treatment-plants", label: "Water Treatment Plants", count: 7 },
  { id: "industrial-gases", label: "Industrial Gases", count: 2 },
  { id: "medical-oxygen", label: "Medical Oxygen", count: 2 },
];

export const productsData: Product[] = [
  // --- WATER PURIFIERS (Priority #1) ---
  {
    id: "c-tech-aqua-plus-purifier",
    name: "C-Tech Aqua Plus Domestic Water Purifier",
    category: "water-purifiers",
    categoryLabel: "Water Purifiers",
    shortDescription: "Signature C-Tech Aqua Plus multi-stage domestic water purifier with food-grade storage and external pre-filter.",
    description: "The signature C-Tech Aqua Plus domestic water purifier engineered specifically for Kerala homes and commercial establishments. Features high-performance multi-stage RO + UV + UF filtration, an external heavy-duty spun polypropylene sediment pre-filter, transparent water storage reservoir with faucet, and intelligent LED operation indicators for clean, healthy drinking water.",
    image: "/images/products/c-tech-aqua-plus-clean.jpg",
    features: [
      "Multi-stage RO + UV + UF membrane filtration technology",
      "Integrated food-grade water tank with level viewing window",
      "External wall-mount heavy-duty sediment pre-filter cartridge included",
      "Durable quick-dispensing tap with safety lever",
      "Smart LED status indicators (Power, Purifying, Tank Full)",
      "Engineered for high TDS well water and municipal supply in Kerala"
    ],
    specs: [
      { label: "Purification Capacity", value: "12 to 15 Litres/Hour" },
      { label: "Storage Capacity", value: "10 Litres (Food-Grade)" },
      { label: "Technology", value: "RO + UV + UF + Mineral Balancer" },
      { label: "Pre-Filter", value: "External Heavy-Duty PP Spun Cartridge" },
      { label: "Installation", value: "Wall Mount / Countertop" }
    ],
    badge: "Bestseller",
    isFeatured: true
  },
  {
    id: "c-tech-crystal-blue-purifier",
    name: "C-Tech Crystal Blue Transparent Tank Water Purifier",
    category: "water-purifiers",
    categoryLabel: "Water Purifiers",
    shortDescription: "Modern transparent cobalt-blue tank purifier with wave graphics, push-tap dispenser, and external pre-filter.",
    description: "Designed for contemporary kitchens, the C-Tech Crystal Blue features a transparent cobalt-blue reservoir with elegant gold wave motifs that provides complete visibility of purified water levels. Combined with comprehensive RO + UV filtration, an external wall-mounted sediment pre-filter, and smooth push-lever dispensing tap for reliable daily hydration.",
    image: "/images/products/c-tech-crystal-blue-clean.jpg",
    features: [
      "Transparent cobalt-blue water tank with real-time level visibility",
      "Gold wave accent design with ergonomic push-lever faucet",
      "External heavy-duty sediment pre-filter assembly included",
      "High-rejection RO membrane eliminates heavy metals, microbes, and odor",
      "Automatic float-valve cutoff preventing any tank overflow",
      "Compact wall-mount footprint optimized for residential kitchens"
    ],
    specs: [
      { label: "Purification Capacity", value: "12 to 15 Litres/Hour" },
      { label: "Tank Volume", value: "10 to 12 Litres Transparent Tank" },
      { label: "Purification Stages", value: "RO + UV + Pre-Filtration + Post Carbon" },
      { label: "Mounting", value: "Wall Mounted" }
    ],
    badge: "Popular"
  },
  {
    id: "c-tech-stainless-steel-purifier",
    name: "C-Tech Food-Grade Stainless Steel & Glass Hybrid Purifier",
    category: "water-purifiers",
    categoryLabel: "Water Purifiers",
    shortDescription: "Hygienic 304 food-grade stainless steel storage tank with floral laser etch and designer glass art panel.",
    description: "Built for families and institutions demanding 100% microplastic-free drinking water. Combines a food-grade non-magnetic 304 stainless steel cylindrical storage tank with an artistic glass front panel and multi-stage RO+UV filtration. Includes an external heavy-duty sediment pre-filter cartridge and durable chrome dispensing tap.",
    image: "/images/products/c-tech-stainless-steel-purifier.jpg",
    features: [
      "100% Microplastic-Free Food-Grade 304 Stainless Steel Tank",
      "Designer art glass fascia with modern aquatic leaf motif",
      "External heavy-duty sediment pre-filter cartridge included",
      "Solid brass & chrome lever dispensing tap",
      "Multi-stage RO + UV purification eliminating bacteria and heavy metals",
      "Total microbial hygiene with easy sterilization"
    ],
    specs: [
      { label: "Tank Material", value: "Hygienic Food-Grade SS 304" },
      { label: "Storage Volume", value: "8 to 12 Litres" },
      { label: "Filtration Tech", value: "RO + UV + Pre-Sediment Cartridge" },
      { label: "Fascia Panel", value: "Toughened Art Glass Graphic" }
    ],
    badge: "Eco-Friendly"
  },
  {
    id: "c-tech-agua-clan-dispenser",
    name: "Agua Clan Heavy-Duty Stainless Steel Water Dispenser",
    category: "water-purifiers",
    categoryLabel: "Water Purifiers",
    shortDescription: "Robust brushed stainless steel cabinet with designer floral glass panel and chrome dispensing faucet.",
    description: "High-durability stainless steel water dispenser engineered for homes, showrooms, clinics, and offices. Features an all-stainless steel lower pedestal and upper housing coupled with an eye-catching illuminated red floral front panel, reliable chrome dispensing tap, and compatibility with domestic and commercial purification inputs.",
    image: "/images/products/agua-clan-ss-dispenser.jpg",
    features: [
      "Rugged brushed SS 304 stainless steel construction",
      "Striking illuminated floral glass front panel with Agua Clan branding",
      "Heavy-duty chrome plated push-type dispensing tap",
      "Dual mounting capability: sturdy floor standing or wall-mount",
      "Compatible with direct RO/UV purification or gravity filtration",
      "Rust-proof and designed for high-traffic environments"
    ],
    specs: [
      { label: "Body Construction", value: "Heavy-Gauge Stainless Steel (SS 304)" },
      { label: "Front Panel", value: "Illuminated Designer Art Glass" },
      { label: "Dispenser Tap", value: "Commercial Chrome Faucet" },
      { label: "Mounting Type", value: "Pedestal Standing / Wall Bracket" }
    ],
    badge: "New Arrival"
  },
  {
    id: "c-tech-commercial-water-cooler",
    name: "C-Tech Stainless Steel Commercial Water Cooler & Dispenser",
    category: "water-purifiers",
    categoryLabel: "Water Purifiers",
    shortDescription: "High-capacity stainless steel water cooling and purification dispenser for offices, schools, and clinics.",
    description: "Heavy-duty commercial water dispenser designed for continuous high-demand supply. Equipped with integrated filtration, powerful cooling compressor, and dual/triple stainless steel dispensing taps.",
    image: "/images/products/commercial-water-cooler-ss.jpg",
    features: [
      "All-stainless steel rugged exterior and inner cooling tank",
      "High-efficiency energy-saving cooling compressor",
      "Dual taps for ambient and chilled purified water",
      "Integrated sediment and active carbon pre-filtration",
      "Overflow drainage tray with splash-free design"
    ],
    specs: [
      { label: "Cooling Capacity", value: "20 to 100 Litres/Hour" },
      { label: "Storage Volume", value: "40L to 150L" },
      { label: "Dispenser Taps", value: "2 to 3 Chrome Plated Heavy-Duty Faucets" }
    ],
    badge: "Commercial"
  },

  // --- WATER TREATMENT PLANTS (Priority #2) ---
  {
    id: "c-tech-dual-vessel-frp-plant",
    name: "C-Tech Dual-Stage FRP Whole-House Water Treatment Plant",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "Heavy-duty twin-vessel FRP composite system combining sediment removal, iron filtration, and activated carbon purification in series.",
    description: "Our premier whole-house water treatment plant engineered for homes, villas, and commercial properties facing multi-contaminant water (mud, high iron, and foul swampy odors). Features dual high-pressure blue FRP composite vessels connected in series with synchronized multiport valves, delivering complete roof-to-tap water purification directly at the overhead tank inlet.",
    image: "/images/products/c-tech-dual-frp-plant.jpg",
    features: [
      "Dual-vessel series configuration for comprehensive multi-barrier treatment",
      "Stage 1: Multi-grade sediment & catalytic iron oxidation filtration",
      "Stage 2: High-iodine virgin activated carbon for complete odor and color removal",
      "Dual top-mounted multiport valves for independent or synchronized backwashing",
      "Heavy-duty corrosion-free composite FRP construction built for outdoor weather",
      "Zero pressure drop with full rooftop-to-tap household water protection"
    ],
    specs: [
      { label: "System Configuration", value: "Dual Vessel (Twin Stage Series Connection)" },
      { label: "Filtration Stages", value: "Stage 1: Sand/Sediment & IRP | Stage 2: Activated Carbon" },
      { label: "Flow Rate Capacity", value: "1500 to 6000 Litres/Hour" },
      { label: "Vessel Sizes Available", value: "10x54, 12x48, 13x54, 14x65 inches (Dual)" },
      { label: "Control Valves", value: "Dual Manual or Automatic Multiport Valves" },
      { label: "Installation", value: "Overhead Tank Inlet / Ground Pressure Pump" }
    ],
    badge: "Dual Vessel (2-Stage)",
    isFeatured: true
  },
  {
    id: "c-tech-frp-sediment-filter",
    name: "C-Tech FRP Automatic Sediment & Sand Filter",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "High-pressure FRP vessel with multi-grade quartz media to eliminate mud, silt, algae, and suspended turbidity.",
    description: "Engineered for open wells and borewells with muddy, cloudy, or silt-heavy water. Operates at the overhead tank inlet to trap suspended particles, dirt, and organic debris down to 20 microns using layered quartz sand and gravel media. Equipped with a top-mounted multiport valve for effortless manual or automatic backwashing.",
    image: "/images/products/c-tech-frp-outdoor-installation.jpg",
    features: [
      "High-pressure corrosion-free composite FRP vessel with multi-grade quartz bed",
      "Eliminates visible mud, silt, colloidal clay, and physical turbidity",
      "Protects overhead tanks, plumbing lines, and appliances from sediment choking",
      "Top multiport control valve for quick backwash, rinse, and service cycles",
      "Long-lasting filter media with minimal operational maintenance",
      "Direct overhead tank inlet filtration for whole-house water protection"
    ],
    specs: [
      { label: "Filtration Media", value: "Multi-Grade Quartz Silica Sand, Gravel & Silex" },
      { label: "Flow Rate Capacity", value: "1000 to 5000 Litres/Hour" },
      { label: "Operating Pressure", value: "Up to 10 Bar Tested" },
      { label: "Vessel Sizes", value: "10x54, 12x48, 13x54, 14x65 inches" },
      { label: "Control Valve", value: "3-Way / 5-Way Multiport Valve" }
    ],
    badge: "Sediment Filter"
  },
  {
    id: "c-tech-frp-carbon-filter",
    name: "C-Tech FRP Activated Carbon Filter (Odor & Color)",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "High-iodine activated carbon vessel for complete elimination of foul smell, chlorine, and organic discoloration.",
    description: "Specialized whole-house FRP adsorption system packed with high-iodine virgin coconut-shell activated carbon (900-1100 IV). Effectively eliminates swampy well odors, chlorine smell, decomposing organic odors, chemical residues, and yellowish-brown tint, delivering fresh, odor-free, and sparkling clear water to every tap.",
    image: "/images/products/c-tech-frp-outdoor-installation.jpg",
    features: [
      "High-iodine coconut-shell activated carbon media with maximum porosity",
      "Eliminates swampy well odor, rotting organic smells, and foul chlorine taste",
      "Removes yellowish-brown organic discoloration for crystal clear water",
      "Non-chemical physical adsorption process safe for sensitive skin and hair",
      "Top multiport valve enabling simple backwash and rinse cycles",
      "Heavy-duty fiber-reinforced plastic (FRP) pressure vessel construction"
    ],
    specs: [
      { label: "Adsorption Media", value: "High-Iodine Coconut Shell Activated Carbon (900-1100 IV)" },
      { label: "Flow Rate Capacity", value: "1000 to 5000 Litres/Hour" },
      { label: "Operating Pressure", value: "Up to 10 Bar Tested" },
      { label: "Vessel Sizes", value: "10x54, 12x48, 13x54, 14x65 inches" },
      { label: "Control Valve", value: "Manual or Automatic Multiport Valve" }
    ],
    badge: "Carbon Filter"
  },
  {
    id: "c-tech-iron-removal-plant",
    name: "C-Tech FRP Catalytic Iron Removal Filter (IRP)",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "Dedicated catalytic media plant that oxidizes and eliminates dissolved iron, preventing red rust stains and metallic taste.",
    description: "Engineered specifically for Kerala borewells with heavy dissolved iron content. Uses catalytic manganese dioxide and Birm media beds to rapidly oxidize soluble ferrous iron into insoluble particles and filter them out down to safe drinking standards (< 0.3 ppm), completely stopping yellow bathroom staining, foul metallic taste, and fabric discoloration.",
    image: "/images/products/c-tech-frp-outdoor-installation.jpg",
    features: [
      "Catalytic oxidation media eliminates dissolved iron down to < 0.3 ppm (BIS standard)",
      "Completely prevents yellow/red rust staining on bathroom tiles, sanitaryware, and laundry",
      "Eliminates harsh metallic taste and foul sulfurous iron-bacterial odors",
      "Chemical-free catalytic media backwashing requires zero daily consumables",
      "High-pressure corrosion-free blue composite FRP vessel with multiport valve",
      "Protects solar water heaters, geysers, and pipes from iron encrustation"
    ],
    specs: [
      { label: "Catalytic Media", value: "Catalytic Manganese Dioxide / Birm / Manganese Greensand" },
      { label: "Iron Removal Limit", value: "Up to 15 ppm reduced to < 0.3 ppm" },
      { label: "Flow Rate Capacity", value: "1000 to 5000 Litres/Hour" },
      { label: "Vessel Sizes", value: "10x54, 12x48, 13x54, 14x65 inches" },
      { label: "Control Valve", value: "Manual or Automatic Multiport Valve" }
    ],
    badge: "Iron Removal (IRP)"
  },
  {
    id: "c-tech-water-softening-plant",
    name: "C-Tech Automatic Water Softener Plant",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "Ion-exchange water softener preventing scale build-up in pipes, geysers, and protecting hair and skin.",
    description: "Replaces calcium and magnesium ions with soluble sodium ions using high-capacity food-grade ion exchange resin. Solves hard-water hair damage, rough skin, dry scalp, and extends the lifespan of geysers and washing machines.",
    image: "/images/products/c-tech-frp-vessel.jpg",
    features: [
      "Eliminates hardness scaling on bath fittings and glass partitions",
      "Protects hair from turning rough and brittle ('ചകിരി പോലെയാകുന്നത് തടയുന്നു')",
      "Food-grade cation exchange resin with salt brine regeneration",
      "Reduces soap and detergent consumption by up to 50%"
    ],
    specs: [
      { label: "Resin Type", value: "Premium High Exchange Capacity Cation Resin" },
      { label: "Brine Tank", value: "Heavy-Duty HDPE Salt Tank with Grid" },
      { label: "Control Valve", value: "Automatic Metered / Timer or Manual Multiport" }
    ]
  },
  {
    id: "c-tech-industrial-commercial-ro-plant",
    name: "C-Tech Commercial & Industrial RO Plants (250 - 10,000 LPH)",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "Custom-engineered reverse osmosis skid plants for hospitals, hotels, factories, and institutions.",
    description: "Turnkey commercial and industrial reverse osmosis systems mounted on stainless steel frames with high-pressure multistage pumps, pressure sand filters, activated carbon filters, micron cartridge filters, and thin-film composite RO membranes.",
    image: "/images/products/industrial-ro-plant-skid.jpg",
    features: [
      "Rigid SS 304 skid frame with vibration damping",
      "High-pressure vertical multistage stainless steel pump",
      "Comprehensive digital control panel with TDS/conductivity meter and pressure gauges",
      "Low power consumption and high recovery configuration"
    ],
    specs: [
      { label: "Capacities Available", value: "250, 500, 1000, 2000, 5000, 10000 LPH" },
      { label: "Membranes", value: "4040 / 8040 High-Rejection Polyamide TFC" },
      { label: "Control", value: "Automatic Microprocessor / PLC Based Panel" }
    ],
    badge: "Industrial Grade",
    isFeatured: true
  },
  {
    id: "c-tech-electronic-dosing-pump",
    name: "Electronic Chemical Dosing Pump (Antiscalant & Chlorine)",
    category: "treatment-plants",
    categoryLabel: "Water Treatment Plants",
    shortDescription: "Precision chemical dosing pump for antiscalant, chlorine, and coagulant injection in RO and FRP plants.",
    description: "Automated electronic chemical metering and dosing pump engineered for water treatment plants, commercial RO skids, and industrial filtration systems. Features a precision graduated stroke knob (0-100%), chemical-resistant solenoid diaphragm head, pulse rate indicator, and IP-rated splash-proof housing for continuous chemical dosing without manual intervention.",
    image: "/images/products/electronic-dosing-pump.jpg",
    features: [
      "Precision analog stroke frequency control dial (0 to 100%)",
      "Chemical-resistant PTFE/PVDF diaphragm and corrosion-proof dosing head",
      "Pulse status indicator LED with illuminated power switch",
      "Auto-priming design with suction and discharge tubing included",
      "Critical for RO membrane scale prevention (antiscalant dosing)",
      "Essential for drinking water chlorination and pH correction"
    ],
    specs: [
      { label: "Dosing Flow Rate", value: "1 to 6 Litres/Hour (Adjustable)" },
      { label: "Operating Pressure", value: "Up to 5 Bar" },
      { label: "Chemical Compatibility", value: "Antiscalants, Chlorine / Hypochlorite, Coagulants, Acids" },
      { label: "Control Interface", value: "0-100% Rotary Stroke Frequency Dial" },
      { label: "Enclosure", value: "IP65 Heavy-Duty Splash-Proof Housing" }
    ],
    badge: "Plant Accessory"
  },

  // --- INDUSTRIAL GASES (30% Focus) ---
  {
    id: "industrial-gas-cylinders-co2-o2",
    name: "Industrial Gas Supply (CO2, O2, Argon & Nitrogen)",
    category: "industrial-gases",
    categoryLabel: "Industrial Gases",
    shortDescription: "Pure industrial-grade gases and cylinder supplies for fabrication, manufacturing, workshops, and soda bottling.",
    description: "Reliable distribution and refilling of industrial carbon dioxide (CO2), industrial oxygen (O2), argon, nitrogen, and acetylene. Essential for metal fabrication, welding, chemical industries, and soda manufacturing units.",
    image: "/images/products/medical-oxygen-cylinders.png",
    features: [
      "Certified high-pressure tested industrial cylinders",
      "High gas purity with verified pressure certification",
      "Bulk cylinder supply and periodic refilling service",
      "Emergency door-step delivery for factories and fabrication units"
    ],
    specs: [
      { label: "Available Gases", value: "CO2 (Carbon Dioxide), O2 (Oxygen), Argon, Nitrogen, Acetylene" },
      { label: "Cylinder Sizes", value: "10L, 20L, 47L (Water Capacity)" },
      { label: "Pressure Rating", value: "150 - 200 Bar" }
    ],
    badge: "Industrial Supply",
    isFeatured: true
  },
  {
    id: "workshop-gas-supply-fleet",
    name: "Scheduled Gas Supply & Exchange for Workshops",
    category: "industrial-gases",
    categoryLabel: "Industrial Gases",
    shortDescription: "Regular cylinder replenishment logistics for automobile workshops and fabrication units.",
    description: "Dedicated supply chain service providing routine pickup of empty cylinders and instant drop-off of certified refilled cylinders, preventing downtime in your industrial production.",
    image: "/images/products/medical-oxygen-cylinders.png",
    features: [
      "Scheduled weekly and on-call delivery routes",
      "Compliant cylinder handling and transportation",
      "Zero production interruption for workshops and factories",
      "Competitive wholesale industrial rates"
    ],
    specs: [
      { label: "Coverage Area", value: "Thrissur District (Vadanappilly, Kaipamangalam, Panangad & surrounding belts)" },
      { label: "Turnaround", value: "Same-Day / Next-Day Delivery" }
    ]
  },

  // --- MEDICAL OXYGEN (30% Focus) ---
  {
    id: "medical-oxygen-cylinders-refilling",
    name: "Certified Medical Oxygen Cylinders & Refilling",
    category: "medical-oxygen",
    categoryLabel: "Medical Oxygen",
    shortDescription: "Pure pharmaceutical-grade medical oxygen for homes, clinics, and emergency patient care.",
    description: "High-purity (99.5%+) medical oxygen cylinders available for immediate purchase, rent, and fast refill. Specifically tailored for home care, bedridden patients ('കിടപ്പ് രോഗികൾക്കാവശ്യമായ മെഡിക്കൽ ഓക്സിജൻ'), palliative care, clinics, and emergency backup.",
    image: "/images/products/medical-oxygen-cylinders.png",
    features: [
      "99.5%+ certified pure medical oxygen",
      "Hygienically cleaned and hydrostatic-pressure tested cylinders",
      "Prompt refilling service for existing cylinders",
      "Dedicated priority delivery for bedridden and elderly patients at home",
      "Lightweight aluminum and robust carbon-steel cylinders available"
    ],
    specs: [
      { label: "Cylinder Capacities", value: "B Type (10L / 1.5 m³), D Type (47L / 7.0 m³), Portable A Type" },
      { label: "Oxygen Purity", value: "99.5% IP (Indian Pharmacopoeia)" },
      { label: "Safety Standard", value: "PESO / IS 7285 Approved" }
    ],
    badge: "Lifesaving Care"
  },
  {
    id: "home-oxygen-support-patient-care",
    name: "Home Medical Oxygen Support & Patient Rental Kit",
    category: "medical-oxygen",
    categoryLabel: "Medical Oxygen",
    shortDescription: "Complete patient-ready oxygen setup including cylinder, trolley, regulator, nasal cannula, and mask.",
    description: "Turnkey home setup service for post-hospitalization recovery, COPD, asthma, and palliative care. Our team assists with complete on-site assembly, safe operating guidance for family members, and ongoing refill logistics.",
    image: "/images/products/medical-oxygen-cylinders.png",
    features: [
      "Complete kit: Cylinder + Flowmeter + Trolley + Mask + Cannula",
      "On-site installation and family training on safe usage",
      "Emergency replacement and doorstep refilling support",
      "Flexible purchase and rental schemes"
    ],
    specs: [
      { label: "Service Response", value: "Immediate / Emergency Priority" },
      { label: "Support Contact", value: "0480 2843289 / 9207401507" }
    ]
  }
];
