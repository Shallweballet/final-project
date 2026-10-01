import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-8 mb-16">
        <h1 className="text-5xl font-black text-[#1D3557] mb-4">
          Welcome to Tbilisi Zoo 🎪
        </h1>
        <p className="text-[#8D6E63] max-w-xl mx-auto mb-8 text-lg">
          A world of wonder, one animal at a time.
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
          Meet the Animals →
        </Link>
      </div>

      <section className="mb-10 text-center">
        <h2 className="text-3xl font-black text-[#1D3557] mb-6">
          About Us 🎪
        </h2>
        <p className="text-[#8D6E63] max-w-2xl mx-auto">
          Tbilisi Zoo is a place where families, kids, and animal lovers come
          together to learn, laugh, and explore.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
          Our Story
        </h2>
        <p className="text-[#2B2D42] leading-relaxed mb-4">
          Our mission is to protect wildlife through education and conservation. We focus especially on the biodiversity of the Caucasus and on bringing endangered local species back from the brink. And through a space built for curiosity and play, we help every visitor fall in love with the animal world.
        </p>
      </section>

      {/* What We Believe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          What We Believe
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              emoji: "🌱",
              title: "Care for Animals",
              text: "Every animal here is rescued, protected, and loved."
            },
            {
              emoji: "🎓",
              title: "Learn Through Play",
              text: "We teach curiosity, not facts. Discovery first."
            },
            {
              emoji: "👨‍👩‍👧",
              title: "Family First",
              text: "Everything we do is designed for kids and grown-ups."
            }
          ].map((v) => (
            <div
              key={v.title}
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
                {v.title}
              </h3>
              <p className="text-sm text-[#8D6E63]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          Our Team
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { emoji: "👨‍💼", name: "Tornike", role: "Zoo Director" },
            { emoji: "👩‍🏫", name: "Marika", role: "Education Lead" },
            { emoji: "👩‍🌾", name: "Tsiala", role: "Animal Caretaker" },
            { emoji: "👨‍⚕️", name: "Daviti", role: "Animal Healthcare" }
          ].map((p) => (
            <div
              key={p.name}
              className="
                bg-[#FFF9F0] rounded-[18px] p-5
                flex items-center gap-4
                border-2 border-[#EEDFCB]
              "
            >
              <div className="text-4xl">{p.emoji}</div>
              <div>
                <h3 className="font-bold text-[#1D3557]">{p.name}</h3>
                <p className="text-xs text-[#8D6E63]">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}