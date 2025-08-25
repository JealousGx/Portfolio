import { GetStaticProps, NextPage } from "next";

import BlogPostCard from "@/components/Blog/BlogPostCard";
import ExternalLink from "@/components/Shared/Link";
import hashnodeData from "@/data/hashnode.json";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog Posts"
        description="Blogs written about tech, nature, my hobbies etc..."
      />
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            placeholderImage={post.placeholderImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            excerpt={post.brief}
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>

      <ExternalLink
        href="https://blog.jealous.dev"
        className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
      >
        <span>View All Blog Posts</span>
      </ExternalLink>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = hashnodeData.posts;

  const allProjectsWithPlaceholerImages = [];

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage);
    allProjectsWithPlaceholerImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { posts: allProjectsWithPlaceholerImages },
  };
};

export default BlogPostsPage;
