import { bookMeeting } from "@/lib/calcom";

import { resolveTimeZone } from "./resolve-timezone";
import type { ToolModule } from "./types";

export const BOOK_MEETING_TOOL_NAME = "book_meeting";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Only allowed to book a time that get_availability actually returned
// earlier in THIS SAME request — prevents the model from booking a
// hallucinated or stale slot, and forces a fresh availability re-check
// immediately before every booking attempt. See ToolContext.confirmedSlots.
export const bookMeetingTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: BOOK_MEETING_TOOL_NAME,
            description:
                "Create a REAL calendar booking + invite. Only call after the visitor has confirmed the exact time, name, and email. REJECTED unless get_availability was called for this date in the same reply and 'start' matches one of its results — never call speculatively.",
            parameters: {
                type: "object",
                properties: {
                    start: { type: "string", description: "Exact ISO 8601 start time from get_availability's results, e.g. '2026-07-15T14:00:00Z'." },
                    name: { type: "string", description: "Attendee's full name." },
                    email: { type: "string", description: "Attendee's email address." },
                    timeZone: { type: "string", description: "Attendee's timezone — an IANA name (e.g. 'America/New_York') or a plain offset (e.g. 'GMT+5') both work." },
                },
                required: ["start", "name", "email", "timeZone"],
            },
        },
    },
    handler: async (args, ctx) => {
        const { start, name: attendeeName, email, timeZone } = args as Record<string, unknown>;
        if (typeof start !== "string" || typeof attendeeName !== "string" || typeof email !== "string" || typeof timeZone !== "string") {
            return "Missing required booking fields.";
        }
        if (!EMAIL_RE.test(email)) return "That doesn't look like a valid email address — ask the visitor to double-check it.";

        const startMs = new Date(start).getTime();
        if (Number.isNaN(startMs) || !ctx.confirmedSlots.has(startMs)) {
            return "Rejected: that time was not confirmed as open. Call get_availability for the relevant date first, show the visitor the real open times, and only book a time that appears in those results.";
        }

        const resolvedTimeZone = resolveTimeZone(timeZone);

        try {
            const booking = await bookMeeting({ start, name: attendeeName, email, timeZone: resolvedTimeZone });
            return `Booking confirmed: ${new Date(booking.start).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: resolvedTimeZone })} (${timeZone}). Confirmation sent to ${email}.`;
        } catch (err) {
            console.error("Cal.com booking failed:", { start, timeZone: resolvedTimeZone, error: err });
            const reason = err instanceof Error ? err.message : "unknown error";
            return `Booking failed (${reason}). Tell the visitor the specific reason if it's informative, and suggest a different time or emailing directly.`;
        }
    },
};
