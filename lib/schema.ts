import { DATA } from "@/data/resume";

export const PERSON_ID = `${DATA.url}/#person`;
export const WEBSITE_ID = `${DATA.url}/#website`;
export const BUSINESS_ID = `${DATA.url}/#business`;

export function breadcrumbList(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${DATA.url}${item.path}`,
        })),
    };
}

export function toJsonLd(data: object) {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
