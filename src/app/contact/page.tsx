import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Terminal, Mail, Github, Linkedin, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /contact
        </h1>

        <div className="space-y-12">
          {/* Terminal-style Contact Card */}
          <div className="border-l-4 border-blue-600 pl-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-blue-600" size={20} />
                <span className="font-mono text-sm text-gray-500">$ contact --developer</span>
              </div>
              
              <div className="space-y-4 font-mono">
                <div className="flex items-center gap-4">
                  <Mail className="text-gray-500" size={18} />
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    nkalampulan@outlook.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="text-gray-500" size={18} />
                  <a
                    href="https://github.com/mail2nisam"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    github.com/mail2nisam
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="text-gray-500" size={18} />
                  <a
                    href="https://linkedin.com/in/nisamudheen-kalampulan"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/nisamudheen-kalampulan
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Calendar className="text-gray-500" size={18} />
                  <a
                    href="https://cal.com/nkalampulan"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Schedule a call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="border-l-4 border-green-600 pl-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-gray-600 dark:text-gray-300">
                Current status: Available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}