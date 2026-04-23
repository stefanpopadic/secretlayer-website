import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jubilee = localFont({
  variable: "--font-jubilee",
  display: "swap",
  src: [
    { path: "../public/fonts/OTJubilee-RubyRegular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/OTJubilee-RubyRegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/OTJubilee-RubyMedium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/OTJubilee-RubyMediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/OTJubilee-RubyBold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/OTJubilee-RubyBoldItalic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secretlayer.co"),
  title: {
    default: "Secret Layer — The warm-up layer B2B funnels are missing",
    template: "%s · Secret Layer",
  },
  description:
    "We build the middle of your funnel. Website, AI tools, content, SEO, AEO, email nurture, attribution. 10 qualified leads in 90 days or we work free.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://secretlayer.co",
    siteName: "Secret Layer",
    title: "Secret Layer — The warm-up layer B2B funnels are missing",
    description:
      "We build the middle of your funnel. Website, AI tools, content, SEO, AEO, email nurture, attribution. 10 qualified leads in 90 days or we work free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Layer — The warm-up layer B2B funnels are missing",
    description:
      "We build the middle of your funnel. 10 qualified leads in 90 days or we work free.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jubilee.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ink text-bone">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
