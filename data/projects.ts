export type ProjectLink = {
    label: string;
    href: string;
    kind: "live" | "code" | "video";
};

export type ProjectPageData = {
    slug: string;
    name: string;
    /** Descriptor after the project name in the H1 */
    descriptor: string;
    /** Page title without the site suffix (the root layout template adds " | JealousGx") */
    title: string;
    metaDescription: string;
    year: string;
    status: string;
    origin: "own" | "client";
    summary: string;
    originStatement: string;
    role: string;
    scope: string;
    howItWorks: string[];
    howItWorksNote?: string;
    stack: string[];
    links: ProjectLink[];
    /** Short text shown under At a glance for context, e.g. private client work */
    linksNote?: string;
    service: { slug: string; anchor: string };
    secondaryService?: { slug: string; anchor: string };
    /** Extra section for work that continued after launch, using only wording from the linked post */
    afterLaunch?: { text: string; quote: string; href: string; label: string };
    /** Approved learning copy. Leave undefined until the owner approves it. */
    learning?: string;
    schema: {
        type: "SoftwareApplication" | "SoftwareSourceCode";
        applicationCategory?: string;
    };
    /** Real date of the last content change (YYYY-MM-DD), used for the sitemap */
    lastModified: string;
    /** Content-complete pages may enter the sitemap */
    complete: boolean;
    card: {
        description: string;
        technologies: string[];
        image: string;
    };
};

