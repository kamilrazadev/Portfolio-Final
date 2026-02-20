import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Kamil Raza (kamilrazadev) | Full Stack MERN Developer",
  description:
    "Official portfolio of kamilrazadev (Muhammad Kamil Raza). Experienced Full Stack MERN Developer specializing in React, Next.js, and secure backend architecture.",
  metadataBase: new URL("https://kamilraza.me"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "kamilrazadev",
    "Muhammad Kamil Raza",
    "Full Stack Developer Pakistan",
    "MERN Stack Developer",
    "React Next.js Developer",
    "Scalable Web Application Developer",
    "Secure Enterprise Platforms",
  ],
  authors: [{ name: "Muhammad Kamil Raza" }],
  creator: "Muhammad Kamil Raza",
  publisher: "Muhammad Kamil Raza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Kamil Raza | Full Stack MERN Developer",
    description:
      "Building secure, high-performance digital platforms that scale with confidence.",
    url: "https://kamilraza.me",
    siteName: "Muhammad Kamil Raza Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Kamil Raza Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kamil Raza | Full Stack MERN Developer",
    description:
      "Building secure, high-performance digital platforms that scale with confidence.",
    images: ["/images/logo.png"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Kamil Raza",
              alternateName: "kamilrazadev",
              jobTitle: "Full Stack MERN Developer",
              url: "https://kamilraza.me",
              sameAs: [
                "https://linkedin.com/in/kamilrazadev",
                "https://github.com/kamilrazadev",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "MERN Stack",
                "Cybersecurity",
                "Cloud Architecture",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sindh Madressatul Islam University",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen relative overflow-hidden bg-background">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
