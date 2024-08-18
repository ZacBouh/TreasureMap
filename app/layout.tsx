import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "TreasureMap",
  description: "An easy banking app to monitor personal finances",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
