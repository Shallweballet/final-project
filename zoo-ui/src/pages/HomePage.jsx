import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-8 mb-16">
        <h1 className="text-5xl font-black text-[#1D3557] mb-4">
          {t("home.heroTitle")} 🎪
        </h1>
        <p className="text-[#8D6E63] max-w-xl mx-auto mb-8 text-lg">
          {t("home.heroSubtitle")}
        </p>
        <Link
          to="/animals"
          className="
            inline-block px-8 py-3.5 rounded-full font-bold text-white
            bg-[#E63946] shadow-[0_6px_0_#b52b36]
            hover:-translate-y-0.5 hover:shadow-[0_8px_0_#b52b36]
            transition-all
          "
        >
          {t("home.heroCta")} →
        </Link>
      </div>

      <section className="mb-10 text-center">
        <h2 className="text-3xl font-black text-[#1D3557] mb-6">
          {t("home.aboutTitle")} 🎪
        </h2>
        <p className="text-[#8D6E63] max-w-2xl mx-auto">
          {t("home.aboutText")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
          {t("home.missionTitle")}
        </h2>
        <p className="text-[#2B2D42] leading-relaxed mb-4">
          {t("home.missionText")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          {t("home.valuesTitle")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { emoji: "🌱", titleKey: "home.value1Title", textKey: "home.value1Text" },
            { emoji: "🎓", titleKey: "home.value2Title", textKey: "home.value2Text" },
            { emoji: "👨‍👩‍👧", titleKey: "home.value3Title", textKey: "home.value3Text" }
          ].map((v) => (
            <div
              key={v.titleKey}
              className="
                bg-white rounded-[18px] p-6
                border-t-[6px] border-[#FFD166]
                shadow-[0_8px_24px_rgba(29,53,87,0.12)]
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(29,53,87,0.18)]
              "
            >
              <div className="text-4xl mb-3">{v.emoji}</div>
              <h3 className="text-lg font-bold text-[#1D3557] mb-2">
                {t(v.titleKey)}
              </h3>
              <p className="text-sm text-[#8D6E63]">{t(v.textKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          {t("home.teamTitle")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { emoji: "👨‍💼", nameKey: "home.director", roleKey: "home.roleDirector" },
            { emoji: "👩‍🏫", nameKey: "home.education", roleKey: "home.roleEducation" },
            { emoji: "👩‍🌾", nameKey: "home.caretaker", roleKey: "home.roleCaretaker" },
            { emoji: "👨‍⚕️", nameKey: "home.healthcare", roleKey: "home.roleHealthcare" }
          ].map((p) => (
            <div
              key={p.nameKey}
              className="
                bg-[#FFF9F0] rounded-[18px] p-5
                flex items-center gap-4
                border-2 border-[#EEDFCB]
              "
            >
              <div className="text-4xl">{p.emoji}</div>
              <div>
                <h3 className="font-bold text-[#1D3557]">{t(p.nameKey)}</h3>
                <p className="text-xs text-[#8D6E63]">{t(p.roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}