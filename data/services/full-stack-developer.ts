import { Blocks } from "lucide-react";

import type { ServicePageData } from "./types";

export const fullStackDeveloper: ServicePageData = {
    slug: "full-stack-developer",
    label: "Full-Stack",
    icon: Blocks,
    title: "Freelance Full Stack Developer",
    description:
        "Hire a freelance full stack developer who owns your frontend, backend, and deployment end to end.",
    h1: "Need a Full Stack Developer for Your Project?",
    intro:
        "One developer who owns your frontend, backend, and deployment, instead of you coordinating between three specialists.",
    reasons: [
        {
            title: "One person accountable for the whole thing",
            body: "There's no finger-pointing between a frontend team and a backend team when something breaks in between the two, since I own both sides and can trace the problem across the whole stack myself. In practice that means when a feature doesn't work right, I'm not waiting on someone else's team to confirm whether the bug is in the API or the interface before anyone can even start fixing it. That single point of accountability tends to mean issues get resolved faster, since nobody has to coordinate a meeting just to figure out whose problem it is.",
        },
        {
            title: "Faster to ship, fewer handoffs",
            body: "Most real features touch both the frontend and the backend at once, a new form needs both a UI and an API endpoint to save it. Splitting that work across two separate developers means each piece has to wait on the other, plus time spent making sure both sides agree on the exact data format between them. When one person owns both, that handoff disappears entirely, and a feature that might take a week split across two people can often ship in days when it's one continuous piece of work.",
        },
        {
            title: "Proven managing an entire codebase",
            body: "At my current company, I manage the entire codebase across multiple client engagements: architecture decisions, backend systems, frontend delivery, and cloud deployment, all under one person's ownership. That's not a claim about a single small project, it's ongoing, ongoing responsibility across live client work with real production stakes. Managing it end to end means I've had to think about how decisions in one layer affect the others, which is exactly the kind of judgment a split-up team often misses.",
        },
        {
            title: "Can scale with you",
            body: "Starting with me solo doesn't lock you out of growing into a bigger team later. If your project reaches a point where it needs more hands, I can help onboard new developers and make sure the codebase is structured clearly enough that they ramp up fast instead of getting lost in undocumented decisions. That's a real, practical advantage over hiring a large team from day one for something that doesn't need it yet, since you only add headcount once the project has actually earned it.",
        },
        {
            title: "Works remote, across time zones",
            body: "I'm comfortable working with clients and teams remotely, wherever they're based, with frequent async updates so nothing goes quiet on your end for days at a time. That matters especially for full-stack work, where a change on the backend can quietly affect something on the frontend days later if nobody's tracking it closely. Regular written updates mean you always know what shipped, what's in progress, and what's next, even across a time zone gap where we're not both online at the same moment.",
        },
    ],
    objection: {
        question: "Isn't it risky to have one person own everything instead of a specialized team?",
        answer: "For a lot of projects it's actually lower risk. There's no gap between frontend and backend where bugs hide, and no coordination overhead. For larger, higher-stakes builds, I'm also comfortable working alongside a bigger team rather than insisting on doing everything solo.",
    },
    experience:
        "Full-stack ownership is the core of my day-to-day work, managing the entire codebase across multiple client engagements, from backend architecture to frontend delivery to cloud deployment.",
    caseStudies: [
        {
            name: "PennyCanny",
            description:
                "Manage the entire codebase across multiple client engagements: backend systems, TypeScript migration, cloud deployment, and QA process improvements.",
            technologies: ["Node.js", "TypeScript", "AWS", "React"],
        },
    ],
    testimonial: "Uzair Sultan",
    faqs: [
        {
            question: "Do you take on projects for a startup, or only established companies?",
            answer: "Both. Happy to work with startups building their first product or established companies extending an existing one.",
        },
        {
            question: "Can I hire a developer for an app or project through you directly?",
            answer: "Yes. Direct contract, project-based, or contract-to-hire, whichever fits.",
        },
        {
            question: "How much does a full stack project cost?",
            answer: "Scoped per project after a quick call. Depends heavily on what's being built.",
        },
        {
            question: "Do you work solo, or can you join an existing team?",
            answer: "Both. I've worked solo on end-to-end ownership and alongside existing teams.",
        },
    ],
};
