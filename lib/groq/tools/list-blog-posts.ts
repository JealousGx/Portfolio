import { formatPostsList, getAllPostsMeta } from "@/lib/blog";

import type { ToolModule } from "./types";

export const LIST_BLOG_POSTS_TOOL_NAME = "list_blog_posts";

export const listBlogPostsTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: LIST_BLOG_POSTS_TOOL_NAME,
            description:
                "List all of Abdul Mateen's blog posts (title, date, one-line summary, slug). Call this when a visitor asks about his blog, writing, or articles in general.",
            parameters: { type: "object", properties: {}, required: [] },
        },
    },
    handler: async () => {
        const posts = getAllPostsMeta();
        return posts.length ? formatPostsList(posts) : "No blog posts found.";
    },
};
