import Link from "@/components/Shared/Link";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import React, { cloneElement, useRef } from "react";

const CodeBlock = props => {
  const codeRef = useRef<HTMLElement>(null);

  return (
    <div style={{ position: "relative", overflow: "auto" }}>
      <pre {...props}>
        {React.isValidElement(props.children)
          ? cloneElement(props.children, { ref: codeRef })
          : props.children}
      </pre>
    </div>
  );
};

const BlogImage = props => {
  return <Image {...props} alt="Blog post image" className="my-8 rounded-md" />;
};

const BlogLink = props => {
  return <Link {...props} className="text-blue-400 hover:text-blue-300" />;
};

const CustomMDXComponents: MDXComponents = {
  a: BlogLink,
  pre: CodeBlock,
  img: BlogImage,
};
export default CustomMDXComponents;
