"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

// One delegated listener so every cal.com and email link is tracked
// without wiring each component.
export default function AnalyticsEvents() {
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const link = (event.target as Element | null)?.closest?.("a");
            const href = link?.getAttribute("href");
            if (!href) return;

            if (href.startsWith("mailto:")) {
                sendGAEvent("event", "email_click", { page_path: window.location.pathname });
            } else if (href.includes("cal.com/")) {
                sendGAEvent("event", "scoping_call_click", { page_path: window.location.pathname });
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}
