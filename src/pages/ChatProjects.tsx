import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { aiProjects } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";

type Category = "ai" | null;

export default function ChatProjects() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState<Category>(null);

  const [showButtons, setShowButtons] =
    useState(true);

  const getFilteredProjects = () => {
    return aiProjects;
  };

  const getCategoryTitle = () => {
    return "AI Projects";
  };

  const getCategoryEmoji = () => {
    return "🚀";
  };

  const handleCategoryClick = (
    cat: Category
  ) => {
    setActiveCategory(cat);

    setShowButtons(false);

    setTimeout(() => {
      setShowButtons(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-muted transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl font-bold">
            Mohammad Projects
          </h1>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-muted-foreground">
              AI Active
            </span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-10 space-y-10">
        {/* HERO */}
        {!activeCategory && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-indigo-500/10 via-background to-cyan-500/10 p-8 md:p-12 shadow-2xl"
          >
            {/* glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                🤖 AI Powered Portfolio
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
                Intelligent
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Project Showcase
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Explore AI systems, modern full-stack applications,
                productivity tools, and futuristic digital experiences
                built by Mohammad Amannullah 🚀
              </p>

              {/* TAGS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-card border border-border">
                  🚀 Full Stack
                </div>

                <div className="px-4 py-2 rounded-full bg-card border border-border">
                  🧠 AI Systems
                </div>

                <div className="px-4 py-2 rounded-full bg-card border border-border">
                  📱 Mobile Apps
                </div>

                <div className="px-4 py-2 rounded-full bg-card border border-border">
                  ⚡ Real World Projects
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* BUTTONS */}
        {showButtons && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex justify-center"
          >
            <button
              onClick={() =>
                handleCategoryClick("ai")
              }
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">
                🚀 Explore AI Projects
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
            </button>
          </motion.div>
        )}

        {/* PROJECT SECTION */}
        {activeCategory && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-xl"
            >
              <h2 className="text-3xl font-black flex items-center gap-3">
                <span>
                  {getCategoryEmoji()}
                </span>

                <span>
                  {getCategoryTitle()}
                </span>
              </h2>

              <p className="mt-3 text-muted-foreground">
                These are futuristic projects focused on AI,
                productivity, smart learning systems,
                automation, and intelligent digital experiences.
              </p>
            </motion.div>

            {/* PROJECT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {getFilteredProjects().map(
                (project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={
                        project.description
                      }
                      tech={project.tech}
                      image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop"
                      liveDemo="#"
                      github="#"
                      index={index}
                    />
                  </motion.div>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}