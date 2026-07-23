import { ReactLight } from "@/components/ui/svgs/reactLight";

import type { ServicePageData } from "./types";

export const reactDevelopment: ServicePageData = {
    slug: "react-development",
    label: "React",
    icon: ReactLight,
    title: "Freelance React Developer",
    description:
        "Hire a freelance React developer for fast, maintainable UI work. Real client projects, honest scoping, remote-friendly.",
    h1: "Need a React Developer for Your Project?",
    intro:
        "React powers most of what I build, from client sites to my own products, because it's fast to build with and easy for future developers to pick up.",
    reasons: [
        {
            title: "Faster to build, faster to change later",
            body: "React's component model means a new feature is usually a new piece added alongside what already exists, not a rewrite of the whole page to fit it in. In practice that means when you want to add a pricing section or a new dashboard widget six months after launch, it slots in next to the rest instead of requiring a rebuild of the surrounding page. That same structure also makes small tweaks cheap, since changing how one button looks doesn't risk breaking something unrelated three sections away. Over the life of a product, that adds up to real savings in ongoing development time.",
        },
        {
            title: "Huge talent pool if you scale your team",
            body: "React is the most widely used frontend library, so if you hire more developers later, finding people who already know your stack is straightforward rather than a long search for a rare specialist. That matters if you're planning to grow past a single freelancer at some point, since you're not locked into one person's availability to keep the project moving. It also means documentation, tutorials, and community solutions for almost any problem already exist, which keeps ongoing development faster for whoever picks it up next. It's a safe default precisely because so many other developers already know it well.",
        },
        {
            title: "Proven at scale",
            body: "React runs production apps at Meta, Netflix, and Airbnb, handling far more traffic and complexity than most projects will ever need to. It's not an experimental choice you'll regret in two years when the library gets abandoned or a better alternative makes it obsolete. That track record matters because the patterns and tooling around React keep improving rather than stagnating, so a React app built today still benefits from ecosystem improvements years from now. You're building on something with a long runway, not a trend.",
        },
        {
            title: "Pairs with Next.js when you need SEO",
            body: "If your React app also needs to rank on Google, pairing it with Next.js handles that from the start instead of retrofitting SEO onto a plain React app after the fact. A plain React single-page app can be genuinely difficult for search engines to crawl properly, which becomes a real problem the moment organic traffic matters to the business. Pairing the two means you get React's component model for building the interface and a rendering approach that search engines can actually read. I'll flag early on if your project needs that pairing or if plain React is enough.",
        },
        {
            title: "Team-friendly, not just solo-friendly",
            body: "I can work as a sole contractor building your whole frontend, or slot into an existing team or agency structure alongside other developers, whichever your project actually needs. That flexibility matters if your situation changes partway through, say you start with just me and later bring on an internal team. React's conventions are common enough that handing work between developers doesn't require translating one person's personal style into something the next person can follow. It's built to be worked on by more than one person over time.",
        },
    ],
    objection: {
        question: "How is React different from just using plain HTML/CSS/JavaScript for our site?",
        answer: "For a simple static page, plain HTML might genuinely be simpler and cheaper. I'll tell you if that's the case. React earns its cost when you have interactive features, reusable UI pieces, or plan to keep adding to the product over time.",
    },
    experience:
        "React is the base of nearly everything I've built, client work like Scalere Design's Vala, backend-adjacent frontend work at PennyCanny, and personal products like Klipse, Prospkt, GigScale, and FounderSignal.",
    caseStudies: [
        {
            name: "Scalere Design (Vala)",
            description: "Pixel-perfect Figma-to-React implementation for an asset management tool.",
            technologies: ["React", "Next.js", "TypeScript"],
            link: { label: "View project", href: "http://vala.scaleredesign.com", type: "Website" },
        },
    ],
    testimonial: "Naqcho Ali Mehdi",
    faqs: [
        {
            question: "Do you work through Upwork, or direct contract only?",
            answer: "I work direct as well as through platforms. Happy to discuss whatever's easiest for you.",
        },
        {
            question: "Can you join our existing team, or only take solo projects?",
            answer: "Both. Solo freelance work or slotting into an existing team or agency.",
        },
        {
            question: "How much does a React project cost?",
            answer: "Scoped per project after a quick call.",
        },
        {
            question: "Do you take enterprise-scale React projects?",
            answer: "Yes, depending on scope and timeline. Let's talk about what you need.",
        },
        {
            question: "Do you work as a React consultant on an existing project?",
            answer: "Yes. Reviewing an existing React codebase or advising on architecture is work I take on, not just full builds.",
        },
        {
            question: "Can you optimize the performance of an existing React app?",
            answer: "Yes. Slow React apps are usually down to a specific, findable cause, unnecessary re-renders, unoptimized images, oversized bundles, and I can audit for that.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
    ],
};
