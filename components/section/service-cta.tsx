import Link from "next/link";

import { servicePagesBySlug } from "@/data/services";
import { DATA } from "@/data/resume";

type PostType = "buyer" | "tutorial" | "story";

interface Props {
    postType?: PostType;
    primaryService?: string;
    relatedServices?: string[];
}

export default function ServiceCta({ postType = "tutorial", primaryService, relatedServices = [] }: Props) {
    const primary = primaryService ? servicePagesBySlug[primaryService] : undefined;
    const related = relatedServices
        .map((slug) => servicePagesBySlug[slug])
        .filter((page) => page && page.slug !== primary?.slug);
    const showService = primary && postType !== "story";

    let heading = "Have a project in mind?";
    let body = "Book a free scoping call and we can talk through what you need.";
    if (showService && postType === "buyer") {
        heading = "Want help with this?";
        body = "Book a free scoping call and we can talk through your project.";
    } else if (showService) {
        heading = "Would rather have this built for you?";
        body = "If you'd rather hand this off, here is how I work.";
    }

    return (
        <aside className="mt-12 rounded-xl border border-border bg-card px-5 py-5">
            <h2 className="text-lg font-semibold tracking-tight">{heading}</h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
                {showService && (
                    <Link
                        href={`/${primary.slug}`}
                        className="text-sm font-medium underline underline-offset-4 hover:text-foreground"
                    >
                        {primary.title}
                    </Link>
                )}
                <Link
                    href={DATA.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors bg-background"
                >
                    Book a free scoping call
                </Link>
            </div>
            {showService && related.length > 0 && (
                <p className="mt-3 text-sm text-muted-foreground">
                    Also see:{" "}
                    {related.map((page, i) => (
                        <span key={page.slug}>
                            {i > 0 && ", "}
                            <Link href={`/${page.slug}`} className="underline underline-offset-4 hover:text-foreground">
                                {page.title}
                            </Link>
                        </span>
                    ))}
                </p>
            )}
        </aside>
    );
}
