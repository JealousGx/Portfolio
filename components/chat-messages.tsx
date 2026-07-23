"use client";

import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

export type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

export function ChatMessages({ messages, error }: { messages: ChatMessage[]; error: string | null }) {
    return (
        <>
            {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                    <div
                        className={cn(
                            "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                            m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        )}
                    >
                        {!m.content ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : m.role === "user" ? (
                            <p className="whitespace-pre-wrap">{m.content}</p>
                        ) : (
                            <div className="prose prose-sm dark:prose-invert max-w-none text-inherit prose-headings:text-inherit prose-p:text-inherit prose-strong:text-inherit prose-li:text-inherit prose-a:text-primary [&_p]:m-0 [&_p+p]:mt-2 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_ul]:pl-4 [&_ol]:pl-4">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </>
    );
}
