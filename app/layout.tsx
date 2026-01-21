import type { Metadata } from "next";
import {Italianno, Lato, Fira_Sans, Iceland} from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-fira' });
const iceland = Iceland({ weight: '400', subsets: ['latin'], variable: '--font-iceland' });
const italy = Italianno({ weight: '400', subsets: ['latin'], variable: '--font-italy' });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });

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
    <html lang="en" className={`${fira.variable} ${iceland.variable} ${italy.variable} ${lato.variable}`}>
      <body className="overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}


