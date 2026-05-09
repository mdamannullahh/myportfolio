// FILE: src/components/Footer.tsx

import {
  Heart,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-background/95
        backdrop-blur-xl
      "
    >
      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          blur-3xl
          bg-gradient-to-r
          from-indigo-500/20
          via-transparent
          to-cyan-500/20
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3 text-center md:text-left"
          >
            <h2
              className="
                text-2xl
                font-black
                tracking-tight
              "
            >
              Mohammad
              <span
                className="
                  bg-gradient-to-r
                  from-indigo-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Amannullah
              </span>
            </h2>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Building intelligent digital experiences using AI,
              full-stack development, and modern technologies.
            </p>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-2
                text-xs
                font-medium
                text-emerald-400
              "
            >
              🚀 Open for collaborations & opportunities
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammad-amannullah-5233b037b"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-border
                bg-card
                transition-all
                hover:scale-110
                hover:border-blue-500/40
              "
            >
              <Linkedin className="h-5 w-5 group-hover:text-blue-400" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mdamannullah"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-border
                bg-card
                transition-all
                hover:scale-110
                hover:border-white/40
              "
            >
              <Github className="h-5 w-5 group-hover:text-zinc-400" />
            </a>

            {/* Email */}
            <a
              href="mailto:info.mohmdam@gmail.com"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-border
                bg-card
                transition-all
                hover:scale-110
                hover:border-red-500/40
              "
            >
              <Mail className="h-5 w-5 group-hover:text-red-400" />
            </a>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-border" />

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-sm
            text-muted-foreground
          "
        >

          {/* COPYRIGHT */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>
              Designed & Engineered with AI Vision • 2025
            </span>
          </div>

          {/* MADE WITH */}
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            Made with

            <Heart
              className="
                h-4
                w-4
                fill-red-500
                text-red-500
                animate-pulse
              "
            />

            using React, AI & futuristic engineering
          </div>

          {/* PORTFOLIO TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              border
              border-indigo-500/20
              bg-indigo-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-indigo-400
            "
          >
            Interactive AI Portfolio
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};