import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const mapSrc = "https://www.google.com/maps?q=Tbilisi%20Zoo&output=embed";

  return (
    <footer className="bg-[#2B2D42] text-[#B8BCC9] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-[18px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <iframe
            title="Tbilisi Zoo location"
            src={mapSrc}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-2xl font-black text-[#2A9D8F] mb-4">
            🎪 Tbilisi Zoo
          </span>
          <p className="mb-6 leading-relaxed">{t("footer.tagline")}</p>

          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold text-[#FFD166]">
                📍 {t("footer.addressLabel")}
              </span>{" "}
              {t("footer.address")}
            </li>
            <li>
              <span className="font-bold text-[#FFD166]">
                🕒 {t("footer.hoursLabel")}
              </span>{" "}
              {t("footer.hours")}
            </li>
            <li>
              <span className="font-bold text-[#FFD166]">
                ✉️ {t("footer.emailLabel")}
              </span>{" "}
              <a
                href="mailto:TbilisiZoo@gmail.com"
                className="hover:text-[#E63946] transition-colors"
              >
                TbilisiZoo@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 flex gap-4 text-sm font-bold">
            <Link to="/" className="hover:text-[#FFD166] transition-colors">
              {t("footer.home")}
            </Link>
            <Link
              to="/animals"
              className="hover:text-[#FFD166] transition-colors"
            >
              {t("footer.animals")}
            </Link>
            <a
              href="https://www.google.com/maps/place/tbilisi+zoo/data=!4m2!3m1!1s0x4044732b601ac833:0xff4b936dbf9dcb49"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD166] transition-colors"
            >
              {t("footer.directions")} ↗
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3D4059]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}