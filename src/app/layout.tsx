import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Moses Tule / Founder & AI Builder",
  description:
    "Moses Tule. AI enthusiast, builder, and two time startup founder. Portfolio, applied AI research, and work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", archivo.variable, "font-sans", geist.variable)}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
