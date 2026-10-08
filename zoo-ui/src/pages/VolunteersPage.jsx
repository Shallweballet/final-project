import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function VolunteersPage() {
  const { t } = useTranslation();

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
        {t("volunteers.title")} 🤝
      </h1>
      <p className="text-center text-[#8D6E63] mb-12 max-w-2xl mx-auto">
        {t("volunteers.subtitle")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          {t("volunteers.doTitle")}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            t("volunteers.task1"),
            t("volunteers.task2"),
            t("volunteers.task4"),
            t("volunteers.task6")
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
          {t("volunteers.askTitle")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              emoji: "🎂",
              titleKey: "volunteers.req1Title",
              textKey: "volunteers.req1Text"
            },
            {
              emoji: "⏰",
              titleKey: "volunteers.req2Title",
              textKey: "volunteers.req2Text"
            },
            {
              emoji: "💛",
              titleKey: "volunteers.req3Title",
              textKey: "volunteers.req3Text"
            }
          ].map((r) => (
            <div
              key={r.titleKey}
              className="
                bg-white rounded-[18px] p-6 text-center
                border-t-[6px] border-[#43AA8B]
                shadow-[0_8px_24px_rgba(29,53,87,0.12)]
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(29,53,87,0.18)]
              "
            >
              <div className="text-4xl mb-3">{r.emoji}</div>
              <h3 className="font-bold text-[#1D3557] mb-2">
                {t(r.titleKey)}
              </h3>
              <p className="text-sm text-[#8D6E63]">{t(r.textKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF9F0] rounded-[18px] p-8 border-2 border-[#EEDFCB]">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
          {t("volunteers.signupTitle")}
        </h2>

        {status === "success" && (
          <div className="mb-6 text-center bg-[#E9F7EF] border-2 border-[#43AA8B] text-[#1D3557] font-semibold px-4 py-3 rounded-xl">
            {t("volunteers.successMsg")}
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 text-center bg-[#FDE8E8] border-2 border-[#E63946] text-[#1D3557] font-semibold px-4 py-3 rounded-xl">
            {t("volunteers.errorMsg")}
          </div>
        )}

        <form
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder={t("volunteers.formName")}
            required
            value={form.name}
            onChange={update("name")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <input
            type="email"
            placeholder={t("volunteers.formEmail")}
            required
            value={form.email}
            onChange={update("email")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <input
            type="tel"
            placeholder={t("volunteers.formPhone")}
            value={form.phone}
            onChange={update("phone")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          />
          <select
            value={form.shift}
            onChange={update("shift")}
            className="px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] focus:border-[#43AA8B] focus:outline-none"
          >
            <option value="">{t("volunteers.formShift")}</option>
            <option>{t("volunteers.formShiftMorning")}</option>
            <option>{t("volunteers.formShiftAfternoon")}</option>
            <option>{t("volunteers.formShiftWeekends")}</option>
          </select>
          <textarea
            placeholder={t("volunteers.formMessage")}
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
            {status === "sending"
              ? t("volunteers.formSending")
              : `${t("volunteers.formSubmit")} 🐾`}
          </button>
        </form>
      </section>
    </div>
  );
}