import type { JSX } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ProductCardProps {
  image: string;
  title: string;
  icon?: JSX.Element;
}

const ProductCard = ({
  image,
  title,
  icon = <FaArrowRight />,
}: ProductCardProps): JSX.Element => {
  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.25)] bg-black">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow effects (hero-style) */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-warmpink/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        {/* Title */}
        <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-wide mb-4">
          {title}
        </h3>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          {/* Small glow line */}
          <div className="w-16 h-0.5 bg-warmpink/80 rounded-full" />

          {/* Button */}
          <button className="bg-warmpink/90 hover:bg-warmpink text-white p-3 rounded-full shadow-[0_0_25px_rgba(255,105,180,0.4)] transition-all duration-300 group-hover:scale-110">
            {icon}
          </button>
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-warmpink/40 rounded-3xl transition duration-300" />
    </div>
  );
};

export default ProductCard;
