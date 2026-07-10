export function formatProjects(
    list: readonly { title: string; dates: string; description: string; technologies: readonly string[]; href: string }[]
) {
    return list.map((p) => `- ${p.title} (${p.dates}): ${p.description} [${p.technologies.join(", ")}] — ${p.href}`).join("\n");
}
