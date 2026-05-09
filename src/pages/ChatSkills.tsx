import { motion } from "framer-motion";

import {
  ArrowLeft,
  Code,
  Database,
  Brain,
  Wrench,
  Users,
  Sparkles,
  Cpu,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { skills } from "@/data/portfolioData";

import { TypingEffect } from "@/components/TypingEffect";

/* ---------------------------------------------------
   DEVICON MAP
--------------------------------------------------- */

function techToDeviconClass(raw: string) {
  const t = raw.trim().toLowerCase();

  const map: Record<string, string> = {
    html: "devicon-html5-plain",
    html5: "devicon-html5-plain",

    css: "devicon-css3-plain",
    css3: "devicon-css3-plain",

    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",

    typescript: "devicon-typescript-plain",

    react: "devicon-react-original",

    nextjs: "devicon-nextjs-original",
    "next.js": "devicon-nextjs-original",

    nodejs: "devicon-nodejs-plain",
    "node.js": "devicon-nodejs-plain",

    express: "devicon-express-original",

    python: "devicon-python-plain",

    tensorflow: "devicon-tensorflow-original",

    pytorch: "devicon-pytorch-original",

    mongodb: "devicon-mongodb-plain",

    postgresql: "devicon-postgresql-plain",

    mysql: "devicon-mysql-plain",

    docker: "devicon-docker-plain",

    git: "devicon-git-plain",

    github: "devicon-github-original",

    firebase: "devicon-firebase-plain",

    vercel: "devicon-vercel-original",

    java: "devicon-java-plain",

    c: "devicon-c-plain",

    "c++": "devicon-cplusplus-plain",

    tailwindcss:
      "devicon-tailwindcss-plain",

    tailwind:
      "devicon-tailwindcss-plain",
  };

  return map[t] || "";
}

/* ---------------------------------------------------
   COMPONENT
--------------------------------------------------- */

export default function ChatSkills() {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title:
        "Programming Languages",

      items: skills.programming,

      icon: Code,

      gradient:
        "from-blue-500 to-cyan-500",

      description:
        "Core programming foundations for building scalable applications.",
    },

    {
      title:
        "Web Development",

      items: skills.webDev,

      icon: Cpu,

      gradient:
        "from-green-500 to-emerald-500",

      description:
        "Modern frontend and backend technologies for full-stack development.",
    },

    {
      title:
        "AI & Machine Learning",

      items: skills.aiMl,

      icon: Brain,

      gradient:
        "from-purple-500 to-pink-500",

      description:
        "Artificial intelligence frameworks and machine learning ecosystems.",
    },

    {
      title: "Databases",

      items: skills.databases,

      icon: Database,

      gradient:
        "from-orange-500 to-yellow-500",

      description:
        "Database systems for scalable and reliable data management.",
    },

    {
      title:
        "Tools & Platforms",

      items: skills.tools,

      icon: Wrench,

      gradient:
        "from-red-500 to-rose-500",

      description:
        "Development tools, cloud services, and deployment platforms.",
    },

    {
      title: "Soft Skills",

      items: skills.soft,

      icon: Users,

      gradient:
        "from-indigo-500 to-violet-500",

      description:
        "Communication, leadership, collaboration, and problem-solving abilities.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() =>
              navigate("/")
            }
            className="p-2 rounded-full hover:bg-muted transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl font-bold">
            Skills
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
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-indigo-500/10 via-background to-cyan-500/10 p-8 md:p-12 shadow-2xl"
        >
          {/* glow */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
              ⚡ Technology Stack
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Skills &
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Expertise
              </span>
            </h1>

            <div className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              <TypingEffect
                text="Building modern AI-powered applications with full-stack engineering, intelligent systems, scalable architectures, and futuristic digital experiences 🚀"
                speed={18}
              />
            </div>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full border border-border bg-card">
                🤖 AI Engineer
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                💻 Full Stack
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                ⚡ Problem Solver
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                🚀 Future Builder
              </div>
            </div>
          </div>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(
            (category, index) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-500/5 to-cyan-500/5" />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-black leading-tight">
                        {
                          category.title
                        }
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {
                          category.description
                        }
                      </p>
                    </div>
                  </div>

                  {/* SKILLS */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {category.items.map(
                      (skill) => {
                        const cls =
                          techToDeviconClass(
                            skill
                          );

                        return (
                          <motion.div
                            whileHover={{
                              scale: 1.08,
                            }}
                            key={skill}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-sm hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
                          >
                            {cls ? (
                              <i
                                className={`${cls} colored text-lg`}
                              />
                            ) : (
                              <Sparkles className="w-4 h-4 text-indigo-400" />
                            )}

                            <span className="text-sm font-medium">
                              {skill}
                            </span>
                          </motion.div>
                        );
                      }
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}