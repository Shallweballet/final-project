import { useState } from "react";

export default function VolunteersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shift: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:3000/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", shift: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-[#1D3557] mb-4 text-center">
        Volunteer With Us 🤝
      </h1>
      <p className="text-center text-[#8D6E63] mb-12 max-w-2xl mx-auto">
        Lend a hand, learn about animals, and help us make every kid's visit
        unforgettable.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          What You'll Do
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Help feed and care for animals",
            "Guide families on the zoo grounds",
            "Teach kids about wildlife",
            "Help at events and workshops"
          ].map((task) => (
            <li
              key={task}
              className="
                flex items-center gap-3 bg-[#FFF9F0] rounded-xl px-4 py-3
                border-2 border-[#EEDFCB] text-[#2B2D42]
              "
            >
              <span className="text-xl">✅</span>
              <span className="text-sm font-medium">{task}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          What We Ask
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { emoji: "🎂", title: "16 or Older", text: "Younger? Join our junior program." },
            { emoji: "⏰", title: "4 Hours a Week", text: "Flexible shifts, mornings, afternoons or weekends." },
            { emoji: "💛", title: "Love Animals", text: "No experience needed — we'll train you." }
          ].map((r) => (
            <div
              key={r.title}
              className="
                bg-white rounded-[18px] p-6 text-center
                border-t-[6px] border-[#43AA8B]
                shadow-[0_8px_24px_rgba(29,53,87,0.12)]
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(29,53,87,0.18)]
              "
            >
              <div className="text-4xl mb-3">{r.emoji}</div>
              <h3 className="font-bold text-[#1D3557] mb-2">{r.title}</h3>
              <p className="text-sm text-[#8D6E63]">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF9F0] rounded-[18px] p-8 border-2 border-[#EEDFCB]">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
          Sign Up
        </h2>

        {status === "success" && (
          <div className="mb-6 text-center bg-[#E9F7EF] border-2 border-[#43AA8B] text-[#1D3557] font-semibold px-4 py-3 rounded-xl">
            Thanks! Your application was saved. 🐾
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 text-center bg-[#FDE8E8] border-2 border-[#E63946] text-[#1D3557] font-semibold px-4 py-3 rounded-xl">
            Something went wrong. Please try again.
          </div>
        )}

        <form
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={update("name")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={update("email")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={update("phone")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <select
            value={form.shift}
            onChange={update("shift")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          >
            <option value="">Preferred shift</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Weekends only</option>
          </select>
          <textarea
            placeholder="Why do you want to volunteer?"
            rows="4"
            value={form.message}
            onChange={update("message")}
            className="sm:col-span-2 px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="
              sm:col-span-2 inline-block px-8 py-3.5 rounded-full font-bold
              text-[#1D3557] bg-[#FFD166]
              shadow-[0_6px_0_#d4a800]
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_8px_0_#d4a800]
              active:translate-y-1 active:shadow-[0_2px_0_#d4a800]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {status === "sending" ? "Sending…" : "Send Your Application 🐾"}
          </button>
        </form>
      </section>
    </div>
  );
}