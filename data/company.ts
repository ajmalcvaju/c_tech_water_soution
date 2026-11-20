export interface ContactPerson {
  name: string;
  phone: string;
  mobile: string;
  whatsapp?: string;
  role?: string;
}

export interface AddressInfo {
  title: string;
  street: string;
  area: string;
  district: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface CompanyData {
  name: string;
  fullName: string;
  parentEntity: string;
  agencyEntity: string;
  tagline: string;
  malayalamTagline: string;
  establishedYear: number;
  serviceMilestoneYears: number;
  contacts: {
    sankaranarayanan: ContactPerson;
    manesh: ContactPerson;
  };
  phones: {
    landline: string;
    primaryMobile: string;
    secondaryMobile: string;
    whatsapp: string;
    whatsappFormatted: string;
  };
  emails: {
    primary: string;
    secondary: string;
  };
  addresses: {
    main: AddressInfo;
    branch: AddressInfo;
  };
  social: {
    whatsapp: string;
    googlePay: string;
  };
  highlights: {
    number: string;
    label: string;
    description: string;
  }[];
  waterChecklist: {
    id: number;
    title: string;
    description: string;
    malayalam: string;
    action: string;
  }[];
  waterBenefits: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyData = {
  name: "C-Tech Water Solution",
  fullName: "C-Tech Water Solution & Chambamkulath Agencies",
  parentEntity: "Chambamkulath Traders",
  agencyEntity: "Chambamkulath Agencies",
  tagline: "Pure Water. Better Living. Complete Industrial & Medical Solutions.",
  malayalamTagline: "ജലം ജീവദായിനി | ജലം ഔഷധം | നമ്മുടെ കുടിവെള്ളം നമ്മുടെ ആരോഗ്യം",
  establishedYear: 1992,
  serviceMilestoneYears: 27,
  contacts: {
    sankaranarayanan: {
      name: "C.M. Sankaranarayanan",
      phone: "0480 2843289",
      mobile: "98 46 644 232",
      role: "Managing Partner"
    },
    manesh: {
      name: "Manesh C.S",
      phone: "0480 2843289",
      mobile: "92 07 401 507",
      whatsapp: "9207401507",
      role: "Operations & Technical Lead"
    }
  },
  phones: {
    landline: "0480 2843289",
    primaryMobile: "+91 9846644232",
    secondaryMobile: "+91 9207401507",
    whatsapp: "+91 9207401507",
    whatsappFormatted: "9207401507"
  },
  emails: {
    primary: "ctechwatersolution507@gmail.com",
    secondary: "chambamkulathagencies@gmail.com"
  },
  addresses: {
    main: {
      title: "Head Office (Chambamkulath Traders)",
      street: "Main Road",
      area: "Kaipamangalam",
      district: "Thrissur",
      state: "Kerala",
      pincode: "680 681",
      landmark: "Near Kaipamangalam Junction"
    },
    branch: {
      title: "Service Center & Agencies",
      street: "Panambikunnu, Vadanappilly",
      area: "Panangad",
      district: "Thrissur",
      state: "Kerala",
      pincode: "680 665",
      landmark: "Panambikunnu Centre"
    }
  },
  social: {
    whatsapp: "https://wa.me/919207401507",
    googlePay: "9207401507"
  },
  highlights: [
    {
      number: "32+",
      label: "Years of Trust",
      description: "Established in 1992, serving Kerala households and industries with unwavering integrity."
    },
    {
      number: "3,500+",
      label: "Domestic Customers",
      description: "Trusted by families across Kerala for pure, mineral-balanced domestic RO and UV purifiers."
    },
    {
      number: "1,500+",
      label: "Commercial Customers",
      description: "Hospitals, restaurants, schools, and workshops powered by custom FRP treatment and gas supplies."
    },
    {
      number: "5,000+",
      label: "Satisfied Customers",
      description: "Over five thousand active households and businesses relying on our reliable sales and prompt service."
    }
  ],
  waterChecklist: [
    {
      id: 1,
      title: "Is the pH balance of your water correct?",
      description: "Drinking water should ideally have a neutral to slightly alkaline pH (6.5 - 8.5). Acidic water damages health and corrodes piping.",
      malayalam: "നിങ്ങൾ ഉപയോഗിക്കുന്ന വെള്ളത്തിന്റെ പി.എച്ച്. മൂല്യം ശരിയാണോ?",
      action: "Test pH Level"
    },
    {
      id: 2,
      title: "Are Total Dissolved Solids (TDS) within safe limits?",
      description: "High TDS causes kidney strain and gastrointestinal issues, while very low TDS lacks essential minerals.",
      malayalam: "അതിലലിഞ്ഞുചേർന്നിരിക്കുന്ന ഘരമാലിന്യങ്ങളുടെ (ടി.ഡി.എസ്) ശരിയാണോ?",
      action: "Free TDS Check"
    },
    {
      id: 3,
      title: "Is there excess Iron content in your water?",
      description: "Excess iron creates metallic taste, reddish-yellow stains on bathroom tiles and clothes, and fosters bacteria.",
      malayalam: "ഇരുമ്പിന്റെ സാന്നിധ്യം കൂടുതലാണോ?",
      action: "Iron Removal"
    },
    {
      id: 4,
      title: "Are Calcium & Magnesium hardness levels optimal?",
      description: "High mineral hardness causes scaling in heaters, pipelines, and kitchen appliances, degrading water quality.",
      malayalam: "കാൽസ്യം, മഗ്നീഷ്യം എന്നിവയുടെ തോത് ശരിയാണോ?",
      action: "Water Softening"
    },
    {
      id: 5,
      title: "Is chlorine content too high in your water?",
      description: "Excessive chlorination causes strong chemical odors, dry skin, and harmful chlorination by-products.",
      malayalam: "ഉപയോഗിക്കുന്ന വെള്ളത്തിൽ ക്ലോറിന്റെ അളവ് കൂടുതലാണോ?",
      action: "Carbon Filtration"
    },
    {
      id: 6,
      title: "Do you experience bad odor or water shortage?",
      description: "Foul odor from stagnant pipelines or borewells can be eliminated using multi-stage active filtration.",
      malayalam: "നിങ്ങൾ ജലക്ഷാമം അനുഭവിക്കുന്നവരാണോ?",
      action: "Custom Filtration"
    },
    {
      id: 7,
      title: "Waiting for municipal water or relying on contaminated sources?",
      description: "Convert any ground or well water into crystal clear pure drinking water with C-Tech filtration plants.",
      malayalam: "നിങ്ങൾ പൈപ്പ് ലൈൻ വെള്ളത്തിനുവേണ്ടി കാത്തിരിക്കുന്നവരാണോ?",
      action: "Source Treatment"
    },
    {
      id: 8,
      title: "Do you have an open well or borewell with impure water?",
      description: "We purify open well and borewell water for the whole house, making every tap completely clean and safe.",
      malayalam: "വീട്ടിൽ കിണറോ കുഴൽ കിണറോ ഉണ്ടോ? ആ വെള്ളം മോശമാണോ? എങ്കിൽ ശുദ്ധീകരിക്കാം.",
      action: "Whole House System"
    },
    {
      id: 9,
      title: "Is hard water damaging your hair, causing roughness and fall?",
      description: "Hard water binds with soap to form curd that leaves hair brittle, rough like coir, and scalp dehydrated.",
      malayalam: "തലമുടി കുളി കഴിഞ്ഞതിനുശേഷം ചകിരി പോലെ ആകുന്നുണ്ടോ? വെള്ളത്തിന് കട്ടിപ്പ് ഉണ്ടോ?",
      action: "Softener Solution"
    },
    {
      id: 10,
      title: "Are your existing water filters & purifiers serviced on time?",
      description: "Unserviced filters accumulate bacteria and contaminants, doing more harm than good. Routine servicing is vital.",
      malayalam: "വീട്ടിൽ വാട്ടർ ഫിൽറ്ററോ പ്യൂരിഫയറോ ഉണ്ടോ? അത് ശരിയായി വർക്ക് ചെയ്യുന്നുണ്ടോ?",
      action: "Book Service Now"
    }
  ],
  waterBenefits: [
    {
      title: "Cellular Hydration & Protection",
      description: "Moisturizes cellular tissues across eyes, nose, mouth and respiratory pathways."
    },
    {
      title: "Joint & Muscular Lubrication",
      description: "Forms synovial cushion fluids to prevent friction and ease movement in all joints."
    },
    {
      title: "Body Temperature Regulation",
      description: "Maintains optimal core body temperature through natural perspiration and hydration balance."
    },
    {
      title: "Toxin Elimination & Renal Support",
      description: "Significantly reduces filtration load on kidneys and liver by efficiently expelling bodily waste."
    },
    {
      title: "Nutrient & Mineral Absorption",
      description: "Dissolves and transports essential minerals, vitamins, and electrolytes into cells."
    },
    {
      title: "Oxygen & Blood Circulation",
      description: "Maintains blood viscosity and efficiently carries vital dissolved oxygen throughout the bloodstream."
    }
  ]
};
