import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, SkipLink } from "@/components/site-header";
import { ThemeColor, ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const description =
  "Shreshtth Kumar Agarwaal, M.Sc. student in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden. Open to Werkstudent roles.";

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
    { media: "(prefers-color-scheme: light)", color: "#e7e9ed" },
    { media: "(prefers-color-scheme: dark)", color: "#13161b" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  sameAs: [site.linkedin],
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
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] bg-bg font-sans text-ink antialiased">
        <ThemeProvider>
          <ThemeColor />
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
