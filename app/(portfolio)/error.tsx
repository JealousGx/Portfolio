"use client";

import { Home, RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-[calc(100vh-12rem)] flex flex-col">
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="flex flex-col items-center text-center max-w-md relative">
                    <h1 className="text-[200px] font-semibold font-mono bg-linear-to-b from-primary/30 to-secondary/10 text-transparent bg-clip-text absolute -top-40 left-1/2 -translate-x-1/2 mask-[linear-gradient(to_bottom,black,black_20%,transparent_80%)] tracking-tighter uppercase [-webkit-text-stroke:3px_hsl(var(--primary)/0.6)]">
                        500
                    </h1>
                    <h2 className="text-4xl tracking-tight font-semibold text-foreground mb-2">
                        Something went wrong
                    </h2>
                    <p className="text-muted-foreground mb-8 text-balance tracking-tight font-medium">
                        An unexpected error occurred. You can try again or go back home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button onClick={reset} variant="outline" className="gap-2 cursor-pointer">
                            <RotateCcw className="h-4 w-4" />
                            Try again
                        </Button>
                        <Link href="/">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                <Home className="h-4 w-4" />
                                Go to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
