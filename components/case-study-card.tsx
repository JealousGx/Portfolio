import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import type { CaseStudy } from "@/data/services/types";

interface Props {
    caseStudy: CaseStudy;
    eyebrow?: string;
}

export function CaseStudyCard({ caseStudy, eyebrow = "Case Study" }: Props) {
    const isExternal = caseStudy.link?.href.startsWith("http");

    return (
        <div className="rounded-xl border border-border bg-accent/30 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {eyebrow}
            </p>
            <p className="text-sm font-semibold mb-1">{caseStudy.name}</p>
            {caseStudy.stat && <p className="text-lg font-bold leading-tight mb-1">{caseStudy.stat}</p>}
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
                {caseStudy.technologies.map((tech) => (
                    <Badge
                        key={tech}
                        className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                        variant="outline"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
            {caseStudy.link && (
                <Link
                    href={caseStudy.link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    {caseStudy.link.label}
                    <ArrowUpRight className="size-3" />
                </Link>
            )}
        </div>
    );
}
