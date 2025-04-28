import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saber Boukhriss | Cybersecurity Specialist",
  description: "Junior Cybersecurity Specialist specializing in web security, pentesting, and SIEM. Certified in EC-Council's Web Application Hacking and Security, NSE 1, 2, and 3.",
  keywords: ["Cybersecurity", "Pentesting", "Web Security", "SIEM", "Qradar", "CTF Player", "Security Specialist"],
  authors: [{ name: "Saber Boukhriss" }],
  openGraph: {
    title: "Saber Boukhriss | Cybersecurity Specialist",
    description: "Junior Cybersecurity Specialist specializing in web security, pentesting, and SIEM.",
    url: "https://boukhrisssaber.tn",
    siteName: "W1seByt3s",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saber Boukhriss | Cybersecurity Specialist",
    description: "Junior Cybersecurity Specialist specializing in web security, pentesting, and SIEM.",
    creator: "@saberboukhriss",
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
        className={`${inter.className} bg-white text-black dark:bg-[#0a0a0a] dark:text-white h-full selection:bg-teal-100 dark:selection:bg-teal-900`}
      >
        <Provider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
