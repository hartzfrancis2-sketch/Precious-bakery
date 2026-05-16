import type { JSX, ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

/* =========================================
   TYPES
========================================= */

type ScrollAnimationProps = {
  children: ReactNode;

  className?: string;

  delay?: number;

  duration?: number;

  y?: number;

  x?: number;

  scale?: number;

  once?: boolean;
};

/* =========================================
   COMPONENT
========================================= */

const ScrollAnimation = ({
  children,
  className = "",

  delay = 0,

  duration = 0.7,

  y = 40,

  x = 0,

  scale = 1,

  once = true,
}: ScrollAnimationProps): JSX.Element => {
  /* =========================================
     ANIMATION VARIANTS
  ========================================= */

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      scale,
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,

      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;