import { NextPage } from "next";
import Giscus from "@giscus/react";
import { NextSeo } from "next-seo";

const GuestBookPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Guestbook | Matt"
        description="Leave messages on my portfolio site's guestbook :)"
      />
      <h1 className="text-3xl font-bold">GuestBook</h1>
      <p className="mt-4 text-gray-300">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
          id="comments"
          repo="JealousGx/Portfolio"
          repoId="MDEwOlJlcG9zaXRvcnkyOTE5MTkzOTc="
          category="Comments"
          categoryId="DIC_kwDOEWZWJc4CQmb0"
          mapping="specific"
          term="GuestBook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GuestBookPage;
