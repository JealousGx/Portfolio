"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const STORAGE_KEY = "analytics-consent";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        return value === "granted" || value === "denied" ? value : null;
    } catch {
        return null;
    }
}

function saveConsent(value: Exclude<Consent, null>) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
}

// Loads GA4 only after the visitor accepts, and tracks cal.com and email clicks
// with one delegated listener so no individual link needs wiring.
export default function ConsentAnalytics({ gaId }: { gaId: string }) {
    const [consent, setConsent] = useState<Consent>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setConsent(readConsent());
        setReady(true);
    }, []);

    useEffect(() => {
        if (consent !== "granted") return;

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
    }, [consent]);

    const choose = (value: Exclude<Consent, null>) => {
        saveConsent(value);
        setConsent(value);
    };

    return (
        <>
            {consent === "granted" && <GoogleAnalytics gaId={gaId} />}
            {ready && consent === null && (
                <div
                    role="dialog"
                    aria-label="Analytics consent"
                    className="fixed bottom-24 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-border bg-background p-4 shadow-lg"
                >
                    <p className="text-sm text-muted-foreground">
                        This site uses Google Analytics to understand how visitors use it. Allow analytics cookies?
                    </p>
                    <div className="mt-3 flex gap-2">
                        <button
                            type="button"
                            onClick={() => choose("granted")}
                            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-primary px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
                        >
                            Accept
                        </button>
                        <button
                            type="button"
                            onClick={() => choose("denied")}
                            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
