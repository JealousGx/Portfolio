import Link from "next/link";

import { servicePages } from "@/data/services";

interface Props {
    currentSlug: string;
}

export default function ServiceSiblings({ currentSlug }: Props) {
    const siblings = servicePages.filter((page) => page.slug !== currentSlug);

    return (
        <div className="flex min-h-0 flex-col gap-y-6">
            <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                    <span className="text-background text-sm font-medium">Other Services</span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {siblings.map((page) => (
                    <Link
                        key={page.slug}
                        href={`/${page.slug}`}
                        className="border bg-background border-border rounded-xl h-8 px-4 flex items-center text-sm font-medium hover:bg-accent transition-colors"
                    >
                        {page.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
