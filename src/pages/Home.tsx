// FILE: src/pages/Home.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Briefcase,
  Code,
  GraduationCap,
  BookOpen,
  Mail,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import VisitorOnboarding from "@/components/VisitorOnboarding";

/* Rotating placeholder lines */
const placeholders = [
  "I'm Mohammad's AI — ask me anything…",
  "Ask me about Mohammad's skills 🤖",
  "Curious about Mohammad's projects 🚀",
  "Learn about Mohammad's journey ✨",
  "Ask about Mohammad's education 🎓",
];

/* Quick actions */
type QuickAction =
  | {
      label: string;
      icon: any;
      path: string;
      disabled?: false;
      resume?: false;
    }
  | {
      label: string;
      icon: any;
      resume: true;
      disabled?: false;
    }
  | {
      label: string;
      icon: any;
      path?: string;
      disabled: true;
    };

const quickActions: QuickAction[] = [
  { label: "Me", icon: User, path: "/chat/me" },
  { label: "Projects", icon: Briefcase, path: "/projects" },
  { label: "Skills", icon: Code, path: "/chat/skills" },
  { label: "Experience", icon: BookOpen, path: "/chat/experience" },
  { label: "Education", icon: GraduationCap, path: "/chat/education" },
  { label: "Contact", icon: Mail, path: "/chat/contact" },
  { label: "Resume", icon: FileText, resume: true },
];

export default function Home() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const navigate = useNavigate();

  /* rotating placeholder */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* onboarding popup */
  useEffect(() => {
    const existingVisitor = localStorage.getItem("visitor-profile");

    if (!existingVisitor) {
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  /* search submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      navigate("/chat/me", {
        state: {
          query: inputValue,
        },
      });
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col cursor-glow">
      {/* Visitor Popup */}
      {showOnboarding && (
        <VisitorOnboarding
          onComplete={() => setShowOnboarding(false)}
        />
      )}

      {/* Navbar */}
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Mohammad
          <span className="gradient-text">.AI</span>
        </motion.h1>

        <ThemeToggle />
      </nav>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-8 w-full max-w-3xl"
        >
          {/* Avatar */}
          <div className="w-24 h-24 rounded-3xl bg-card flex items-center justify-center shadow-lg border border-border">
            <span className="text-4xl font-bold text-foreground">
              M
            </span>
          </div>

          {/* Heading */}
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Hey, I'm Mohammad's 👋
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold"
            >
              AI Portfolio
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl"
            >
              🧑‍💻
            </motion.div>
          </div>

          {/* Search */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl relative"
          >
            <div className="relative w-full bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholders[currentPlaceholder]}
                className="w-full px-6 py-5 pr-16 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                aria-label="Ask Mohammad.AI"
                title="Ask Mohammad.AI"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.form>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {quickActions.map((action, index) => {
              const Icon = action.icon;

              const isResume =
                "resume" in action && action.resume;

              const isDisabled =
                "disabled" in action && action.disabled;

              return (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.05,
                  }}
                  onClick={(e) => {
                    if (isDisabled) {
                      e.preventDefault();
                      e.stopPropagation();
                      return;
                    }

                    if (isResume) {
                      const base =
                        (import.meta as any).env?.BASE_URL ?? "/";

                      const resumeUrl = `${base}resume.pdf`;

                      const a =
                        document.createElement("a");

                      a.href = resumeUrl;
                      a.download = "resume.pdf";

                      document.body.appendChild(a);
                      a.click();
                      a.remove();

                      return;
                    }

                    // @ts-ignore
                    navigate(action.path);
                  }}
                  onKeyDown={(e) => {
                    if (
                      isDisabled &&
                      (e.key === "Enter" || e.key === " ")
                    ) {
                      e.preventDefault();
                    }
                  }}
                  className={[
                    "flex items-center gap-2 px-6 py-3 rounded-full transition-all shadow-sm",
                    "bg-card border border-border",
                    isDisabled
                      ? "cursor-not-allowed opacity-60 hover:opacity-60"
                      : "hover:bg-accent hover:border-accent hover:scale-105",
                    isResume
                      ? "ring-1 ring-primary/30"
                      : "",
                  ].join(" ")}
                  aria-disabled={isDisabled || undefined}
                  tabIndex={isDisabled ? -1 : 0}
                  title={
                    isDisabled
                      ? "Projects are not available right now"
                      : isResume
                      ? "View Resume"
                      : action.label
                  }
                >
                  <Icon className="w-4 h-4" />

                  <span className="font-medium">
                    {action.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}