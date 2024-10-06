import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import IconFactory from "@/components/Shared/Icons/IconFactory";
import Tooltip from "@/components/Shared/Tooltip";

const CLASSNAMES =
  "rounded-lg transition cursor-pointer linear duration-200 p-2 hover:ring-2 hover:ring-gray-300";

const ThemeToggler = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  if (isDarkTheme) {
    return (
      <Tooltip content="Toggle theme">
        <div
          className={`bg-gray-600 bg-opacity-40 ${CLASSNAMES}`}
          onClick={() => setTheme("light")}
        >
          <IconFactory name="light" />
        </div>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip content="Toggle theme">
        <div
          className={`bg-gray-200 ${CLASSNAMES}`}
          onClick={() => setTheme("dark")}
        >
          <IconFactory name="dark" />
        </div>
      </Tooltip>
    );
  }
};

export default ThemeToggler;
