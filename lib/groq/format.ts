import { DATA } from "@/data/resume";

export function formatProjects(
    list: readonly { title: string; dates: string; description: string; technologies: readonly string[]; href: string }[]
) {
    return list.map((p) => `- ${p.title} (${p.dates}): ${p.description} [${p.technologies.join(", ")}] — ${p.href.startsWith("/") ? DATA.url + p.href : p.href}`).join("\n");
}
