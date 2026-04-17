import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rence Alert | Premium Material Design Alerts",
  description: "The most beautiful, responsive, and customizable Material Design 3 alert library for modern web and mobile apps.",
  keywords: ["Material Design 3", "Rence Alert", "JavaScript Alert", "SweetAlert alternative", "React Toast", "Web Notifications"],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Rence Alert',
    description: 'The most beautiful Material Design 3 alert library.',
    url: 'https://DavidAbalaku.github.io/Rence-Alert/',
    siteName: 'Rence Alert',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DavidAbalaku/Rence-Alert/main/public/banner.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rence Alert',
    description: 'The most beautiful Material Design 3 alert library.',
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
