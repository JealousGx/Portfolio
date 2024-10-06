import type { GetStaticProps, NextPage } from "next";
import React from "react";

import BlogPosts from "@/components/Home/BlogPosts";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Testimonials from "@/components/Home/Testimonials";

import hashnodeData from "@/data/hashnode.json";
import skills from "@/data/skills";
import testimonialsData from "@/data/testimonial.json";

import Skills from "@/components/Home/Skills";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";

interface HomePageProps {
  blogPosts: HashnodePostWithPlaceHolderImage[];
}

const HomePage: NextPage<HomePageProps> = ({ blogPosts }) => {
  return (
    <React.Fragment>
      <Hero />
      <Skills skills={skills} />
      <Projects />
      <BlogPosts posts={blogPosts} domain={hashnodeData.domain} />
      <Testimonials testimonials={testimonialsData.testimonials} />
    </React.Fragment>
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
    props: { blogPosts: allProjectsWithPlaceholerImages },
  };
};

export default HomePage;
