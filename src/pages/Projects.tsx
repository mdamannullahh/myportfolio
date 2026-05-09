// FILE: src/pages/Projects.tsx

import { motion } from "framer-motion";

import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    id: 1,

    title: "MotiMate",

    description:
      "MotiMate is an AI-powered productivity and motivation platform designed to help users stay focused, productive, motivated, and mentally strong using intelligent AI assistance and smart productivity tools.",

    tech: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AI",
      "REST API",
    ],

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

    liveDemo:
      "https://play.google.com/store",

    github:
      "https://github.com/mdamannullah",

    aiSummary:
      "MotiMate combines AI assistance, productivity systems, motivational psychology, and modern mobile development into one intelligent ecosystem focused on helping users improve consistency, focus, and personal growth.",

    futureScope:
      "Future plans include voice AI, AI habit tracking, emotion-aware assistant features, cloud synchronization, and advanced productivity analytics.",
  },

  {
    id: 2,

    title: "Mohammad.AI Portfolio",

    description:
      "A next-generation conversational AI portfolio where visitors can interact naturally with Mohammad’s AI assistant, explore projects, skills, education, and receive intelligent follow-up responses in real time.",

    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "AI UX",
      "Vite",
    ],

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",

    liveDemo:
      "#",

    github:
      "https://github.com/mdamannullah",

    aiSummary:
      "This project transforms a traditional portfolio into a conversational AI experience. Instead of static sections, users can ask questions naturally and dynamically explore Mohammad’s work through AI-driven interactions.",

    futureScope:
      "Future updates include real AI API integration, voice conversations, recruiter analytics dashboard, multilingual AI support, and dynamic AI memory.",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            top-[-150px]
            left-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-primary/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-500/20
            blur-3xl
          "
        />
      </div>

      {/* HEADER */}
      <div
        className="
          sticky
          top-0
          z-50
          border-b
          border-border
          bg-background/70
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-4
            py-4
          "
        >
          <button
            onClick={() => navigate("/")}
            className="
              rounded-full
              p-2
              transition-all
              hover:bg-muted
              hover:scale-110
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-2xl font-bold tracking-tight">
            Mohammad{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h1>

          <div className="w-10" />
        </div>
      </div>

      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mb-16
            text-center
          "
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-5
              py-2
              text-sm
              font-medium
              text-primary
            "
          >
            <Sparkles className="h-4 w-4" />
            AI Powered Portfolio Projects
          </div>

          <h2
            className="
              mx-auto
              max-w-5xl
              text-5xl
              font-black
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            Building Intelligent
            <br />
            Digital Experiences 🚀
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            A collection of AI-powered,
            full-stack, productivity-focused,
            and future-ready digital products
            designed to solve real-world
            problems through technology.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-2
          "
        >
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={
                  project.description
                }
                tech={project.tech}
                image={project.image}
                liveDemo={
                  project.liveDemo
                }
                github={project.github}
                index={index}
                aiSummary={
                  project.aiSummary
                }
                futureScope={
                  project.futureScope
                }
              />
            )
          )}
        </div>

        {/* FOOTER CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-20
            rounded-[2rem]
            border
            border-border
            bg-card/60
            p-10
            text-center
            shadow-xl
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold">
            More AI Projects Coming Soon
            ⚡
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-muted-foreground
              leading-relaxed
            "
          >
            Mohammad is actively building
            next-generation AI applications,
            smart productivity systems,
            intelligent automation tools,
            and futuristic digital products.
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "AI Assistant",
              "Smart Productivity",
              "Voice AI",
              "Machine Learning",
              "Automation",
              "Full Stack",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-primary
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}