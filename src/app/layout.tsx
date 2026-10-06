import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Newsreader } from "next/font/google";
import { SkipLink } from "@/components/skip-link";
import { ThemeColor, ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
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
  jobTitle: "AI engineer",
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
