// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { MainHeader } from "../../components/layout/MainHeader";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Flovi",
  description: "Flovi mini uygulamalar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={sourGummy.variable}>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
