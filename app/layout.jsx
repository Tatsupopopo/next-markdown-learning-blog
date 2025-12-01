import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Noto_Sans_JP } from "next/font/google";

import Script from "next/script";
import GoogleAnalyticsListener from "../components/GoogleAnalyticsListener";
import { Suspense } from "react";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
  title: "Web と読書とゲームと",
  description:
    "主にWebフロントエンド開発に関する勉強ログ, 趣味である読書・ゲームについての記録をまとめた個人ブログです。React.js/Next.js などを中心に勉強しサンプルコードや学習記録を掲載すると同時に, 読書やゲームの感想・攻略情報を掲載しています。",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Web と読書とゲームと",
    description:
      "主にWebフロントエンド開発に関する勉強ログ, 趣味である読書・ゲームについての記録をまとめた個人ブログです。React.js/Next.js などを中心に勉強しサンプルコードや学習記録を掲載すると同時に, 読書やゲームの感想・攻略情報を掲載しています。",
    url: "https://your-domain.com",
    siteName: "Web と読書とゲームと",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp/default-ogp.png",
        width: 1200,
        height: 630,
        alt: "Learning Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web と読書とゲームと",
    description:
      "主にWebフロントエンド開発に関する勉強ログ, 趣味である読書・ゲームについての記録をまとめた個人ブログです。React.js/Next.js などを中心に勉強しサンプルコードや学習記録を掲載すると同時に, 読書やゲームの感想・攻略情報を掲載しています。",
    images: ["/ogp/default-ogp.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* GA4 本体 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />

        <Suspense fallback={null}>
          <GoogleAnalyticsListener />
        </Suspense>

        <main className="flex-1 main-container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
