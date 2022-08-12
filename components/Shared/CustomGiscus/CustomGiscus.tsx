import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  const { theme } = useTheme();
  return (
    <Giscus
      id="comments"
      repo="JealousGx/Portfolio"
      repoId="MDEwOlJlcG9zaXRvcnkyOTE5MTkzOTc="
      category="Comments"
      categoryId="DIC_kwDOEWZWJc4CQmb0"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
