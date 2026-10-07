import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ServiceCta from "@/components/section/service-cta";

import { DATA } from "@/data/resume";
import { projectPages, projectPagesBySlug } from "@/data/projects";
import { servicePagesBySlug } from "@/data/services";
import { PERSON_ID, breadcrumbList, toJsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
    return projectPages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
    const { slug } = await params;
    const project = projectPagesBySlug[slug];
    if (!project) return undefined;

    const canonical = `${DATA.url}/projects/${project.slug}`;
    const fullTitle = `${project.title} | JealousGx`;

    // og:image and twitter:image come from the site's own generated opengraph-image route
    return {
        title: project.title,
        description: project.metaDescription,
        alternates: { canonical },
        openGraph: {
            title: fullTitle,
            description: project.metaDescription,
            url: canonical,
            siteName: "JealousGx",
            locale: "en_US",
            type: "website",
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "JealousGx" }],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: project.metaDescription,
            images: ["/opengraph-image"],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectPagesBySlug[slug];
    if (!project) notFound();

    const canonical = `${DATA.url}/projects/${project.slug}`;
    const liveLink = project.links.find((l) => l.kind === "live");
    const codeLink = project.links.find((l) => l.kind === "code");
    const service = servicePagesBySlug[project.service.slug];
    const secondaryService = project.secondaryService
        ? servicePagesBySlug[project.secondaryService.slug]
        : undefined;

    const entity =
        project.schema.type === "SoftwareSourceCode"
            ? {
                  "@type": "SoftwareSourceCode",
                  name: project.name,
                  description: project.metaDescription,
                  codeRepository: codeLink?.href,
                  author: { "@id": PERSON_ID },
              }
            : {
                  "@type": "SoftwareApplication",
                  name: project.name,
                  description: project.metaDescription,
                  applicationCategory: project.schema.applicationCategory,
                  operatingSystem: "Web",
                  url: liveLink?.href ?? canonical,
                  author: { "@id": PERSON_ID },
              };

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonical}#webpage`,
            url: canonical,
            name: `${project.name}: ${project.descriptor}`,
            description: project.metaDescription,
            mainEntity: entity,
        },
        breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.name, path: `/projects/${project.slug}` },
        ]),
    ];

    const glance: { label: string; value: React.ReactNode }[] = [
        { label: "Year", value: project.year },
        { label: "Status", value: project.status },
        { label: "Role", value: project.role },
        { label: "Stack", value: project.stack.join(", ") },
        {
            label: "Links",
            value:
                project.links.length > 0 ? (
                    <ul className="flex flex-col gap-1">
                        {project.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener"
                                    className="underline underline-offset-4 hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    project.linksNote
                ),
        },
    ];

    return (
        <article className="flex flex-col gap-10">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: toJsonLd(schemas) }}
            />

            <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <li>
                        <Link href="/" className="hover:text-foreground transition-colors">
                            Home
                        </Link>
                    </li>
                    <li aria-hidden>&gt;</li>
                    <li>
                        <Link href="/projects" className="hover:text-foreground transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li aria-hidden>&gt;</li>
                    <li aria-current="page" className="text-foreground">
                        {project.name}
                    </li>
                </ol>
            </nav>

            <header className="flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
                    {project.name}: {project.descriptor}
                </h1>
                <p className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl">{project.summary}</p>
                <p className="leading-relaxed max-w-2xl">{project.originStatement}</p>
            </header>

            <section aria-labelledby="glance">
                <h2 id="glance" className="text-xl font-bold mb-4">
                    At a glance
                </h2>
                <dl className="rounded-xl border border-border bg-card px-5 py-4 grid grid-cols-1 gap-y-3 sm:grid-cols-[7rem_1fr] sm:gap-x-4 text-sm">
                    {glance.map((row) => (
                        <div key={row.label} className="contents">
                            <dt className="font-semibold">{row.label}</dt>
                            <dd className="text-muted-foreground leading-relaxed">{row.value}</dd>
                        </div>
                    ))}
                </dl>
                {project.links.length > 0 && project.linksNote && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.linksNote}</p>
                )}
            </section>

            <section aria-labelledby="built">
                <h2 id="built" className="text-xl font-bold mb-3">
                    What I built
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">{project.scope}</p>
                <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">My role:</span> {project.role}
                </p>
            </section>

            <section aria-labelledby="how">
                <h2 id="how" className="text-xl font-bold mb-3">
                    How it works
                </h2>
                <ol className="list-decimal pl-5 flex flex-col gap-2 text-muted-foreground leading-relaxed">
                    {project.howItWorks.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
                {project.howItWorksNote && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.howItWorksNote}</p>
                )}
            </section>

            {project.learning && (
                <section aria-labelledby="learned">
                    <h2 id="learned" className="text-xl font-bold mb-3">
                        {project.origin === "client" ? "Why it matters to a client" : "What I learned"}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{project.learning}</p>
                </section>
            )}

            {project.afterLaunch && (
                <section aria-labelledby="after-launch">
                    <h2 id="after-launch" className="text-xl font-bold mb-3">
                        After the first deployment
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{project.afterLaunch.text}</p>
                    <blockquote className="mt-3 border-l-2 border-border pl-4 text-muted-foreground leading-relaxed">
                        {project.afterLaunch.quote}
                    </blockquote>
                    <p className="mt-3 text-sm">
                        <Link
                            href={project.afterLaunch.href}
                            className="underline underline-offset-4 hover:text-foreground"
                        >
                            {project.afterLaunch.label}
                        </Link>
                    </p>
                </section>
            )}

            <section aria-labelledby="related">
                <h2 id="related" className="text-xl font-bold mb-3">
                    Want something like this built?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    If you need this kind of work, see my page on{" "}
                    <Link
                        href={`/${project.service.slug}`}
                        title={service?.title}
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        {project.service.anchor}
                    </Link>
                    {secondaryService && project.secondaryService && (
                        <>
                            , or my page on{" "}
                            <Link
                                href={`/${project.secondaryService.slug}`}
                                title={secondaryService.title}
                                className="underline underline-offset-4 hover:text-foreground"
                            >
                                {project.secondaryService.anchor}
                            </Link>
                        </>
                    )}
                    . You can also see{" "}
                    <Link href="/projects" className="underline underline-offset-4 hover:text-foreground">
                        all my projects
                    </Link>
                    .
                </p>
            </section>

            <ServiceCta
                postType="buyer"
                primaryService={project.service.slug}
                relatedServices={project.secondaryService ? [project.secondaryService.slug] : []}
            />
        </article>
    );
}
