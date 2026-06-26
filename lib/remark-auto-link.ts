import fs from "node:fs";
import path from "node:path";

/**
 * At build time, reads all post slugs + titles from the posts directory,
 * then scans paragraph text nodes. When a post's title appears verbatim
 * in a paragraph (and isn't already inside a link), wraps it in a link.
 *
 * Skips the current post so it doesn't self-link.
 */
export function remarkAutoLink({ currentSlug }: { currentSlug?: string } = {}) {
  return (tree: any) => {
    const postsDir = path.join(process.cwd(), "posts");

    const slugToTitle: Array<{ slug: string; title: string }> = [];

    try {
      const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
      for (const file of files) {
        const slug = file.replace(/\.mdx$/, "");
        if (slug === currentSlug) continue;

        const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
        const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
        if (match?.[1]) {
          slugToTitle.push({ slug, title: match[1].replace(/^["']|["']$/g, "") });
        }
      }
    } catch {
      return;
    }

    // Sort longest title first to avoid partial overlaps
    slugToTitle.sort((a, b) => b.title.length - a.title.length);

    const walk = (node: any): void => {
      if (!node || typeof node !== "object") return;

      // Don't process inside existing links
      if (node.type === "link") return;

      if (node.type === "text" && typeof node.value === "string") {
        for (const { slug, title } of slugToTitle) {
          if (!node.value.includes(title)) continue;

          const parts = node.value.split(title);
          if (parts.length < 2) continue;

          // Replace this text node with [text, link, text, link, ...] sequence
          const replacement: any[] = [];
          for (let i = 0; i < parts.length; i++) {
            if (parts[i]) replacement.push({ type: "text", value: parts[i] });
            if (i < parts.length - 1) {
              replacement.push({
                type: "link",
                url: `/blog/${slug}`,
                children: [{ type: "text", value: title }],
              });
            }
          }

          // Signal caller to replace this node
          (node as any).__replace = replacement;
          return;
        }
        return;
      }

      if (!Array.isArray(node.children)) return;

      const newChildren: any[] = [];
      for (const child of node.children) {
        walk(child);
        if (child.__replace) {
          newChildren.push(...child.__replace);
        } else {
          newChildren.push(child);
        }
      }
      node.children = newChildren;
    };

    walk(tree);
  };
}
