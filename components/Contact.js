import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", name: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ state: "error", msg: data?.error || "Failed to send." });
        return;
      }

      setStatus({ state: "success", msg: "Message sent. I’ll get back to you soon." });
      setForm({ email: "", name: "", subject: "", message: "" });
    } catch {
      setStatus({ state: "error", msg: "Network error. Try again." });
    }
  };

  return (
    <section id="contact" className="relative h-screen w-screen bg-black text-brand">
      <img
        src="/assets/contact.jpeg"
        alt="Contact background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* scroll interno + espaço p/ player */}
      <div className="relative z-10 h-screen overflow-y-auto px-6 pt-24 pb-28">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Contact
          </h2>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl p-6 space-y-4"
          > 
          <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                Name
              </label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                placeholder="Booking / Feature / Workshop / Other…"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60 resize-none"
                placeholder="Write your message…"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="w-full rounded-xl bg-blue-500/70 hover:bg-blue-500 text-white font-semibold py-3 transition disabled:opacity-60"
            >
              {status.state === "loading" ? "Sending..." : "Send"}
            </button>

            {status.state !== "idle" && (
              <p
                className={`text-sm text-center ${
                  status.state === "success" ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>

          <p className="text-center text-white/60 text-sm mt-4">
            Or email directly:{" "}
            <a className="underline" href="mailto:ritasilvabooking@gmail.com">
              ritasilvabooking@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
