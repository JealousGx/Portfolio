import { Nodejs } from "@/components/ui/svgs/nodejs";

import type { ServicePageData } from "./types";

export const nodejsDevelopment: ServicePageData = {
    slug: "nodejs-development",
    label: "Node.js",
    icon: Nodejs,
    title: "Freelance Node.js Developer",
    description:
        "Hire a freelance Node.js developer for a backend that stays fast under real traffic. Real client results, remote-friendly.",
    h1: "Need a Node.js Developer for Your Project?",
    intro:
        "I build backends and APIs on Node.js that stay fast under real traffic, not just in a demo.",
    reasons: [
        {
            title: "Handles real traffic without falling over",
            body: "On a past client project, backend work on Node.js cut system latency by 20 percent, the kind of improvement that shows up as your app staying responsive as more people use it. That's not a benchmark from a sample app either, it came from optimizing a production system already carrying real user traffic. In practice, that's the difference between your app feeling snappy during a busy period and users bouncing because a page hung for a few seconds. Performance work like this pays off most exactly when you can't afford it not to.",
        },
        {
            title: "One language, full stack",
            body: "If your frontend is already in JavaScript or TypeScript, a Node.js backend means your team, or future hires, aren't context-switching between two completely different languages for one product. That has a real cost when something breaks across the frontend and backend at once, since one developer can trace the whole path without switching mental models halfway through. It also means fewer duplicate implementations of the same logic, since some code and types can be shared directly between the two. For a small team especially, that adds up to faster fixes and fewer bugs slipping through the gap.",
        },
        {
            title: "Huge ecosystem, fewer custom builds",
            body: "Most common backend needs, like authentication, payments, or file uploads, already have solid, actively maintained libraries in Node's package ecosystem. That means less custom code for me to write from scratch and less custom code for you to maintain and patch for security issues down the line. It also means faster delivery, since a well-tested library usually gets you further, faster, than a bespoke implementation of the same thing. I'll tell you when a custom build is actually worth it and when it isn't.",
        },
        {
            title: "Good fit for real-time features",
            body: "Chat, live notifications, and live dashboards are all things Node handles well without bolting on extra infrastructure most other setups would need. That matters if your product roadmap includes anything that updates in real time, since building that in later on a backend that wasn't designed for it is a much bigger job than building it in from the start. Even if you don't need it on day one, having a backend that can grow into it without a rewrite is worth planning for now.",
        },
        {
            title: "Remote-friendly, flexible across time zones",
            body: "I work with clients wherever they're based, with regular async updates so you're never left wondering where things stand between calls. That means we find real overlap during your working hours when it matters, plus written progress updates the rest of the time instead of radio silence. For a backend project specifically, that steady communication matters because backend bugs are often invisible until they aren't, and you want to know they're being tracked before they become a real problem.",
        },
    ],
    objection: {
        question: "Is Node.js good enough for a serious production backend, not just a prototype?",
        answer: "Yes. It's what companies like Netflix and PayPal run production traffic on. The 20 percent latency improvement on a past client project came from a real production system, not a toy example.",
    },
    experience:
        "Backend systems using Node.js (with TypeScript) are a core part of my work at my current company, where I designed and shipped backend systems for PennyCanny, DynamoDB and MongoDB backed, deployed on AWS.",
    caseStudies: [
        {
            name: "PennyCanny",
            stat: "20% lower latency",
            description:
                "Architected and delivered scalable backend systems using Node.js (TypeScript) and DynamoDB/MongoDB.",
            technologies: ["Node.js", "TypeScript", "DynamoDB", "MongoDB"],
        },
    ],
    faqs: [
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones, with regular async updates.",
        },
        {
            question: "How much does a Node.js backend cost?",
            answer: "Scoped per project after a quick call. Depends on what you're building.",
        },
        {
            question: "Can you work alongside our existing backend team?",
            answer: "Yes. Direct contract or contract-to-hire, whichever fits how your team is structured.",
        },
        {
            question: "Do you build Node.js APIs specifically, or only full backends?",
            answer: "Yes, API-only work is common. Not every project needs a full backend rebuild.",
        },
        {
            question: "Do you work with startups needing a Node.js backend?",
            answer: "Yes. Startup backend work is a regular part of what I do, including scoping it down to what you actually need for launch.",
        },
    ],
};
