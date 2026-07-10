import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "posts");
const MAX_POST_CHARS = 4000;

export type PostMeta = {
    slug: string;
    title: string;
    brief: string;
    publishedAt: string;
};

function listPostFiles() {
    return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx") && f !== "_template.mdx");
}

export function getAllPostsMeta(): PostMeta[] {
    return listPostFiles().map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
        const { data } = matter(raw);
        return {
            slug,
            title: data.title ?? slug,
            brief: data.brief ?? "",
            publishedAt: data.publishedAt ?? "",
        };
    });
}

export function formatPostsList(posts: PostMeta[]) {
    return posts.map((p) => `- "${p.title}" (${p.publishedAt}) — ${p.brief} | slug: ${p.slug}`).join("\n");
}

export function getPostContent(slug: string): { title: string; content: string } | null {
    const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
    const filePath = path.join(POSTS_DIR, `${safeSlug}.mdx`);
    if (!filePath.startsWith(POSTS_DIR) || !fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // Strip MDX/JSX component tags and import lines to keep it readable plain text for the model.
    const plain = content
        .replace(/^import .+$/gm, "")
        .replace(/<[^>]+>/g, "")
        .trim();

    return {
        title: data.title ?? safeSlug,
        content: plain.slice(0, MAX_POST_CHARS),
    };
}
