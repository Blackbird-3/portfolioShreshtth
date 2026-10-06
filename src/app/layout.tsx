import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { SkipLink } from "@/components/skip-link";
import { ThemeColor, ThemeProvider } from "@/components/theme-provider";
import { zIndex } from "@/lib/z-index";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const description = `${site.name}. ${site.roleLine}.`;

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
    { media: "(prefers-color-scheme: light)", color: "#e4e2d7" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
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
  jobTitle: "AI / ML engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "OTH Amberg-Weiden",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amberg",
      addressCountry: "DE",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] bg-bg font-serif text-ink antialiased">
        <ThemeProvider>
          <ThemeColor />
          <div aria-hidden className="grain" style={{ zIndex: zIndex.grain }} />
          <SkipLink />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
