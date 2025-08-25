import axios from "axios";
import fs from "fs";
import readingTime from "reading-time";

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://gql.hashnode.com/";
const HASHNODE_PUBLICATION = "blog.jealous.dev";

const main = async () => {
  const query = `query Publication($host: String, $page: Int!, $pageSize: Int!) {
  publication(host: $host) {
    postsViaPage(pageSize: $pageSize, page: $page) {
      nodes {
        id
        title
        slug
        brief
        coverImage {
          url
        }
        publishedAt
        content {
          markdown
        }
        readTimeInMinutes
      }
    }
  }
}
`;

  const posts = [];
  let domain: string;
  let didNotGetData = true;

  for (let page = 1; didNotGetData; page++) {
    const res = await axios.post(
      HASHNODE_API_URL,
      JSON.stringify({
        query,
        variables: {
          host: HASHNODE_PUBLICATION,
          page,
          pageSize: 10,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const {
      data: { data },
    } = res;

    if (res.data.errors) {
      console.log("response error: ", res.data.errors[0])
      return;
    }

    if (data.publication.postsViaPage.nodes.length === 0) {
      domain = HASHNODE_PUBLICATION;
      didNotGetData = false;
      break;
    } else {
      posts.push(...data.publication.postsViaPage.nodes);
    }
  }

  const parsedPosts = posts.map(post => {
    const { content, coverImage, publishedAt, ...postWithoutContent } = post;
    const rTime = readingTime(content.markdown);
    const wordCount = content.markdown.split(/\s+/g).length;
    return {
      ...postWithoutContent,
      _id: postWithoutContent.id,
      readingTime: rTime,
      wordCount,
      coverImage: coverImage.url,
      dateAdded: publishedAt,
    };
  });

  fs.writeFileSync(
    HASHNODE_DATA_FILE_PATH,
    JSON.stringify({ posts: parsedPosts, domain }),
  );
};

main();
