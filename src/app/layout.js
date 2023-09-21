import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styles from "./Styles/globals.scss";

import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Astra Studios",
  description: "Astra Studios by Alex Smith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
