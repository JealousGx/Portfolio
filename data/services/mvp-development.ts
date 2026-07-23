import { Rocket } from "lucide-react";

import type { ServicePageData } from "./types";

export const mvpDevelopment: ServicePageData = {
    slug: "mvp-development",
    label: "MVP Development",
    icon: Rocket,
    title: "Freelance MVP Developer",
    description:
        "Freelance MVP development. Built by a founder who's shipped his own products from idea to launch.",
    h1: "MVP Development, Built by a Founder Who's Shipped His Own",
    intro:
        "I don't just build MVPs for clients. I build and ship my own products, so I know what actually needs to exist for launch and what can wait.",
    reasons: [
        {
            title: "Ship in weeks, not months",
            body: "An MVP is scoped down to what proves your idea works, not the full vision you eventually want to build, and that's the whole point of building one at all. In practice, that means we agree upfront on the one or two things the MVP has to prove, and everything else waits until you know the idea is worth investing further in. I hold the scope to that line even when it's tempting to add more, because a lean MVP that ships gets you real feedback faster than a bigger one still in progress.",
        },
        {
            title: "Built on a foundation that can grow",
            body: "The MVP isn't throwaway code written to be deleted the moment the idea proves out. If it works, adding features later means extending what's there rather than starting over from scratch on a second version. That distinction matters because a lot of MVP work gets built so quickly that it becomes a liability the moment it succeeds and needs to scale. I structure the codebase to survive that transition, so the version that validates your idea can also become the version you keep building on.",
        },
        {
            title: "I've done this for my own products, not just clients",
            body: "FounderSignal, GigScale, and Prospkt are MVPs I designed, built, and shipped myself, from idea to a live product with real users, not just client work I've theorized about. That means I've personally felt the pressure of deciding what to cut, what to launch with, and what to leave for later, on my own products where the stakes and the decisions were entirely mine to make. That experience shapes the advice I give you, since it comes from having actually made those calls, not from a checklist.",
        },
        {
            title: "Bespoke, not templated",
            body: "Every MVP is scoped to your actual idea, not a generic template stretched to fit whatever you're trying to build. A templated approach might get something live faster on paper, but it usually means compromising on the exact thing that makes your idea different in the first place. I'll ask enough questions upfront to understand what genuinely matters for your specific idea, then build toward that, instead of wrapping a boilerplate around it and calling it done.",
        },
        {
            title: "Honest about what to cut",
            body: "Founders often want to include too much in version one, more features, more polish, more edge cases handled, all before a single real user has seen it. I'll tell you directly what to leave out so you launch faster and actually test the hypothesis you set out to test, instead of spending months building things nobody's asked for yet. That honesty sometimes means pushing back on ideas you're excited about, but it's what keeps the MVP an MVP instead of quietly becoming a much bigger, slower project.",
        },
    ],
    objection: {
        question: "Isn't building an MVP myself with no-code tools cheaper?",
        answer: "For some ideas, yes, and I'll tell you if that's the better starting point. But if your idea needs real logic, integrations, or you'll want to keep building on it long-term, a properly scoped custom MVP avoids hitting a wall, and a rebuild, later.",
    },
    experience:
        "I've built MVPs both as a founder and for others. FounderSignal (idea validation tool), GigScale (Upwork/Fiverr profile optimizer), and Prospkt (lead-finding tool for freelancers) are all products I designed and shipped myself, start to finish.",
    caseStudies: [
        {
            name: "FounderSignal",
            description:
                "Built myself. Helps founders validate ideas with real signals before writing a single line of production code.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL"],
            link: { label: "View project", href: "https://foundersignal.app", type: "Website" },
        },
        {
            name: "Prospkt",
            description:
                "Built myself. Lead discovery and outreach tool for freelancers, from idea to live product.",
            technologies: ["TanStack Start", "TypeScript", "Gemini AI"],
            link: { label: "View project", href: "https://prospkt.app", type: "Website" },
        },
    ],
    faqs: [
        {
            question: "How much does MVP development cost?",
            answer: "Scoped after a quick call. Depends entirely on what the MVP needs to prove.",
        },
        {
            question: "How long does an MVP take to build?",
            answer: "Depends on scope, but the whole point of an MVP is to keep it tight. I'll give you a real timeline on a call, not a guess here.",
        },
        {
            question: "Is this bespoke, or do you reuse templates?",
            answer: "Bespoke, scoped to your actual idea, not a generic template.",
        },
        {
            question: "Can you help me hire a developer for a startup, or do you only build solo?",
            answer: "I typically work solo end-to-end, but I'm open to contract-to-hire if your startup is looking to bring someone on longer-term.",
        },
    ],
};
