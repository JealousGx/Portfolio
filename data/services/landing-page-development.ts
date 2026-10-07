import { Layout } from "lucide-react";

import type { ServicePageData } from "./types";

export const landingPageDevelopment: ServicePageData = {
    slug: "landing-page-development",
    label: "Landing Page",
    icon: Layout,
    title: "Freelance Landing Page Developer",
    description:
        "I build fast, SEO-optimized landing pages for products, campaigns and services, designed to turn visitors into enquiries. From $800.",
    h1: "Landing Page Development for Startups and Small Businesses",
    intro:
        "I build a landing page for your product, campaign or service. It loads fast, it is built to be found on Google, and it is designed to turn visitors into enquiries.",
    details: {
        audience:
            "Startups and small businesses launching a product, a campaign or a service, who need a fast page that turns visitors into enquiries.",
        included: [
            "A landing page for a product, campaign or service",
            "Fast loading, built to be found on Google",
            "Designed to convert visitors into enquiries",
        ],
        notIncluded: [
            "Ongoing work (separate retainer)",
            "New features (scoped separately)",
            "Anything not agreed in the scope (quoted separately)",
            "Text and images (you supply them, or I quote copywriting separately)",
            "Domain and hosting fees (you pay these to the provider)",
            "Paid ads setup",
        ],
        timeline: "About 1 to 2 weeks after I have your content.",
        tools:
            "Next.js, or WordPress when you want to edit the page yourself. I choose based on who will maintain it after launch.",
        startingPrice: { amount: 800, currency: "USD" },
        priceNote: "This is a starting point, not a fixed quote. Book a free scoping call for a real number.",
    },
    faqs: [
        { question: "How much does a landing page cost?", answer: "Landing pages start from $800. That is a starting point, not a fixed quote. Book a free scoping call for a real number." },
        { question: "How long does it take?", answer: "About 1 to 2 weeks after I have your content." },
        { question: "Do I own the page?", answer: "It's your choice. You can own and manage the page yourself, or I can manage it for you. We agree which of the two before work starts, on the scoping call." },
        { question: "Can't I just use a page builder instead?", answer: "For some projects, honestly, yes, and I'll tell you if that's your situation. Where builders fall short is speed, limits on SEO and every page looking like the same template. If the page is a real part of how you get enquiries, a properly built one tends to pay for itself. If it's a short-lived placeholder, a builder might be all you need." },
        { question: "What happens after launch?", answer: "Ongoing work is a monthly retainer, starting at $1,200/mo." },
        { question: "Next.js or WordPress?", answer: "Next.js, or WordPress when you want to edit the page yourself. I choose based on who will maintain it after launch." },
    ],
};
