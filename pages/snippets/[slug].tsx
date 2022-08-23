import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import { allSnippets, Snippet } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";

import AvatarJPG from "public/static/images/avatar.jpeg";
import { NextSeo } from "next-seo";

interface SnippetPageProps {
  snippet: Snippet;
}

const SnippetPage: NextPage<SnippetPageProps> = ({ snippet }) => {
  const ProjectMDX = useMDXComponent(snippet.body.code);

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <h1 className="mb-16 mt-8 text-4xl font-bold">{snippet.title}</h1>

      <div className="overflow-hidden rounded-xl">
        <NextImage
          width={snippet.image.width}
          height={snippet.image.height}
          src={snippet.image.url}
          className="rounded-xl drop-shadow-md"
        />
      </div>

      <div className="my-16 flex justify-between rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 text-gray-600 hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:text-gray-300 dark:hover:border-accent">
        <div className="mt-1 flex items-center space-x-2">
          <div className="mr-1 mt-1">
            <NextImage
              src={AvatarJPG}
              placeholder="blur"
              height={32}
              width={32}
              className="rounded-full"
            />
          </div>
          <p>Matt</p>
          <span aria-hidden>/</span>
          <p>{snippet.date}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p>{snippet.wordCount} words</p>
          <span aria-hidden>/</span>
          <p>{snippet.readingTime.text}</p>
        </div>
      </div>

      <article>
        <div className="prose leading-8">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
        <div className="my-8 h-1 w-full rounded-full bg-gray-50 dark:bg-secondary" />
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`blog post: ${snippet.title}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = allSnippets.find(snippet => snippet.slug === params.slug);

  return {
    props: {
      snippet,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allSnippets.map(snippet => ({
    params: { slug: snippet.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SnippetPage;
