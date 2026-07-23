import { Braces } from "lucide-react";

import type { ServicePageData } from "./types";

export const javascriptDevelopment: ServicePageData = {
    slug: "javascript-development",
    label: "JavaScript",
    icon: Braces,
    title: "Freelance JavaScript Developer",
    description:
        "Hire a freelance JavaScript developer for solid frontend or backend fundamentals. Frameworks optional, quality isn't.",
    h1: "Need a JavaScript Developer for Your Project?",
    intro:
        "Every project I build, from a landing page to a full product, starts with solid JavaScript fundamentals underneath the framework.",
    reasons: [
        {
            title: "The foundation everything else sits on",
            body: "React, Next.js, and Node.js are all JavaScript underneath, so how well the fundamentals are handled shapes everything built on top of them. A developer who understands the language itself, not just a framework's API, catches issues a framework alone won't flag, like a stray closure holding onto memory or an async call that resolves in the wrong order. In practice that means fewer strange, hard-to-explain bugs that only show up under real usage. It's the difference between code that works in a demo and code that keeps working once real users are on it.",
        },
        {
            title: "Works everywhere",
            body: "JavaScript runs in the browser and on the server through Node.js, so the same core skill set covers both your frontend and your backend. That matters practically because you're not paying for two specialists to build one small product, or coordinating a handoff between a frontend developer and a separate backend developer for every feature. One person can move a feature from the API through to the interface without losing context in between. For a smaller project especially, that usually means faster delivery and fewer miscommunications along the way.",
        },
        {
            title: "Fast to get started, no long ramp-up",
            body: "A lightweight JavaScript setup can go from an idea to a working prototype in a matter of days, without the overhead of configuring a full framework first. That speed matters most when you're validating whether an idea is worth building out further, before committing real budget to it. If it proves out, the same code can grow into something more structured rather than being thrown away. If it doesn't, you've spent days finding that out instead of weeks.",
        },
        {
            title: "A safe, universal choice",
            body: "JavaScript isn't going anywhere. It's the one language every web browser runs, which means code built on it stays maintainable for as long as the web itself does. Any future developer you bring on, whether next year or five years from now, will already know the language, so you're never stuck searching for a rare specialist just to keep your own site running. It's a genuinely low-risk foundation to build a business on.",
        },
        {
            title: "I don't overcomplicate it",
            body: "Not every project needs a heavy framework layered on top. Sometimes a simple, well-structured JavaScript site is the faster, cheaper, and easier to maintain answer, and I'll tell you when that's the case instead of defaulting to whatever's more impressive to build. A five-page site with a contact form rarely needs the same tooling as a multi-user product. Matching the build to the actual problem is what keeps costs down and keeps the thing maintainable after I'm done.",
        },
    ],
    objection: {
        question: "Should I just go straight to a framework like React instead?",
        answer: "Depends on the project. A simple site or a small interactive feature is often faster and cheaper in plain JavaScript. I'll tell you honestly when a framework is worth the added complexity and when it isn't.",
    },
    experience:
        "JavaScript is the base of everything I build, across frameworks and without them, from early projects through to client work like Scalere Design's Vala and ongoing work at PennyCanny.",
    caseStudies: [
        {
            name: "Scalere Design (Vala)",
            description: "Client asset management tool, built on a JavaScript and TypeScript foundation.",
            technologies: ["JavaScript", "TypeScript", "Next.js"],
            link: { label: "View project", href: "http://vala.scaleredesign.com", type: "Website" },
        },
    ],
    faqs: [
        {
            question: "Do I need a framework, or is plain JavaScript enough?",
            answer: "Depends on what you're building. Happy to give an honest recommendation on a quick call rather than default to the more expensive option.",
        },
        {
            question: "How much does a JavaScript project cost?",
            answer: "Scoped per project after a quick call.",
        },
        {
            question: "Can you work with my existing JavaScript codebase?",
            answer: "Yes. Send over what you have and I'll assess it before quoting anything.",
        },
        {
            question: "Do you work as a vanilla JavaScript developer, without a framework?",
            answer: "Yes. Plenty of projects don't need a framework at all, and I'll build in plain JavaScript when that's genuinely the better fit.",
        },
        {
            question: "Can you fix a bug in my existing JavaScript code, or only full builds?",
            answer: "Yes. Bug fixes and small jobs are welcome, not just full builds.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
    ],
};
