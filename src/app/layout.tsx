"use client";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google"; // Import JetBrains Mono
import { useEffect, useState } from "react";
import { useTheme } from "./lib/theme";

// Configure JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the weights you need
  variable: "--font-jetbrains-mono", // Optional: Define a CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className={theme}>
      <body
        className={`${jetbrainsMono.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {mounted ? children : null} {/* Hide content until hydration is complete */}
      </body>
    </html>
  );
}