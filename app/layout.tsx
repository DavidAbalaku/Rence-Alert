import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rence Alert | Beautiful JavaScript Alert & Notification Library",
  description: "Rence Alert is a beautiful, responsive, and customizable JavaScript alert, toast, and notification library built on Material Design 3. A modern SweetAlert alternative for React, Next.js, and vanilla JS.",
  keywords: [
    "rence",
    "rence alert",
    "alert library",
    "javascript alert",
    "search alert",
    "web alert",
    "notification library",
    "toast notification",
    "Material Design 3",
    "Material Design alert",
    "SweetAlert alternative",
    "SweetAlert2 alternative",
    "React alert",
    "Next.js alert",
    "popup library",
    "modal library",
    "javascript popup",
    "javascript notification",
    "snackbar",
    "web notification",
    "custom alert",
    "beautiful alert",
    "modern alert",
    "alert UI",
    "dialog library",
    "confirm dialog",
    "javascript modal",
    "rence ui",
    "rence framework",
    "David Abalaku"
  ],
  authors: [{ name: "David Abalaku" }],
  creator: "David Abalaku",
  metadataBase: new URL("https://davidabalaku.github.io/Rence-Alert"),
  alternates: {
    canonical: "https://davidabalaku.github.io/Rence-Alert/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Rence Alert — Beautiful JavaScript Alert Library',
    description: 'A modern, zero-dependency Material Design 3 alert library for web apps. Replaces SweetAlert with beautiful toasts, modals, snackbars & more.',
    url: 'https://davidabalaku.github.io/Rence-Alert/',
    siteName: 'Rence Alert',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DavidAbalaku/Rence-Alert/main/public/banner.png',
        width: 1200,
        height: 630,
        alt: 'Rence Alert - Material Design 3 Alert Library'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rence Alert — Beautiful JavaScript Alert Library',
    description: 'A modern Material Design 3 alert & notification library. Beautiful toasts, modals, snackbars for React & vanilla JS.',
    images: ['https://raw.githubusercontent.com/DavidAbalaku/Rence-Alert/main/public/banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
