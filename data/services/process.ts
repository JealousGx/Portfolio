export const PROCESS_STEPS = [
    {
        title: "Discovery call",
        description:
            "I ask questions until the requirement is actually clear. I don't start building against a guess. If something's ambiguous, I'll flag it rather than assume.",
    },
    {
        title: "Scope agreed, work begins",
        description:
            "Once we're aligned on what's being built and why, I start. No scope creep surprises later because we didn't nail this down first.",
    },
    {
        title: "Frequent updates while I build",
        description:
            "You get regular progress updates, even small ones. You shouldn't have to ask where things stand. Core, high-stakes pieces get built carefully, and lower-stakes pieces move fast so we can iterate on real feedback.",
    },
    {
        title: "Launch and handover",
        description:
            "Ship it, and walk you through anything you need to run or extend it yourself.",
    },
] as const;
