"use client";

import { Loader2, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

const GREETING: ChatMessage = {
    role: "assistant",
    content: "Hey! I'm Jealous' assistant. Ask me about his skills, services, or projects — happy to help.",
};

export function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
    const [input, setInput] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    async function sendMessage(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isStreaming) return;

        setError(null);
        const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
        setMessages([...nextMessages, { role: "assistant", content: "" }]);
        setInput("");
        setIsStreaming(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: nextMessages.filter((m) => m.content).slice(-20),
                }),
            });

            if (!res.ok || !res.body) {
                throw new Error(await res.text().catch(() => "Something went wrong."));
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let acc = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                acc += decoder.decode(value, { stream: true });
                setMessages((prev) => {
                    const copy = [...prev];
                    copy[copy.length - 1] = { role: "assistant", content: acc };
                    return copy;
                });
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
            setMessages((prev) => prev.slice(0, -1));
        } finally {
            setIsStreaming(false);
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="flex h-[min(32rem,70vh)] w-[min(22rem,90vw)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
                    >
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <div>
                                <p className="text-sm font-semibold">Chat with Jealous&apos; AI assistant</p>
                                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => setOpen(false)}
                                aria-label="Close chat"
                            >
                                <X className="size-4" />
                            </Button>
                        </div>

                        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
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
                        </div>

                        <div className="border-t border-border p-3">
                            <form onSubmit={sendMessage} className="flex items-center gap-2">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about services, projects…"
                                    disabled={isStreaming}
                                    maxLength={2000}
                                    className="h-9 flex-1 rounded-full border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50"
                                />
                                <Button
                                    type="submit"
                                    size="icon-sm"
                                    disabled={isStreaming || !input.trim()}
                                    aria-label="Send message"
                                >
                                    <Send className="size-4" />
                                </Button>
                            </form>
                            <p className="mt-1.5 text-center text-[11px] text-muted-foreground">
                                AI-generated — may make mistakes. Verify anything important.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                size="icon-lg"
                onClick={() => setOpen((v) => !v)}
                className="rounded-full shadow-lg"
                aria-label={open ? "Close chat" : "Open chat"}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={open ? "close" : "open"}
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.12 }}
                        className="flex"
                    >
                        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
                    </motion.span>
                </AnimatePresence>
            </Button>
        </div>
    );
}
