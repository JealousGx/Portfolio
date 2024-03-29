import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { format, parseISO } from "date-fns";

interface BlogPostCardProps {
  url: string;
  title: string;
  image: string;
  placeholderImage: string;
  date: string;
  readingTime: string;
  excerpt?: string;
}

const ProjectCard = ({
  url,
  title,
  image,
  placeholderImage,
  date,
  readingTime,
  excerpt,
}: BlogPostCardProps): JSX.Element => {
  return (
    <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-gray-300 bg-gray-50 py-4 px-6 transition duration-200 hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent md:hover:scale-[1.02]">
      <Link href={url} noExternalLinkIcon noGradientUnderline>
        <div className="mt-8 flex-col space-y-4">
          <h2 className="text-lg font-semibold text-black transition duration-200 hover:opacity-60 dark:text-gray-100">
            {title}
          </h2>
          {excerpt && (
            <p
              style={{ wordBreak: "break-word" }}
              className="text-gray-600 dark:text-gray-300"
            >
              {excerpt}
            </p>
          )}
          <p className="text-gray-600 transition duration-200 hover:opacity-60 dark:text-gray-300">
            {format(parseISO(date), "PPP")} / {readingTime}
          </p>
        </div>
      </Link>
      <Link
        href={url}
        className="aspect-[16/9] overflow-hidden rounded-lg drop-shadow-md"
        noExternalLinkIcon
        noGradientUnderline
      >
        <NextImage
          src={image}
          className="rounded-lg transition duration-200 hover:opacity-60"
          height={270}
          width={480}
          alt={title}
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
      </Link>
    </article>
  );
};

export default ProjectCard;
