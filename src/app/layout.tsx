// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { MainHeader } from "../../components/layout/MainHeader";
import Script from "next/script";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Flovi – Mini testler ve oyunlarla eğlenceli anlar✨",
  description: "Flovi, arkadaşlık testleri ve küçük oyunlarla seni ve arkadaşlarını eğlendiren mini bir dünya. Şimdilik arkadaşlık testi var; yakında yeni mini uygulamalar da eklenecek.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={sourGummy.variable}>
      <head>
        {/* Google Analytics - flovi ana site */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K31MZ766KK"
        />
        <Script id="ga-flovi" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K31MZ766KK', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
