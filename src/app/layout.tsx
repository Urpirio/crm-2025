"use client";
import Section_Header from "../../components/Components/Section_Header";
import Section_Footer from "../../components/Components/Section_Footer";
import "@/../style/global.css";
import { Poppins } from "next/font/google";
import { useState } from "react";

// const albert = Albert_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
});

export default function Layout({ children }: React.PropsWithChildren) {
  const [MenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className={`${poppins.className} overflow-x-hidden`} onTouchMove={()=>setMenuOpen(false)}>
        <Section_Header setMenuOpen={setMenuOpen} MenuOpen={MenuOpen} />
        {children}
        <Section_Footer />
      </body>
    </html>
  );
}
