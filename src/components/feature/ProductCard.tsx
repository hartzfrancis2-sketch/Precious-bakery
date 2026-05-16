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
    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 flex items-center justify-between">
        {/* Title */}
        <h3 className="text-white text-xl font-bold z-10">{title}</h3>

        {/* Hover Icon */}
        <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button className="bg-warmpink text-white p-3 rounded-full">
            {icon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
