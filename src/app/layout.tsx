import Section_Header from "../../components/Components/Section_Header";
import Section_Footer from "../../components/Components/Section_Footer";
import "@/../style/global.css";
import {  Poppins } from "next/font/google";

// const albert = Albert_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400", "700", "800", "900"] });

export default function layout({ children }: React.PropsWithChildren) {
  return (
     <html lang="en">
     <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
     </head>
     <body className={poppins.className}>
      <Section_Header />
      {children}
      <Section_Footer />
     </body>
     </html>
  );
}
