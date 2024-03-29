import Link from "@/components/Shared/Link";
import { NextSeo } from "next-seo";

function Error({ statusCode }) {
  return (
    <div className="my-16 flex flex-col items-center justify-center">
      <NextSeo
        title={
          statusCode && statusCode === 404
            ? "404 - Page Not Found"
            : "Server Error"
        }
      />
      {statusCode ? (
        <h1 className="text-center text-6xl font-bold">
          {statusCode}
          {statusCode === 404
            ? " Page Not Found"
            : statusCode === 500
            ? " Server Error"
            : ""}
        </h1>
      ) : (
        <h1 className="text-center text-6xl font-bold">
          A client side error occured.
        </h1>
      )}
      <Link
        noHighlight
        noExternalLinkIcon
        noGradientUnderline
        href="/"
        className="my-16 rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent"
      >
        Go Home
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
