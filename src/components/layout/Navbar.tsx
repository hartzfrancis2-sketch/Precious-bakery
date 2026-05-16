import { useEffect, useState, type JSX } from "react";
import { Menu, X } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Menu", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-[#0b0b0f]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
          : "bg-[#0b0b0f]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 relative group">
            <img
              src="/logo/logo1.jpeg"
              alt="Bakery Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-warmpink shadow-[0_0_20px_rgba(255,105,180,0.3)]"
            />

            <span className="text-white font-black text-lg hidden sm:block">
              DePrecious <span className="text-warmpink">Bakery</span>
            </span>

            {/* glow */}
            <div className="absolute -inset-2 bg-warmpink/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative font-semibold transition duration-300 ${
                    isActive
                      ? "text-warmpink"
                      : "text-white/80 hover:text-warmpink"
                  }`
                }
              >
                {/* active underline glow */}
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                        isActive
                          ? "w-full bg-warmpink shadow-[0_0_10px_rgba(255,105,180,0.6)]"
                          : "w-0 bg-warmpink"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <NavLink
              to="/contact"
              className="group flex items-center gap-2 bg-warmpink hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-[0_0_25px_rgba(255,105,180,0.3)] hover:scale-105"
            >
              Order Now
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4">
            <div className="flex flex-col gap-5 bg-[#0b0b0f]/95 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-warmpink font-semibold transition"
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-warmpink text-white font-semibold py-3 rounded-full shadow-[0_0_20px_rgba(255,105,180,0.3)]"
              >
                Order Now <FaArrowRight />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
