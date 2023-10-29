import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styles from "./Styles/globals.scss";

import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Astra Studios",
  description: "Astra Studios by AJ Smith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, archive"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={dosis.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
