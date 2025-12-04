// src/components/layout/MainHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export function MainHeader() {
    return (
        <header className="w-full border-b border-rose-100/70 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Sol: logo + Flovi */}
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-rose-50"
                >
                    {/* Logo alanı */}
                    <div className="relative h-9 w-9">
                        {/* Logon hazır olduğunda bu Image'ı aktif et */}

                        <Image
                            src="/logo.png"
                            alt="Flovi"
                            width={36}
                            height={36}
                            className="rounded-xl"
                        />


                    </div>

                    <span className="text-lg font-semibold tracking-tight text-rose-900">
                        flovi
                    </span>
                </Link>

                {/* Sağ taraf – ileride başka linkler koyarız */}
                <div className="flex items-center gap-3 text-xs text-rose-500">
                    {/* Örnek:
          <Link href="/about" className="hover:text-rose-700">
            Hakkında
          </Link>
          */}
                </div>
            </div>
        </header>
    );
}
