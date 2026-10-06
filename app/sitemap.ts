import type { MetadataRoute } from "next";

import { allPosts } from "content-collections";

import { servicePages } from "@/data/services";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = allPosts.map((post) => ({
        url: `${DATA.url}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const servicePagesEntries = servicePages.map((page) => ({
        url: `${DATA.url}/${page.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: DATA.url,
                changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${DATA.url}/projects`,
                changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${DATA.url}/blog`,
                changeFrequency: "weekly",
            priority: 0.9,
        },
        ...servicePagesEntries,
        ...blogPosts,
    ];
}
