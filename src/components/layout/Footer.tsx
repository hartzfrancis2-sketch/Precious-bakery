import type { JSX } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaSnapchatGhost,
  FaTiktok,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { ScrollAnimation } from "../common";

const Footer = (): JSX.Element => {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0f] text-white">
      {/* Glow background like Hero */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-warmpink/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/20 blur-3xl rounded-full" />

      {/* Top Section */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <ScrollAnimation
          delay={0.2}
          duration={0.8}
          y={60}
        >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="space-y-4">
            <h1 className="text-2xl font-black">
              DePrecious <span className="text-warmpink">Bakery</span>
            </h1>

            <p className="text-gray-300 leading-7">
              Freshly baked cakes, pastries, and desserts made with love,
              passion, and premium ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-warmpink font-semibold mb-4 uppercase tracking-widest text-sm">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300">
              {["Home", "About", "Services", "Gallery"].map((item) => (
                <li
                  key={item}
                  className="hover:text-warmpink transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-warmpink font-semibold mb-4 uppercase tracking-widest text-sm">
              Contact
            </h2>

            <div className="space-y-3 text-gray-300 text-sm">
              <p>Accra, Ghana</p>
              <p>+233 53 183 0827</p>
              <p>support@depreciousebakery.com</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-warmpink font-semibold mb-4 uppercase tracking-widest text-sm">
              Follow Us
            </h2>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaFacebook />, color: "bg-blue-500" },
                { icon: <FaTwitter />, color: "bg-sky-500" },
                { icon: <FaSnapchatGhost />, color: "bg-yellow-400" },
                { icon: <FaTiktok />, color: "bg-pink-500" },
                { icon: <FaWhatsapp />, color: "bg-green-500" },
                { icon: <FaDiscord />, color: "bg-indigo-500" },
              ].map((item, i) => (
                <a key={i} href="#" className="group relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-xl bg-warmpink/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Icon */}
                  <div
                    className={`relative w-11 h-11 flex items-center justify-center rounded-xl text-white shadow-lg transition duration-300 group-hover:scale-110 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
      

      {/* Bottom Section */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} DePrecious Bakery. All rights reserved.
        </p>

        <p className="mt-1">
          Website created by{" "}
          <span className="text-warmpink font-semibold">Hartz</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
