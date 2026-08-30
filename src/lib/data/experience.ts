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
      "Architected backend services using Node.js, NestJS, and PostgreSQL for two production SaaS platforms: an LMS marketplace and a legal-tech case management system",
      "Built payment and payout infrastructure across 2 payment processors (Stripe Connect and Authorize.net), including webhook-driven order processing, payouts, and affiliate commission tracking",
      "Established multi-tenant security using Supabase JWT and PostgreSQL Row-Level Security, integrating 3 external services (Claude, Firma.dev for e-signature, and document delivery) to automate workflows",
      "Provided ongoing production support across both platforms, resolving deployment and infrastructure issues within a remote, US-based team",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Empiric Infotech LLP",
    location: "Surat, India",
    start: "February 2025",
    end: "February 2026",
    highlights: [
      "Developed an AI-powered risk analysis feature for a healthcare documentation platform, flagging risk factors from patient data using Node.js, NestJS, and PostgreSQL",
      "Engineered REST APIs and microservices with secure authentication, role-based access control, and Redis caching",
      "Set up event-driven microservice communication using AWS SNS/SQS (20,000+ notifications per day) and migrated large-scale React Native apps to modern Expo architecture",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "AppMixo LLP",
    location: "Surat, India",
    start: "July 2023",
    end: "February 2025",
    highlights: [
      "Created real-time messaging systems using Node.js, MongoDB, Twilio, and WebSockets",
      "Delivered integrations with 2 e-commerce platforms (Shopify GraphQL API and eBay), with automated product synchronization",
      "Optimized backend APIs and reporting dashboards, improving database performance for enterprise clients",
    ],
  },
];
