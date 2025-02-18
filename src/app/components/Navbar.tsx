"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/"); // Redirect to the home page
  };
  return (
    <nav className="p-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={handleHomeRedirect}
        >
          n.kalampulan
        </h1>
        <ul className="flex space-x-6 items-center">
        <li>
            <Link href="/skills" className="hover:text-gray-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};
