import type { JSX } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  highlight,
  description,
  center = true,
  light = false,
  className = "",
}: SectionHeaderProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full max-w-3xl ${className} ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      {/* Glow accent (hero-style background feel) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-warmpink/20 blur-3xl rounded-full" />

      {/* Subtitle */}
      {subtitle && (
        <div
          className={`inline-flex items-center gap-4 mb-5 ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="w-12 h-0.5 bg-warmpink/80 rounded-full shadow-[0_0_10px_rgba(255,105,180,0.4)]" />

          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-warmpink">
            {subtitle}
          </p>

          <span className="w-12 h-0.5 bg-warmpink/80 rounded-full shadow-[0_0_10px_rgba(255,105,180,0.4)]" />
        </div>
      )}

      {/* Title */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight ${
          light ? "text-white" : "text-[#0b0b0f]"
        }`}
      >
        {title}

        {highlight && (
          <span className="block mt-3 text-warmpink drop-shadow-[0_0_10px_rgba(255,105,180,0.3)]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-6 text-base md:text-lg leading-8 ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}

      {/* Decorative glow line */}
      <div
        className={`mt-8 flex ${center ? "justify-center" : "justify-start"}`}
      >
        <div className="relative w-28 h-0.5 rounded-full bg-linear-to-r from-warmpink to-primary shadow-[0_0_20px_rgba(255,105,180,0.3)]" />
      </div>
    </motion.div>
  );
}
