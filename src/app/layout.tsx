import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import { AppProvider } from "@/components/app-context";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Repo Viewer",
  description: "Manage and create you files.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
