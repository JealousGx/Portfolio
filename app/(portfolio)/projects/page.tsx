import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
    title: "Projects",
    description: "Everything I've built — side projects, client work, and experiments.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    return (
        <section id="projects" className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-col gap-y-2">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                    >
                        <ArrowLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                        Back to home
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight mt-2">
                        Projects{" "}
                        <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm font-normal">
                            {DATA.projects.length}
                        </span>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Everything I&apos;ve built — side projects, client work, and experiments.
                    </p>
                </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto w-full auto-rows-fr">
                {DATA.projects.map((project, id) => (
                    <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                        className="h-full"
                    >
                        <ProjectCard
                            href={project.href}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                    </BlurFade>
                ))}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 2 + DATA.projects.length * 0.05 + 0.1}>
                <div className="flex justify-center pt-4">
                    <Link
                        href={DATA.contact.social.GitHub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-9 px-5 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                        Explore more on GitHub
                        <ArrowUpRight className="size-3.5" />
                    </Link>
                </div>
            </BlurFade>
        </section>
    );
}
