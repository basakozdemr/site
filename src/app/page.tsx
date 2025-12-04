// src/app/page.tsx
import Link from "next/link";

const mainMenuItem = {
  title: "Arkadaşlık Testi",
  description: "Arkadaşların seni ne kadar tanıyor, gör.",
  href: "https://test.flovi.com.tr", // ← burada diğer projenin URL'i olacak
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
          <p className="mt-3 text-sm text-[#A35C7D]">
            Şimdilik Flovi&apos;de bir oyun var: arkadaşlık testi.
            Yakında farklı mini uygulamalar da eklenecek.
          </p>
        </section>

        {/* Kart */}
        <section className="w-full max-w-md">
          <Link
            href={mainMenuItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#FFE4EC] bg-[#FFF5F8] p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#FFE4EC] px-3 py-1 text-[11px] font-semibold text-[#BF2755]">
                💘 Arkadaşlık Testi
              </div>

              <h2 className="text-2xl font-bold text-[#220818]">
                {mainMenuItem.title}
              </h2>

              <p className="text-sm text-[#A35C7D]">
                {mainMenuItem.description}
              </p>

              <div className="mt-3 inline-flex items-center gap-1 self-start rounded-full bg-[#F9487B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#E63E70]">
                Hemen başla
                <span>→</span>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
