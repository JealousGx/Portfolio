import { isCalComConfigured } from "@/lib/calcom";

import { bookMeetingTool } from "./book-meeting";
import { getAvailabilityTool } from "./get-availability";
import { getBlogPostTool } from "./get-blog-post";
import { getHowIWorkTool } from "./get-how-i-work";
import { listAllProjectsTool } from "./list-all-projects";
import { listBlogPostsTool } from "./list-blog-posts";
import type { ToolContext, ToolModule } from "./types";

import type Groq from "groq-sdk";

const baseModules: ToolModule[] = [listBlogPostsTool, getBlogPostTool, listAllProjectsTool, getHowIWorkTool];
const bookingModules: ToolModule[] = [getAvailabilityTool, bookMeetingTool];

function getToolModules(): ToolModule[] {
    return isCalComConfigured() ? [...baseModules, ...bookingModules] : baseModules;
}

export function getTools(): Groq.Chat.Completions.ChatCompletionTool[] {
    return getToolModules().map((m) => m.definition);
}

export async function executeTool(name: string, rawArgs: string, ctx: ToolContext): Promise<string> {
    let args: Record<string, unknown>;
    try {
        args = JSON.parse(rawArgs) ?? {};
    } catch {
        return "Invalid tool arguments.";
    }

    const mod = getToolModules().find((m) => m.definition.function?.name === name);
    if (!mod) return `Unknown tool: ${name}`;
    return mod.handler(args, ctx);
}

export { LIST_BLOG_POSTS_TOOL_NAME } from "./list-blog-posts";
export { GET_BLOG_POST_TOOL_NAME } from "./get-blog-post";
export { LIST_ALL_PROJECTS_TOOL_NAME } from "./list-all-projects";
export { GET_HOW_I_WORK_TOOL_NAME, readHowIWork } from "./get-how-i-work";
export { GET_AVAILABILITY_TOOL_NAME } from "./get-availability";
export { BOOK_MEETING_TOOL_NAME } from "./book-meeting";
export type { ToolContext, ToolModule } from "./types";
