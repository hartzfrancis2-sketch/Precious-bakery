import type { JSX } from "react";
import Hero from "../components/feature/Hero";
import {
  SectionHeader,
  ProductCard,
  FloatingWhatsApp,
  ScrollReveal,
  SEO,
  ScrollAnimation
} from "../components/common";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiMessageCircle,
  FiMousePointer,
  FiTruck,
} from "react-icons/fi";
import { ROUTES } from "../routes/paths";
import { TestimonialSlider } from "../components/client";
import { testimonialsData } from "../components/client/TestimonialSlider";
import {
  FaFacebook,
  FaTwitter,
  FaSnapchatGhost,
  FaTiktok,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

const Home = (): JSX.Element => {
  "transition-all duration-300 ease-out transform hover:scale-125 hover:-translate-y-1 hover:drop-shadow-lg";

  return (
    <>
      <SEO
        title="Precious Bakery | Custom Cakes in Accra"
        description="Order premium birthday cakes, wedding cakes and pastries in Accra Ghana."
        keywords="bakery Accra, cakes Ghana, wedding cakes, birthday cakes"
      />
      <div className="min-h-screen">
        {/**Hero Section */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <div className="container py-6">
          <div className="mt-8">
            <SectionHeader
              subtitle="BESTSELL"
              title="Customer Favorites"
              description="Handpicked based on reviews and repeat orders"
              highlight="Fastest Moving Order "
            />
          </div>

          <section className="py-14 px-4">
            <div className="max-w-7xl mx-auto flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <ScrollAnimation delay={0.2} duration={0.8}>
                  <ProductCard
                    image="/images/hero3.jpeg"
                    title="Chocolate Doughnut"
                    icon={<FaShoppingCart />}
                  />
                </ScrollAnimation>

                <ScrollAnimation delay={0.6} duration={0.8}>
                  <ProductCard
                    image="/images/susage.jpeg"
                    title="Sweet Susage Roll"
                    icon={<FaShoppingCart />}
                  />
                </ScrollAnimation>

                <ScrollAnimation delay={0.8} duration={0.8}>
                  <ProductCard
                    image="/images/cake1.jpg.jpeg"
                    title="BirthDay Cake"
                    icon={<FaShoppingCart />}
                  />
                </ScrollAnimation>
              </div>

            </div>
          </section>

          <SectionHeader
            title="Who We Are"
            subtitle="About Us"
            description="We create fresh, premium baked goods made with love, perfect for every celebration."
            highlight="Crafting Sweet Moments"
            light={false}
          />

          {/* Hero Slider Section */}
          <section className="relative overflow-hidden bg-[#0b0b0f] py-24 px-6 lg:px-20 my-20 items-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-md h-md bg-warmpink/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-lg h-128 bg-primary/20 blur-3xl rounded-full" />

            {/* Container */}
            <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-24">
              {/* IMAGE SECTION */}
              <ScrollAnimation x={-80} duration={0.8}>
              <div className="relative w-full flex justify-center lg:justify-end ">
                <div className="relative group">
                  <img
                    src="/images/presh.jpeg"
                    alt="Bakery"
                    className="w-full max-w-130 h-155 object-cover rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 rounded-[2.5rem]" />

                  {/* Glow effects */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-warmpink/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Floating Card */}
                  <div className="absolute -bottom-10 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 w-64 text-white">
                    <h3 className="text-4xl font-extrabold text-warmpink mb-2">
                      5+
                    </h3>

                    <p className="text-sm text-gray-200 leading-7">
                      Years of baking handcrafted cakes, pastries, and desserts
                      made with passion and precision.
                    </p>
                  </div>
                </div>
              </div>
              </ScrollAnimation>

              {/* TEXT SECTION */}
              <ScrollAnimation x={80} duration={0.8}>
              <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-white space-y-8 lg:pl-10 ">
                {/* Label */}
                <p className="uppercase tracking-[0.35em] text-warmpink font-semibold">
                  About Us
                </p>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Baking Happiness
                  <span className="block text-warmpink mt-3">
                    Into Every Bite
                  </span>
                </h2>

                {/* Paragraphs */}
                <p className="text-gray-300 text-lg leading-9">
                  At DePrecious Bakery, every creation is crafted like art. From
                  custom celebration cakes to soft pastries and gourmet
                  doughnuts, everything is baked fresh with high-quality
                  ingredients and deep attention to detail.
                </p>

                <p className="text-gray-400 text-lg leading-9">
                  We don’t just bake food — we create experiences that bring
                  people together. Every recipe is designed to balance flavor,
                  beauty, and emotion in every bite.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-warmpink/40 transition duration-300">
                    <h4 className="text-xl font-bold text-warmpink mb-2">
                      Fresh Ingredients
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Premium quality ingredients used in every recipe.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-warmpink/40 transition duration-300">
                    <h4 className="text-xl font-bold text-warmpink mb-2">
                      Custom Orders
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Personalized cakes designed for every occasion.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center bg-warmpink hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,105,180,0.3)] transition duration-300 hover:scale-105"
                  >
                    Discover More
                  </Link>
                </div>
                
              </div>
              </ScrollAnimation>
            </div>
          </section>
        </div>

        {/* Our Solutions Section */}
        <section className="relative py-24 px-6 lg:px-16 overflow-hidden bg-[#0b0b0f]">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
            style={{ backgroundImage: "url('/images/burger.jpeg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Glow effects like hero */}
          <div className="absolute top-0 left-0 w-md h-112 bg-warmpink/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-lg h-128 bg-primary/20 blur-3xl rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            {/* HEADER */}
            <div className="text-center mb-20">
              <SectionHeader 
              title="Get Your Treats in"
              subtitle="Get Treats"
              highlight="3 Easy Steps"
              description="Enjoy freshly baked pastries, cakes, cupcakes, and delicious treats delivered straight to your doorstep with speed, care, and premium service."
              light
              />
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* CARD TEMPLATE STYLE */}
              {[
                
                  {
                    icon: <FiMousePointer />,
                    title: "Choose Treats",
                    desc: "Explore our freshly baked cakes, cupcakes, and pastries made daily.",
                    link: ROUTES.GALLERY,
                    linkText: "View Menu",
                },
                
                {
                  icon: <FiMessageCircle />,
                  title: "Place Order",
                  desc: "Send your request easily whatsapp or Contact us and customize your perfect order.",
                  link: ROUTES.CONTACT,
                  linkText: "Order Now",
                },
                {
                  icon: <FiTruck />,
                  title: "We Deliver",
                  desc: "Fresh baking + fast, reliable delivery to your doorstep.",
                  link: ROUTES.ABOUT,
                  linkText: "Learn More",
                },
                {
                  icon: <FiAward />,
                  title: "Enjoy & Celebrate",
                  desc: "Receive beautifully packaged treats ready for your moment.",
                  link: ROUTES.SERVICES,
                  linkText: "Discover",
                },
              ].map((item, index) => (
                <ScrollAnimation
  key={index}
  delay={index * 0.2}
  y={60}
  duration={0.8}
>
  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-warmpink/40 transition duration-500 overflow-hidden">
    
    {/* Glow hover effect */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-warmpink/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* Icon */}
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full border border-warmpink bg-black/30 text-warmpink text-2xl group-hover:scale-110 transition duration-300">
      {item.icon}
    </div>

    {/* Title */}
    <h3 className="text-2xl font-bold text-white mb-4">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-gray-300 leading-7 mb-6">
      {item.desc}
    </p>

    {/* Link */}
    <Link
      to={item.link}
      className="inline-flex items-center gap-2 text-warmpink font-semibold group-hover:translate-x-2 transition duration-300"
    >
      {item.linkText} →
    </Link>

  </div>
</ScrollAnimation>
                
              ))}
            </div>
          </div>
        
        </section>

        <div className="my-14">
          <SectionHeader
            subtitle="Testimonials"
            title="What Clients"
            highlight="Say About Us"
            description="Sweet reviews from customers who love our cakes, pastries, and exceptional service."
          />
        </div>

        <ScrollReveal>
          <TestimonialSlider testimonials={testimonialsData} />
        </ScrollReveal>
        <div className="my-10">
          <FloatingWhatsApp
            phoneNumber="233531830827"
            message="Hi DePreciouse Bakery! I have a question about your products."
          />
        </div>

        <SectionHeader
          subtitle="Social Media"
          title="Follow Our"
          highlight="Sweet Journey"
          description="Stay connected for fresh pastries, custom cakes, special offers, and daily bakery inspiration."
        />

        <div className="relative overflow-hidden mt-12 bg-[#0b0b0f] py-6">
          {/* Glow background like hero */}
          <div className="absolute -top-10 left-10 w-40 h-40 bg-warmpink/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 right-10 w-52 h-52 bg-primary/20 blur-3xl rounded-full" />

          {/* Container */}
          <div className="relative max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 px-4">
            {/* ICONS */}
            {[
              { icon: <FaFacebook />, color: "bg-blue-500" },
              { icon: <FaTwitter />, color: "bg-sky-500" },
              { icon: <FaSnapchatGhost />, color: "bg-yellow-400" },
              { icon: <FaTiktok />, color: "bg-pink-500" },
              { icon: <FaWhatsapp />, color: "bg-green-500" },
              { icon: <FaDiscord />, color: "bg-indigo-500" },
            ].map((item, index) => (
              <ScrollAnimation
                key={index}
                delay={index * 0.1}
                duration={0.8}
              >
                <div className="group relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl bg-warmpink/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Icon box */}
                  <div
                    className={`relative flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-xl transition duration-300 group-hover:scale-110 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
