import type { JSX } from "react";
import { useState } from "react";
import {
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaSnapchatGhost,
  FaWhatsapp,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

import {
  FloatingWhatsApp,
  SectionHeader,
  BakeryLoader,
  ScrollAnimation,
} from "../components/common";

import { useNavigate } from "react-router-dom";
import { StatsCard } from "../components/client";

const About = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // LOADING STATES
  const [contactLoading, setContactLoading] = useState(false);
  const [readMoreLoading, setReadMoreLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-[#0b0b0f] text-white pt-10">
      {/* Glow background */}
      <div className="absolute -top-20 left-10 w-80 h-80 bg-warmpink/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="relative my-16">
        <SectionHeader
          subtitle="About Us"
          title="Crafting Sweet Memories"
          highlight="With Passion and Elegance"
          description="We create luxurious cakes, pastries, and desserts that turn every celebration into a memorable experience."
          light
        />
      </div>

      {/* MAIN SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <ScrollAnimation x={-80} duration={0.8} y={60}>
          <div className="relative group order-2 md:order-1">
            <img
              src="/testimonia/about1.jpeg"
              alt="Bakery About"
              className="w-full h-112.5 object-cover rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition duration-700 group-hover:scale-[1.03]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-3xl" />

            {/* glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-warmpink/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm">
              Since 2020 🍰
            </div>
          </div>
          </ScrollAnimation>

          {/* TEXT */}
          <ScrollAnimation x={80} duration={0.8} y={60}>
          <div className="space-y-6 order-1 md:order-2">
            <p className="uppercase tracking-[0.35em] text-warmpink font-semibold">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Baking Happiness
              <span className="block text-warmpink mt-3">
                with Passion & Love
              </span>
            </h2>

            <p className="text-gray-300 leading-8">
              At DePrecious Bakery, every bite tells a story of freshness,
              creativity, and joy. From custom cakes to daily pastries,
              everything is crafted with care.
            </p>

            <p className="text-gray-400 leading-8">
              Our mission is simple — to turn ordinary days into unforgettable
              memories through delicious baked creations.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* READ MORE BUTTON */}
              <button
                onClick={() => {
                  setReadMoreLoading(true);

                  setTimeout(() => {
                    setReadMoreLoading(false);
                    setIsModalOpen(true);
                  }, 1500);
                }}
                disabled={readMoreLoading}
                className="flex items-center justify-center gap-3 bg-warmpink hover:bg-primary-dark transition text-white px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(255,105,180,0.3)] disabled:opacity-70"
              >
                {readMoreLoading ? (
                  <>
                    <BakeryLoader size="small" fullScreen={false} />
                    <span>Opening...</span>
                  </>
                ) : (
                  "Read More"
                )}
              </button>

              {/* CONTACT BUTTON */}
              <button
                onClick={() => {
                  setContactLoading(true);

                  setTimeout(() => {
                    navigate("/contact");
                  }, 1500);
                }}
                disabled={contactLoading}
                className="flex items-center justify-center gap-3 border border-warmpink text-warmpink hover:bg-warmpink hover:text-white transition px-6 py-3 rounded-full font-semibold disabled:opacity-70"
              >
                {contactLoading ? (
                  <>
                    <BakeryLoader size="small" fullScreen={false} />
                    <span>Loading...</span>
                  </>
                ) : (
                  "Contact Us"
                )}
              </button>
            </div>
            
          </div>
          
        </ScrollAnimation>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#111] border border-white/10 max-w-2xl w-full rounded-2xl p-6 relative shadow-2xl backdrop-blur-xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={20} />
            </button>

            {/* MODAL TITLE */}
            <h2 className="text-2xl font-bold text-warmpink">
              Our Story & Founder
            </h2>

            {/* MODAL TEXT */}
            <p className="mt-4 text-gray-300 leading-7">
              DePrecious Bakery was founded with a deep passion for baking and a
              dream to bring joy to every home.
            </p>

            <p className="mt-3 text-gray-400 leading-7">
              Our founder,{" "}
              <span className="text-warmpink font-semibold">Precious</span>,
              started baking at a young age with the vision of creating premium
              baked goods.
            </p>

            <p className="mt-3 text-gray-400 leading-7">
              Today, we continue that mission — delivering cakes, pastries, and
              desserts that make every celebration unforgettable.
            </p>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full bg-warmpink text-white py-3 rounded-xl hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* STATS */}
      <div className="relative my-20">
        <SectionHeader
          subtitle="Our Stats"
          title="Our Milestones"
          highlight="1000+ Happy Customers"
          description="Proof of our commitment to delivering fresh and delicious treats."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 lg:px-10 mt-10">
          <ScrollAnimation delay={0.2} duration={0.8} y={30}>
          <StatsCard label="Years" value={5} />
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} duration={0.8} y={30}>
            <StatsCard label="Happy Customers" value={400} />
          </ScrollAnimation>
          <ScrollAnimation delay={0.6} duration={0.8} y={30}>
            <StatsCard label="Cakes Sold" value={250} />
          </ScrollAnimation>
        </div>
      </div>

      {/* SOCIAL BAR */}
      <div className="relative mt-20 py-10 bg-[#0b0b0f] border-t border-white/10">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-warmpink/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-52 h-52 bg-primary/20 blur-3xl rounded-full" />

        <div className="flex flex-wrap items-center justify-center gap-5">
          {[
            { icon: <FaFacebook />, color: "bg-blue-500" },
            { icon: <FaTwitter />, color: "bg-sky-500" },
            { icon: <FaSnapchatGhost />, color: "bg-yellow-400" },
            { icon: <FaTiktok />, color: "bg-pink-500" },
            { icon: <FaWhatsapp />, color: "bg-green-500" },
            { icon: <FaDiscord />, color: "bg-indigo-500" },
          ].map((item, i) => (
            <a key={i} href="#" className="group relative">
              <div className="absolute inset-0 bg-warmpink/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition" />

              <div
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl text-white ${item.color} group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <FloatingWhatsApp
        phoneNumber="233531830827"
        message="Hi DePrecious Bakery! I have a question about your products."
      />
    </div>
  );
};

export default About;
