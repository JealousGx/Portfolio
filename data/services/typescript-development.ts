import { Typescript } from "@/components/ui/svgs/typescript";

import type { ServicePageData } from "./types";

export const typescriptDevelopment: ServicePageData = {
    slug: "typescript-development",
    label: "TypeScript",
    icon: Typescript,
    title: "Freelance TypeScript Developer",
    description:
        "Hire a freelance TypeScript developer to catch bugs before they ship. Real client results, no fluff, direct communication.",
    h1: "Need a TypeScript Developer for Your Project?",
    intro:
        "I write in TypeScript by default because it catches expensive bugs before they ever reach your users.",
    reasons: [
        {
            title: "Fewer bugs reach production",
            body: "TypeScript catches a whole category of mistakes, like a wrong data type or a typo in a property name, while the code is still being written, not after a customer hits them live. In practice that means fewer of those emergency fixes where something breaks in production and nobody's sure why until someone spends an afternoon tracing it back. The compiler flags the mismatch immediately, right in the editor, before the code ever ships. For you that translates into fewer support tickets and fewer late-night fixes after launch.",
        },
        {
            title: "Cheaper to maintain later",
            body: "When another developer, or future you, opens this codebase in a year, TypeScript's types describe exactly what each piece of code expects and returns. There's no reverse-engineering required just to figure out what a function is supposed to do before touching it. That matters because most of the real cost of software isn't building it the first time, it's changing it safely six months later. Changes that would otherwise require careful, slow manual checking become changes the compiler verifies for you automatically.",
        },
        {
            title: "Safer to scale your team",
            body: "If you hire more developers later, TypeScript's types act like guardrails around the parts of the app they haven't fully learned yet. Someone new to the codebase can't accidentally pass the wrong kind of data into a function and not find out until it breaks somewhere else entirely. That safety net is especially valuable when a team is moving fast and nobody has time to hold the entire codebase in their head. It lets a growing team ship changes with real confidence instead of crossed fingers.",
        },
        {
            title: "Real, measured impact",
            body: "On a past client project, migrating a shared codebase to TypeScript cut critical production issues by 15 percent. That's not a marketing claim, it's what the migration numbers actually showed once the work shipped. The improvement came specifically from catching type mismatches and incorrect assumptions before they reached customers, the exact category of bug TypeScript is built to prevent. It's the kind of result that shows up as fewer fire drills for whoever's on call.",
        },
        {
            title: "Works with what you already use",
            body: "TypeScript is a superset of JavaScript, so it drops into an existing Node.js, React, or Next.js codebase without a rewrite of anything that already works. Files can even be converted one at a time, so adopting it doesn't mean pausing feature work to migrate the whole project at once. If your team already writes JavaScript, the learning curve is gradual rather than a wall you have to climb before getting anything done. It's an upgrade to what you have, not a replacement for it.",
        },
    ],
    objection: {
        question: "We're a small project. Do we really need TypeScript?",
        answer: "Even small projects benefit. The setup cost is minimal, and it pays for itself the first time it catches a bug before you ship it. I default to it unless there's a specific reason not to.",
    },
    experience:
        "TypeScript is part of my default stack, not an add-on. I use it across client work and my own products. On a shared monorepo at my current company, I led a migration to TypeScript that cut critical issues by 15 percent.",
    caseStudies: [
        {
            name: "PennyCanny (TypeScript migration)",
            stat: "15% fewer critical issues",
            description:
                "Led a TypeScript migration across a shared monorepo spanning multiple client projects, improving reliability.",
            technologies: ["TypeScript", "Node.js"],
        },
        {
            name: "Scalere Design (Vala)",
            description: "Type-safe implementation of a pixel-perfect Figma design.",
            technologies: ["TypeScript", "Next.js"],
            link: { label: "View project", href: "http://vala.scaleredesign.com", type: "Website" },
        },
    ],
    testimonial: "Elijah Scalere",
    faqs: [
        {
            question: "Can you convert my existing JavaScript project to TypeScript?",
            answer: "Yes. This can be done incrementally, file by file, so it doesn't block ongoing work.",
        },
        {
            question: "Does TypeScript slow down development?",
            answer: "It adds a small amount of upfront thinking about data shapes, but that's usually paid back the first time it prevents a bug. Not a real slowdown in practice.",
        },
        {
            question: "How much does a TypeScript project cost?",
            answer: "Depends on scope. Happy to give you a real number after a quick call.",
        },
        {
            question: "Do you take on contract or contract-to-hire roles?",
            answer: "Yes, both. Happy to discuss what structure works for your team.",
        },
    ],
};
