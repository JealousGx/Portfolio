import { collection, config, fields } from "@keystatic/core";

const isDev = process.env.NODE_ENV === "development";

export default config({
    storage: isDev
        ? { kind: "local" }
        : {
            kind: "github",
            repo: { owner: "JealousGx", name: "Portfolio" },
            branchPrefix: "cms/",
        },
    ui: {
        brand: {
            name: "JealousGx",
            mark: () => (
                <img src="/logo/logo.png" alt="jealous.dev" width={24} height={24} style={{ borderRadius: 4 }} />
            ),
        },
        navigation: {
            "Content": ["posts"],
        },
    },
    collections: {
        posts: collection({
            label: "Blog Posts",
            slugField: "title",
            path: "posts/*",
            format: { contentField: "content" },
            entryLayout: "content",
            schema: {
                title: fields.slug({
                    name: { label: "Title", description: "Use the exact query people search for." },
                }),
                publishedAt: fields.date({
                    label: "Published At",
                    validation: { isRequired: true },
                }),
                brief: fields.text({
                    label: "Brief",
                    description: "Meta description — ~155 chars max. Shown in search results.",
                    multiline: true,
                    validation: { isRequired: true },
                }),
                coverImage: fields.url({ label: "Cover Image URL" }),
                readTimeInMinutes: fields.number({ label: "Read Time (minutes)" }),

                // SEO fields
                summary: fields.text({
                    label: "Summary (TL;DR)",
                    description:
                        "40-60 word direct answer shown at top of post. Self-contained — no 'in this post' framing. Cited by AI engines.",
                    multiline: true,
                }),
                keyStats: fields.array(
                    fields.object({
                        stat: fields.text({
                            label: "Stat",
                            description: "The statistic as a short sentence.",
                        }),
                        source: fields.text({
                            label: "Source",
                            description: "Publication or org name.",
                        }),
                        sourceUrl: fields.url({ label: "Source URL" }),
                    }),
                    {
                        label: "Key Stats",
                        description:
                            "Real, verifiable statistics. Shown as stat cards before the article body.",
                        itemLabel: (props) => props.fields.stat.value || "Stat",
                    }
                ),
                faqs: fields.array(
                    fields.object({
                        question: fields.text({
                            label: "Question",
                            description: "Use exact phrasing people search for.",
                        }),
                        answer: fields.text({
                            label: "Answer",
                            multiline: true,
                            description: "1-3 sentences, direct.",
                        }),
                    }),
                    {
                        label: "FAQs",
                        description:
                            "3-5 Q&A pairs. Rendered as FAQ section + FAQPage JSON-LD at the bottom.",
                        itemLabel: (props) => props.fields.question.value || "FAQ",
                    }
                ),

                content: fields.mdx({ label: "Content" }),
            },
        }),
    },
});
