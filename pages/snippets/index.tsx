import { GetStaticProps, NextPage } from "next";

import { allSnippets, Snippet } from "contentlayer/generated";
import SnippetCard from "@/components/Snippets/SnippetsCard";
import { NextSeo } from "next-seo";

interface SnippetsPageProps {
  snippets: Snippet[];
}

const SnippetsPage: NextPage<SnippetsPageProps> = ({ snippets }) => {
  return (
    <>
      <NextSeo
        title="Code Snippets"
        description="Code Snippets are a great way to share code that you have written and want to share with others. This is one of the platforms that I use to share code."
      />
      <h1 className="mb-8 text-2xl font-bold">Code Snippets</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {snippets.map(snippet => (
          <SnippetCard
            key={snippet._id}
            title={snippet.title}
            image={snippet.image}
            slug={snippet.slug}
            date={snippet.date}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = allSnippets;

  return {
    props: {
      snippets,
    },
  };
};

export default SnippetsPage;
