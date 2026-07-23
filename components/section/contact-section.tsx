import Link from "next/link";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

const PRICING = [
    { label: "Landing page", value: "From $800" },
    { label: "MVP", value: "From $4,000" },
    { label: "SaaS product", value: "From $8,000" },
    { label: "Ongoing work", value: "$40 to $70/hr" },
] as const;

export default function ContactSection() {
    return (
        <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                <span className="text-background text-sm font-medium">Contact</span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
                <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    style={{
                        maskImage: "linear-gradient(to bottom, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    }}
                />
            </div>
            <div className="relative flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                </h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full max-w-sm mx-auto">
                    {PRICING.map((item) => (
                        <div key={item.label} className="text-left">
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-sm font-medium">{item.value}</p>
                        </div>
                    ))}
                </div>
                <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                    These are starting points, not fixed quotes. Book a free scoping call, no obligation, and
                    I&apos;ll give you a real number based on what you actually need. Or drop me an email at{" "}
                    <Link
                        href={`mailto:${DATA.contact.email}`}
                        className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                        {DATA.contact.email}
                    </Link>{" "}
                    if that's easier.
                </p>
                <Link
                    href={DATA.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors bg-background"
                >
                    Book a free scoping call
                </Link>
            </div>
        </div>
    );
}
