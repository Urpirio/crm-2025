import React from "react";
import Section_Header from "../../components/Components/Section_Header";
import Section_Footer from "../../components/Components/Section_Footer";

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <Section_Header />
        {children}
        <Section_Footer />
      </body>
    </>
  );
}
