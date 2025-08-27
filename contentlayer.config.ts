import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";

import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

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
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/**/*.mdx",
  contentType: "mdx",
  fields: {
    shortTitle: {
      type: "string",
      description: "The short title of the snippet",
      required: true,
    },
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
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    dateUpdated: {
      type: "string",
      resolve: () => new Date().toDateString(),
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/g).length,
    },
  },
}));

const Testimonial = defineNestedType(() => ({
  name: "Testimonial",
  fields: {
    id: { type: "string", required: true },
    name: { type: "string", required: true },
    role: { type: "string", required: true },
    testimonial: { type: "string", required: true },
    avatar: { type: "string", required: true },
    dateAdded: { type: "string", required: true },
    rating: { type: "number", required: true },
    project: { type: "string", required: true },
  },
}));

export const Testimonials = defineDocumentType(() => ({
  name: "Testimonials",
  filePathPattern: "testimonial.json",
  contentType: "data",
  isSingleton: true,
  fields: {
    testimonials: {
      type: "list",
      of: Testimonial,
      required: true,
    },
  },
}));

const Skill = defineNestedType(() => ({
  name: "Skill",
  fields: {
    id: { type: "number", required: true },
    name: { type: "string", required: true },
    slug: { type: "string", required: true },
    iconSVG: { type: "string", required: true },
  },
}));

const ProjectProvider = defineNestedType(() => ({
  name: "ProjectProvider",
  fields: {
    id: { type: "number", required: true },
    name: { type: "string", required: true },
    slug: { type: "string", required: true },
  },
}));

export const KProvider = defineDocumentType(() => ({
  name: "KProvider",
  filePathPattern: "kprovider.json",
  contentType: "data",
  isSingleton: true,
  fields: {
    skills: {
      type: "list",
      of: Skill,
      required: true,
    },
    projects: {
      type: "list",
      of: ProjectProvider,
      required: true,
    },
  },
}));

const ReadingTime = defineNestedType(() => ({
  name: "ReadingTime",
  fields: {
    text: { type: "string", required: true },
    minutes: { type: "number", required: true },
    time: { type: "number", required: true },
    words: { type: "number", required: true },
  },
}));

export const HashnodePost = defineDocumentType(() => ({
  name: "HashnodePost",
  filePathPattern: "hashnode.json",
  contentType: "data",
  isSingleton: true,
  fields: {
    domain: { type: "string", required: true },
    posts: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Post",
        fields: {
          id: { type: "string", required: true },
          title: { type: "string", required: true },
          slug: { type: "string", required: true },
          brief: { type: "string", required: true },
          readTimeInMinutes: { type: "number", required: true },
          _id: { type: "string", required: true },
          readingTime: { type: "nested", of: ReadingTime, required: true },
          wordCount: { type: "number", required: true },
          coverImage: { type: "string", required: true },
          dateAdded: { type: "string", required: true },
        },
      })),
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [
    Project,
    Snippet,
    Testimonials,
    KProvider,
    HashnodePost,
  ],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
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