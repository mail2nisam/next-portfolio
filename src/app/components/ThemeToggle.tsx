"use client";

import { useTheme } from "../lib/theme";



export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};