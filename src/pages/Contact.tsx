import type { JSX } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ScrollAnimation } from "../components/common";

/* ================================
   ZOD VALIDATION
================================ */

const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = (): JSX.Element => {
  const [contactLoading, setContactLoading] = useState(false);

  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  /* ================================
     WEB3FORMS SUBMIT
  ================================ */

  const onSubmit = async (data: ContactFormData) => {
    setContactLoading(true);
    setResult("");

    const formData = {
      access_key: "59c11748-d6fa-4be0-b642-3f7faf27d46a", // 🔴 PUT KEY HERE
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.success) {
        setResult("✅ Message sent successfully!");
        reset();
      } else {
        setResult(res.message || "❌ Failed to send message");
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white pt-25 overflow-hidden">
      {/* HERO GLOW BACKGROUND */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-warmpink/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 grid lg:grid-cols-2 gap-12">
        {/* CONTACT FORM */}
        <ScrollAnimation x={-80} y={60} duration={0.8}>
          <div className="relative">
            <div className="absolute inset-0 bg-warmpink/10 blur-3xl rounded-3xl" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-5"
          >
            <h2 className="text-2xl font-bold text-warmpink">Send a Message</h2>

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone.message}</p>
            )}

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm">{errors.subject.message}</p>
            )}

            {/* MESSAGE */}
            <textarea
              rows={5}
              placeholder="Paste Your Order Details Here..."
              {...register("message")}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message.message}</p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={contactLoading}
              className="w-full flex items-center justify-center gap-3 mt-10 bg-warmpink hover:bg-primary-dark text-white py-4 rounded-2xl font-semibold shadow-[0_0_25px_rgba(255,105,180,0.3)] transition hover:scale-[1.02] disabled:opacity-70"
            >
              {contactLoading ? "Sending..." : "Submit Message"}
            </button>

            {/* RESULT */}
            {result && (
              <p className="text-sm text-gray-300 mt-2 text-center">{result}</p>
            )}
          </form>
        </div>
        </ScrollAnimation>

        {/* CONTACT INFO */}
        <ScrollAnimation x={80} y={60} duration={0.8}>
        <div className="space-y-8">
          <div className="grid gap-5">
            {/* LOCATION */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl">
              <FaMapMarkerAlt className="text-warmpink text-xl" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-300 text-sm">Accra, Ghana</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl">
              <FaPhone className="text-warmpink text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-300 text-sm">+233 53 183 0827</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl">
              <FaEnvelope className="text-warmpink text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300 text-sm break-all">
                  adapreciousemmanuel@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.977671459743!2d-0.20113378991305914!3d5.716241831994655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d4c8737831f%3A0x97960623a351d1b0!2sBENILA%20FOOD-HOOD!5e1!3m2!1sen!2sgh!4v1778660497909!5m2!1sen!2sgh"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Map"
            />
          </div>
        </div>
        </ScrollAnimation>
      </div>
      
    </div>
  );
};

export default Contact;
