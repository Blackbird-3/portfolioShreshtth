import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, SkipLink } from "@/components/site-header";
import { ThemeColor, ThemeProvider } from "@/components/theme-provider";
import { zIndex } from "@/lib/z-index";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Shreshtth Kumar Agarwaal. Voice platform cut average call handling by 35%. M.Sc. student in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden.";

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
    { media: "(prefers-color-scheme: light)", color: "#e6eee8" },
    { media: "(prefers-color-scheme: dark)", color: "#101613" },
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
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
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
