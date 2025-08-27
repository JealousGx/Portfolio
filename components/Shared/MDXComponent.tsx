"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";

import MDXComponents from "@/components/Common/MDXComponents";

export const MDXComponent = ({ code }: { code: string }) => {
    const MDX = useMDXComponent(code);

    return <MDX components={{ ...MDXComponents }} />
}