import Link from "@/components/Shared/Link";
import cx from "classnames";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
  asPath: string;
}

const NavItem = ({ href, children, asPath }: NavItemProps): JSX.Element => {
  return (
    <li>
      <Link
        href={href}
        className={cx(
          "hidden rounded-lg px-3 py-1 text-base text-gray-600 transition duration-200 hover:bg-gray-600 hover:bg-opacity-30 dark:text-gray-500 md:inline-block",
          asPath.split("/")[1] === href.replace("/", "") &&
            "bg-gray-600 bg-opacity-30 font-medium text-gray-900 hover:bg-opacity-40 dark:!text-accent"
        )}
        noGradientUnderline
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
