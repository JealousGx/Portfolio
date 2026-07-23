import { Sparkles } from "lucide-react";

import type { ServicePageData } from "./types";

export const saasDevelopment: ServicePageData = {
    slug: "saas-development",
    label: "SaaS Development",
    icon: Sparkles,
    title: "Freelance SaaS Developer",
    description:
        "Freelance SaaS development. Auth, billing, and AI features shipped in my own live products.",
    h1: "SaaS Development, From Someone Who's Built and Shipped His Own",
    intro:
        "I've built and launched my own SaaS products, auth, billing, and all, so I know what actually needs to be right on day one.",
    reasons: [
        {
            title: "Billing and auth done right the first time",
            body: "Getting subscription billing and authentication wrong is expensive to fix once customers are already paying, since fixing it later usually means migrating live customer data without breaking their access or their subscriptions. I've shipped this before, using Polar for billing and Better Auth for authentication in my own products, so it's not something I'm learning for the first time on your project. Getting the details right upfront, trial periods, upgrade and downgrade flows, failed payment handling, saves you from a painful rebuild after real customers are already depending on it.",
        },
        {
            title: "Built to add customers without a rewrite",
            body: "Your SaaS should handle ten customers and ten thousand without an architecture rebuild in between, and I scope for that from the start rather than optimizing only for the first version. That means thinking through things like database structure and background job handling before they become a bottleneck, not after customers are already complaining about slowness. A SaaS that wasn't built with growth in mind tends to hit a wall right when the business is finally gaining traction, which is the worst possible time for a rebuild.",
        },
        {
            title: "AI features done properly, not bolted on",
            body: "Several of my own products use AI, specifically Gemini, as a core feature customers actually rely on, not a chatbot bolted onto the corner of the page for the sake of a feature list. That means I've dealt with the real challenges of shipping AI in production: handling latency, managing API costs at scale, and designing around a model that doesn't always respond the same way twice. If your SaaS needs AI features, I've actually built and shipped that in a live product, not just experimented with an API in a demo.",
        },
        {
            title: "I've felt the pain of launching one myself",
            body: "Marketing, pricing, and getting the first users are hard parts of launching a SaaS that I've personally lived through with my own products, not just heard about secondhand from clients. That means I can flag the things likely to bite you before they do, like underpricing your first tier or building a feature nobody asked for before you've validated demand for it. It's a different kind of advice than you get from someone who's only ever built SaaS products for other people and never had to launch and market one themselves.",
        },
        {
            title: "Custom-built for your business logic",
            body: "This isn't a generic SaaS boilerplate stretched to fit your idea. It's built around what your product specifically needs to do, which usually means the exact business rules that make your SaaS different from a competitor's. Boilerplates are fast to start with but often fight against the parts of your product that actually matter, forcing you to work around assumptions baked into someone else's template. Building around your actual logic from the start avoids that friction later.",
        },
    ],
    objection: {
        question: "Should I use a SaaS boilerplate or template instead of building custom?",
        answer: "For a very generic tool, maybe. But most real SaaS ideas have specific business logic a template doesn't handle well, and you often end up ripping out more of the boilerplate than you keep. I'll tell you honestly if a template would actually serve you better.",
    },
    experience:
        "I've designed, built, and shipped multiple SaaS products myself. Klipse (AI video creation), GigScale (Upwork/Fiverr profile optimizer, with Polar billing and Better Auth), and Prospkt, handling everything from the AI features to billing to deployment.",
    caseStudies: [
        {
            name: "GigScale",
            description:
                "Built myself. AI-powered Upwork/Fiverr profile optimizer with Polar billing and Better Auth.",
            technologies: ["Next.js", "TypeScript", "TiDB", "Gemini AI", "Polar"],
            link: { label: "View project", href: "https://gigscale.app", type: "Website" },
        },
        {
            name: "Klipse",
            description:
                "Built myself. AI video creation SaaS, from script generation to auto-publishing.",
            technologies: ["TanStack Start", "Cloudflare", "Gemini AI", "FFmpeg"],
            link: { label: "View project", href: "https://klipse.app", type: "Website" },
        },
    ],
    faqs: [
        {
            question: "How much does SaaS development cost?",
            answer: "Scoped after a call. Depends on the product's complexity, especially around billing/auth and any AI features.",
        },
        {
            question: "Can you build AI features into my SaaS?",
            answer: "Yes, I've shipped Gemini-powered AI features in my own production SaaS products.",
        },
        {
            question: "Do you handle billing and subscriptions?",
            answer: "Yes, including Polar for subscription billing.",
        },
        {
            question: "Is this custom-built or a template?",
            answer: "Custom, built around your product's actual logic, not a generic boilerplate.",
        },
    ],
};
