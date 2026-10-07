import type { Metadata, Viewport } from "next";
import { Cormorant_SC, Inter, Unbounded } from "next/font/google";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-druk",
  display: "swap",
});

const credit = Cormorant_SC({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-credit",
  display: "swap",
});

const description = `${site.name}. ${site.roleLine}.`;

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: site.name,
    description,
    type: "profile",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.linkedin, site.github],
  jobTitle: "AI engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${credit.variable} h-full antialiased`}>
      <body className="min-h-[100dvh] bg-obsidian font-sans text-bone antialiased">
        <SkipLink />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
