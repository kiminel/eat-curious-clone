import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/main/Header";
import FooterBanner from "@components/animations/FooterBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eat Curious Clone",
  description:
    "A clone of the Eat Curious vegan-based food website, designed by Fiasco Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterBanner />
      </body>
    </html>
  );
}
