import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { allPosts } from "content-collections";

import { formatDate } from "@/lib/utils";

export default function FeaturedBlogSection() {
    const posts = [...allPosts]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 3);

    if (posts.length === 0) return null;

    return (
        <div className="flex min-h-0 flex-col gap-y-8">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">Blog</span>
                    </div>
                    <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest posts</h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                        Thoughts on software development, building products, and more.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 max-w-200 mx-auto w-full">
                {posts.map((post, id) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <span className="text-xs font-mono tabular-nums font-medium mt-1.25 text-muted-foreground">
                            {String(id + 1).padStart(2, "0")}.
                        </span>
                        <div className="flex flex-col gap-y-1 flex-1">
                            <p className="tracking-tight text-lg font-medium">
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                    {post.title}
                                </span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    View all posts
                    <ArrowRight className="size-3.5" />
                </Link>
            </div>
        </div>
    );
}
