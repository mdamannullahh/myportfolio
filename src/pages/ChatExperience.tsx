// FILE: src/pages/ChatExperience.tsx

import { motion } from "framer-motion";

import {
  ArrowLeft,
  Brain,
  Rocket,
  Sparkles,
  GraduationCap,
  Target,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { TypingEffect } from "@/components/TypingEffect";

export default function ChatExperience() {
  const navigate = useNavigate();

  const growthAreas = [
    {
      title: "AI & Machine Learning",
      desc: "Learning and building intelligent systems using modern AI technologies and practical implementations.",
      icon: Brain,
      color:
        "from-indigo-500 to-cyan-500",
    },

    {
      title: "Full-Stack Development",
      desc: "Developing scalable web applications and interactive digital experiences.",
      icon: Rocket,
      color:
        "from-emerald-500 to-teal-500",
    },

    {
      title: "Problem Solving",
      desc: "Focused on solving real-world problems through innovative software solutions.",
      icon: Target,
      color:
        "from-orange-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* HEADER */}
      <div
        className="
          sticky
          top-0
          z-10
          border-b
          border-border
          bg-background/80
          backdrop-blur-lg
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            px-4
            py-4
            flex
            items-center
            justify-between
          "
        >
          <button
            onClick={() => navigate("/")}
            className="
              p-2
              rounded-full
              hover:bg-muted
              transition-colors
            "
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-lg font-semibold">
            Experience
          </h1>

          <div className="flex items-center gap-2">
            <div
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
                animate-pulse
              "
            />

            <span className="text-sm text-muted-foreground">
              AI Active
            </span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div
        className="
          flex-1
          max-w-5xl
          mx-auto
          w-full
          px-4
          py-10
          space-y-8
        "
      >

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
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-border
            bg-gradient-to-br
            from-indigo-500/10
            via-background
            to-cyan-500/10
            p-8
            shadow-2xl
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              opacity-20
              blur-3xl
              bg-indigo-500
            "
          />

          <div className="relative z-10">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-500/20
                bg-indigo-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-indigo-400
                mb-6
              "
            >
              <Sparkles className="w-4 h-4" />
              Career Growth Journey
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
              "
            >
              Building My
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
                Future in AI
              </span>
            </h1>

            {/* Typing */}
            <div className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <TypingEffect
                text="🚀 Currently a fresher focused on learning, building real-world AI projects, and growing into an industry-ready AI/ML Engineer & Full-Stack Developer."
                speed={18}
              />
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-card/60
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <p className="text-2xl font-black">
                  AI
                </p>

                <p className="text-sm text-muted-foreground">
                  Focused Learning
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-card/60
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <p className="text-2xl font-black">
                  Full Stack
                </p>

                <p className="text-sm text-muted-foreground">
                  Development Journey
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-card/60
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <p className="text-2xl font-black">
                  Real World
                </p>

                <p className="text-sm text-muted-foreground">
                  Problem Solving
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* JOURNEY */}
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
            delay: 0.2,
          }}
          className="
            rounded-3xl
            border
            border-border
            bg-card
            p-8
            shadow-xl
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="
                p-3
                rounded-2xl
                bg-primary
              "
            >
              <GraduationCap
                className="
                  w-6
                  h-6
                  text-primary-foreground
                "
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Current Journey
              </h2>

              <p className="text-muted-foreground">
                Learning, experimenting and building continuously.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am currently pursuing Computer Science Engineering
              with specialization in Artificial Intelligence &
              Machine Learning while actively building modern AI
              applications and full-stack projects.
            </p>

            <p>
              My focus is on combining intelligent systems with
              beautiful user experiences to create impactful digital
              products for real-world use cases.
            </p>

            <p>
              Alongside academics, I continuously explore modern
              technologies including AI agents, automation systems,
              cloud technologies, and scalable architectures.
            </p>
          </div>
        </motion.div>

        {/* GROWTH AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {growthAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-6
                  shadow-lg
                  hover:scale-[1.02]
                  transition-all
                "
              >
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-10
                    bg-gradient-to-br
                    ${item.color}
                  `}
                />

                <div className="relative z-10">
                  <div
                    className={`
                      inline-flex
                      p-4
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.color}
                      text-white
                      mb-5
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
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
            rounded-3xl
            border
            border-border
            bg-card
            p-8
            text-center
            shadow-xl
          "
        >
          <h2 className="text-2xl font-bold">
            🚀 Open to Opportunities
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Looking forward to internships, collaborations,
            AI/ML opportunities, and innovative projects that
            contribute to meaningful technological solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}