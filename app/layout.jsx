import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Learning Blog",
  description: "Markdown powered learning blog with checklists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 main-container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
