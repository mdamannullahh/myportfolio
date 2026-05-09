import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Award,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { education } from "@/data/portfolioData";

import { TypingEffect } from "@/components/TypingEffect";

import { useState } from "react";

export default function ChatEducation() {
  const navigate = useNavigate();

  const [showCards, setShowCards] =
    useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-muted transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl font-bold">
            Education
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
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-10 space-y-8">
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
              🎓 Academic Journey
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Education &
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Certifications
              </span>
            </h1>

            <div className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              <TypingEffect
                text="A journey focused on Artificial Intelligence, full-stack engineering, continuous learning, and building future-ready technology skills 🚀"
                speed={18}
                onComplete={() =>
                  setShowCards(true)
                }
              />
            </div>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full border border-border bg-card">
                🤖 AI & ML
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                💻 Full Stack
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                📚 Continuous Learning
              </div>

              <div className="px-4 py-2 rounded-full border border-border bg-card">
                🚀 Future Engineer
              </div>
            </div>
          </div>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        {showCards && (
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map(
                (edu, index) => (
                  <motion.div
                    key={`${edu.id}-${index}`}
                    initial={{
                      opacity: 0,
                      x: -40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.18,
                    }}
                    className="relative md:pl-16"
                  >
                    {/* timeline icon */}
                    <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 rounded-2xl items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg">
                      {edu.type ===
                      "degree" ? (
                        <GraduationCap className="w-5 h-5 text-white" />
                      ) : (
                        <Award className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* CARD */}
                    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.015] transition-all duration-300">
                      {/* glow hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-500/5 to-cyan-500/5" />

                      <div className="relative z-10">
                        {/* TOP */}
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {edu.type ===
                              "degree" ? (
                                <>
                                  <BrainCircuit className="w-3 h-3" />
                                  Degree
                                </>
                              ) : (
                                <>
                                  <Sparkles className="w-3 h-3" />
                                  Certification
                                </>
                              )}
                            </div>

                            <h2 className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                              {edu.title}
                            </h2>

                            <p className="mt-2 text-lg font-semibold text-primary">
                              {
                                edu.institution
                              }
                            </p>
                          </div>

                          {/* PERIOD */}
                          <div className="rounded-2xl border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground">
                            {edu.period}
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="mt-6 leading-relaxed text-muted-foreground">
                          {
                            edu.description
                          }
                        </p>

                        {/* FOOTER */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          {edu.grade && (
                            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500 border border-green-500/20">
                              🎯 {edu.grade}
                            </div>
                          )}

                          {edu.period.includes(
                            "currently"
                          ) && (
                            <div className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 border border-indigo-500/20">
                              🚀 Currently Pursuing
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}