import { Gauge } from "lucide-react";

import type { ServicePageData } from "./types";

export const golangDevelopment: ServicePageData = {
    slug: "golang-development",
    label: "Go",
    icon: Gauge,
    title: "Freelance Golang Developer",
    description:
        "Hire a freelance Golang developer for performance-sensitive backend work. Deep technical writing, real depth.",
    h1: "Need a Go Developer for Your Project?",
    intro:
        "Go is what I reach for when performance and concurrency actually matter. Not every project needs it, but when it does, I've written about it in depth.",
    reasons: [
        {
            title: "Built for performance-sensitive work",
            body: "Go compiles to fast, efficient binaries and handles concurrency well, which matters most for high-traffic APIs or real-time features where every millisecond of response time counts. Unlike interpreted languages, Go code runs close to the metal without a heavy runtime sitting between your logic and the hardware executing it. In practice, that means the same server hardware handles noticeably more simultaneous requests before it starts slowing down. For workloads where that headroom matters, the difference shows up directly in how your system behaves under real load, not just in a benchmark chart.",
        },
        {
            title: "Simple, readable, easy to hand off",
            body: "Go's language design deliberately avoids complexity for its own sake, so a future developer picking up the codebase isn't left untangling clever tricks or unusual patterns just to understand what a function does. There's usually one clear, idiomatic way to write a given piece of logic in Go, rather than several competing styles a team has to agree on first. That matters if you ever need to bring on another developer, since they can read and trust the code without needing a long walkthrough of decisions made months earlier.",
        },
        {
            title: "A genuine specialization, not a buzzword",
            body: "I write in-depth technical content on Go, building APIs, microservices, event-driven architecture, and performance comparisons like Fiber versus Fastify, real depth built from actually working through these patterns, not a single tutorial followed once and forgotten. That writing reflects genuine time spent reasoning through tradeoffs most surface-level guides skip entirely. It's the kind of specialization that shows up in the details, knowing not just how to write Go, but when it's actually the right tool for a given problem.",
        },
        {
            title: "Good fit for microservices",
            body: "If your system needs to be broken into independently deployable services, Go's small binary size and low resource footprint per service is a real, practical advantage over heavier runtimes. Each service starts fast and uses less memory at rest, which matters when you're running many of them side by side rather than one large application. That efficiency also tends to translate into lower infrastructure costs at scale, since you're not paying for the overhead a heavier language would carry across dozens of running services.",
        },
        {
            title: "Won't be oversold to you",
            body: "Go isn't always the right call for every project, and if Node.js or another language genuinely fits your situation better, I'll say so rather than push Go because it's what I'd personally prefer to use. Recommending a technology because it's exciting to work with, instead of because it's right for the problem, is exactly the kind of decision that costs a client money later. I'd rather tell you honestly when a simpler, more familiar stack is the better call for your team.",
        },
    ],
    objection: {
        question: "Why would we choose Go over Node.js, which you also do?",
        answer: "Go tends to win when raw performance, concurrency, or resource efficiency under load matter most, think high-throughput APIs or services running at scale. For most CRUD apps, or projects where your team is already JS-heavy, Node.js is often the more practical choice. I'll recommend based on your actual requirements, not a default.",
    },
    experience:
        "Go is a differentiator I don't always lead with, but I use it for performance-sensitive backend work, including the backend for FounderSignal, my own startup-idea-validation product, built with Gin and PostgreSQL. I also write regularly about Go in production: APIs, microservices, event-driven architecture, and real performance comparisons between Go and Node.js frameworks.",
    caseStudies: [
        {
            name: "FounderSignal (backend)",
            description:
                "Backend for a real-time startup idea validation platform, built with Gin and PostgreSQL, with WebSockets powering live interaction tracking (clicks, scroll, heatmaps) on auto-generated MVP simulators.",
            technologies: ["Go", "Gin", "PostgreSQL", "WebSockets"],
            link: { label: "View source", href: "https://github.com/JealousGx/FounderSignal", type: "Source" },
        },
    ],
    proofNote:
        "Beyond FounderSignal, I write regularly about Go in depth. These reflect real hands-on patterns, not surface-level research:",
    proofLinks: [
        {
            label: "Building a Basic API in Go: A Beginner's Guide",
            href: "/blog/building-a-basic-api-in-go-a-beginners-guide",
        },
        {
            label: "Building Scalable Microservices with Golang",
            href: "/blog/building-scalable-microservices-with-golang-best-practices-and-design-tips",
        },
        {
            label: "Golang for High-Performance Real-Time Analytics",
            href: "/blog/golang-for-high-performance-real-time-analytics-from-websockets-to-kafka-explained",
        },
        {
            label: "Golang for Secure API Development",
            href: "/blog/golang-for-secure-api-development-building-strong-and-safe-web-solutions",
        },
        {
            label: "Golang's Fiber vs Node.js's Fastify",
            href: "/blog/unlocking-hyper-performance-writing-efficient-apis-with-golangs-fiber-vs-nodejss-fastify",
        },
    ],
    faqs: [
        {
            question: "How much does it cost to hire a Golang developer?",
            answer: "Scoped per project after a quick call. Depends on what you need built.",
        },
        {
            question: "Do you have production Go experience, or is this mainly research?",
            answer: "Yes. FounderSignal's backend (linked above) is built with Go and Gin. Beyond that, I write in-depth technical content reflecting hands-on work with these patterns.",
        },
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
    ],
};
