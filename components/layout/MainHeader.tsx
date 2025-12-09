// src/components/layout/MainHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

const MAIN_SITE_URL = "https://flovi.com.tr"; // Ana proje URL'in

export function MainHeader() {

    const handleLogoClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = MAIN_SITE_URL;
    }, []);

    return (
        <header className="w-full border-b border-rose-100/60 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

                {/* Sol taraf: Logo + Flovi */}
                <button
                    onClick={handleLogoClick}
                    className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-rose-50"
                >

                    <Image
                        src="/logo.png"
                        alt="Flovi"
                        width={36}
                        height={36}
                        className="rounded-xl"
                    />






                    <span className="text-xl font-main font-semibold tracking-tight text-rose-900">
                        Flovi
                    </span>
                </button>

                {/* Sağ taraf – ileride başka linkler koyarız */}
                <div className="flex items-center gap-3 text-xs text-rose-500">
                    {/* Örnek:
          <Link href="/about" className="hover:text-rose-700">
            Hakkında
          </Link>
          */}
                </div>
            </div >
        </header >
    );
}
