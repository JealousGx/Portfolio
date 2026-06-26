"use client";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: "sans-serif", background: "#fff", color: "#000" }}>
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                    <div style={{ textAlign: "center", maxWidth: 400 }}>
                        <h1 style={{ fontSize: "4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>500</h1>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 0.75rem" }}>Something went wrong</h2>
                        <p style={{ color: "#666", marginBottom: "1.5rem" }}>
                            An unexpected error occurred. Try refreshing the page.
                        </p>
                        <button
                            onClick={reset}
                            style={{ padding: "0.5rem 1.25rem", border: "1px solid #ccc", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: "0.875rem" }}
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
