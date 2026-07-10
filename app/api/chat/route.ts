import { NextRequest } from "next/server";

import {
  buildSystemPrompt,
  CHAT_MODEL,
  completionToStream,
  createWithToolRecovery,
  executeTool,
  getTools,
  groq,
  textToStream,
} from "@/lib/groq";
import { isValidMessages } from "./validate";

import type Groq from "groq-sdk";
import { RateLimitError } from "groq-sdk";

export const runtime = "nodejs";

const MAX_TOOL_ROUNDS = 2;

export async function POST(req: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    return new Response("Chat is not configured.", { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON body.", { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidMessages(messages)) {
    return new Response("Invalid messages payload.", { status: 400 });
  }

  const conversation: Groq.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "system", content: buildSystemPrompt() },
    ...messages,
  ];
  const tools = getTools();
  const confirmedSlots = new Set<number>();

  try {
    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const message = await createWithToolRecovery({
        model: CHAT_MODEL,
        temperature: 0.3,
        max_tokens: 400,
        messages: conversation,
        tools,
        tool_choice: "auto",
      });

      const toolCalls = message.tool_calls;

      if (!toolCalls || toolCalls.length === 0) {
        return new Response(textToStream(message.content ?? ""), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        });
      }

      conversation.push({
        role: "assistant",
        content: message.content ?? null,
        tool_calls: toolCalls,
      });
      for (const call of toolCalls) {
        const result = await executeTool(
          call.function.name,
          call.function.arguments,
          { confirmedSlots },
        );
        conversation.push({
          role: "tool",
          tool_call_id: call.id,
          content: result,
        });
      }
    }

    // Ran out of tool rounds — force a final streamed answer with no more tool access.
    const finalStream = await groq.chat.completions.create({
      model: CHAT_MODEL,
      stream: true,
      temperature: 0.6,
      max_tokens: 400,
      messages: conversation,
      tool_choice: "none",
    });

    return new Response(completionToStream(finalStream), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (err instanceof RateLimitError) {
      const retryAfter = err.headers?.get("retry-after");
      const wait = retryAfter ? `${retryAfter}s` : "a minute";
      console.warn("Groq rate limit hit:", err.message);
      return new Response(
        `I'm getting a lot of questions right now — try again in about ${wait}.`,
        {
          status: 429,
        },
      );
    }
    console.error("Groq request failed:", err);
    return new Response(
      "The assistant is temporarily unavailable. Please try again shortly.",
      {
        status: 502,
      },
    );
  }
}
