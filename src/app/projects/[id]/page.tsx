import { Footer } from "@app/app/components/Footer";
import { Navbar } from "@app/app/components/Navbar";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

// Dummy function simulating data retrieval.
// Replace this with your actual data fetching logic.
async function getProjectById(id) {
  const projects = [
    {
      id: "1",
      title: "Scalable API Platform",
      description: "A high-performance API platform that enhances response times and system reliability by leveraging Ruby on Rails, microservices architecture, and Redis-based queues.",
      techStack: ["Ruby on Rails", "Laravel", "Redis", "Sidekiq", "Jenkins", "GitHub Actions"],
      features: [
        "Optimized API response times",
        "Microservices design",
        "CI/CD integration"
      ],
      github: "https://github.com/yourusername/scalable-api-platform",
      liveDemo: "https://api-platform.example.com",
      duration: "2023 - Present"
    },
    {
      id: "2",
      title: "Unified Data Platform",
      description: "Engineered a data-centric platform that streamlines content delivery and enhances service modularity through GraphQL endpoints and BFF architecture.",
      techStack: ["Node.js", "GraphQL", "React", "Contentful", "Docker"],
      features: [
        "Aggregated data via GraphQL",
        "BFF for optimized data retrieval",
        "Dynamic content management"
      ],
      github: "https://github.com/yourusername/unified-data-platform",
      liveDemo: "https://data-platform.example.com",
      duration: "Aug 2022 - Dec 2022"
    },
    {
      id: "3",
      title: "Cloud Data Operator",
      description: "Implemented a Redis operator within a cloud data ecosystem to optimize processing and improve system responsiveness in high-demand environments.",
      techStack: ["Redis", "Cloud Pak for Data", "Node.js"],
      features: [
        "Optimized data retrieval",
        "Seamless cloud integration",
        "Enhanced system performance"
      ],
      github: "https://github.com/yourusername/cloud-data-operator",
      liveDemo: "https://cloud-operator.example.com",
      duration: "IBM Experience"
    }
  ];
  
  return projects.find((project) => project.id === id);
}

export default async function ProjectDetails({ params }) {
  const project = await getProjectById(params.id);

  if (!project) {
    // You can replace this with a custom 404 component if needed.
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-center font-mono text-xl">Project not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-mono"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        <div className="space-y-12">
          {/* Project Header */}
          <div className="border-l-4 border-blue-600 pl-6">
            <h1 className="text-3xl font-bold font-mono">{project.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 font-mono mt-2">
              {project.duration}
            </p>
          </div>

          {/* Project Description */}
          <div className="border-l-4 border-green-600 pl-6">
            <h2 className="text-xl font-bold mb-4 font-mono">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="border-l-4 border-purple-600 pl-6">
            <h2 className="text-xl font-bold mb-4 font-mono">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center font-mono text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-l-4 border-yellow-600 pl-6">
            <h2 className="text-xl font-bold mb-4 font-mono">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 font-mono">
              {project.features.map((feature, index) => (
                <li 
                  key={index}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="border-l-4 border-red-600 pl-6">
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-mono"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-mono"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
