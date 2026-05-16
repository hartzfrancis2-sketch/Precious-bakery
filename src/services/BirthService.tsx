import { FaCheckCircle } from "react-icons/fa";
import { SectionHeader, BakeryLoader, ScrollAnimation } from "../components/common";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Breadcrumb } from "../components/common";

export default function BirthService() {
  const [ContactLoading, SetContactLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden pt-28">
      <Breadcrumb
        items={[
          { label: "Services", path: "/services" },
          { label: "Birthday Cakes" },
        ]}
      />
      {/* HERO GLOW BACKGROUND */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-warmpink/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />

      {/* HEADER */}
      <SectionHeader
        subtitle="Birthday Cakes"
        title="Make Every Birthday"
        highlight="Extra Special"
        description="Beautifully crafted birthday cakes designed to bring joy, flavor, and unforgettable memories to your celebration."
        light
        className="mb-12"
      />

      {/* MAIN LAYOUT */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
        {/* LEFT IMAGE */}
        <ScrollAnimation x={-80} y={60} duration={0.8}>
          <div className="lg:sticky top-24 h-fit group">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10">
              <img
                src="/images/birth.jpeg"
                alt="Birthday Cake"
                className="w-full h-130 object-cover group-hover:scale-105 transition duration-700"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* glow hover */}
            <div className="absolute inset-0 bg-warmpink/10 opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>

          {/* WHY CHOOSE BOX */}
          <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-warmpink mb-4">
              Why choose us?
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-warmpink" />
                Fresh ingredients daily
              </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-warmpink" />
                Custom designs for all events
              </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-warmpink" />
                Fast & reliable delivery
              </li>
            </ul>
          </div>
          
        </div>
        </ScrollAnimation>

        {/* RIGHT PRICING */}
        <ScrollAnimation x={80} y={60} duration={0.8}>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Cake Price List
            </h2>

          <div className="space-y-5">
            {[
              {
                title: "Birthday Package",
                price: "GH₵ 500",
                desc: "Best collection of cakes for your birthday celebration.",
              },
              {
                title: "Baby Shower Package",
                price: "GH₵ 700",
                desc: "Soft pastel-themed desserts for memorable baby showers.",
              },
              {
                title: "Graduation Package",
                price: "GH₵ 800",
                desc: "Custom celebration treats for graduation events.",
              },
              {
                title: "Full Dessert Package",
                price: "GH₵ 1500",
                desc: "Complete premium dessert catering for large celebrations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white group-hover:text-warmpink transition">
                    {item.title}
                  </h3>

                  <span className="text-warmpink font-bold">{item.price}</span>
                </div>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => {
                SetContactLoading(true);

                setTimeout(() => {
                  navigate("/contact");
                }, 1500);
              }}
              disabled={ContactLoading}
              className="block mt-10 text-center bg-warmpink hover:bg-primary-dark text-white py-4 rounded-2xl font-semibold shadow-[0_0_25px_rgba(255,105,180,0.3)] transition hover:scale-[1.02] w-full"
            >
              {ContactLoading ? (
                <>
                  <BakeryLoader size="small" fullScreen={false} />
                  <span>Loading....</span>
                </>
              ) : (
                "Order Your Cake Now"
              )}
            </button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
