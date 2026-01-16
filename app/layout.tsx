import type { Metadata } from "next";
import { Geist, Geist_Mono, Italianno, Lato, Fira_Sans } from "next/font/google";
import "./globals.css";

const italy = Italianno({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-italy",
})

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-lato",
})

const fira = Fira_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-fira",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viprent",
  description: "Rent Luxury and Sport cars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${lato.variable} ${fira.variable} ${italy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


