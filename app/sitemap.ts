import type { MetadataRoute } from "next";

import { allPosts } from "content-collections";

import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = allPosts.map((post) => ({
        url: `${DATA.url}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: DATA.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${DATA.url}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${DATA.url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogPosts,
    ];
}
