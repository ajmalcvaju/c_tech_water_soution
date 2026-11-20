export interface ServiceItem {
  id: string;
  category: "water-purification" | "water-treatment" | "industrial-gas" | "medical-oxygen";
  categoryTitle: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  benefits: string[];
  processSteps: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  // --- WATER PURIFICATION SERVICES ---
  {
    id: "free-water-testing-consultation",
    category: "water-purification",
    categoryTitle: "Water Purification Services",
    title: "Free Water Quality Testing & Consultation",
    subtitle: "നിങ്ങളുടെ വെള്ളം ടെസ്റ്റ് ചെയ്യൂ... ഫ്രീ കൺസൾട്ടേഷൻ",
    description: "Don't guess what is in your water. We perform an on-site or laboratory evaluation testing your water's pH balance, Total Dissolved Solids (TDS), iron concentration, and hardness before recommending any equipment.",
    image: "/images/services/free-water-testing.jpg",
    iconName: "FlaskConical",
    benefits: [
      "Exact scientific measurement of TDS, pH, and hardness",
      "Identification of hazardous dissolved minerals and contaminants",
      "Honest, tailored equipment recommendation without overselling",
      "100% Free consultation for homes, apartments, and commercial facilities"
    ],
    processSteps: [
      "Water sample collection from well, borewell, or tap",
      "Multi-parameter chemical and physical testing",
      "Detailed water quality report explanation",
      "Customized purification system recommendation"
    ],
    ctaText: "Book Free Water Test"
  },
  {
    id: "purifier-installation-maintenance",
    category: "water-purification",
    categoryTitle: "Water Purification Services",
    title: "Water Purifier Installation & Commissioning",
    subtitle: "Professional plumbing, pressure setup & wall mounting",
    description: "Expert installation of domestic and commercial RO, UV, UF, and stainless steel purifiers. Our technicians ensure proper inlet pressure regulation, leak-proof food-grade piping, and electrical grounding.",
    image: "/images/services/purifier-installation.jpg",
    iconName: "Wrench",
    benefits: [
      "Clean, neat wall-mount or countertop integration",
      "Proper water pressure regulator installation",
      "Demonstration of filter operation and tank cleaning procedure",
      "Includes initial filter pre-flushing for optimal taste"
    ],
    processSteps: [
      "Site inspection and water supply point check",
      "Precision mounting and high-pressure plumbing connection",
      "Electrical connection and safety check",
      "System flushing, TDS calibration and handover"
    ],
    ctaText: "Request Installation"
  },
  {
    id: "periodic-filter-replacement-repair",
    category: "water-purification",
    categoryTitle: "Water Purification Services",
    title: "Periodic Filter Replacement & RO Repair",
    subtitle: "എല്ലാവിധ ഫിൽറ്ററുകളും സർവ്വീസ് & റിപ്പയർ ചെയ്ത് നൽകുന്നു",
    description: "A purifier with clogged filters accumulates bacteria and releases toxins into your drinking water. We provide scheduled service, genuine membrane replacement, and repair for all purifier brands.",
    image: "/images/services/filter-replacement-repair.jpg",
    iconName: "RefreshCw",
    benefits: [
      "Timely replacement of sediment, pre-carbon, RO membrane & post-carbon",
      "Disinfection and sanitization of the water storage tank",
      "Restoration of high water output flow and natural sweet taste",
      "Repair service for all brands and models"
    ],
    processSteps: [
      "Flow rate and output TDS diagnostic test",
      "Membrane and filter cartridge inspection",
      "Replacement with genuine food-grade certified filters",
      "Post-service TDS calibration and leak verification"
    ],
    ctaText: "Book Purifier Service"
  },

  // --- WATER TREATMENT SERVICES ---
  {
    id: "whole-house-filtration-setup",
    category: "water-treatment",
    categoryTitle: "Water Treatment Plant Services",
    title: "Whole-House Filtration Plant Installation",
    subtitle: "വീട്ടിലെ മുഴുവൻ വെള്ളവും ശുദ്ധീകരിക്കാം",
    description: "Turn muddy, turbid, or contaminated well water into clear, healthy water for every tap in your home. We install heavy-duty FRP pressure vessel filtration plants at the main pipeline or overhead tank inlet.",
    image: "/images/services/whole-house-filtration.jpg",
    iconName: "Home",
    benefits: [
      "Purifies water for bathing, washing, kitchen, and gardening",
      "Protects overhead tanks from accumulating thick mud and algae",
      "Prevents clogging of showers, concealed bathroom mixers, and taps",
      "Effortless backwash valve mechanism for years of clean operation"
    ],
    processSteps: [
      "Water source plumbing layout analysis",
      "Selection of correct FRP vessel diameter and media volume",
      "Plumbing bypass arrangement and multiport valve installation",
      "Media settling, forward flush, and client backwash training"
    ],
    ctaText: "Enquire Whole-House Plant"
  },
  {
    id: "iron-removal-water-softener-recharging",
    category: "water-treatment",
    categoryTitle: "Water Treatment Plant Services",
    title: "Iron Removal & Water Softener Media Recharging",
    subtitle: "Eliminate yellow water, bathroom stains & hard water hair fall",
    description: "Specialized service to restore iron removal plants and resin water softeners. We replace exhausted catalytic media, replenish high-capacity ion-exchange resin, and optimize brine regeneration systems.",
    image: "/images/services/media-recharging.jpg",
    benefits: [
      "Guaranteed removal of dissolved iron and sulfur odor",
      "Eliminates brown/yellow staining on sanitaryware and clothes",
      "Restores soft, hair-friendly water that lathers easily with soap",
      "Restores flow capacity and eliminates pressure drops"
    ],
    processSteps: [
      "Media bed condition check and resin test",
      "Removal and safe disposal of exhausted media",
      "Loading of fresh virgin catalytic media or ion-exchange resin",
      "Control valve servicing and brine regeneration cycle testing"
    ],
    iconName: "ShieldAlert",
    ctaText: "Book Media Service"
  },
  {
    id: "commercial-industrial-ro-installation",
    category: "water-treatment",
    categoryTitle: "Water Treatment Plant Services",
    title: "Commercial & Industrial RO Plant Setup & AMC",
    subtitle: "Turnkey RO systems from 250 LPH to 10,000 LPH",
    description: "Comprehensive engineering and installation of commercial reverse osmosis plants for hospitals, colleges, manufacturing plants, and hotels. Includes Annual Maintenance Contracts (AMC) and membrane chemical CIP cleaning.",
    image: "/images/services/industrial-ro-setup.jpg",
    iconName: "Factory",
    benefits: [
      "Turnkey skid fabrication, plumbing, and automation panel setup",
      "High recovery ratio with low energy consumption",
      "Preventive scheduled AMC visits to prevent production stoppages",
      "Periodic chemical cleaning (CIP) to restore membrane flux"
    ],
    processSteps: [
      "Raw water laboratory assay and daily capacity requirement review",
      "Process flow diagram and membrane array design",
      "Skid delivery, high-pressure pump wiring, and pipe manifolding",
      "Commissioning, flow balancing, and logbook setup"
    ],
    ctaText: "Request Industrial RO Quote"
  },

  // --- INDUSTRIAL GAS SERVICES ---
  {
    id: "industrial-gas-cylinder-supply",
    category: "industrial-gas",
    categoryTitle: "Industrial Gas Services",
    title: "Industrial Gas Cylinder Supply & Refilling",
    subtitle: "CO2, O2, Argon, Nitrogen & Acetylene for factories and workshops",
    description: "Reliable distribution of certified industrial gases across Thrissur and neighboring industrial belts. Providing steady, predictable gas supply for workshops, welding units, fabrication yards, and soda manufacturing.",
    image: "/images/services/industrial-gas-supply.jpg",
    iconName: "Flame",
    benefits: [
      "Rigorous quality check for gas purity and cylinder pressure",
      "Fast cylinder replacement to prevent workshop downtime",
      "Flexible pickup from our Panambikunnu hub or scheduled delivery",
      "Full compliance with safety standards and hydrostatic test dates"
    ],
    processSteps: [
      "Gas requirement and cylinder consumption estimation",
      "Safety inspection of customer-owned cylinders",
      "Prompt delivery or exchange with hydro-tested refilled cylinders",
      "Ongoing supply scheduling and emergency dispatch"
    ],
    ctaText: "Order Industrial Gases"
  },

  // --- MEDICAL OXYGEN SERVICES ---
  {
    id: "medical-oxygen-emergency-refilling",
    category: "medical-oxygen",
    categoryTitle: "Medical Oxygen Services",
    title: "Medical Oxygen Cylinder Refilling & 24/7 Home Support",
    subtitle: "കിടപ്പ് രോഗികൾക്കാവശ്യമായ മെഡിക്കൽ ഓക്സിജൻ ലഭ്യമാണ്",
    description: "Crucial medical oxygen supply for home healthcare, bedridden patients, and emergency clinic backup. We provide rapid refilling, certified pure oxygen cylinders, and compassionate doorstep assistance.",
    image: "/images/services/medical-oxygen-home-support.jpg",
    iconName: "HeartPulse",
    benefits: [
      "Certified 99.5%+ IP grade pure medical oxygen",
      "Priority rapid service for home patients and critical care",
      "Cylinders thoroughly sanitized and safety checked",
      "Support on weekends and holidays for critical patient care"
    ],
    processSteps: [
      "Emergency patient call / WhatsApp notification received",
      "Verification of required cylinder size and connection type",
      "Immediate cylinder dispatch or quick on-site exchange",
      "Pressure and leak check at patient's bedside"
    ],
    ctaText: "Emergency Oxygen Contact"
  },
  {
    id: "oxygen-regulator-flowmeter-setup",
    category: "medical-oxygen",
    categoryTitle: "Medical Oxygen Services",
    title: "Oxygen Flowmeter Setup & Caregiver Guidance",
    subtitle: "Accurate oxygen flow regulation, humidifier bottle & patient mask",
    description: "Proper medical oxygen delivery requires precision flow regulation and air humidification. We supply, calibrate, and install oxygen meters and flow regulators, providing clear training to caregivers on safe usage.",
    image: "/images/services/oxygen-flowmeter-guidance.jpg",
    iconName: "Activity",
    benefits: [
      "Precision flow control matching doctor's prescribed Litres/min",
      "Humidifier bottle setup preventing patient airway dryness",
      "Hands-on demonstration to caregivers on opening/closing cylinder safely",
      "Inspection of nasal cannula, mask, and tubing for leaks"
    ],
    processSteps: [
      "Regulator attachment and spanner tightening with washer",
      "Leak test with soapy water / bubble check",
      "Distilled water filling in humidifier jar",
      "Flow rate calibration and caregiver operating instructions"
    ],
    ctaText: "Enquire Oxygen Accessories"
  }
];
