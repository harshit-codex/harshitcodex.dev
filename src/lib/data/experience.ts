export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Backend Engineer",
    company: "Internet Division",
    location: "Sheridan, WY, USA (Remote)",
    start: "March 2026",
    end: "Present",
    highlights: [
      "Architected backend services using Node.js, NestJS, and PostgreSQL for 2 production SaaS platforms: an LMS marketplace and a legal-tech case management system, with Swagger-documented APIs",
      "Led adoption of the Stripe Connect marketplace payment architecture across a 4-5 engineer team, including webhook-driven order processing, payouts, and affiliate commission tracking",
      "Established multi-tenant security using Supabase JWT and PostgreSQL Row-Level Security, integrating Authorize.net payment processing along with 3 external services (Claude, Firma.dev, and Dropbox) to streamline workflows",
      "Provided technical direction to teammates by reviewing 5-10 pull requests weekly and setting backend coding standards, while delivering production support across both platforms within a remote, US-based team",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Empiric Infotech LLP",
    location: "Surat, India",
    start: "February 2025",
    end: "February 2026",
    highlights: [
      "Took full ownership of the notification and background job microservices within a team-architected, event-driven system, processing 20,000+ notifications per day for a mobile health-tech platform",
      "Developed an AI-powered risk analysis MVP within 1 month for a healthcare documentation platform, flagging risk factors from patient data using Node.js, PostgreSQL, and Redis caching",
      "Migrated a decade-old React Native app spanning 15-25 screens, most of it built on deprecated dependencies, to modern Expo architecture",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "AppMixo LLP",
    location: "Surat, India",
    start: "July 2023",
    end: "February 2025",
    highlights: [
      "Created a real-time messaging system for desk support across 200+ franchise locations, using Node.js, MongoDB, Twilio, and WebSockets",
      "Delivered integrations with 2 e-commerce platforms (Shopify GraphQL API and eBay), with real-time product synchronization",
      "Performance-optimized backend APIs and reporting dashboards by fixing an N+1 query problem and adding targeted database indexes, cutting query load for enterprise clients",
    ],
  },
];
