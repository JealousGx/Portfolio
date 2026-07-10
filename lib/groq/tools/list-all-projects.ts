import { DATA } from "@/data/resume";

import { formatProjects } from "../format";
import type { ToolModule } from "./types";

export const LIST_ALL_PROJECTS_TOOL_NAME = "list_all_projects";

export const listAllProjectsTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: LIST_ALL_PROJECTS_TOOL_NAME,
            description:
                "List ALL of Abdul Mateen's projects, not just the featured ones already listed in your context. Call this when a visitor asks to see more projects, older work, or 'what else have you built'.",
            parameters: { type: "object", properties: {}, required: [] },
        },
    },
    handler: async () => formatProjects(DATA.projects),
};
