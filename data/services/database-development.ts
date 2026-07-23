import { Database } from "lucide-react";

import type { ServicePageData } from "./types";

export const databaseDevelopment: ServicePageData = {
    slug: "database-development",
    label: "Database",
    icon: Database,
    title: "Freelance Database Developer",
    description:
        "Hire a freelance database developer for PostgreSQL, MongoDB, or DynamoDB. The right database for your actual data.",
    h1: "Need a Database Developer for Your Project?",
    intro:
        "PostgreSQL, MongoDB, DynamoDB. I pick the database that fits your actual data and traffic, not just whatever's trendy.",
    reasons: [
        {
            title: "The right database avoids expensive migrations later",
            body: "Picking the wrong database up front, a relational database for data that's actually document-shaped, or the reverse, is one of the most expensive mistakes to fix after launch. Once real data and real users are already in the system, moving it to a different database means careful migration work instead of a quick config change. I scope this decision before writing any code, based on how your data actually relates to itself, not on which database happens to be popular this year. Getting it right the first time is far cheaper than fixing it after the fact.",
        },
        {
            title: "Real production experience across the major options",
            body: "I've shipped production systems on PostgreSQL, using Drizzle ORM and NeonDB, on MongoDB, and on DynamoDB, so a recommendation for your project comes from having actually run each of them in production, not from reading a comparison article. That matters because each database has real tradeoffs that only show up under actual usage, like how each one handles concurrent writes or complex relational queries at scale. Having built with all three means I can point out the tradeoff that actually matters for your specific case instead of repeating generic advice.",
        },
        {
            title: "Built for how your app actually grows",
            body: "On a client project, DynamoDB and MongoDB backend work supported a system that needed to keep scaling without a full rewrite along the way. That's the practical goal with any database choice: not just handling today's traffic, but handling ten times today's traffic without requiring you to start over. A database chosen and structured well from the start absorbs that growth gradually. One chosen poorly tends to hit a wall that forces an expensive, disruptive migration exactly when your business can least afford the downtime.",
        },
        {
            title: "Safe migrations, not risky ones",
            body: "If you already have data in a database and need to move or restructure it, I plan the migration path carefully before touching anything in production. That usually means a rollback plan, a staging environment to test against first, and a clear sequence of steps rather than a single risky cutover. Data loss or unexpected downtime during a migration can be a genuinely serious problem for a live business, so this isn't a step I rush regardless of how simple it might look on paper. Careful planning up front is what keeps a migration boring instead of a crisis.",
        },
        {
            title: "Clear reasoning, not jargon",
            body: "I'll explain why a particular database fits your project in plain terms you can actually evaluate, not just default to whatever I personally happen to know best. If PostgreSQL is the better fit because your data has clear relationships between users, orders, and products, I'll explain it that way rather than hiding behind technical vocabulary. That matters because you're the one who has to live with the decision long after I've moved on to the next project, so you deserve to actually understand why it was made.",
        },
    ],
    objection: {
        question: "How do I know if I need PostgreSQL or MongoDB?",
        answer: "Roughly, if your data is naturally structured with clear relationships, users, orders, products, PostgreSQL usually fits better. If it's more flexible or document-like, content, logs, varying shapes, MongoDB often fits better. I'll look at your actual case rather than default to one.",
    },
    experience:
        "Database work spans PostgreSQL (Drizzle ORM, NeonDB), MongoDB, and DynamoDB, including backend systems for PennyCanny (DynamoDB/MongoDB) and a property management system backend (PostgreSQL via Drizzle).",
    caseStudies: [
        {
            name: "PennyCanny",
            description:
                "Backend systems built on DynamoDB and MongoDB, supporting multiple client engagements.",
            technologies: ["DynamoDB", "MongoDB", "Node.js"],
        },
        {
            name: "Property management system (backend)",
            description: "Backend built with NestJS, Drizzle ORM, and PostgreSQL.",
            technologies: ["PostgreSQL", "Drizzle ORM", "NestJS"],
            link: {
                label: "View source",
                href: "https://github.com/JealousGx/tests/tree/fifth_corp/prop-management-system",
                type: "Source",
            },
        },
    ],
    faqs: [
        {
            question: "Do you work with PostgreSQL specifically?",
            answer: "Yes, regularly, including with Drizzle ORM and NeonDB.",
        },
        {
            question: "Do you work with MongoDB specifically?",
            answer: "Yes, used in production client backend work.",
        },
        {
            question: "What if I have a limited budget for database work?",
            answer: "Tell me what you're working with on a quick call and I'll be upfront about what's realistic for the budget.",
        },
        {
            question: "How do you handle migrating an existing database?",
            answer: "Carefully. I plan the migration path before touching production data, usually with a rollback plan.",
        },
    ],
};
