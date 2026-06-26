import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { z } from "zod";

import { remarkAutoLink } from "./lib/remark-auto-link";
import { remarkCodeMeta } from "./lib/remark-code-meta";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  exclude: ["_template.mdx"],
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    brief: z.string(),
    coverImage: z.string().optional(),
    readTimeInMinutes: z.number().optional(),
    // SEO fields — all optional so existing posts aren't broken
    summary: z.string().optional(),
    keyStats: z
      .array(z.object({ stat: z.string(), source: z.string(), sourceUrl: z.string().optional() }))
      .optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta, [remarkAutoLink, { currentSlug: document._meta.path }]],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: { dark: "github-dark", light: "github-light" },
            keepBackground: false,
          },
        ],
      ],
    });
    return {
      ...document,
      slug: document._meta.path,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
