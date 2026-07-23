import type { ComponentType, SVGProps } from "react";

export type CaseStudy = {
    name: string;
    stat?: string;
    description: string;
    technologies: string[];
    link?: { label: string; href: string; type: "Website" | "Source" };
};

export type ServicePageData = {
    slug: string;
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    h1: string;
    intro: string;
    reasons: { title: string; body: string }[];
    objection: { question: string; answer: string };
    experience: string;
    caseStudies?: CaseStudy[];
    proofNote?: string;
    proofLinks?: { label: string; href: string }[];
    testimonial?: "Elijah Scalere" | "Uzair Sultan" | "Naqcho Ali Mehdi";
    faqs: { question: string; answer: string }[];
};
