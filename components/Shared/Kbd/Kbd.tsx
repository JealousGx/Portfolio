import cx from "classnames";
import { ReactNode } from "react";

interface KbdProps {
  children: ReactNode;
  className?: string;
}

const Kbd = ({ children, className }: KbdProps): JSX.Element => {
  return (
    <>
      <kbd
        className={cx(
          "rounded-md border-[1px] border-b-2 border-gray-400 bg-gray-300 px-2 py-0.5 text-sm dark:border-[#4a4a4a] dark:bg-[#333333]",
          className
        )}
      >
        {children}
      </kbd>
    </>
  );
};

export default Kbd;
