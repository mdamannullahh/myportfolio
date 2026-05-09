import { motion } from "framer-motion";
import { useState } from "react";
import { VisitorProfile } from "@/types/user";
import { defaultVisitor } from "@/data/defaultVisitor";

type Props = {
  onComplete: (data: VisitorProfile) => void;
};

export function VisitorPopup({ onComplete }: Props) {
  const [form, setForm] = useState<VisitorProfile>(defaultVisitor);

  function update<K extends keyof VisitorProfile>(
    key: K,
    value: VisitorProfile[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleContinue() {
    if (!form.name.trim()) return;
    if (!form.location.trim()) return;

    localStorage.setItem(
      "visitor-profile",
      JSON.stringify(form)
    );

    onComplete(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-background p-6 shadow-2xl"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            Welcome to Mohammad.AI 👋
          </h2>

          <p className="text-muted-foreground mt-2 text-sm">
            Before accessing the AI portfolio,
            please introduce yourself ✨
          </p>
        </div>

        <div className="space-y-4">
          {/* NAME */}
          <div>
            <label className="text-sm font-medium">
              Your Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                update("name", e.target.value)
              }
              placeholder="Enter your name"
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* STATE */}
          <div>
            <label className="text-sm font-medium">
              Your State
            </label>

            <input
              type="text"
              value={form.location}
              onChange={(e) =>
                update("location", e.target.value)
              }
              placeholder="Tamil Nadu, Bihar, etc."
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* GENDER */}
          <div>
            <label className="text-sm font-medium">
              Gender
            </label>

            <select
              value={form.gender}
              onChange={(e) =>
                update(
                  "gender",
                  e.target.value as VisitorProfile["gender"]
                )
              }
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="male">Male</option>

              <option value="female">Female</option>
            </select>
          </div>

          {/* PROFESSION */}
          <div>
            <label className="text-sm font-medium">
              Profession
            </label>

            <select
              value={form.profession}
              onChange={(e) =>
                update(
                  "profession",
                  e.target.value as VisitorProfile["profession"]
                )
              }
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="student">Student</option>

              <option value="developer">Developer</option>

              <option value="recruiter">Recruiter</option>

              <option value="teacher">Teacher</option>

              <option value="job-professional">
                Job Professional
              </option>

              <option value="other">Other</option>
            </select>
          </div>

          {/* RELATIONSHIP */}
          <div>
            <label className="text-sm font-medium">
              Relationship with Mohammad
            </label>

            <select
              value={form.interactionMode}
              onChange={(e) =>
                update(
                  "interactionMode",
                  e.target.value as VisitorProfile["interactionMode"]
                )
              }
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="visitor">Visitor</option>

              <option value="friend">Friend</option>

              <option value="professional">Professional</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleContinue}
            className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground transition hover:scale-[1.02]"
          >
            Continue ✨
          </button>
        </div>
      </motion.div>
    </div>
  );
}