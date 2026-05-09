// FILE: src/components/ProjectCard.tsx

import {
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveDemo: string;
  github: string;
  index: number;

  aiSummary?: string;
  futureScope?: string;
}

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  liveDemo,
  index,
  aiSummary,
  futureScope,
}: ProjectCardProps) => {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        transition-all
        hover:scale-[1.02]
        hover:border-primary/40
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-purple-500/10
          pointer-events-none
        "
      />

      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.png"}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* AI Badge */}
        <div
          className="
            absolute
            top-4
            left-4
            flex
            items-center
            gap-2
            rounded-full
            bg-black/60
            backdrop-blur-md
            px-4
            py-2
            text-xs
            font-semibold
            text-white
          "
        >
          <Sparkles className="h-3 w-3" />
          AI Powered
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-5 p-6">

        {/* TITLE */}
        <div>
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-muted-foreground
            "
          >
            {description}
          </p>

          {/* STATUS BADGES */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              Active Development
            </span>

            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
              AI Integrated
            </span>
          </div>
        </div>

        {/* TECH STACK */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-primary
                  backdrop-blur-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* EXPANDABLE AI SECTION */}
        {(aiSummary || futureScope) && (
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-black/10
              p-4
            "
          >
            <button
              onClick={() =>
                setExpanded(!expanded)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                text-left
              "
            >
              <div>
                <h4 className="font-semibold">
                  ✨ Project Intelligence
                </h4>

                <p className="text-xs text-muted-foreground mt-1">
                  Explore architecture, vision & future scope
                </p>
              </div>

              {expanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {expanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                className="pt-4 space-y-4"
              >
                {aiSummary && (
                  <div>
                    <h5 className="font-medium mb-1">
                      💡 AI Summary
                    </h5>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {aiSummary}
                    </p>
                  </div>
                )}

                {futureScope && (
                  <div>
                    <h5 className="font-medium mb-1">
                      🚀 Future Scope
                    </h5>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {futureScope}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* ACTION BUTTONS */}
        {liveDemo && liveDemo !== "#" && (
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                hover:scale-105
                hover:shadow-lg
              "
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};