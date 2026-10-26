export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  thumb: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  intro: string[];
  includes: string[];
  idealFor: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  client: string;
  value: string;
  size: string;
  duration: string;
  status: string;
  year: string;
  thumb: string;
  image: string;
  summary: string;
  overview: string[];
  scope: string[];
  featured?: boolean;
};

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  thumb: string;
  bodyImage: string;
  content: PostBlock[];
};

export type Review = {
  name: string;
  location: string;
  role: string;
  quote: string;
  image: string;
  project: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    "slug": "borehole-drilling",
    "title": "Borehole Drilling",
    "excerpt": "Professional borehole drilling for residential, commercial, agricultural and institutional properties.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-drilling-thumb.webp",
    "image": "/images/service-drilling.webp",
    "imageAlt": "Truck-mounted borehole drilling rig pictured on Hydrotech Drilling's website",
    "imagePosition": "center",
    "intro": [
      "Professional borehole drilling for residential, commercial, agricultural and institutional properties. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Develop a groundwater supply for your property",
      "Plan drilling around your site and water requirements",
      "Coordinate with siting and installation services"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  },
  {
    "slug": "borehole-installation",
    "title": "Borehole Installation",
    "excerpt": "Installation of the equipment and systems required for efficient, dependable borehole operation.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-installation-thumb.webp",
    "image": "/images/service-installation.webp",
    "imageAlt": "Illustrative photograph of a submersible water pump with connected delivery pipe",
    "imagePosition": "50% 48%",
    "intro": [
      "Installation of the equipment and systems required for efficient, dependable borehole operation. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Match pumping equipment to your water requirements",
      "Connect borehole equipment into a working water system",
      "Discuss operation and ongoing care"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  },
  {
    "slug": "borehole-flushing",
    "title": "Borehole Flushing",
    "excerpt": "Cleaning and flushing boreholes to remove accumulated sediment and improve water flow.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-flushing-thumb.webp",
    "image": "/images/service-flushing.webp",
    "imageAlt": "Illustrative photograph of pumped water discharging from a pipe",
    "imagePosition": "50% 12%",
    "intro": [
      "Cleaning and flushing boreholes to remove accumulated sediment and improve water flow. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Remove accumulated sediment and debris",
      "Address reduced water flow",
      "Support ongoing borehole maintenance"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  },
  {
    "slug": "borehole-siting",
    "title": "Borehole Siting",
    "excerpt": "Groundwater surveying and suitable drilling-location identification before borehole development.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-siting-thumb.webp",
    "image": "/images/service-siting.webp",
    "imageAlt": "Illustrative electrical resistivity survey with cables and measurement equipment in the field",
    "imagePosition": "50% 55%",
    "intro": [
      "Groundwater surveying and suitable drilling-location identification before borehole development. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Assess potential drilling locations",
      "Inform your drilling plan with groundwater surveying",
      "Consider property access and water requirements"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  },
  {
    "slug": "irrigation-schemes",
    "title": "Irrigation Schemes",
    "excerpt": "Design and installation of irrigation solutions for farms and agricultural operations.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-irrigation-thumb.webp",
    "image": "/images/service-irrigation.webp",
    "imageAlt": "Illustrative sprinkler irrigation system watering rows of crops",
    "imagePosition": "50% 60%",
    "intro": [
      "Design and installation of irrigation solutions for farms and agricultural operations. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Plan water distribution around crop requirements",
      "Use water efficiently across your farm",
      "Connect irrigation with a suitable water supply"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  },
  {
    "slug": "solar-installation",
    "title": "Solar Installation",
    "excerpt": "Solar-powered pumping solutions that help reduce operating costs and support reliable water supply.",
    "icon": "/images/ic-basic.svg",
    "thumb": "/images/service-solar-thumb.webp",
    "image": "/images/service-solar.webp",
    "imageAlt": "Illustrative solar panels powering a rural water pumping system",
    "imagePosition": "50% 65%",
    "intro": [
      "Solar-powered pumping solutions that help reduce operating costs and support reliable water supply. Hydrotech Drilling serves properties across Zimbabwe.",
      "Tell us your project location, property type and water requirements. Our team can discuss the appropriate scope and next steps for your site."
    ],
    "includes": [
      "Use solar energy for water pumping",
      "Reduce dependence on grid electricity",
      "Plan a pumping system around site conditions"
    ],
    "idealFor": [
      "Homes and residential properties",
      "Farms and agricultural operations",
      "Businesses and institutions"
    ]
  }
];
export const process = [
  {
    "number": "01",
    "title": "Discuss your needs",
    "description": "Share your location, property type and water requirements."
  },
  {
    "number": "02",
    "title": "Assess and plan",
    "description": "Discuss the site, appropriate services and project scope."
  },
  {
    "number": "03",
    "title": "Develop your system",
    "description": "Coordinate drilling, installation or improvements to your water supply."
  },
  {
    "number": "04",
    "title": "Care for your supply",
    "description": "Ask about flushing, maintenance and ongoing system care."
  }
];
export const strengths = [
  {
    "title": "Complete Water Solutions",
    "description": "From groundwater siting to drilling, installation and maintenance."
  },
  {
    "title": "Professional Service",
    "description": "Practical solutions backed by experienced workmanship."
  },
  {
    "title": "Sustainable Solutions",
    "description": "Irrigation and solar-powered water systems designed for long-term use."
  }
];
export const faqs = [
  {
    "question": "Where does Hydrotech Drilling operate?",
    "answer": "Hydrotech Drilling serves residential, agricultural, commercial and institutional customers across Zimbabwe. Share your project location when requesting a quote."
  },
  {
    "question": "Which services can I request?",
    "answer": "Borehole drilling, installation, flushing, siting, irrigation schemes and solar installation."
  },
  {
    "question": "What information should I include in a quote request?",
    "answer": "Include your contact details, project location, property type, the service you need and a description of your water requirements."
  },
  {
    "question": "Can you help with an existing borehole?",
    "answer": "Hydrotech offers borehole flushing and installation services. Contact the team to discuss your existing system and the issue you are experiencing."
  }
];
export const proposedTopics = [
  "What to Know Before Drilling a Borehole in Zimbabwe",
  "Borehole Maintenance and Flushing Explained",
  "Benefits of Solar-Powered Borehole Pumps",
  "Choosing the Right Irrigation System"
];
export const projects: Project[] = [];
export const posts: Post[] = [];
export const reviews: Review[] = [];
export const team: TeamMember[] = [];
export const values = strengths;
export function getService(slug: string): Service | undefined { return services.find(item => item.slug === slug); }
export function getProject(slug: string): Project | undefined { return projects.find(item => item.slug === slug); }
export function getPost(slug: string): Post | undefined { return posts.find(item => item.slug === slug); }
