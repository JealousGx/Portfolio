import Link from "@/components/Shared/Link";

const ITEM_CLASSNAMES =
  "cursor-pointer capitalize text-gray-600 transition hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-600";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-2  px-8 text-center">
      <hr className="border-1 mb-8 w-full border-gray-300 dark:border-gray-800" />
      <div className="flex w-full flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>home</span>
          </Link>
          <Link href="/blog" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>blogs</span>
          </Link>
          <Link href="/projects" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>projects</span>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Link
            href="https://github.com/JealousGx"
            noGradientUnderline
            noHighlight
            noExternalLinkIcon
          >
            <span className={ITEM_CLASSNAMES}>GitHub</span>
          </Link>
          <Link
            href="https://twitter.com/JealousGx"
            noGradientUnderline
            noHighlight
            noExternalLinkIcon
          >
            <span className={ITEM_CLASSNAMES}>Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdul-mateen-khilji-8a743217b/"
            noGradientUnderline
            noHighlight
            noExternalLinkIcon
          >
            <span className={ITEM_CLASSNAMES}>LinkedIn</span>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Link href="/guestbook" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>Guestbook</span>
          </Link>
          <Link href="/snippets" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>snippets</span>
          </Link>
          <Link href="/sitemap.xml" noGradientUnderline noHighlight>
            <span className={ITEM_CLASSNAMES}>Sitemap</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
