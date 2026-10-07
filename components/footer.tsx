import Link from "next/link";

import { servicePagesBySlug } from "@/data/services";

const MAIN_SERVICES = [
    "small-business-website-development",
    "mvp-development",
    "saas-development",
    "full-stack-developer",
    "landing-page-development",
    "ecommerce-website-development",
]
    .map((slug) => servicePagesBySlug[slug])
    .filter(Boolean);

const linkClassName = "text-sm text-muted-foreground hover:text-foreground transition-colors";

export default function Footer() {
    return (
        <footer className="mt-14 border-t border-border pt-8">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-6">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Services</p>
                    {MAIN_SERVICES.map((page) => (
                        <Link key={page.slug} href={`/${page.slug}`} className={linkClassName}>
                            {page.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Explore</p>
                    <Link href="/projects" className={linkClassName}>
                        Projects
                    </Link>
                    <Link href="/blog" className={linkClassName}>
                        Blog
                    </Link>
                </div>
            </nav>
        </footer>
    );
}
