import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eat Curious Clone",
  description: "A clone of the official Eat Curious vegan-based food website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}