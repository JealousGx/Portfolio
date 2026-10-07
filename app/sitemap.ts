import type { MetadataRoute } from "next";

import { allPosts } from "content-collections";

import { projectPages } from "@/data/projects";
import { servicePages } from "@/data/services";
import { DATA } from "@/data/resume";

// Real last-change dates (not build time). Update these when the page content changes.
// Service pages: every one gained links to the new landing page and e-commerce pages on 2026-10-07.
const SERVICE_PAGES_LASTMOD = new Date("2026-10-07");
const HOME_LASTMOD = new Date("2026-10-07"); // project cards and services links changed
const PROJECTS_LASTMOD = new Date("2026-10-07"); // detail pages and case study link added

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = allPosts.map((post) => ({
        url: `${DATA.url}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const servicePagesEntries = servicePages.map((page) => ({
        url: `${DATA.url}/${page.slug}`,
        lastModified: SERVICE_PAGES_LASTMOD,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const projectEntries = projectPages
        .filter((project) => project.complete)
        .map((project) => ({
            url: `${DATA.url}/projects/${project.slug}`,
            lastModified: new Date(project.lastModified),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    return [
        {
            url: DATA.url,
            lastModified: HOME_LASTMOD,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${DATA.url}/projects`,
            lastModified: PROJECTS_LASTMOD,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${DATA.url}/blog`,
            lastModified: new Date(Math.max(...allPosts.map((post) => new Date(post.publishedAt).getTime()))),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...projectEntries,
        ...servicePagesEntries,
        ...blogPosts,
    ];
}
