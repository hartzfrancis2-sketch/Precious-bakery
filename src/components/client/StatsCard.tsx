import { useEffect, useState, type JSX } from "react";

interface StatsCardProps {
  label: string;
  value: number;
  icon?: JSX.Element;
  color?: string;
}

export default function StatsCard({
  label,
  value,
  icon,
  color = "text-warmpink",
}: StatsCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const increment = value / (duration / 10);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="relative group w-full max-w-[320px] mx-auto">
      {/* glow background */}
      <div className="absolute inset-0 bg-warmpink/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-[1.03] transition duration-300">
        {/* ICON */}
        {icon && (
          <div className="flex justify-center mb-4 text-3xl text-warmpink drop-shadow-[0_0_10px_rgba(255,105,180,0.4)]">
            {icon}
          </div>
        )}

        {/* VALUE */}
        <h3 className={`text-4xl font-black ${color}`}>
          {count}
          <span className="text-warmpink">+</span>
        </h3>

        {/* LABEL */}
        <p className="text-sm text-gray-300 mt-3 tracking-wide uppercase">
          {label}
        </p>
      </div>
    </div>
  );
}
