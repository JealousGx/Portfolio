import { Triangle } from "lucide-react";

import type { ServicePageData } from "./types";

export const vueDevelopment: ServicePageData = {
    slug: "vue-development",
    label: "Vue",
    icon: Triangle,
    title: "Freelance Vue.js Developer",
    description:
        "Hire a freelance Vue/Nuxt.js developer for dashboards and internal tools. Honest about when Vue is the right fit.",
    h1: "Need a Vue Developer for Your Project?",
    intro:
        "I build dashboards and interfaces with Vue and Nuxt.js when that's the right fit for your existing stack or team.",
    reasons: [
        {
            title: "Gentle learning curve for your team",
            body: "If you're bringing on junior developers or a team that isn't deeply JavaScript-heavy yet, Vue's syntax tends to be more approachable to onboard onto than some alternatives, since it reads closer to plain HTML and JavaScript. That matters if your internal team is going to be the one maintaining the tool after I hand it off, since a gentler learning curve means less time spent training people before they can contribute. It's a real, practical factor in choosing a framework, not just a preference.",
        },
        {
            title: "Great for internal tools and dashboards",
            body: "I've built an internal dashboard on Nuxt.js currently in use at my company, and Vue is a strong fit for exactly this kind of interface-heavy, data-driven tool. Internal tools tend to prioritize clarity and speed of development over the kind of heavy client-side interactivity a public-facing product might need, and Vue's templating approach makes that kind of layout-and-data-focused work quick to build. If your project is an internal dashboard rather than a customer-facing product, that's usually a good match.",
        },
        {
            title: "Works if your team already knows Vue",
            body: "If your existing codebase or team is already invested in Vue, I can extend what's there rather than pushing you toward React or another framework for no real reason beyond personal preference. Switching frameworks partway through a project's life is a real cost, in retraining, in rewriting working code, and in slowing down feature delivery while the team adjusts. If Vue is already your foundation, building on it usually makes more sense than replacing it.",
        },
        {
            title: "Nuxt.js handles the SEO/SSR side too",
            body: "If a Vue-based product also needs to be crawlable by Google, Nuxt gives you server-side rendering out of the box without needing extra tooling bolted on separately. A plain client-rendered Vue app can be genuinely difficult for search engines to index properly, which becomes a real problem the moment organic search traffic matters to the product. Nuxt solves that the same way Next.js solves it for React, by rendering pages in a way search engines can actually read.",
        },
        {
            title: "Honest about fit",
            body: "If your project would genuinely be better served by React or another framework, given your team's existing skills or what you're integrating with, I'll say so instead of defaulting to whatever I happen to be asked about. That honesty matters because the framework choice affects who can maintain the project later and how easy it is to hire for. I'd rather recommend the right tool for your situation than push the one I'd personally prefer to use.",
        },
    ],
    objection: {
        question: "Should we use Vue or React for our project?",
        answer: "Depends mostly on what your team already knows and what you're integrating with. If you don't have a strong preference either way, I'll recommend based on the specifics of your project rather than pushing one over the other.",
    },
    experience:
        "Built an internal dashboard using Nuxt.js for my current company, a real, in-production tool used internally, not a demo.",
    proofNote: "Internal tool, no public link, but happy to walk through the approach on a call.",
    faqs: [
        {
            question: "Do you have production Vue/Nuxt experience, or is this a secondary skill?",
            answer: "Production experience. I built an internal dashboard on Nuxt.js currently in use at my company.",
        },
        {
            question: "How much does a Vue/Nuxt project cost?",
            answer: "Scoped after a quick call.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
        {
            question: "Are you available for hire as a Vue.js developer?",
            answer: "Yes, though most of my recent Vue work has been an internal tool rather than client work. Happy to discuss whether it's a fit on a call.",
        },
        {
            question: "Do you offer Vue consulting on an existing project, or only new builds?",
            answer: "Yes, reviewing or advising on an existing Vue project is work I take on too.",
        },
    ],
};
