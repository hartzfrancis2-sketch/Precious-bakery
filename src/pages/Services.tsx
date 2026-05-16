import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SectionHeader, BakeryLoader, SEO, ScrollAnimation } from "../components/common";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  link: string;
}

export default function LuxuryBakeryMasonry(): JSX.Element {
  const navigate = useNavigate();

  const [loadingLink, setLoadingLink] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "🎂 Signature Custom Cakes",
      image: "/images/custom.jpeg",
      description:
        "Elegant handcrafted cakes designed for birthdays, weddings, and luxury celebrations.",
      price: "From GH₵ 250",
      link: "/cakeservice/",
    },
    {
      id: 2,
      title: "🧁 Luxury Pastries & Desserts",
      image: "/images/hero1.jpeg",
      description:
        "A premium collection of cupcakes, doughnuts, brownies, cookies, and pastries for events.",
      price: "From GH₵ 80",
      link: "/dessertservice/",
    },
    {
      id: 3,
      title: "🍞 Fresh Artisan Bread",
      image: "/images/bread.jpeg",
      description:
        "Soft, freshly baked bread made daily with quality ingredients and rich flavor.",
      price: "From GH₵ 1,200",
      link: "/breadservice/",
    },
    {
      id: 4,
      title: "💍 Wedding Cake Collection",
      image: "/images/wed.jpeg",
      description:
        "Elegant multi-layer wedding cakes designed for luxury ceremonies.",
      price: "From GH₵ 900",
      link: "/weddingservice/",
    },
    {
      id: 5,
      title: "🎉 Celebration Packages",
      image: "/images/birth.jpeg",
      description:
        "Complete bakery packages for birthdays, graduations, baby showers, and parties.",
      price: "From GH₵ 500",
      link: "/birthservice",
    },
    {
      id: 6,
      title: "🎨 Creative Cake Studio",
      image: "/images/designe.jpeg",
      description:
        "Custom-designed cakes tailored for your imagination and special events.",
      price: "From GH₵ 120",
      link: "/designservice",
    },
  ];

  // HANDLE NAVIGATION WITH DELAY
  const handleNavigation = (id: number, path: string) => {
    setLoadingLink(id);

    setTimeout(() => {
      navigate(path);
    }, 1800); // 1.8 seconds loading
  };

  return (
    <section className="relative bg-[#0b0b0f] py-24 px-5 md:px-10 overflow-hidden">
      <SEO
        title="Contact Us | Precious Bakery"
        description="Get in touch to order custom cakes and pastries in Accra."
        keywords="contact bakery Accra, cake order Ghana"
      />
      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-warmpink/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <SectionHeader
          subtitle="Our Services"
          title="Delicious Treats"
          highlight="Made Just for You"
          description="From custom cakes to fresh pastries and dessert catering, we create sweet experiences for every occasion."
          light
        />

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <ScrollAnimation
              key={service.id}
              delay={index * 0.2}
              y={60}
              duration={0.8}
              scale={0.95}
            >
            <div
          
              
              className="group relative h-130 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 group-hover:via-black/60 transition duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-end h-full p-7">
                {/* PRICE */}
                <span className="self-start mb-4 bg-warmpink/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(255,105,180,0.3)]">
                  {service.price}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-7 mt-3 mb-6">
                  {service.description}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => handleNavigation(service.id, service.link)}
                  disabled={loadingLink === service.id}
                  className="inline-flex items-center justify-center gap-3 w-fit min-w-45 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-warmpink hover:border-warmpink transition duration-300 shadow-lg disabled:opacity-80"
                >
                  {loadingLink === service.id ? (
                    <>
                      <BakeryLoader fullScreen={false} />
                      Opening...
                    </>
                  ) : (
                    "View Details"
                  )}
    

                </button>
              </div>
            </div>
            </ScrollAnimation>
          ))}
          
        </div>
      </div>
    </section>
  );
}
