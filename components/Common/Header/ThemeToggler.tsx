import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import IconFactory from "@/components/Shared/Icons/IconFactory";

const CLASSNAMES =
  "rounded-lg transition linear duration-200 p-2 hover:ring-2 hover:ring-gray-300";

const ThemeToggler = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  if (currentTheme === "dark") {
    return (
      <div
        className={`bg-gray-600 bg-opacity-40 ${CLASSNAMES}`}
        onClick={() => setTheme("light")}
      >
        <IconFactory name="light" />
      </div>
    );
  } else {
    return (
      <div
        className={`bg-gray-200 ${CLASSNAMES}`}
        onClick={() => setTheme("dark")}
      >
        <IconFactory name="dark" />
      </div>
    );
  }
};

export default ThemeToggler;
