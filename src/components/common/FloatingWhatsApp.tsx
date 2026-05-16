import type { JSX } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
}

const FloatingWhatsApp = ({
  phoneNumber,
  message,
  position = "bottom-right",
}: FloatingWhatsAppProps): JSX.Element => {
  const whatsappLink = `http://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positionClass =
    position === "bottom-left" ? "bottom-6 left-6" : "bottom-6 right-6";
  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferer"
        aria-label="Chat on WhatsApp"
        className={`fixed ${positionClass} z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl`}
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
