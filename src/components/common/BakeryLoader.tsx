import type { JSX } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";

interface BakeryLoaderProps {
  fullScreen?: boolean;
  size?: "small" | "medium" | "large";
}

const BakeryLoader = ({
  fullScreen = true,
  size = "medium",
}: BakeryLoaderProps): JSX.Element => {
  const sizes = {
    small: {
      container: "w-10 h-10",
      icon: "text-lg",
    },
    medium: {
      container: "w-20 h-20",
      icon: "text-3xl",
    },
    large: {
      container: "w-28 h-28",
      icon: "text-5xl",
    },
  };

  const currentSize = sizes[size];

  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0 z-50 bg-[#0b0b0f]" : ""
      }`}
    >
      {/* BACKDROP GLOW */}
      <div className="absolute w-72 h-72 bg-warmpink/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative flex items-center justify-center">
        {/* OUTER SOFT RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
          className={`${currentSize.container} rounded-full border-2 border-warmpink/40 border-t-warmpink`}
        />

        {/* INNER GLOW RING */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className={`absolute ${currentSize.container} rounded-full border border-white/10`}
        />

        {/* ICON (BAKING FLOAT EFFECT) */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className={`absolute text-warmpink drop-shadow-[0_0_15px_rgba(255,105,180,0.6)] ${currentSize.icon}`}
        >
          <FaBirthdayCake />
        </motion.div>

        {/* SMALL DOTS ORBIT (ADDS LIFE) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="absolute w-24 h-24"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-warmpink rounded-full shadow-[0_0_10px_rgba(255,105,180,0.8)]" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-warmpink rounded-full shadow-[0_0_10px_rgba(255,105,180,0.8)]" />
        </motion.div>
      </div>

      {/* TEXT LOADING */}
      <div className="absolute bottom-24 text-center">
        <p className="text-warmpink font-semibold tracking-widest text-sm">
          Baking your sweetness...
        </p>
        <div className="flex justify-center gap-1 mt-2">
          <span className="w-2 h-2 bg-warmpink rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-warmpink rounded-full animate-bounce delay-150" />
          <span className="w-2 h-2 bg-warmpink rounded-full animate-bounce delay-300" />
        </div>
      </div>
    </div>
  );
}

export default BakeryLoader;
