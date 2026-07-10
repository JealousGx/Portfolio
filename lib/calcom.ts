import { DATA } from "@/data/resume";

const API_BASE = "https://api.cal.com/v2";

function parseMeetingUrl() {
  try {
    const { pathname } = new URL(DATA.bookingUrl);
    const [, username, eventTypeSlug] = pathname.split("/");
    if (!username || !eventTypeSlug) return null;
    return { username, eventTypeSlug };
  } catch {
    return null;
  }
}

export function isCalComConfigured() {
  return Boolean(process.env.CAL_COM_API_KEY) && Boolean(parseMeetingUrl());
}

type SlotsResponse = {
  status: string;
  data?: Record<string, { start: string }[]>;
  error?: { message?: string };
};

export async function getAvailability(opts: {
  startDate: string;
  endDate: string;
  timeZone?: string;
}) {
  const target = parseMeetingUrl();
  if (!target) throw new Error("Cal.com is not configured.");

  const params = new URLSearchParams({
    eventTypeSlug: target.eventTypeSlug,
    username: target.username,
    start: opts.startDate,
    end: opts.endDate,
    timeZone: opts.timeZone || "UTC",
  });

  const res = await fetch(`${API_BASE}/slots?${params.toString()}`, {
    headers: {
      "cal-api-version": "2024-09-04",
      Authorization: `Bearer ${process.env.CAL_COM_API_KEY}`,
    },
  });

  const json: SlotsResponse = await res.json();
  if (!res.ok || json.status !== "success" || !json.data) {
    throw new Error(json.error?.message || "Failed to fetch availability.");
  }

  // Cap output to keep the tool result small: at most 5 days, 4 slots/day.
  const days = Object.entries(json.data).slice(0, 5);
  return days.map(([date, slots]) => ({
    date,
    times: slots.slice(0, 4).map((s) => s.start),
  }));
}

type BookingResponse = {
  status: string;
  data?: { id: number; start: string; end: string; location?: string };
  error?: { message?: string };
};

export async function bookMeeting(opts: {
  start: string;
  name: string;
  email: string;
  timeZone: string;
}) {
  const target = parseMeetingUrl();
  if (!target) throw new Error("Cal.com is not configured.");

  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cal-api-version": "2026-02-25",
      Authorization: `Bearer ${process.env.CAL_COM_API_KEY}`,
    },
    body: JSON.stringify({
      start: opts.start,
      eventTypeSlug: target.eventTypeSlug,
      username: target.username,
      attendee: {
        name: opts.name,
        email: opts.email,
        timeZone: opts.timeZone,
      },
    }),
  });

  const json: BookingResponse = await res.json();
  if (!res.ok || json.status !== "success" || !json.data) {
    throw new Error(json.error?.message || "Failed to create the booking.");
  }

  return json.data;
}
