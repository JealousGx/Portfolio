import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { allPosts } from "content-collections";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { normalizePage, paginate } from "@/lib/pagination";
import { formatDate } from "@/lib/utils";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
    const { page } = await searchParams;
    const canonicalUrl = `${DATA.url}/blog`;

    return {
        title: "Blog",
        description: "Technical articles on Next.js, TypeScript, Node.js, Go, and full stack web development by Abdul Mateen Khilji.",
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: "Blog — Abdul Mateen Khilji",
            description: "Technical articles on Next.js, TypeScript, Node.js, Go, and full stack web development by Abdul Mateen Khilji.",
            url: canonicalUrl,
        },
        twitter: {
            card: "summary_large_image",
            title: "Blog — Abdul Mateen Khilji",
            description: "Technical articles on Next.js, TypeScript, Node.js, Go, and full stack web development by Abdul Mateen Khilji.",
        },
        ...(page && page !== "1" && { robots: { index: false, follow: true } }),
    };
}

const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: DATA.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${DATA.url}/blog` },
    ],
}).replace(/</g, "\\u003c");

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page: pageParam } = await searchParams;

    const posts = [...allPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    const totalPages = Math.ceil(posts.length / PAGE_SIZE);
    const currentPage = normalizePage(pageParam, totalPages);
    const { items: paginatedPosts, pagination } = paginate(posts, {
        page: currentPage,
        pageSize: PAGE_SIZE,
    });

    return (
        <section id="blog">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
                >
                    <ArrowLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                    Back to home
                </Link>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-2xl font-semibold tracking-tight mb-2">
                    Blog{" "}
                    <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
                        {posts.length} posts
                    </span>
                </h1>
                <p className="text-sm text-muted-foreground mb-8">
                    My thoughts on software development, life, and more.
                </p>
            </BlurFade>

            {paginatedPosts.length > 0 ? (
                <>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="flex flex-col gap-5">
                            {paginatedPosts.map((post, id) => {
                                const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
                                return (
                                    <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
                                        <div className="flex items-start gap-x-2">
                                            <span className="text-xs font-mono tabular-nums font-medium mt-1.25">
                                                {String(indexNumber).padStart(2, "0")}.
                                            </span>
                                            <div className="flex flex-col gap-y-1 flex-1">
                                                <Link href={`/blog/${post.slug}`} className="group">
                                                    <p className="tracking-tight text-lg font-medium">
                                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                                            {post.title}
                                                        </span>
                                                    </p>
                                                </Link>
                                                <p className="text-xs text-muted-foreground">
                                                    {formatDate(post.publishedAt)}{post.readTimeInMinutes ? ` · ${post.readTimeInMinutes} min read` : ""}
                                                </p>
                                            </div>
                                        </div>
                                    </BlurFade>
                                );
                            })}
                        </div>
                    </BlurFade>

                    {pagination.totalPages > 1 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            <div className="flex gap-3 flex-row items-center justify-between mt-8">
                                <div className="text-sm text-muted-foreground">
                                    Page {pagination.page} of {pagination.totalPages}
                                </div>
                                <div className="flex gap-2 sm:justify-end">
                                    {pagination.hasPreviousPage ? (
                                        <Link
                                            href={`/blog?page=${pagination.page - 1}`}
                                            className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors"
                                        >
                                            Previous
                                        </Link>
                                    ) : (
                                        <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                                            Previous
                                        </span>
                                    )}
                                    {pagination.hasNextPage ? (
                                        <Link
                                            href={`/blog?page=${pagination.page + 1}`}
                                            className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors"
                                        >
                                            Next
                                        </Link>
                                    ) : (
                                        <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                                            Next
                                        </span>
                                    )}
                                </div>
                            </div>
                        </BlurFade>
                    )}
                </>
            ) : (
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
                        <p className="text-muted-foreground text-center">
                            No blog posts yet. Check back soon!
                        </p>
                    </div>
                </BlurFade>
            )}
        </section>
    );
}
