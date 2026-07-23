import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";

import type { ServicePageData } from "./types";

export const nextjsDevelopment: ServicePageData = {
    slug: "nextjs-development",
    label: "Next.js",
    icon: NextjsIconDark,
    title: "Freelance Next.js Developer",
    description:
        "Hire a freelance Next.js developer for a fast, SEO-ready site or app. Real client work, straightforward process, direct communication.",
    h1: "Need a Next.js Developer for Your Project?",
    intro:
        "I build Next.js sites and apps that load fast, rank well, and don't need a rewrite when you outgrow the first version.",
    reasons: [
        {
            title: "Pages that load in a blink",
            body: "Next.js renders your pages ahead of time and only ships the JavaScript a page actually needs, so visitors see content immediately instead of staring at a loading spinner. In practice that means someone clicking through from Google lands on a page that's already there, not one still assembling itself in front of them. That speed difference shows up directly in your bounce rate, since people leave slow sites before they ever read your offer. It also feeds back into your Google ranking, because page speed is one of the signals Google uses to decide who shows up first.",
        },
        {
            title: "You won't outgrow it",
            body: "Next.js scales from a five-page marketing site to a full product with logins, a dashboard, and payments, without a framework switch in between. That matters because a rewrite later isn't just a technical cost, it's months of feature work paused while a team rebuilds something that already worked fine. Starting on a framework built for growth means the site you launch with today is the same foundation you're still building on a year from now. You add pages and features to it instead of replacing it.",
        },
        {
            title: "SEO built in, not bolted on",
            body: "Next.js structures pages so Google can read and index them properly from the moment they go live, rather than needing a separate SEO fix-up pass after launch. Meta tags, sitemaps, and fast load times all work together as part of how the framework renders pages, instead of being patched on with plugins afterward. In practice, that means less back and forth later trying to explain to a developer why your site isn't showing up in search. It also means the content work you invest in has a fast, well-structured page behind it to actually support it.",
        },
        {
            title: "A safe long-term bet",
            body: "Next.js is maintained by Vercel and used in production by companies like Netflix, TikTok, and Notion, so it's not a framework that quietly disappears in two years and leaves you stuck maintaining something nobody supports anymore. That matters for hiring too. If you ever need to bring on another developer to extend the site, you're picking from one of the largest pools of React developers rather than a niche skill set. It's also actively updated, so the site keeps getting security and performance improvements instead of going stale.",
        },
        {
            title: "Easy to hand off later",
            body: "Next.js is one of the most widely used React frameworks, which means if you ever need to bring on another developer, an agency, or a full team, they won't need weeks just to get oriented in the codebase. Common patterns like routing, data fetching, and image handling are done the same documented way across nearly every Next.js project, not reinvented from scratch each time. That consistency is what makes a codebase genuinely maintainable past the person who originally built it. You're not locked into working with just me long term if your situation changes.",
        },
    ],
    objection: {
        question: "Isn't Next.js overkill for a simple website?",
        answer: "Not really. Next.js works fine for a 3-page landing site and a full web app alike. Starting there means if you do want to add a blog, a dashboard, or user accounts later, you're extending what's already there, not replacing it.",
    },
    experience:
        "I've been building with Next.js across client projects and my own products for the past few years, everything from marketing sites to full SaaS products. Recent client work includes a pixel-perfect asset management app for Scalere Design (Vala), and ongoing work for PennyCanny.",
    caseStudies: [
        {
            name: "Scalere Design (Vala)",
            description:
                "Built a pixel-perfect implementation of Scalere's Figma designs for their asset management tool.",
            technologies: ["Next.js", "TypeScript", "TailwindCSS"],
            link: { label: "View project", href: "http://vala.scaleredesign.com", type: "Website" },
        },
    ],
    testimonial: "Elijah Scalere",
    faqs: [
        {
            question: "How long does a Next.js project take?",
            answer: "Depends on scope. A marketing site is days, a full app is longer. I'll give you a real estimate on a quick call rather than guess here.",
        },
        {
            question: "How much does a Next.js website cost?",
            answer: "Pricing is scoped per project after a quick call. There's no fixed number I can give without knowing what you actually need built.",
        },
        {
            question: "Do you work with agencies or recruiters staffing a contract role?",
            answer: "Yes. I'm open to direct client work, contract, and contract-to-hire arrangements.",
        },
        {
            question: "What if I already have an existing site on a different stack?",
            answer: "That's fine. I can build alongside it, migrate incrementally, or start fresh, depending on what makes sense for your situation.",
        },
        {
            question: "Do you work as a Next.js consultant, or only full builds?",
            answer: "Both. If you just need consulting on an existing Next.js project, an architecture review, a performance audit, or a specific problem, that's just as welcome as a full build.",
        },
        {
            question: "Are you a Next.js SEO developer, or just a builder?",
            answer: "Both. SEO is built into how I structure Next.js projects from the start, not an afterthought, so you're not paying separately for an SEO pass later.",
        },
        {
            question: "Can you migrate an existing React app to Next.js?",
            answer: "Yes. This is usually done incrementally, page by page, rather than a single risky rewrite.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
    ],
};
