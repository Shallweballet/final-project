import { useTranslation } from "react-i18next";

const TICKET_URL = "https://tkt.ge/event/267704/tbilisis-zooparki";

function PriceCard({ title, emoji, prices, accent }) {
  return (
    <div
      className="
        bg-white rounded-[22px] overflow-hidden
        shadow-[0_12px_32px_rgba(29,53,87,0.10)]
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(29,53,87,0.16)]
      "
    >
      <div
        className="px-6 py-5 text-center text-white"
        style={{ backgroundColor: accent }}
      >
        <div className="text-4xl mb-1">{emoji}</div>
        <h3 className="text-xl font-black">{title}</h3>
      </div>

      <ul className="divide-y divide-[#F0E4D4]">
        {prices.map((p) => (
          <li
            key={p.age}
            className="flex items-center justify-between px-6 py-4"
          >
            <div>
              <p className="font-bold text-[#1D3557]">{p.age}</p>
              <p className="text-xs text-[#8D6E63]">{p.note}</p>
            </div>
            <span className="text-2xl font-black text-[#E63946]">
              {p.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TicketsPage() {
  const { t } = useTranslation();

  const zooPrices = [
    { age: t("tickets.under3"), price: t("tickets.free"), note: t("tickets.freeNote") },
    { age: t("tickets.from3to12"), price: "2 ₾", note: t("tickets.kidsPrice") },
    { age: t("tickets.over12"), price: "4 ₾", note: t("tickets.standardPrice") }
  ];

  const exotariumPrices = [
    { age: t("tickets.under3"), price: t("tickets.free"), note: t("tickets.freeNote") },
    { age: t("tickets.from3to12"), price: "1 ₾", note: t("tickets.kidsPrice") },
    { age: t("tickets.over12"), price: "2 ₾", note: t("tickets.standardPrice") }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-[#1D3557] mb-4 text-center">
        {t("tickets.title")} 🎟️
      </h1>
      <p className="text-center text-[#8D6E63] mb-12 max-w-2xl mx-auto">
        {t("tickets.subtitle")}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <PriceCard
          title={t("tickets.zooTitle")}
          emoji="🦁"
          prices={zooPrices}
          accent="#58c2a2"
        />
        <PriceCard
          title={t("tickets.exotariumTitle")}
          emoji="🦎"
          prices={exotariumPrices}
          accent="#ee5e6a"
        />
      </div>

      <div
        className="
          bg-[#E9F7EF] border-2 border-[#43AA8B]
          rounded-[18px] p-6 mb-12
          flex items-start gap-4
        "
      >
        <div className="text-3xl">💚</div>
        <div>
          <h3 className="font-bold text-[#1D3557] mb-1">
            {t("tickets.freeTitle")}
          </h3>
          <p className="text-sm text-[#2B2D42] leading-relaxed">
            {t("tickets.freeText")}
          </p>
        </div>
      </div>

      <div
        className="
          bg-[#FFF9F0] border-2 border-[#EEDFCB]
          rounded-[22px] p-8 text-center
        "
      >
        <div className="text-4xl mb-3">🎪</div>
        <h2 className="text-2xl font-bold text-[#1D3557] mb-3">
          {t("tickets.buyTitle")}
        </h2>
        <p className="text-[#8D6E63] mb-6 max-w-lg mx-auto text-sm">
          {t("tickets.buyText")}
        </p>
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-8 py-3.5 rounded-full font-bold text-white
            bg-[#E63946] shadow-[0_6px_0_#b52b36]
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_8px_0_#b52b36]
            active:translate-y-1 active:shadow-[0_2px_0_#b52b36]
          "
        >
          {t("tickets.buyButton")} 🎟️
        </a>
      </div>
    </div>
  );
}