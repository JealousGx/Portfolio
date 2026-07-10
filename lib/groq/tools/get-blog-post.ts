import { getPostContent } from "@/lib/blog";

import type { ToolModule } from "./types";

export const GET_BLOG_POST_TOOL_NAME = "get_blog_post";

export const getBlogPostTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: GET_BLOG_POST_TOOL_NAME,
            description:
                "Fetch the full text content of one blog post by its slug, to answer a specific question about it in detail. Call list_blog_posts first if you don't already know the slug.",
            parameters: {
                type: "object",
                properties: {
                    slug: { type: "string", description: "The exact slug of the post, from list_blog_posts." },
                },
                required: ["slug"],
            },
        },
    },
    handler: async (args) => {
        const slug = args.slug;
        if (!slug || typeof slug !== "string") return "Missing slug.";
        const post = getPostContent(slug);
        if (!post) return `No post found with slug "${slug}".`;
        return `Title: ${post.title}\n\n${post.content}`;
    },
};
