
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunny-etx.vercel.app"),
  title: {
    default: "Sunny Editorax | Professional Video Editor",
    template: "%s | Sunny Editorax"
  },
  description: "Expert video editor specializing in viral Instagram Reels, YouTube Shorts, and TikTok content. Over 500+ videos edited with million-plus views.",
  keywords: ["Video Editor", "Instagram Reels", "YouTube Shorts", "TikTok Editor", "Viral Content", "Sunny Editorax", "Video Editing Services"],
  authors: [{ name: "Sunny Editorax" }],
  creator: "Sunny Editorax",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sunny-etx.vercel.app",
    title: "Sunny Editorax | Professional Video Editor",
    description: "Expert video editor specializing in viral Instagram Reels, YouTube Shorts, and TikTok content.",
    siteName: "Sunny Editorax",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Editorax | Professional Video Editor",
    description: "Expert video editor specializing in viral Instagram Reels, YouTube Shorts, and TikTok content.",
    creator: "@sunny_editorax",
  },
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased bg-soft-gradient min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
