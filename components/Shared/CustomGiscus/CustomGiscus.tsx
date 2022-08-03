import Giscus from "@giscus/react";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  return (
    <Giscus
      id="comments"
      repo="ealousGx/Portfolio"
      repoId="MDEwOlJlcG9zaXRvcnkyOTE5MTkzOTc="
      category="Comments"
      categoryId="DIC_kwDOEWZWJc4CQmb0"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
