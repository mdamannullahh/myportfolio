// FILE: src/components/VisitorOnboarding.tsx

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onComplete: () => void;
};

type VisitorProfile = {
  name: string;
  gender: string;
  profession: string;
  interactionMode: string;
  location: string;
};

export default function VisitorOnboarding({
  onComplete,
}: Props) {
  const [form, setForm] = useState<VisitorProfile>({
    name: "",
    gender: "",
    profession: "",
    interactionMode: "",
    location: "",
  });

  const isValid =
    form.name.trim() &&
    form.gender &&
    form.profession &&
    form.interactionMode &&
    form.location.trim();

  const handleContinue = () => {
    if (!isValid) return;

    const existingProfile =
      localStorage.getItem(
        "visitor-profile"
      );

    const hour = new Date().getHours();

    const greeting =
      hour < 12
        ? "☀️ Good morning"
        : hour < 18
          ? "🌤️ Good afternoon"
          : "🌙 Good evening";

    const existingVisitorId =
      localStorage.getItem(
        "visitor-id"
      );

    if (!existingVisitorId) {
      localStorage.setItem(
        "visitor-id",
        crypto.randomUUID()
      );
    }

    localStorage.setItem(
      "visitor-profile",
      JSON.stringify(form)
    );

    sessionStorage.removeItem(
      "has-opened-chat"
    );

    onComplete();
  };

  const updateField = (
    key: keyof VisitorProfile,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="w-full max-w-sm rounded-3xl border border-border bg-background shadow-2xl p-5"
      >
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold">
            Welcome to Mohammad.AI 👋
          </h1>

          <p className="text-sm text-muted-foreground mt-2">
            Before entering the portfolio, tell me a little about yourself ✨
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Your Name
            </label>

            <input
              type="text"
              value={form.name}
              placeholder="Enter your name..."
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Gender
            </label>

            <select
              value={form.gender}
              onChange={(e) =>
                updateField("gender", e.target.value)
              }
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none"
            >
              <option value="">Select gender</option>

              <option value="male">
                Male 👨
              </option>

              <option value="female">
                Female 👩
              </option>

              <option value="other">
                Other ✨
              </option>
            </select>
          </div>

          {/* Profession */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Profession
            </label>

            <select
              value={form.profession}
              onChange={(e) =>
                updateField("profession", e.target.value)
              }
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none"
            >
              <option value="">
                Select profession
              </option>

              <option value="student">
                Student 🎓
              </option>

              <option value="recruiter">
                Recruiter 💼
              </option>

              <option value="developer">
                Developer 👨‍💻
              </option>

              <option value="working-professional">
                Working Professional 🏢
              </option>

              <option value="teacher">
                Teacher 📚
              </option>

              <option value="founder">
                Founder 🚀
              </option>
            </select>
          </div>

          {/* Interaction Mode */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Interaction Style
            </label>

            <select
              value={form.interactionMode}
              onChange={(e) =>
                updateField(
                  "interactionMode",
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none"
            >
              <option value="">
                Choose style
              </option>

              <option value="friend">
                Friend 🤝
              </option>

              <option value="professional">
                Professional 💼
              </option>

              <option value="visitor">
                Casual Visitor ✨
              </option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium block mb-2">
              State / Country
            </label>

            <input
              type="text"
              value={form.location}
              placeholder="Tamil Nadu, India..."
              onChange={(e) =>
                updateField(
                  "location",
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none"
            />
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              onClick={handleContinue}
              disabled={!isValid}
              className="w-full rounded-2xl bg-primary text-primary-foreground py-3 font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              Continue to Mohammad.AI 🚀
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}