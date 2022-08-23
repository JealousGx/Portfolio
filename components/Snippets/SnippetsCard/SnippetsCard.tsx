import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { CloudinaryImage } from "contentlayer/generated";

interface SnippetsCardProps {
  slug: string;
  title: string;
  image: CloudinaryImage;
  date: string;
}

const SnippetCard = ({
  slug,
  title,
  image,
  date,
}: SnippetsCardProps): JSX.Element => {
  return (
    <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-gray-300 bg-gray-50 py-4 px-6 transition duration-200 hover:scale-105 hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent">
      <div>
        <Link href={`/snippets/${slug}`} className="flex-col space-y-4">
          <h2 className="text-lg font-semibold transition duration-200 hover:opacity-60">
            {title}
          </h2>
          <p className="text-gray-600 transition duration-200 hover:opacity-60 dark:text-gray-300">
            {date}
          </p>
        </Link>
      </div>
      <Link href={`/snippets/${slug}`} className="aspect-[16/9]">
        <NextImage
          src={image.url}
          height={image.height}
          width={image.width}
          className="rounded-lg drop-shadow-md transition duration-200 hover:opacity-60"
        />
      </Link>
    </article>
  );
};

export default SnippetCard;
