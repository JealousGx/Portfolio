import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { allProjects, Project } from "contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { GitHubLogo } from "@/components/Shared/Icons";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

interface ProjectPageProps {
  project: Project;
  projectImagePreview: string;
}

const SkillPage: NextPage<ProjectPageProps> = ({
  project,
  projectImagePreview,
}) => {
  const ProjectMDX = useMDXComponent(project.body.code);

  return (
    <>
      <NextSeo
        title={`${project.name}`}
        description={project.description}
        openGraph={{
          url: `https://${process.env.NEXT_PUBLIC_WEBAPP_LINK}/projects/${project.slug}`,
          title: `${project.name}`,
          description: project.description,
          images: [
            {
              url: project.image.url,
              width: project.image.width,
              height: project.image.height,
              alt: project.name,
            },
          ],
        }}
      />
      <div className="mt-8 flex space-x-8">
        <IconFactory
          name={project.iconName}
          className="h-12 w-16 rounded-xl bg-gray-400 p-2 shadow-md dark:bg-tertiary md:h-16"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        {project.link && (
          <Link
            href={project.link}
            className="text-gray-500 dark:text-gray-300"
            noHighlight
          >
            {project.link}
          </Link>
        )}

        {project.githubLink && (
          <Link
            href={project.githubLink}
            className="text-gray-500 dark:text-gray-300"
            icon={<GitHubLogo />}
            noHighlight
          >
            {getGitHubOwnerAndRepoFromLink(project.githubLink)}
          </Link>
        )}
      </div>

      <div className="mt-16 overflow-hidden rounded-xl border-[1px] border-gray-300 p-2 dark:border-tertiary">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          className="rounded-xl"
          placeholder="blur"
          blurDataURL={projectImagePreview}
          alt={project.name}
        />
      </div>

      <article>
        <div className="prose my-12 max-w-full leading-8 text-black dark:text-gray-300">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
        <div className="rounded-xl border-[1px] border-gray-300 p-8 dark:border-tertiary">
          <CustomGiscus term={`project: ${project.name}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(project => project.slug === params.slug);

  const projectImagePreview = await getPreviewImageUrl(project.image.url);

  return {
    props: {
      project,
      projectImagePreview,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map(project => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
