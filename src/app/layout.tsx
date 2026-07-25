import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Moses Tule / Founder & Builder",
  description:
    "Moses Tule. Two time startup founder, Computing Science student, and independent AI/ML researcher. Portfolio, research, and memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", archivo.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
