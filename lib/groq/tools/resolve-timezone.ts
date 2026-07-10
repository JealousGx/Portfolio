// Visitors say things like "GMT+5" or "UTC+5" — both cal.com's API and
// Intl/toLocaleString reject raw offsets like that outright (they require a
// valid IANA zone name), and the model can't reliably map an offset to the
// one specific IANA zone that matches it. Convert whole-hour offsets to the
// equivalent Etc/GMT zone (note: Etc/GMT sign is inverted from common usage —
// Etc/GMT-5 means UTC+5), which IS a valid IANA identifier both accept.
const OFFSET_RE = /^(?:gmt|utc)?\s*([+-])\s*(\d{1,2})(?::?00)?$/i;

export function resolveTimeZone(input: string | undefined): string {
    if (!input) return "UTC";
    const trimmed = input.trim();
    if (trimmed.toUpperCase() === "UTC" || trimmed.includes("/")) return trimmed;

    const match = OFFSET_RE.exec(trimmed);
    if (match) {
        const hours = Number(match[2]);
        if (hours === 0) return "UTC";
        const sign = match[1] === "+" ? "-" : "+"; // Etc/GMT sign is inverted
        return `Etc/GMT${sign}${hours}`;
    }

    // Assume it's already a valid IANA name — if not, the caller's existing
    // error handling (cal.com 400 / toLocaleString throw) surfaces honestly
    // instead of silently substituting UTC.
    return trimmed;
}
