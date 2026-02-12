
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
    images: [
      {
        url: "/avatar.jpg", // Using the avatar as the OG image
        width: 1200,
        height: 630,
        alt: "Sunny Editorax - Professional Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Editorax | Professional Video Editor",
    description: "Expert video editor specializing in viral Instagram Reels, YouTube Shorts, and TikTok content.",
    images: ["/avatar.jpg"],
    creator: "@sunny_editorax",
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
        className={`${inter.variable} ${playfair.variable} antialiased bg-soft-gradient min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
