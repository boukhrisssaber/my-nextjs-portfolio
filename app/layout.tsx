import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saber Boukhriss | Cybersecurity Product Owner & SOC Lead",
  description: "Cybersecurity Professional with expertise in SOC, Penetration Testing, GRC, AWS Cloud Security, and Product Management. ISO 27001 Lead Auditor and CEH certified. Based in Tunis, Tunisia.",
  keywords: ["Cybersecurity", "SOC", "Penetration Testing", "GRC", "ISO 27001", "NIS2", "GDPR", "Product Owner", "SIEM", "AWS", "Cloud Security"],
  authors: [{ name: "Saber Boukhriss" }],
  openGraph: {
    title: "Saber Boukhriss | Cybersecurity Product Owner & SOC Lead",
    description: "Cybersecurity Professional with expertise in SOC, Penetration Testing, GRC, AWS Cloud Security, and Product Management. ISO 27001 Lead Auditor and CEH certified.",
    url: "https://boukhrisssaber.tn",
    siteName: "Saber Boukhriss",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 min-h-full`}
      >
        <Provider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
