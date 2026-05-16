import type { JSX } from "react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ROUTES } from "../../routes/paths";
import { ScrollAnimation } from "../common";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/burger.jpeg",
    title: "Handcrafted Burger",
    subtitle: "Freshly Baked with Love",
    description:
      "Indulge in our beautifully crafted cupcakes, made daily with premium ingredients, rich flavors, and elegant designs perfect for every celebration.",
    ctaText: "Explore Our Menu",
    ctaLink: ROUTES.GALLERY,
  },
  {
    id: 2,
    image: "/images/hero2.jpeg",
    title: "Delicious Custom Cakes",
    subtitle: "Made for Every Special Occasion",
    description:
      "From birthdays to weddings, our custom cakes are expertly designed to bring sweetness, elegance, and unforgettable flavor to your celebrations.",
    ctaText: "Order Your Cake",
    ctaLink: ROUTES.SERVICES,
  },
  {
    id: 3,
    image: "/images/hero4.jpeg",
    title: "Fresh Gourmet Doughnuts",
    subtitle: "Soft, Sweet, and Irresistible",
    description:
      "Enjoy our freshly made doughnuts crafted with rich flavors, delicate textures, and delightful toppings that make every bite unforgettable.",
    ctaText: "Discover More",
    ctaLink: ROUTES.GALLERY,
  },
];

const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!isAutoplaying) return;

    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplaying, goToNextSlide]);

  const handleMouseEnter = () => setIsAutoplaying(false);
  const handleMouseLeave = () => setIsAutoplaying(true);

  return (
    <section
      className="relative w-full h-180 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full shrink-0 relative overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-1" />

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-warmpink/30 blur-3xl rounded-full z-2" />
            <div className="absolute bottom-0 right-0 w-md h-md bg-primary/20 blur-3xl rounded-full z-2" />

            {/* BIG CENTER LOGO */}
            <div className="absolute inset-0 flex items-center justify-center z-3">
              <div className="relative">
                <img
                  src="/logo/logo1.jpeg"
                  alt="De Precious Bakery"
                  className="w-65 h-65 md:w-112.5 md:h-112.5 object-cover rounded-full opacity-30 animate-pulse border-4 border-warmpink shadow-[0_0_80px_rgba(255,105,180,0.6)]"
                />

                <div className="absolute inset-0 rounded-full border-4 border-warmpink animate-ping opacity-50" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-10 h-full flex items-center">
              <div className="max-w-3xl text-white">
                {/* Subtitle */}
                <ScrollAnimation delay={0.2}>
                  <p className="uppercase tracking-[0.35em] text-warmpink font-semibold text-sm md:text-base mb-4">
                    {slide.subtitle}
                  </p>
                </ScrollAnimation>

                {/* Title */}
                <ScrollAnimation delay={0.4}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    {slide.title}
                  </h1>
                </ScrollAnimation>

                {/* Description */}
                <ScrollAnimation delay={0.6}>
                  <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-8 max-w-2xl mb-8">
                    {slide.description}
                  </p>
                </ScrollAnimation>

                {/* CTA Button */}
                <ScrollAnimation delay={0.8}>
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center gap-3 bg-warmpink hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
                  >
                    {slide.ctaText}
                    <FaChevronRight size={16} />
                  </Link>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-warmpink text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 backdrop-blur-md"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-warmpink text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 backdrop-blur-md"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-warmpink w-10 h-3"
                : "bg-white/60 hover:bg-white w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
