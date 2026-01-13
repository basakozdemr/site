// src/app/page.tsx
import Link from "next/link";

const mainMenuItem = {
  title: "Arkadaşlık Testi",
  description: "Arkadaşların seni ne kadar tanıyor, gör.",
  href: "https://arkadaslik-testi.flovi.com.tr", // ← burada diğer projenin URL'i olacak
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#220818]">
      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12">
        {/* Başlık */}
        <section className="max-w-xl text-center mb-10">
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Ne yapmak istersin?
          </h1>
        </section>

        {/* Kartlar */}
        <section className="w-full max-w-md space-y-6">
          {/* Mevcut kart */}
          <Link
            href={mainMenuItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#FFE4EC] bg-[#FFF5F8] p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#FFE4EC] px-3 py-1 text-sm font-semibold text-[#BF2755]">
                💘 Arkadaşlık Testi
              </div>

              <h2 className="text-2xl font-bold text-[#220818]">
                {mainMenuItem.title}
              </h2>

              <p className="text-base text-[#A35C7D]">
                {mainMenuItem.description}
              </p>

              <div className="mt-3 inline-flex items-center gap-1 self-start rounded-full bg-[#F9487B] px-4 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-[#E63E70]">
                Hemen başla
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Yeni kart (çok yakında) */}
          <div className="block rounded-3xl border border-purple-300 bg-purple-50 p-6 shadow-sm opacity-90">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                🟣 Yeni Uygulama
              </div>

              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-[#220818]">
                  Yeni Uygulama
                </h2>

              </div>

              <p className="text-base text-[#A35C7D]">
                Bu mini uygulama çok yakında...
              </p>

              <div className="mt-3 inline-flex cursor-not-allowed items-center gap-1 self-start rounded-full bg-purple-500 px-4 py-2 text-base font-semibold text-white shadow-sm opacity-70">
                Yakında
                <span>→</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
