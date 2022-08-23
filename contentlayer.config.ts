import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";

export const CloudinaryImage = defineNestedType(() => ({
  name: "CloudinaryImage",
  displayName: "Cloudinary Image",
  fields: {
    height: {
      type: "number",
      description: "Height of the image",
      required: true,
    },
    width: {
      type: "number",
      description: "Width of the image",
      required: true,
    },
    url: {
      type: "string",
      description: "URL of the image",
      required: true,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the project",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true,
    },
    link: {
      type: "string",
      description: "The link to the project's page",
      required: false,
    },
    githubLink: {
      type: "string",
      description: "The link to the project's github page",
      required: false,
    },
    iconName: {
      type: "string",
      description: "The name of the icon to use",
      required: true,
    },
    image: {
      type: "nested",
      description: "Image for the project",
      of: CloudinaryImage,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the snippet",
      required: true,
    },
    date: {
      type: "string",
      description: "The date of the snippet",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the snippet",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The tags of the snippet",
      required: true,
    },
    sourceCode: {
      type: "string",
      description: "The source code of the snippet",
      required: false,
    },
    demo: {
      type: "string",
      description: "The live demo of the snippet",
      required: true,
    },
    cannonicalURL: {
      type: "string",
      description: "The link to the snippet",
      required: false,
    },
    image: {
      type: "nested",
      description: "Image for the snippet",
      of: CloudinaryImage,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    dateUpdated: {
      type: "string",
      resolve: () => new Date().toDateString(),
    },
    readingTime: {
      type: "json",
      resolve: doc => readingTime(doc.body.raw),
    },
    wordCount: {
      type: "number",
      resolve: doc => doc.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Project, Snippet],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: "anchor",
          },
        },
      ],
    ],
  },
});
