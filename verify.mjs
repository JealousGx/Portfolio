// Usage: node verify.mjs [baseUrl]   (default http://localhost:3000)
// Checks the six project pages: status, H1, title, description, canonical, JSON-LD, sitemap.
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://jealous.dev";
const slugs = ["klipse", "prospkt", "gigscale", "foundersignal", "askkkdoc", "vala"];
const forbidden = ["aggregateRating", "review", "offers", "price", "awards"];

let failed = 0;
const check = (ok, msg) => {
    console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
    if (!ok) failed++;
};
const get = async (path) => {
    const res = await fetch(base + path, { redirect: "manual" });
    return { status: res.status, body: await res.text() };
};
const walk = (node, fn) => {
    if (Array.isArray(node)) return node.forEach((n) => walk(n, fn));
    if (node && typeof node === "object") {
        fn(node);
        Object.values(node).forEach((n) => walk(n, fn));
    }
};

const titles = new Set();
const descs = new Set();
const sitemap = await get("/sitemap.xml");

for (const slug of slugs) {
    const path = `/projects/${slug}`;
    const { status, body } = await get(path);
    check(status === 200, `${path} returns 200 (got ${status})`);
    check((body.match(/<h1[\s>]/g) || []).length === 1, `${path} has exactly one H1`);
    const title = body.match(/<title>([^<]*)<\/title>/)?.[1];
    const desc = body.match(/<meta name="description" content="([^"]*)"/)?.[1];
    check(!!title && !titles.has(title), `${path} unique title: ${title} (${title?.length} chars)`);
    check(!!desc && !descs.has(desc), `${path} unique description (${desc?.length} chars)`);
    titles.add(title);
    descs.add(desc);
    check(
        body.includes(`<link rel="canonical" href="${SITE}${path}"`),
        `${path} self-referencing canonical`
    );
    const ld = [...body.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    check(ld.length === 1, `${path} has one server-rendered JSON-LD script`);
    try {
        const data = JSON.parse(ld[0][1]);
        const types = [];
        let bad = [];
        walk(data, (n) => {
            if (n["@type"]) types.push(n["@type"]);
            bad.push(...forbidden.filter((k) => k in n));
        });
        const want = slug === "foundersignal" ? "SoftwareSourceCode" : "SoftwareApplication";
        check(types.includes("WebPage") && types.includes(want) && types.includes("BreadcrumbList"), `${path} schema types: ${types.join(", ")}`);
        check(bad.length === 0, `${path} no forbidden schema properties`);
    } catch {
        check(false, `${path} JSON-LD parses`);
    }
    const loc = `<loc>${SITE}${path}</loc>`;
    const entry = sitemap.body.split("<url>").find((u) => u.includes(loc));
    check(!!entry && entry.includes("<lastmod>"), `${path} in sitemap with lastmod`);
    check(!body.includes("/_next/image") || /alt="[^"]+"/.test(body), `${path} images have alt text`);
}

for (const path of ["/landing-page-development", "/ecommerce-website-development"]) {
    const { status, body } = await get(path);
    const desc = body.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    check(status === 200, `${path} returns 200 (got ${status})`);
    check((body.match(/<h1[\s>]/g) || []).length === 1, `${path} has exactly one H1`);
    check(desc.length >= 120 && desc.length <= 160, `${path} description length ${desc.length}`);
    check(body.includes(`<link rel="canonical" href="${SITE}${path}"`), `${path} self-referencing canonical`);
    check(body.includes("https://jealous.dev/#business") && body.includes("Worldwide"), `${path} Service schema provider and areaServed`);
    check(body.includes("cal.com/jealous/30min") && body.includes('href="/projects"'), `${path} CTA and /projects link`);
    check(sitemap.body.includes(`<loc>${SITE}${path}</loc>`), `${path} in sitemap`);
}

const missing = await get("/projects/does-not-exist");
check(missing.status === 404, `/projects/does-not-exist returns 404 (got ${missing.status})`);

console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
process.exit(failed ? 1 : 0);
