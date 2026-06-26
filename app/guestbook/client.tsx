"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GuestbookClient() {
    const { resolvedTheme } = useTheme();
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">Guestbook</h1>
                <p className="text-sm text-muted-foreground">Leave a message 😃</p>
            </div>
            <Giscus
                id="comments"
                repo="JealousGx/Portfolio"
                repoId="MDEwOlJlcG9zaXRvcnkyOTE5MTkzOTc="
                category="Comments"
                categoryId="DIC_kwDOEWZWJc4CQmb0"
                mapping="specific"
                term="GuestBook"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}