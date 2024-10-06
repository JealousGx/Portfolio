import Link from "@/components/Shared/Link";

interface SnippetsCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const SnippetCard = ({
  slug,
  title,
  description,
  date,
}: SnippetsCardProps): JSX.Element => {
  return (
    <article className="w-full">
      <Link href={`/snippets/${slug}`} className="flex-col space-y-2">
        <h2 className="text-lg font-semibold transition duration-200 hover:opacity-60">
          {title}
        </h2>
        <p className="text-gray-600 transition duration-200 hover:opacity-60 dark:text-gray-300">
          {description}
        </p>
        <p className="text-gray-600 transition duration-200 hover:opacity-60 dark:text-gray-300">
          {date}
        </p>
      </Link>
    </article>
  );
};

export default SnippetCard;
