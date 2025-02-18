"use client";

import { useState, useEffect } from "react";

export const useTheme = () => {
  // Initialize state with a function to read from localStorage
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Read theme from localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (savedTheme) {
        return savedTheme;
      }
      // Default to system preference if no theme is saved
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    // Fallback to "light" if window is not defined (e.g., during SSR)
    return "light";
  });

  // Save theme to localStorage and apply it to the <html> element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};