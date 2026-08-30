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
      "Agile/Scrum",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Drizzle ORM", "Prisma"],
  },
  {
    category: "AI & Payment APIs",
    items: [
      "Claude API",
      "OpenAI API",
      "LLM Integration",
      "Prompt Engineering",
      "Stripe (Connect, Checkout, Billing, Webhooks)",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, ECS, S3, CloudFront, SNS/SQS, EventBridge)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Nginx",
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
