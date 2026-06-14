import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Syne, Sora } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Baratio Asesores | Ahorro energético en Madrid",
  description:
    "Asesoría energética independiente en Madrid. Comparamos tarifas y buscamos la mejor opción para tu hogar o empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${syne.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-[#13233b]">
        {children}
      </body>
    </html>
  );
}
