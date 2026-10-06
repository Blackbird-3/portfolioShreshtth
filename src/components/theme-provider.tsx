"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const themeColors = {
  light: "#e7e9ed",
  dark: "#13161b",
} as const;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

export function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;
    const color = themeColors[resolvedTheme];
    const metas = document.querySelectorAll('meta[name="theme-color"]');
    if (metas.length === 0) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
      return;
    }
    metas.forEach((meta) => meta.setAttribute("content", color));
  }, [resolvedTheme]);

  return null;
}
