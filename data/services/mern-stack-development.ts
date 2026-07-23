import { Layers } from "lucide-react";

import type { ServicePageData } from "./types";

export const mernStackDevelopment: ServicePageData = {
    slug: "mern-stack-development",
    label: "MERN Stack",
    icon: Layers,
    title: "Freelance MERN Stack Developer",
    description:
        "Hire a freelance MERN stack developer. MongoDB, Express, React, Node, shipped as a real e-commerce project.",
    h1: "Need a MERN Stack Developer for Your Project?",
    intro:
        "MongoDB, Express, React, and Node. One JavaScript stack from your database to your UI, built and shipped by one developer.",
    reasons: [
        {
            title: "One language across your whole stack",
            body: "Frontend and backend both in JavaScript or TypeScript means less context-switching for me while building, and an easier codebase to hand off to future hires who only need to learn one language instead of two. A developer joining later doesn't need to be equally fluent in, say, Python for the backend and JavaScript for the frontend just to be useful on the project. That lowers the bar for who can maintain it after I'm done, which matters if you eventually want to bring development in-house.",
        },
        {
            title: "Flexible data model for evolving products",
            body: "MongoDB's document model handles products that change shape as you add features, without a rigid schema migration every time a new field gets added. Early on, most products don't fully know their final data structure yet, and a flexible database lets that structure evolve alongside the product instead of fighting against a fixed schema from day one. That said, if your data does have clear, stable relationships from the start, I'll say so rather than force a document database where a relational one would actually serve you better.",
        },
        {
            title: "Fast to build an MVP or full product on",
            body: "The MERN stack is well suited to building quickly without sacrificing a path to scale later, since each piece, MongoDB, Express, React, and Node, is designed to work together with minimal glue code in between. That combination tends to mean less setup time before actual feature work can start. It's a big part of why it's a common choice for early-stage products that need to move fast without immediately locking themselves into a heavier, more rigid architecture.",
        },
        {
            title: "Shipped, not theoretical",
            body: "I've built and shipped a full MERN e-commerce platform, a real, working storefront with product listings, a cart, and checkout, not a stack I'm learning for the first time on your project. That distinction matters because the tricky parts of a stack usually show up in the details, handling real user sessions, real payment flows, real edge cases, not in the tutorial version. Having already worked through those details once means fewer surprises the second time around.",
        },
        {
            title: "Easy to find future developers",
            body: "MERN is one of the most common stacks in the industry, so if you need to grow your team later, hiring isn't a struggle to find someone who already knows the exact combination of tools you're using. That matters for the long-term health of a project. A stack built on rare or unusual tools can leave you dependent on one specific developer indefinitely. A common, well-documented stack means you have real options if your situation changes down the line.",
        },
    ],
    objection: {
        question: "Is MERN still a good choice, or is it outdated?",
        answer: "It's still a solid, widely used choice for a lot of products. The individual pieces, MongoDB, Node, and React, are all actively maintained and used in production at scale. I'll tell you if your specific project would actually be better served by a different combination, like Postgres instead of Mongo.",
    },
    experience:
        "Built a full e-commerce storefront on the MERN stack, React frontend, Node and Express and MongoDB backend, real, shipped, and publicly viewable.",
    caseStudies: [
        {
            name: "eCommerce Phone Store",
            description:
                "Full e-commerce storefront for buying and selling second-hand smartphones, built on the MERN stack.",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            link: { label: "View project", href: "https://jealous-phone-store.netlify.app", type: "Website" },
        },
    ],
    faqs: [
        {
            question: "How much does a MERN stack project cost?",
            answer: "Scoped per project after a quick call.",
        },
        {
            question: "Can you build an MVP on MERN?",
            answer: "Yes, it's a solid stack for getting an MVP live quickly.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
        {
            question: "Are you available for hire as a MERN stack developer?",
            answer: "Yes, direct contract, project-based, or contract-to-hire.",
        },
        {
            question: "Do you work across the full MongoDB, Express, React, and Node combination, or just parts of it?",
            answer: "The full combination. I've shipped a real MERN project end to end, not just individual pieces of the stack.",
        },
    ],
};
