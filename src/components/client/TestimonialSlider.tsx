import { useEffect, useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  message: string;
  role?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section
      className="relative overflow-hidden bg-fixed bg-cover bg-center px-4 py-10 "
      style={{
        backgroundImage: "url('/images/burger.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-warmpink/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-warmpink">
            Testimonials
          </p>

          <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
            What Our Happy
            <span className="block text-warmpink">Customers Say</span>
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative mx-auto flex w-full max-w-4xl items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-warmpink text-white shadow-lg transition hover:scale-110 hover:bg-primary-dark md:-left-5"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Card */}
          <div className="relative w-full rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl shadow-xl md:p-7">
            {/* Quote */}
            <div className="absolute left-4 top-4 text-3xl text-warmpink opacity-30">
              <FaQuoteLeft />
            </div>

            {/* Image */}
            <div className="mb-4 flex justify-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="h-20 w-20 rounded-full border-2 border-warmpink object-cover"
              />
            </div>

            {/* Message */}
            <p className="mx-auto mb-4 max-w-2xl text-sm italic leading-7 text-gray-100 md:text-base">
              “{testimonials[current].message}”
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FaStar key={i} className="text-sm text-yellow-400" />
              ))}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-white">
              {testimonials[current].name}
            </h3>

            {/* Role */}
            {testimonials[current].role && (
              <p className="text-xs text-warmpink">
                {testimonials[current].role}
              </p>
            )}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-warmpink text-white shadow-lg transition hover:scale-110 hover:bg-primary-dark md:-right-5"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "h-2 w-6 bg-warmpink"
                  : "h-2 w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Example Usage
========================= */

export const testimonialsData = [
  {
    id: 1,
    name: "Precious Charles",
    image: "/testimonia/testimonial1.jpeg",
    rating: 4,
    role: "Cake Lover",
    message:
      "Absolutely the best bakery experience I’ve ever had. The cakes were beautifully designed, fresh, and incredibly delicious.",
  },
  {
    id: 2,
    name: "David Emmanuel",
    image: "/testimonia/testimonial2.jpeg",
    rating: 5,
    role: "Regular Customer",
    message:
      "Their doughnuts and cupcakes are simply irresistible. Every order feels premium and professionally made.",
  },
  {
    id: 3,
    name: "Gifty Emmanuel",
    image: "/testimonia/testimonial3.jpeg",
    rating: 4,
    role: "Event Planner",
    message:
      "DePrecious Bakery made our celebration unforgettable with elegant desserts and outstanding customer service.",
  },
  {
    id: 4,
    name: "Patrick Ossei",
    image: "/testimonia/testimonial5.jpeg",
    rating: 4,
    role: "Food Blogger",
    message:
      "Fresh ingredients, beautiful presentation, and rich flavors in every bite. Highly recommended for every occasion.",
  },
  {
    id: 5,
    name: "Chinazom Chigbata",
    image: "/testimonia/testimonial4.jpeg",
    rating: 5,
    role: "Bride",
    message:
      "Our wedding cake was stunning and tasted amazing. Guests kept asking where we ordered it from.",
  },
  {
    id: 6,
    name: "Jennifer Asamoah",
    image: "/testimonia/testimonial6.jpeg",
    rating: 5,
    role: "Entrepreneur",
    message:
      "The packaging, delivery, and quality exceeded expectations. Truly one of the finest bakeries around.",
  },
  {
    id: 7,
    name: "Precious Adaeze",
    image: "/testimonia/testimonial7.jpeg",
    rating: 5,
    role: "Pastry Enthusiast",
    message:
      "Every pastry feels handcrafted with love. Their consistency and flavor quality are unmatched.",
  },
  {
    id: 8,
    name: "Marvelous Oluchi",
    image: "/testimonia/testimonial8.jpeg",
    rating: 4,
    role: "Happy Customer",
    message:
      "From cupcakes to celebration cakes, every product was fresh, soft, and absolutely delicious.",
  },
];
