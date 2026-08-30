export interface ProjectDecision {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  stack: string[];
  cardHighlights: string[];
  overview: string;
  problem: string;
  architecture: string[];
  decisions: ProjectDecision[];
  outcome: string[];
}

export const projects: Project[] = [
  {
    slug: "gigrocket",
    name: "GigRocket",
    tagline: "Learning Management & Course Marketplace Platform",
    role: "Sole Backend Engineer",
    period: "2025 to Present",
    stack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Stripe Connect"],
    cardHighlights: [
      "27-table schema, 200+ REST APIs",
      "Stripe Connect marketplace payments",
      "Fraud-anomaly detection + guest checkout",
    ],
    overview:
      "GigRocket is a course marketplace and LMS: instructors publish and sell courses, learners buy and consume them, and money moves between both sides through a marketplace payment layer. As the sole backend engineer, I owned everything server-side (schema, APIs, payments, deployments) for the entire lifetime of the product.",
    problem:
      "A course marketplace has to solve three hard problems at once: model a catalog and enrollment system flexible enough for many course formats, move money correctly between learners, the platform, and instructors (including refunds and chargebacks), and keep the purchase funnel frictionless enough that a forced account-creation step doesn't kill conversion. None of these can be bolted on after the fact; they shape the schema and the API surface from day one.",
    architecture: [
      "The data layer is a 27-table PostgreSQL schema covering catalog, enrollment, payments, payouts, and fraud signals, designed so that course structure (sections, lessons, pricing tiers) and commerce state (orders, payouts, reserves) are cleanly separated but link back through consistent foreign keys.",
      "On top of that schema sit 200+ REST APIs built in NestJS, organized by domain module (catalog, checkout, payments, instructor payouts, admin) so that ownership and testing boundaries map directly to the business domains they serve.",
      "Payments run on Stripe Connect in a marketplace topology: platform account, connected instructor accounts, and dual-sided webhook handling so that both the buyer-facing charge and the instructor-facing payout are driven by Stripe's event stream rather than client-side confirmation.",
    ],
    decisions: [
      {
        title: "Dual-sided webhooks over polling",
        detail:
          "Order state and payout state are both driven entirely by Stripe webhook events rather than client callbacks or polling. This keeps the system correct even when a buyer closes the tab mid-checkout or a payout is delayed on Stripe's side; the database only advances state when Stripe confirms it.",
      },
      {
        title: "Rolling reserves for chargeback risk",
        detail:
          "Instructor payouts hold back a rolling reserve rather than paying out the full balance immediately. This absorbs the lag between a sale and a possible chargeback without exposing the platform to clawback risk on funds already paid out.",
      },
      {
        title: "Anomaly detection as a layer, not a gate",
        detail:
          "Fraud signals (unusual purchase velocity, mismatched billing signals, refund patterns) are scored and surfaced to admins rather than auto-blocking transactions. This avoided false-positive friction on legitimate buyers while still giving the platform visibility into risk.",
      },
      {
        title: "11-API guest checkout flow",
        detail:
          "Signup was removed from the critical path of a purchase. Guest checkout is its own 11-endpoint flow that captures payment and delivers course access via email, with account creation offered afterward rather than required upfront, directly reducing drop-off at the point of highest purchase intent.",
      },
    ],
    outcome: [
      "Shipped and operated a production marketplace payment system handling real instructor payouts across a rolling reserve model, with zero manual intervention required for standard order and payout flows.",
      "Guest checkout removed a hard signup wall from the purchase funnel without compromising order integrity or fulfillment.",
      "Deployments across development, staging, and production run through GitHub Actions CI/CD with automated database migrations, so schema changes ship with the same review and rollback safety as application code.",
    ],
  },
  {
    slug: "case-dashboard",
    name: "Case Dashboard",
    tagline: "Legal-Tech SaaS Platform",
    role: "Full-Stack Engineer (2-engineer team)",
    period: "2025 to 2026",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Stripe", "Authorize.net", "Claude API"],
    cardHighlights: [
      "4-role RBAC, multi-state case lifecycle",
      "Dual payment processors",
      "Claude-powered claim classification",
    ],
    overview:
      "Case Dashboard is a legal-tech SaaS platform covering the full lifecycle of a small-claims case: intake, case management, e-signature, and mailing, serving two client-facing products (Small Claims Hero and Activation Hero) from one shared backend. Built with one other engineer, splitting backend architecture and frontend delivery.",
    problem:
      "Legal workflows are stateful and role-gated in ways most CRUD apps aren't: a case moves through a defined lifecycle across multiple US states with different procedural rules, different people (intake staff, case managers, reviewers, clients) need different slices of the same case data, and the platform has to handle real payments and legally significant documents (signatures, mailings) without room for silent failure.",
    architecture: [
      "The platform models cases as a multi-state workflow lifecycle: intake, review, filing, service, and resolution stages, each gated by role permissions so that a given user only sees and can act on the stages relevant to their role.",
      "Access control is built around 4-role RBAC (intake, case manager, reviewer, admin), enforced at the API layer so that authorization logic lives in one place rather than being re-implemented per endpoint.",
      "Two client-facing products, Small Claims Hero and Activation Hero, are served from the same backend and case model, with the Next.js 14 / React / Redux frontend implementation split per product on top of shared API contracts.",
    ],
    decisions: [
      {
        title: "Two payment processors, one security posture",
        detail:
          "Stripe Checkout and Authorize.net run side by side to cover different client and compliance needs, with a shared security-conscious architecture (server-side verification, no card data touching application servers) so adding the second processor didn't mean a second security model.",
      },
      {
        title: "Claude for claim classification, not decisioning",
        detail:
          "The Claude API is used to classify incoming claims and flag relevant case attributes, feeding a human reviewer rather than making the filing decision itself, using the LLM to cut manual triage time while keeping a person accountable for the legally significant call.",
      },
      {
        title: "Shared backend, split frontends",
        detail:
          "Rather than forking the backend per product, Small Claims Hero and Activation Hero share one case model and API surface, with product-specific behavior handled in the Next.js frontend layer. This kept the two products consistent as the case lifecycle evolved instead of drifting apart.",
      },
    ],
    outcome: [
      "Shipped a working end-to-end SaaS platform, intake through e-signature and mailing, across two live client-facing products from a single backend.",
      "4-role RBAC and the multi-state workflow model gave each user type a scoped, correct view of case state without custom per-client logic.",
      "Dual payment processor support and Claude-assisted claim classification shipped without expanding the security surface area or removing human review from the decision path.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