export const projectPages: ProjectPageData[] = [
    {
        slug: "klipse",
        name: "Klipse",
        descriptor: "AI video creation and publishing for content creators",
        title: "Klipse: AI Video Creation and Publishing SaaS",
        metaDescription:
            "Klipse turns a text idea into a finished short video with audio and publishes it to YouTube. See what I built, how it works and the stack.",
        year: "2026",
        status: "Live",
        origin: "own",
        summary:
            "Klipse turns a video idea into a finished short video with sound, then publishes it to YouTube. You go from an idea to a published video without editing anything by hand.",
        originStatement:
            "Klipse is my own product. I designed, built and shipped it myself, and it is not client work.",
        role: "Design, development and launch, all done by me.",
        scope:
            "The web app, sign-in, billing with free and paid tiers, the video pipeline, a separate processing service on GPU infrastructure, storage, email and monitoring.",
        howItWorks: [
            "You submit a video idea.",
            "Klipse writes one prompt that describes a video with several scenes. It uses Gemini 2.5 Flash for this, with OpenRouter as a fallback.",
            "A single call to a self-hosted video model (LTX-2.3) makes the video with synchronized audio.",
            "On the free tier, a watermark is added with FFmpeg.",
            "The finished video is stored in Cloudflare R2, and a webhook marks the job as complete.",
            "Klipse publishes the video to YouTube.",
        ],
        howItWorksNote:
            "TikTok and Instagram publishing are on the roadmap. They are not built yet.",
        stack: [
            "TanStack Start",
            "React 19",
            "Vite",
            "TanStack Router",
            "TanStack Query",
            "Tailwind CSS 4",
            "Shadcn UI",
            "MySQL on TiDB Serverless",
            "Drizzle",
            "Better Auth (email OTP and Google sign-in)",
            "Polar billing (Free, Starter, Creator and Empire tiers)",
            "Cloudflare Workers",
            "Cloudflare R2",
            "Python FastAPI processor on GCP Cloud Run with GPU",
            "Resend",
            "Sentry",
            "Axiom logging",
        ],
        links: [{ label: "Visit Klipse", href: "https://klipse.app", kind: "live" }],
        linksNote: "There is no public source code for this project.",
        learning:
            "I started with separate steps for script, images, voice and video encoding. Moving to one video model call that makes video and audio together removed three provider integrations. I also found that loading model weights lazily from cloud storage stalled the first job of each run for about 30 minutes, so I baked the weights into the container image.",
        service: { slug: "saas-development", anchor: "SaaS development for startups and founders" },
        schema: { type: "SoftwareApplication", applicationCategory: "MultimediaApplication" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "AI video creation and publishing. Turns a text idea into a short video with synchronized audio in one model call, then publishes it to YouTube.",
            technologies: ["TanStack Start", "TypeScript", "Cloudflare", "Gemini AI", "FFmpeg", "Drizzle", "Polar"],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456526/24e2c61b-de34-49bb-937a-83a6af431eff.png",
        },
    },
    {
        slug: "prospkt",
        name: "Prospkt",
        descriptor: "lead discovery and outreach for freelance web developers and agencies",
        title: "Prospkt: Lead Finder for Freelance Web Developers",
        metaDescription:
            "Prospkt finds local businesses with weak websites, scores them and writes outreach scripts. See how I built it with TanStack Start and Gemini.",
        year: "2026",
        status: "Live",
        origin: "own",
        summary:
            "Prospkt helps freelance web developers and agencies find local businesses that need a better website. It scores each business on how weak its web presence is, then writes outreach messages for several channels.",
        originStatement:
            "Prospkt is my own product. I designed, built and shipped it myself, and it is not client work.",
        role: "Design, development and launch, all done by me.",
        scope:
            "The search and scoring engine, website audits, a lead pipeline, AI-written outreach scripts, sign-in and email. It is designed to run on free tiers of the services it uses.",
        howItWorks: [
            "You search by business type and city. Prospkt looks them up with Google Places (New).",
            "Each business gets a score from 0 to 100 for how weak its web presence is. The score looks at things like no website, slow mobile pages, weak SEO, no HTTPS and missing meta tags.",
            "Businesses are sorted into Hot, Warm and Cold. The scoring weights are editable.",
            "Prospkt runs PageSpeed Insights audits on the websites it finds.",
            "You track leads in a built-in pipeline.",
            "Gemini writes outreach scripts for phone call, email, WhatsApp, Instagram DM, Facebook and LinkedIn.",
            "You track the outcome of each lead.",
        ],
        stack: [
            "TanStack Start",
            "TanStack Router",
            "TanStack Query",
            "Better Auth",
            "MySQL on TiDB",
            "Drizzle",
            "Tailwind CSS v4",
            "Radix UI",
            "Gemini",
            "Zod",
            "Biome",
            "Resend",
            "Netlify",
        ],
        links: [{ label: "Visit Prospkt", href: "https://prospkt.app", kind: "live" }],
        linksNote: "There is no public source code for this project.",
        learning:
            "Server functions that keep working after the response is sent break on some serverless platforms. I put the long-running work on Netlify Background Functions and wrote the warning into the README so I would not repeat the mistake.",
        service: { slug: "saas-development", anchor: "SaaS development for startups and founders" },
        schema: { type: "SoftwareApplication", applicationCategory: "BusinessApplication" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "Lead discovery and outreach for freelance web developers and agencies. Finds local businesses with weak web presence, scores them from 0 to 100 and writes outreach scripts for 6 channels.",
            technologies: ["TanStack Start", "TypeScript", "MySQL", "Drizzle", "Gemini AI", "Netlify"],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456564/0277456d-c73d-40c8-88b9-b4ebf960c822.png",
        },
    },
    {
        slug: "gigscale",
        name: "GigScale",
        descriptor: "AI profile optimizer for Upwork and Fiverr freelancers",
        title: "GigScale: AI Profile Optimizer for Upwork and Fiverr",
        metaDescription:
            "GigScale analyzes Upwork and Fiverr profiles and rewrites headlines and copy. See what I built, how it works and the tech stack behind it.",
        year: "2025",
        status: "Live",
        origin: "own",
        summary:
            "GigScale looks at an Upwork or Fiverr profile and tells a freelancer what to fix first. It also rewrites headlines, descriptions and gig copy, all from one dashboard.",
        originStatement:
            "GigScale is my own product. I designed, built and shipped it myself, and it is not client work.",
        role: "Design, development and launch, all done by me.",
        scope:
            "The analysis and rewriting features, credit-based usage with optional plans, sign-in and the dashboard.",
        howItWorks: [
            "You add your Upwork or Fiverr profile.",
            "GigScale analyzes it for visibility, conversion, trust and completeness.",
            "You get a prioritized list of suggestions that fit your niche.",
            "GigScale rewrites your headline, descriptions and gig copy.",
            "Usage is credit-based, and there are optional plans.",
        ],
        stack: [
            "Next.js (App Router)",
            "React 19",
            "Better Auth",
            "MySQL on TiDB Cloud",
            "Drizzle",
            "Tailwind CSS",
            "Radix UI",
            "Motion",
            "Zustand",
            "TanStack Query",
        ],
        links: [{ label: "Visit GigScale", href: "https://gigscale.app", kind: "live" }],
        linksNote: "There is no public source code for this project.",
        learning:
            "A profile score means little unless it comes with a clear next step. I built the analysis to produce a short list of prioritized fixes and a rewrite for each one, so the user never has to guess what to change first.",
        service: { slug: "saas-development", anchor: "SaaS development for startups and founders" },
        schema: { type: "SoftwareApplication", applicationCategory: "BusinessApplication" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "AI profile optimizer for Upwork and Fiverr freelancers. Analyzes visibility, conversion, trust and completeness, then rewrites headlines, descriptions and gig copy.",
            technologies: ["Next.js", "TypeScript", "TiDB", "Drizzle", "Better Auth"],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456542/82fc8c07-3ad5-4895-b180-115b238b803c.png",
        },
    },
    {
        slug: "foundersignal",
        name: "FounderSignal",
        descriptor: "a micro-validation platform for testing startup ideas (archived)",
        title: "FounderSignal: Startup Idea Validator (Archived)",
        metaDescription:
            "FounderSignal let founders test startup ideas in 72 hours with landing page simulators. It is archived. See what I built and what I learned.",
        year: "2024",
        status: "Archived",
        origin: "own",
        summary:
            "FounderSignal let founders test a startup idea before building it. A founder posted an idea card, built a simple landing page simulator, and watched how real people reacted. The product is archived and the website no longer works.",
        originStatement:
            "FounderSignal was my own product. I designed and built it myself, and it was not client work.",
        role: "Design and development, all done by me.",
        scope:
            "A web front end, a Go backend, real-time interaction tracking and the audience testing pool. The code is open source under the MIT license.",
        howItWorks: [
            "A founder posts an idea card with an elevator pitch.",
            "The founder builds a simple landing page simulator for the idea.",
            "Real people interact with it, and the platform tracks clicks, time and scroll in real time.",
            "An audience testing pool supplies the visitors. Tests can be public or private.",
            "The goal was to test an idea within 72 hours.",
        ],
        howItWorksNote:
            "AI summaries and parts of the Go backend were marked as 'to be implemented later' in the README, so I do not count them as part of what shipped.",
        stack: ["Next.js 15", "TailwindCSS", "Clerk", "Go", "Gin", "PostgreSQL", "WebSockets"],
        links: [
            { label: "Source code on GitHub", href: "https://github.com/JealousGx/FounderSignal", kind: "code" },
            { label: "Demo video on YouTube", href: "https://www.youtube.com/watch?v=DrhSM3VJu9A", kind: "video" },
        ],
        linksNote:
            "I archived this project. The backend ran on the free tier of a paid platform, the free tier expired, and there were not enough active users. There is no live website.",
        learning:
            "I archived FounderSignal because the free hosting expired and I could not get enough active users. Next time I would find the first users before building more of the product, and I would pick hosting I can leave running at near zero cost.",
        service: { slug: "mvp-development", anchor: "MVP development for founders" },
        schema: { type: "SoftwareSourceCode" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "Archived micro-validation platform for testing startup ideas in 72 hours with landing page simulators. Open source.",
            technologies: ["Next.js", "TypeScript", "Go", "Gin", "PostgreSQL", "TailwindCSS"],
            image: "https://raw.githubusercontent.com/JealousGx/FounderSignal/refs/heads/main/web/public/assets/og-image.png",
        },
    },
    {
        slug: "askkkdoc",
        name: "AskkkDoc",
        descriptor: "ask questions about your own documents with AI",
        title: "AskkkDoc: Ask Questions About Your Documents",
        metaDescription:
            "AskkkDoc lets you upload PDFs, Word files and images and ask questions about them. See how I built the pipeline with Next.js, Pinecone and OpenAI.",
        year: "2024",
        status: "Live demo (may go offline)",
        origin: "own",
        summary:
            "AskkkDoc lets you upload your own PDFs, Word documents and images, then ask questions and get answers based on those files. Each user gets 3 free documents.",
        originStatement:
            "AskkkDoc is my own project. I designed, built and shipped it myself, and it is not client work.",
        role: "Design and development, all done by me.",
        scope:
            "The upload and file processing pipeline, the question and answer feature, sign-in and the database. It is a monorepo with the backend in Next.js API routes. I never built a higher document limit.",
        howItWorks: [
            "You upload a PDF, a Word document or an image.",
            "The file is stored in AWS S3.",
            "LangChain with the Unstructured loader turns the file into text.",
            "The text is converted into vectors and stored in Pinecone.",
            "When you ask a question, OpenAI writes the answer using those vectors. Your user data lives in MySQL.",
        ],
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn UI",
            "Next Auth",
            "Prisma",
            "MySQL on PlanetScale",
            "AWS S3",
            "Pinecone",
            "OpenAI",
            "LangChain",
            "Unstructured",
            "Vercel AI SDK",
            "Docker (local database)",
        ],
        links: [
            { label: "Live demo (may go offline)", href: "https://askkkdoc.vercel.app", kind: "live" },
            { label: "Source code on GitHub", href: "https://github.com/JealousGx/askkkdoc", kind: "code" },
        ],
        learning:
            "Handling PDFs, Word files and images taught me to treat file processing as its own pipeline: store the file, turn it into text, turn the text into vectors, then answer from those vectors. Keeping each step separate made failures easy to find.",
        service: { slug: "mvp-development", anchor: "MVP development for founders" },
        schema: { type: "SoftwareApplication", applicationCategory: "BusinessApplication" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "Upload PDFs, Word documents and images, then ask questions and get answers based on your own files.",
            technologies: ["Next.js", "TypeScript", "OpenAI", "Pinecone", "TailwindCSS"],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1782456246/Screenshot_2026-06-26_at_11.43.50_AM_ziwtua.png",
        },
    },
    {
        slug: "vala",
        name: "Vala",
        descriptor: "asset management software built for Scalere Design",
        title: "Vala: Asset Management Software for Scalere Design",
        metaDescription:
            "Vala is asset management software I built end to end for Scalere Design in 2024. See the stack and how the project came together.",
        year: "2024",
        status: "Delivered to client",
        origin: "client",
        summary:
            "Vala is asset management software that helps businesses track and organize their assets. It has scalable, customizable tiers.",
        originStatement: "Vala is client work I built for Scalere Design.",
        role: "Full stack. I built the whole thing, front end and back end.",
        scope:
            "The front end, built from a Figma design, and the serverless back end on AWS.",
        howItWorks: [
            "Businesses use Vala to track and organize their assets.",
            "The front end follows the Figma design closely.",
            "The back end is a set of API endpoints. Each endpoint is a thin handler, and the core logic lives in separate model files.",
        ],
        stack: [
            "Front end: Next.js, TypeScript, Tailwind",
            "Back end: Serverless Framework, TypeScript, AWS Lambda, API Gateway",
        ],
        links: [],
        linksNote: "This is private client work, so there is no public website or source code.",
        afterLaunch: {
            text: "I built Vala from scratch and kept improving it after the first deployment. I wrote up one round of that work as a case study.",
            quote: "Load time dropped by 75%. What used to take 8 seconds now takes about 2.",
            href: "/blog/case-study-cutting-a-client-s-load-time-by-75",
            label: "Case study: cutting a client's load time by 75%",
        },
        learning:
            "I kept each API endpoint as a thin handler that calls core logic in a separate model file, so every new feature followed the same pattern and was easy to find.",
        service: { slug: "full-stack-developer", anchor: "full stack developer for hire" },
        secondaryService: { slug: "saas-development", anchor: "SaaS development" },
        schema: { type: "SoftwareApplication", applicationCategory: "BusinessApplication" },
        lastModified: "2026-10-07",
        complete: true,
        card: {
            description:
                "Asset management software built for Scalere Design. Pixel-perfect Figma implementation, full stack.",
            technologies: ["Next.js", "TypeScript", "TailwindCSS", "AWS Lambda"],
            image: "https://res.cloudinary.com/jealousgx/image/upload/v1728193613/vala.jpg",
        },
    },
];

export const projectPagesBySlug: Record<string, ProjectPageData> = Object.fromEntries(
    projectPages.map((p) => [p.slug, p])
);
