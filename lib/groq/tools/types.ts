import type Groq from "groq-sdk";

export type ToolContext = {
    confirmedSlots: Set<number>;
};

export type ToolModule = {
    definition: Groq.Chat.Completions.ChatCompletionTool;
    handler: (args: Record<string, unknown>, ctx: ToolContext) => Promise<string>;
};
