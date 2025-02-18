"use client";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  const skills = [
    "Next.js", "TypeScript", "Tailwind CSS", "React",
    "Node.js", "GraphQL", "PostgreSQL", "Docker",
    "AWS", "Kubernetes", "Python", "Rust"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /about
        </h1>

        <div className="space-y-8 font-mono">
          <article className="border-l-4 border-blue-600 pl-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hi, I'm <span className="font-bold text-blue-600">Your Name</span>, 
              a full-stack developer specializing in modern web technologies. 
              I build performant applications using cutting-edge tools like:
            </p>
            
            <div className="py-4">
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <li 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="border-l-4 border-green-600 pl-6 mt-12">
            <h2 className="text-2xl font-bold mb-4">Development Philosophy</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                • Focus on clean, maintainable architecture
                <span className="text-sm ml-2 text-blue-600">(SOLID principles)</span>
              </p>
              <p>
                • Type-safe development
                <span className="text-sm ml-2 text-blue-600">(TypeScript enthusiast)</span>
              </p>
              <p>
                • Performance-first approach
                <span className="text-sm ml-2 text-blue-600">(Lighthouse 90+ scores)</span>
              </p>
            </div>
          </article>

          <article className="border-l-4 border-purple-600 pl-6 mt-12">
            <h2 className="text-2xl font-bold mb-4">Open Source</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Active contributor to various OSS projects including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Next.js core ecosystem</li>
              <li>TypeScript type definitions</li>
              <li>VSCode extensions</li>
            </ul>
          </article>

          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-mono"
            >
              <span>Explore My Work</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}