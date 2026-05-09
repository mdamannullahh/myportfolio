import { motion } from "framer-motion";
import {
  ArrowLeft,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { contact } from "@/data/portfolioData";
import { TypingEffect } from "@/components/TypingEffect";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

const colorMap = {
  linkedin:
    "from-blue-600 to-blue-500",

  github:
    "from-zinc-800 to-zinc-700",

  twitter:
    "from-sky-500 to-cyan-400",

  instagram:
    "from-pink-500 via-purple-500 to-orange-400",

  mail:
    "from-red-500 to-rose-500",

  phone:
    "from-green-500 to-emerald-500",
};

export default function ChatContact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() =>
              navigate("/")
            }
            className="p-2 hover:bg-muted rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-lg md:text-xl font-bold">
            Contact Hub
          </h1>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-muted-foreground">
              AI Active
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
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
          {/* Glow */}
          <div className="absolute inset-0 opacity-20 blur-3xl bg-indigo-500" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-sm mb-6">
              <Sparkles className="w-4 h-4" />

              AI Powered Networking
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Let's
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Connect
              </span>
            </h1>

            <div className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <TypingEffect
                text="Connect with Mohammad for collaborations, AI projects, internships, freelance opportunities, startup discussions, or innovative tech ideas 🚀"
                speed={15}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-card border border-border">
                🚀 AI Developer
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                💻 Full Stack Engineer
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                🤝 Open To Collaborations
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                🌍 Global Networking
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contact.map(
            (item, index) => {
              const Icon =
                iconMap[
                  item.icon as keyof typeof iconMap
                ];

              const gradient =
                colorMap[
                  item.icon as keyof typeof colorMap
                ];

              return (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300 bg-gradient-to-br ${gradient}`}
                  />

                  <div className="relative z-10 flex items-center gap-5">
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">
                          {
                            item.platform
                          }
                        </h3>

                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                      </div>

                      <p className="text-muted-foreground mt-1 break-all">
                        {item.handle}
                      </p>

                      <div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-400">
                        Click to connect
                        →
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            }
          )}
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
            delay: 0.7,
          }}
          className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-r from-indigo-500/10 via-background to-cyan-500/10 p-8 shadow-xl"
        >
          <div className="absolute inset-0 opacity-20 blur-3xl bg-cyan-500" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black">
              🚀 Open For Opportunities
            </h2>

            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Mohammad is actively
              exploring AI projects,
              internships, startup
              collaborations,
              full-stack development,
              and innovative tech
              opportunities worldwide.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-card border border-border">
                🤖 AI & ML
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                ⚛️ React & Flutter
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                ☁️ Cloud & Backend
              </div>

              <div className="px-4 py-2 rounded-full bg-card border border-border">
                🌍 Remote Friendly
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}