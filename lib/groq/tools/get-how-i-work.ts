import fs from "fs";
import path from "path";

import type { ToolModule } from "./types";

export const GET_HOW_I_WORK_TOOL_NAME = "get_how_i_work";

export function readHowIWork() {
    try {
        return fs.readFileSync(path.join(process.cwd(), "data", "how-i-work.md"), "utf-8").trim();
    } catch {
        return "No process details available — suggest emailing directly.";
    }
}

export const getHowIWorkTool: ToolModule = {
    definition: {
        type: "function",
        function: {
            name: GET_HOW_I_WORK_TOOL_NAME,
            description: "Fetch details on how Abdul Mateen works: his process, scoping, communication style, and project examples.",
            parameters: { type: "object", properties: {}, required: [] },
        },
    },
    handler: async () => readHowIWork(),
};
