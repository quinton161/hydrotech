export const site = {
  name: "Hydrotech Drilling",
  legalName: "Hydrotech Drilling",
  tagline: "Reliable Water. Professional Drilling.",
  description:
    "Professional borehole drilling and complete water solutions for homes, farms, businesses and institutions across Zimbabwe.",
  url: "https://hydrotechdrilling.co.zw",
  email: "sales@hydrotechdrilling.co.zw",
  phone: "+263 717 134 117",
  phoneHref: "+263717134117",
  phone2: "+263 782 507 122",
  phone2Href: "+263782507122",
  whatsapp: "263717134117",
  whatsappMessage:
    "Hello Hydrotech Drilling, I would like to enquire about your borehole and water solutions services.",
  address: {
    line1: "119-117 Rotten Row Road",
    city: "Harare",
    region: "Harare Province",
    postalCode: "",
    country: "Zimbabwe",
  },
  socials: [],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.city}, ${site.address.country}`;

export const navUtility = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms & conditions", href: "/terms-conditions" },
] as const;
