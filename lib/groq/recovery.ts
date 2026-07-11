import { groq } from "./client";

import type Groq from "groq-sdk";
import type { ChatCompletionCreateParamsNonStreaming } from "groq-sdk/resources/chat/completions";

// Groq/Llama occasionally emits a tool call as malformed pseudo-XML text
// (`<function=name {...}</function>`) instead of a real structured tool call,
// and Groq's strict parser 400s on it with code "tool_use_failed" instead of
// passing it through. The intent is still right there in `failed_generation`,
// so recover it instead of failing the whole request.
const FUNCTION_CALL_RE = /<function=([a-zA-Z0-9_]+)\s*>?\s*(\{[^{}]*\})\s*<\/function>/g;

function extractFailedGeneration(err: unknown): string | null {
    if (typeof err !== "object" || err === null) return null;
    const nested = (err as { error?: { error?: { code?: string; failed_generation?: string } } }).error?.error;
    return nested?.code === "tool_use_failed" && typeof nested.failed_generation === "string" ? nested.failed_generation : null;
}

function recoverToolCalls(failedGeneration: string): Groq.Chat.Completions.ChatCompletionMessageToolCall[] | null {
    const calls: Groq.Chat.Completions.ChatCompletionMessageToolCall[] = [];
    let match: RegExpExecArray | null;
    let i = 0;
    FUNCTION_CALL_RE.lastIndex = 0;
    while ((match = FUNCTION_CALL_RE.exec(failedGeneration))) {
        const [, name, argsJson] = match;
        try {
            JSON.parse(argsJson);
        } catch {
            continue;
        }
        calls.push({ id: `recovered_${Date.now()}_${i++}`, type: "function", function: { name, arguments: argsJson } });
    }
    return calls.length ? calls : null;
}

export type MinimalMessage = { content: string | null; tool_calls?: Groq.Chat.Completions.ChatCompletionMessageToolCall[] };

export async function createWithToolRecovery(params: ChatCompletionCreateParamsNonStreaming): Promise<MinimalMessage> {
    try {
        const response = await groq.chat.completions.create(params);
        const message = response.choices[0]?.message ?? { content: "" };

        // Sometimes the malformed pseudo-XML tool call doesn't trigger a 400 at
        // all — it just streams through as ordinary text content in an
        // otherwise-successful response, with no tool_calls array. Catch that
        // case too, or it leaks straight into the visitor-facing reply.
        if ((!message.tool_calls || message.tool_calls.length === 0) && message.content) {
            const recovered = recoverToolCalls(message.content);
            if (recovered) {
                console.warn("Recovered malformed tool call from successful response content:", message.content);
                return { content: null, tool_calls: recovered };
            }
        }

        return message;
    } catch (err) {
        const failedGeneration = extractFailedGeneration(err);
        const recovered = failedGeneration ? recoverToolCalls(failedGeneration) : null;
        if (recovered) {
            console.warn("Recovered malformed Groq tool call:", failedGeneration);
            return { content: null, tool_calls: recovered };
        }
        throw err;
    }
}
