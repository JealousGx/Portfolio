import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyCard } from "@/components/case-study-card";
import { AuthorBio } from "@/components/author-bio";
import ContactSection from "@/components/section/contact-section";
import ServiceSiblings from "@/components/section/service-siblings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { servicePages, servicePagesBySlug } from "@/data/services";
import { PROCESS_STEPS } from "@/data/services/process";
import { DATA } from "@/data/resume";

export const dynamicParams = false;

export async function generateStaticParams() {
    return servicePages.map((page) => ({ serviceSlug: page.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata | undefined> {
    const { serviceSlug } = await params;
    const page = servicePagesBySlug[serviceSlug];
    if (!page) return undefined;

    const canonical = `${DATA.url}/${page.slug}`;

    return {
        title: page.title,
        description: page.description,
        alternates: { canonical },
        openGraph: {
            title: page.title,
            description: page.description,
            url: canonical,
            siteName: "JealousGx",
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.description,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ serviceSlug: string }>;
}) {
    const { serviceSlug } = await params;
    const page = servicePagesBySlug[serviceSlug];
    if (!page) notFound();

    const canonical = `${DATA.url}/${page.slug}`;
    const testimonial = page.testimonial
        ? DATA.testimonials.find((t) => t.name === page.testimonial)
        : undefined;

    const schemas: object[] = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: page.description,
            provider: { "@type": "Person", name: DATA.name, url: DATA.url },
            areaServed: "Worldwide",
            serviceType: "Web Development",
            url: canonical,
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ];

    const jsonLd = JSON.stringify(schemas).replace(/</g, "\\u003c");

    return (
        <div className="flex flex-col gap-14">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />

            <section id="hero">
                <div className="flex flex-col gap-y-4">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                    >
                        <ArrowLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                        Back to home
                    </Link>
                    <div className="flex items-center justify-center size-14 rounded-xl border border-border bg-card">
                        <page.icon className="size-7" />
                    </div>
                    <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{page.h1}</h1>
                    <p className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl">{page.intro}</p>
                </div>
            </section>

            <section id="reasons">
                <div className="flex flex-col gap-y-6">
                    <h2 className="text-xl font-bold">What This Means for Your Project</h2>
                    <div className="flex flex-col gap-y-6">
                        {page.reasons.map((reason) => (
                            <div key={reason.title} className="flex flex-col gap-y-2">
                                <h3 className="font-semibold">{reason.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{reason.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="objection">
                <div className="rounded-xl border border-border bg-card px-5 py-4">
                    <p className="text-sm font-semibold mb-1">{page.objection.question}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{page.objection.answer}</p>
                </div>
            </section>

            <section id="experience">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-xl font-bold">My Experience</h2>
                    <p className="text-muted-foreground leading-relaxed">{page.experience}</p>
                </div>
            </section>

            {(page.caseStudies || page.proofLinks) && (
                <section id="proof">
                    <div className="flex flex-col gap-y-4">
                        {page.caseStudies?.map((caseStudy) => (
                            <CaseStudyCard key={caseStudy.name} caseStudy={caseStudy} />
                        ))}
                        {page.proofLinks && (
                            <div className="rounded-xl border border-border bg-accent/30 px-5 py-4">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                    Proof
                                </p>
                                {page.proofNote && (
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                        {page.proofNote}
                                    </p>
                                )}
                                <div className="flex flex-col gap-2">
                                    {page.proofLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-sm text-foreground hover:underline underline-offset-4"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}
            {!page.caseStudies && !page.proofLinks && page.proofNote && (
                <section id="proof-note">
                    <p className="text-sm text-muted-foreground leading-relaxed">{page.proofNote}</p>
                </section>
            )}

            <section id="faqs">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4">
                        {page.faqs.map((faq) => (
                            <div key={faq.question} className="rounded-xl border border-border bg-card px-5 py-4">
                                <p className="text-sm font-semibold mb-1">{faq.question}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process">
                <div className="flex flex-col gap-y-6">
                    <h2 className="text-xl font-bold">How We&apos;d Work Together</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {PROCESS_STEPS.map((step, index) => (
                            <div
                                key={step.title}
                                className="flex flex-col gap-2 p-6 border border-border rounded-xl bg-background"
                            >
                                <span className="text-xs font-semibold text-muted-foreground">
                                    Step {index + 1}
                                </span>
                                <h3 className="font-semibold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {testimonial && (
                <section id="testimonial">
                    <div className="flex flex-col justify-between gap-4 p-6 border border-border rounded-xl bg-background max-w-lg">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            &ldquo;{testimonial.body}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <Avatar className="size-8">
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium leading-none">{testimonial.name}</span>
                                <span className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section id="services">
                <ServiceSiblings currentSlug={page.slug} />
            </section>

            <section id="contact">
                <ContactSection />
            </section>

            <section id="author">
                <AuthorBio />
            </section>
        </div>
    );
}
