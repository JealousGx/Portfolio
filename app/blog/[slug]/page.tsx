import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";

import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
    return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
    const { slug } = await params;
    const post = allPosts.find((p) => p.slug === slug);
    if (!post) return undefined;

    return {
        title: post.title,
        description: post.brief,
        openGraph: {
            title: post.title,
            description: post.brief,
            type: "article",
            publishedTime: post.publishedAt,
            url: `${DATA.url}/blog/${slug}`,
            ...(post.coverImage && { images: [{ url: post.coverImage }] }),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.brief,
            ...(post.coverImage && { images: [post.coverImage] }),
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const sortedPosts = [...allPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
    if (currentIndex === -1) notFound();

    const post = sortedPosts[currentIndex];
    const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        description: post.brief,
        image: post.coverImage ?? `${DATA.url}/blog/${slug}/opengraph-image`,
        url: `${DATA.url}/blog/${slug}`,
        author: { "@type": "Person", name: DATA.name },
    }).replace(/</g, "\\u003c");

    return (
        <section id="blog">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
            <div className="flex justify-start gap-4 items-center">
                <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
                >
                    <ArrowLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                    Back to Blog
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {post.coverImage && (
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full rounded-xl object-cover max-h-80 mb-2"
                    />
                )}
                <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
                    {post.title}
                </h1>
                <p className="text-sm text-muted-foreground">
                    {formatDate(post.publishedAt)}{post.readTimeInMinutes ? ` · ${post.readTimeInMinutes} min read` : ""}
                </p>
            </div>
            <div className="my-6 flex w-full items-center">
                <div
                    className="flex-1 h-px bg-border"
                    style={{
                        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                    }}
                />
            </div>
            <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <MDXContent code={post.mdx} />
            </article>

            <nav className="mt-12 pt-8 max-w-2xl">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    {previousPost ? (
                        <Link
                            href={`/blog/${previousPost.slug}`}
                            className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                        >
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <ChevronLeft className="size-3" />
                                Previous
                            </span>
                            <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                                {previousPost.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="hidden sm:block flex-1" />
                    )}
                    {nextPost ? (
                        <Link
                            href={`/blog/${nextPost.slug}`}
                            className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
                        >
                            <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                                Next
                                <ChevronRight className="size-3" />
                            </span>
                            <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                                {nextPost.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="hidden sm:block flex-1" />
                    )}
                </div>
            </nav>
        </section>
    );
}
