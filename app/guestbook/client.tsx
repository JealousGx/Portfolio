"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import React from "react";

export default function GuestbookClient() {
    const { resolvedTheme } = useTheme();
    return (
        <React.Fragment>
            <h1 className="text-3xl font-bold">GuestBook</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                Leave a message 😃
            </p>
            <div className="mt-16">
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
        </React.Fragment>
    );
}