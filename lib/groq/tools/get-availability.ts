import { getAvailability } from "@/lib/calcom";

import { resolveTimeZone } from "./resolve-timezone";
import type { ToolModule } from "./types";

export const GET_AVAILABILITY_TOOL_NAME = "get_availability";

function addDays(dateStr: string, days: number) {
    const d = new Date(dateStr + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
}

export const getAvailabilityTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: GET_AVAILABILITY_TOOL_NAME,
            description: "Check open meeting slots for a date range. Call before offering any booking times.",
            parameters: {
                type: "object",
                properties: {
                    startDate: { type: "string", description: "Start of the range, YYYY-MM-DD. Defaults to today if omitted." },
                    endDate: { type: "string", description: "End of the range, YYYY-MM-DD. Defaults to 7 days after startDate if omitted." },
                    timeZone: { type: "string", description: "The visitor's timezone — an IANA name (e.g. 'America/New_York') or a plain offset (e.g. 'GMT+5') both work. Ask if unknown; default to 'UTC' otherwise." },
                },
                required: [],
            },
        },
    },
    handler: async (args, ctx) => {
        const startDate = typeof args.startDate === "string" ? args.startDate : new Date().toISOString().slice(0, 10);
        const endDate = typeof args.endDate === "string" ? args.endDate : addDays(startDate, 7);
        const timeZone = resolveTimeZone(typeof args.timeZone === "string" ? args.timeZone : undefined);
        try {
            const days = await getAvailability({ startDate, endDate, timeZone });
            if (days.length === 0) return "No open slots found in that range.";
            for (const d of days) {
                for (const t of d.times) ctx.confirmedSlots.add(new Date(t).getTime());
            }
            return days
                .map((d) => {
                    const label = new Date(d.date + "T00:00:00Z").toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                    });
                    const times = d.times.map((t) => new Date(t).toLocaleString("en-US", { hour: "numeric", minute: "2-digit", timeZone })).join(", ");
                    return `- **${label}**: ${times}`;
                })
                .join("\n");
        } catch (err) {
            return `Could not fetch availability: ${err instanceof Error ? err.message : "unknown error"}`;
        }
    },
};
