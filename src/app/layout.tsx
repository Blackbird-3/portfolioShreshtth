import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, SkipLink } from "@/components/site-header";
import { ThemeColor, ThemeProvider } from "@/components/theme-provider";
import { zIndex } from "@/lib/z-index";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const description =
  "Shreshtth Kumar Agarwaal, master's student at OTH Amberg-Weiden. Voice, audit, and healthcare AI, with the figures recorded for that work.";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s`,
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#121614" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.linkedin, site.github],
  jobTitle: "M.Sc. student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: site.school,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amberg",
      addressRegion: "Bavaria",
      addressCountry: "DE",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] bg-bg font-sans text-ink antialiased">
        <ThemeProvider>
          <ThemeColor />
          <div aria-hidden className="grain" style={{ zIndex: zIndex.grain }} />
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
