import React, { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// const GOOGLE_SHEET_WEBAPP_URL =

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    try {
      // 1️⃣ Send to Google Sheets

      const GOOGLE_SHEET_WEBAPP_URL = import.meta.env.GOOGLE_SHEET_WEBAPP_URL;
      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // 2️⃣ Send via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-[#0B0C10] text-gray-100 px-6 md:px-16 lg:px-24 py-20"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        <span className="text-indigo-400">Contact</span> Me
      </h2>
      <div className="max-w-2xl mx-auto bg-[#11121A] p-8 rounded-xl border border-gray-800">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#0B0C10] border border-gray-700 rounded-md text-gray-100 focus:border-indigo-500 focus:ring-0 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#0B0C10] border border-gray-700 rounded-md text-gray-100 focus:border-indigo-500 focus:ring-0 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 bg-[#0B0C10] border border-gray-700 rounded-md text-gray-100 focus:border-indigo-500 focus:ring-0 outline-none resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail size={40} className="text-indigo-400" />
            <p className="text-lg text-gray-300 font-medium">
              Thanks for reaching out!
            </p>
            <p className="text-sm text-gray-500">
              Your message has been received.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
