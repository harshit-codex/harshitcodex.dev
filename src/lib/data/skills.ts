export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Event-Driven Architecture",
      "WebSockets",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Drizzle ORM", "Prisma"],
  },
  {
    category: "AI & Payments",
    items: [
      "Claude API",
      "OpenAI API",
      "LLM Integration",
      "Prompt Engineering",
      "Stripe (Connect, Checkout, Billing, Webhooks)",
      "Authorize.net",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, ECS, S3, CloudFront, SNS/SQS)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js 14", "React Native", "Expo", "Redux", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Firma.dev", "Dropbox API", "Git", "GitHub", "Postman", "Swagger"],
  },
];
