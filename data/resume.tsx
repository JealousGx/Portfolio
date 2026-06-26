import { Icons } from "@/components/icons";
import { BookOpenIcon, CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

import { Docker } from "@/components/ui/svgs/docker";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Wordpress } from "@/components/ui/svgs/wordpress";

export const DATA = {
    name: "Abdul Mateen Khilji",
    initials: "AM",
    url: "https://jealous.dev",
    location: "Pakistan",
    locationLink: "https://www.google.com/maps/place/Pakistan",
    description:
        "Freelance Full Stack Web Developer specializing in Next.js, TypeScript, and Node.js. I build fast, scalable websites and web apps for startups and businesses.",
    summary:
        "I'm a full stack web developer with 3+ years of experience building dynamic, scalable web applications. I've worked with startups and businesses to bring their ideas to life — from landing pages and e-commerce stores to full SaaS products. I specialize in [Next.js](https://nextjs.org), TypeScript, and Node.js, and I'm available for freelance projects.",
    avatarUrl: "/me.webp",
    skills: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "TypeScript", icon: Typescript },
        { name: "Node.js", icon: Nodejs },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MongoDB", icon: MongoDB },
        { name: "WordPress", icon: Wordpress },
        { name: "Docker", icon: Docker },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/projects", icon: CodeIcon, label: "Projects" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        { href: "/guestbook", icon: BookOpenIcon, label: "Guestbook" },
    ],
    contact: {
        email: "contact@jealous.dev",
        tel: "", // add your number if you want it public
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/JealousGx",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jealous/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/jealousgx",
                icon: Icons.x,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:contact@jealous.dev",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Zami Dev",
            href: "https://pennycanny.com",
            badges: ["Remote"],
            location: "Remote",
            title: "Software Engineer",
            logoUrl: "/zamidev.png", // add logo to /public if available
            start: "Nov 2022",
            end: "Present",
            description:
                "Managing the entire codebase across multiple client engagements. Architected and delivered scalable backend systems using Node.js (TypeScript), DynamoDB, and MongoDB — reducing system latency by 20%. Led a TypeScript migration across a shared monorepo spanning multiple client projects, improving reliability and reducing critical issues by 15%. Designed and deployed cloud solutions on AWS and GCP, cutting load times by 20%. Enhanced testing and QA processes, reducing critical production issues by 40%.",
        },
    ],

    education: [
        {
            school: "Sukkur IBA University",
            href: "https://iba-suk.edu.pk",
            degree: "Bachelor of Engineering",
            logoUrl: "/iba-suk.png", // add logo to /public if available
            start: "2019",
            end: "2023",
        },
    ],

    // FEATURED projects — shown on homepage (keep to 3-4)
    featuredProjects: [
        {
            title: "Klipse",
            href: "https://klipse.app",
            dates: "2026",
            active: true,
            description:
                "AI-powered video creation SaaS. Turns a text idea into a fully produced short-form video — AI script, TTS narration, generated images, FFmpeg encode — and auto-publishes to YouTube.",
            technologies: ["TanStack Start", "TypeScript", "Cloudflare", "Gemini AI", "FFmpeg"],
            links: [
                {
                    type: "Website",
                    href: "https://klipse.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456526/24e2c61b-de34-49bb-937a-83a6af431eff.png",
            video: "",
        },
        {
            title: "Prospkt",
            href: "https://prospkt.app",
            dates: "2026",
            active: true,
            description:
                "Lead discovery and outreach tool for freelancers. Searches Google Places for local businesses, scores them by opportunity potential, and generates AI-powered outreach scripts for 6 channels.",
            technologies: ["TanStack Start", "TypeScript", "MySQL", "Gemini AI", "Netlify"],
            links: [
                {
                    type: "Website",
                    href: "https://prospkt.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456564/0277456d-c73d-40c8-88b9-b4ebf960c822.png",
            video: "",
        },
        {
            title: "GigScale",
            href: "https://gigscale.app",
            dates: "2025",
            active: true,
            description:
                "AI-powered Upwork and Fiverr profile optimizer. Analyzes your profile across visibility, conversion, and trust metrics, then rewrites your headlines, bio, and gig copy for better rankings.",
            technologies: ["Next.js", "TypeScript", "TiDB", "Drizzle", "Gemini AI"],
            links: [
                {
                    type: "Website",
                    href: "https://gigscale.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456542/82fc8c07-3ad5-4895-b180-115b238b803c.png",
            video: "",
        },
        {
            title: "FounderSignal",
            href: "https://foundersignal.app",
            dates: "2024",
            active: true,
            description:
                "Validate ideas. Build smarter. Helps founders stop building products no one wants by validating ideas with real signals before writing a single line of code.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "https://foundersignal.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/FounderSignal",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://raw.githubusercontent.com/JealousGx/FounderSignal/refs/heads/main/web/public/assets/og-image.png",
            video: "",
        },
    ],

    // ALL projects — shown on /projects page
    projects: [
        {
            title: "Klipse",
            href: "https://klipse.app",
            dates: "2026",
            active: true,
            description:
                "AI-powered video creation SaaS. Turns a text idea into a fully produced short-form video — AI script, TTS narration, generated images, FFmpeg encode — and auto-publishes to YouTube.",
            technologies: ["TanStack Start", "TypeScript", "Cloudflare", "Gemini AI", "FFmpeg", "Drizzle", "Polar"],
            links: [
                {
                    type: "Website",
                    href: "https://klipse.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456526/24e2c61b-de34-49bb-937a-83a6af431eff.png",
            video: "",
        },
        {
            title: "Prospkt",
            href: "https://prospkt.app",
            dates: "2026",
            active: true,
            description:
                "Lead discovery and outreach tool for freelancers. Searches Google Places for local businesses, scores them by opportunity potential, and generates AI-powered outreach scripts for 6 channels.",
            technologies: ["TanStack Start", "TypeScript", "MySQL", "Drizzle", "Gemini AI", "Netlify"],
            links: [
                {
                    type: "Website",
                    href: "https://prospkt.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456564/0277456d-c73d-40c8-88b9-b4ebf960c822.png",
            video: "",
        },
        {
            title: "GigScale",
            href: "https://gigscale.app",
            dates: "2025",
            active: true,
            description:
                "AI-powered Upwork and Fiverr profile optimizer. Analyzes profiles across visibility, conversion, and trust metrics, then rewrites headlines, bio, and gig copy for better rankings.",
            technologies: ["Next.js", "TypeScript", "TiDB", "Drizzle", "Gemini AI", "Better Auth", "Polar"],
            links: [
                {
                    type: "Website",
                    href: "https://gigscale.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456542/82fc8c07-3ad5-4895-b180-115b238b803c.png",
            video: "",
        },
        {
            title: "FounderSignal",
            href: "https://foundersignal.app",
            dates: "2024",
            active: true,
            description:
                "Validate ideas. Build smarter. Helps founders stop building products no one wants.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "https://foundersignal.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/FounderSignal",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://raw.githubusercontent.com/JealousGx/FounderSignal/refs/heads/main/web/public/assets/og-image.png",
            video: "",
        },
        {
            title: "AskkkDoc",
            href: "https://askkkdoc.vercel.app",
            dates: "2024",
            active: true,
            description:
                "Empower your documents to speak volumes. Upload a document and ask questions — AI-powered answers from your own files.",
            technologies: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "https://askkkdoc.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/askkkdoc",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456246/Screenshot_2026-06-26_at_11.43.50_AM_ziwtua.png",
            video: "",
        },
        {
            title: "Vala",
            href: "http://vala.scaleredesign.com",
            dates: "2023",
            active: true,
            description:
                "Asset management solution built for Scalere Design. Pixel-perfect Figma implementation.",
            technologies: ["Next.js", "TypeScript", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "http://vala.scaleredesign.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1728193613/vala.jpg",
            video: "",
            badges: ["Client Work"],
        },
        {
            title: "Airbnb Clone",
            href: "https://jealous-airbnb-clone.vercel.app",
            dates: "2023",
            active: true,
            description:
                "Full-featured Airbnb clone with search, booking, and accommodation management.",
            technologies: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-airbnb-clone.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/airbnb-clone",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1728148274/Airbnb.jpg",
            video: "",
        },
        {
            title: "eCommerce Phone Store",
            href: "https://jealous-phone-store.netlify.app",
            dates: "2021",
            active: true,
            description:
                "E-commerce storefront for buying and selling second-hand smartphones.",
            technologies: ["React", "JavaScript", "CSS"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-phone-store.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/react-phone-store",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1659676866/jealous-phone-store.netlify.app__oj5gbc.png",
            video: "",
        },
        {
            title: "COVID-19 Tracker",
            href: "https://jealous-covid19.netlify.app",
            dates: "2021",
            active: true,
            description:
                "Real-time COVID-19 case tracker — worldwide and country-wise statistics with charts.",
            technologies: ["React", "JavaScript", "Chart.js"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-covid19.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/covid19-tracker",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1659676866/jealous-covid19.netlify.app__aatxzf.png",
            video: "",
        },
        {
            title: "Advanced Expense Tracker",
            href: "https://jealous-exp-tracker.netlify.app",
            dates: "2021",
            active: true,
            description:
                "Voice-powered expense tracker — add incomes and expenses using your voice.",
            technologies: ["React", "JavaScript", "Web Speech API"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-exp-tracker.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/advanced-exp-tracker",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1659676866/jealous-exp-tracker.netlify.app__g3robb.png",
            video: "",
        },
        {
            title: "Voice Powered News",
            href: "https://jealous-ai-news.netlify.app",
            dates: "2021",
            active: true,
            description: "Get the latest news just by using your voice.",
            technologies: ["React", "JavaScript", "News API", "Web Speech API"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-ai-news.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/react-ai-news",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1659676866/jealous-ai-news.netlify.app__cczti8.png",
            video: "",
        },
        {
            title: "Rent a Vehicle — Landing Page",
            href: "https://jealous-otto-page.netlify.app",
            dates: "2021",
            active: true,
            description: "Fully responsive landing page for a vehicle rental service.",
            technologies: ["HTML", "CSS", "JavaScript"],
            links: [
                {
                    type: "Website",
                    href: "https://jealous-otto-page.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/JealousGx/responsive-sites",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1659676866/jealous-otto-page.netlify.app__nrzxx2.png",
            video: "",
        },
    ],

    testimonials: [
        {
            name: "Elijah Scalere",
            role: "CEO @ Scalere Design",
            avatarUrl:
                "/clients/elijah.jpeg",
            body: "They were able to produce a product nearly identical to my design files. I would be working with them in the future due to their responsiveness and cooperation.",
        },
        {
            name: "Uzair Sultan",
            role: "UX Designer @ VentureDrive",
            avatarUrl:
                "/clients/uzair-sultan.jpeg",
            body: "I have had the pleasure of working closely with Mateen for more than a year, and I can confidently say that he is one of the most talented developers I have ever worked with. His technical expertise, problem-solving skills, and dedication to excellence are truly exceptional.",
        },
        {
            name: "Naqcho Ali Mehdi",
            role: "AI & ML Engineer",
            avatarUrl:
                "/clients/naqcho.jpeg",
            body: "I'm super excited to work on my newly launched website. Abdul Mateen has shown marvelous professionalism and great deal of work. The site is very responsive and aesthetically appealing which makes my requirements fulfilled.",
        },
    ],

    // Services — custom section (not in original template, needs a custom component)
    services: [
        {
            title: "Business Website",
            description:
                "A clean, fast, mobile-first website for your business. Built to rank on Google and convert visitors into customers.",
            icon: "globe", // use a lucide icon name
            cta: "Get a website",
        },
        {
            title: "E-commerce Store",
            description:
                "A full online store with product listings, cart, checkout, and payment integration. Start selling online in days, not months.",
            icon: "shoppingCart",
            cta: "Build my store",
        },
        {
            title: "Web App / MVP",
            description:
                "Have a startup idea? I'll build your MVP fast — full-stack, production-ready, and scalable from day one.",
            icon: "code",
            cta: "Start building",
        },
        {
            title: "Landing Page",
            description:
                "A high-converting landing page for your product, campaign, or service. Fast, SEO-optimized, and designed to convert.",
            icon: "layout",
            cta: "Get a landing page",
        },
    ],
} as const;