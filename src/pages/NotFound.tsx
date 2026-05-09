// FILE: src/pages/NotFound.tsx

import { motion } from "framer-motion";

import {
  ArrowLeft,
  Sparkles,
  Home,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-background
        px-6
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-indigo-500/10
          via-transparent
          to-cyan-500/10
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          blur-3xl
        "
      />

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[36px]
          border
          border-border
          bg-card/70
          p-10
          text-center
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Badge */}
        <div
          className="
            mx-auto
            mb-6
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
          "
        >
          <Sparkles className="h-4 w-4" />
          Intelligent Portfolio
        </div>

        {/* 404 */}
        <h1
          className="
            text-7xl
            md:text-9xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-indigo-400
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
            mt-6
            text-3xl
            md:text-4xl
            font-bold
            text-foreground
          "
        >
          Oops! This page doesn’t exist.
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-muted-foreground
            leading-relaxed
          "
        >
          The page you are looking for may have been removed,
          renamed, or is temporarily unavailable.
          But don’t worry — Mohammad’s AI portfolio is still here 🚀
        </p>

        {/* Route */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-border
            bg-black/10
            px-5
            py-4
            text-sm
            text-muted-foreground
            backdrop-blur-md
          "
        >
          Attempted Route:
          <span className="ml-2 font-semibold text-foreground">
            {location.pathname}
          </span>
        </div>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-primary-foreground
              transition-all
              hover:scale-105
              hover:shadow-lg
            "
          >
            <Home className="h-4 w-4" />
            Back to Home
          </button>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-card
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              hover:scale-105
              hover:border-primary/30
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;