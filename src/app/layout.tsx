import "./globals.css";

import type { Metadata } from "next";

import Providers from "@/app/providers";
import { Montserrat_Alternates, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Siapin | Siap Hadapi Dunia Kerja",
    template: "%s | Siapin | Siap Hadapi Dunia Kerja",
  },
  description: "Siapin | Siap Hadapi Dunia Kerja",
};

// Montserrat Alternates
const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

// Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
