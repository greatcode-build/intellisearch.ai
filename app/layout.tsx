import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "./context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "intellisearch.ai",
  description:
    "An AI-powered search and productivity assistant that helps users find answers, summarize information, and interact with knowledge through a clean conversational interface.",
  icons: "intellisearch.ai-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <ClerkProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
