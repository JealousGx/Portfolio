import { Cloud } from "lucide-react";

import type { ServicePageData } from "./types";

export const awsServerlessDevelopment: ServicePageData = {
    slug: "aws-serverless-development",
    label: "AWS",
    icon: Cloud,
    title: "Freelance AWS Serverless Developer",
    description:
        "Hire a freelance AWS developer specializing in serverless architecture. Pay for usage, not idle servers.",
    h1: "Need an AWS Developer for Your Project?",
    intro:
        "I specialize in serverless AWS architecture, the kind that scales with your traffic and doesn't leave you paying for idle servers.",
    reasons: [
        {
            title: "You don't pay for idle capacity",
            body: "Serverless services like Lambda and API Gateway bill you for actual usage, not for a server sitting there around the clock waiting for traffic that might not show up. For a new product especially, that means your infrastructure cost tracks your actual growth instead of being a fixed monthly bill you're paying regardless of how many people show up. In practice, a quiet month costs you next to nothing, and a busy month costs proportionally more, which is a far easier bill to plan around than a flat server fee either way.",
        },
        {
            title: "Scales automatically when you need it",
            body: "If your product suddenly gets a spike in users, say from a launch post going viral, serverless infrastructure scales up automatically without you or me having to manually provision anything in the middle of it. That matters because the worst time to discover your infrastructure can't handle load is exactly during the moment it finally has an audience. With a traditional always-on server, that same spike can mean a slow site or an outage right when it matters most. Serverless architecture is built to absorb that kind of surge without anyone having to intervene.",
        },
        {
            title: "Real, measured results",
            body: "On a client project, moving to CloudFront, Lambda, and a serverless-friendly database cut load times by 75 percent. On another, AWS and GCP cloud work cut load times by 20 percent. Both numbers came from real production systems that were already live, not from a demo environment built to look good in a case study. That's the kind of improvement that directly affects how long a visitor waits before your page even appears, which matters for both conversions and search ranking.",
        },
        {
            title: "Less infrastructure to maintain",
            body: "There are no servers to patch, no operating system updates to schedule, and nothing to monitor around the clock once the project ships. That's less ongoing cost and less ongoing risk for you after I'm no longer actively working on it day to day. A traditional server setup needs someone watching it indefinitely, even after the initial build is done. Serverless architecture shifts most of that maintenance burden onto AWS instead of onto you.",
        },
        {
            title: "A safe long-term bet",
            body: "AWS is the most widely used cloud provider, which means hiring future help or eventually bringing on an internal team doesn't require an unusual or hard-to-find skill set. Documentation, tutorials, and experienced engineers are all far easier to find for AWS than for smaller or more niche cloud providers. If your project outgrows what I built and needs a larger team behind it later, you're not stuck depending on one person who understands an obscure setup. It's infrastructure that other developers can actually step into.",
        },
    ],
    objection: {
        question: "Isn't serverless overkill for a small app?",
        answer: "Not necessarily. For a lot of small apps, it actually costs less than a traditional always-on server, since you're not paying for idle time. I'll tell you honestly if a simpler setup makes more sense for your specific case.",
    },
    experience:
        "AWS serverless work (Lambda, CloudFront, DynamoDB) is a regular part of my client engagements, including a 75 percent load-time reduction for one client and ongoing AWS and GCP cloud deployment work for another.",
    caseStudies: [
        {
            name: "Scalere Design",
            stat: "75% faster load times",
            description:
                "Reduced load times using CloudFront, Lambda, and a serverless-friendly Postgres database (NeonDB).",
            technologies: ["AWS Lambda", "CloudFront", "NeonDB"],
        },
        {
            name: "PennyCanny",
            stat: "20% faster load times",
            description: "Designed and deployed cloud solutions on AWS and GCP.",
            technologies: ["AWS", "GCP"],
        },
    ],
    faqs: [
        {
            question: "Do you only work with clients in certain countries?",
            answer: "No. I work with serious clients wherever they're based, remote, across time zones.",
        },
        {
            question: "How much does AWS serverless development cost?",
            answer: "Scoped per project after a quick call. Depends on the architecture you need.",
        },
        {
            question: "Can you migrate an existing app to serverless?",
            answer: "Yes. This is usually done incrementally rather than all at once, to avoid downtime.",
        },
    ],
};
