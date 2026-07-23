import { Server } from "lucide-react";

import type { ServicePageData } from "./types";

export const nestjsDevelopment: ServicePageData = {
    slug: "nestjs-development",
    label: "NestJS",
    icon: Server,
    title: "Freelance NestJS Developer",
    description:
        "Hire a freelance NestJS developer for a well-structured, TypeScript-first backend that scales with your team.",
    h1: "Need a NestJS Developer for Your Project?",
    intro:
        "NestJS gives your backend real structure from day one, which matters most once more than one developer is touching the codebase.",
    reasons: [
        {
            title: "Structure that scales with your team",
            body: "NestJS enforces a consistent architecture built around modules, services, and controllers, so when you bring on a second or third backend developer, they're not left guessing at how the project is organized. Every part of the codebase follows the same predictable pattern, which means a new developer can find where a piece of logic lives without a long walkthrough first. That consistency matters most exactly when a project grows past one person, since a loosely organized backend gets genuinely harder to work on as more people touch it.",
        },
        {
            title: "TypeScript-first, fewer runtime surprises",
            body: "NestJS is built around TypeScript from the ground up, not TypeScript added on as an afterthought, which catches a whole category of bugs, wrong data types, missing fields, before the code ever runs in production. In practice, that means fewer of those backend errors that only show up under a specific edge case in real usage, since the compiler is checking assumptions the whole way through. For a backend handling real user data, that kind of safety net matters more than it does on a quick throwaway script.",
        },
        {
            title: "Good fit for complex business logic",
            body: "If your backend has real domain logic, permissions, workflows, multi-step processes, rather than just simple CRUD operations, NestJS's structure keeps that logic organized instead of it becoming a sprawling tangle of routes that only the original developer understands. Modules let related logic live together in one clearly defined place, so a permissions system or a billing workflow doesn't end up scattered across a dozen unrelated files. That organization is what makes complex backend logic maintainable months after it was first written.",
        },
        {
            title: "Real production experience",
            body: "I built the backend for a full property management system on NestJS, Drizzle ORM, and PostgreSQL, a real project with real domain logic around properties, tenants, and leases, not a tutorial example. That means the architecture decisions on your project come from having actually structured a NestJS backend around genuine business rules before, not from following a getting-started guide for the first time. The source is public, so you can see the actual structure rather than just take my word for it.",
        },
        {
            title: "A safe, well-maintained choice",
            body: "NestJS is actively maintained and used in production by companies handling serious scale, not a niche framework experiment that might get abandoned in a year. That matters for the same reason it matters with any backend framework: you don't want to build your product on something that stops getting updates or security patches. Its structure is also documented clearly enough that future developers can ramp up from the official docs rather than needing me specifically to explain how the codebase works.",
        },
    ],
    objection: {
        question: "Isn't NestJS more complex than just using Express directly?",
        answer: "There's more structure upfront, yes, but that structure is what pays off once your codebase or team grows. For a very small, simple API, plain Express might genuinely be enough, and I'll say so if that's your case.",
    },
    experience:
        "Built the backend for a full property management system using NestJS, Drizzle ORM, and PostgreSQL, with a React frontend consuming it.",
    caseStudies: [
        {
            name: "Property management system (backend)",
            description:
                "Backend for a property management system, built with NestJS, Drizzle ORM, and PostgreSQL.",
            technologies: ["NestJS", "Drizzle ORM", "PostgreSQL"],
            link: {
                label: "View source",
                href: "https://github.com/JealousGx/tests/tree/fifth_corp/prop-management-system",
                type: "Source",
            },
        },
    ],
    faqs: [
        {
            question: "How much does NestJS backend development cost?",
            answer: "Scoped after a quick call, depending on complexity.",
        },
        {
            question: "Can you integrate NestJS with an existing database?",
            answer: "Yes, including PostgreSQL via Drizzle ORM, which is what I used on my most recent NestJS project.",
        },
        {
            question: "Do you work on contract or contract-to-hire?",
            answer: "Yes, both. Happy to discuss what fits.",
        },
        {
            question: "Are you available as a dedicated NestJS backend developer?",
            answer: "Yes, direct contract, project-based, or contract-to-hire.",
        },
        {
            question: "Do you build NestJS APIs specifically, or only full backends?",
            answer: "Yes. Focused API work, not just full backend builds, is something I take on too.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
    ],
};
