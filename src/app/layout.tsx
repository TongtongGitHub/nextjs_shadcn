import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Momo",
  description: "Best Momo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header nav with home and about page, fixed top, box shadow, hover with text primary color */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
          <nav className="flex items-center p-4 justify-between">
            <div className="flex items-center gap-4">
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
              {/* <Link className="hover:text-primary" href="/about">
                About
              </Link> */}
            </div>
            {/* <div className="flex items-center gap-4">
              <Button>Login</Button>
              <Button>Sign up</Button>
            </div> */}
          </nav>
        </header>
        {/* flex footer at bottom of page, padding top 68px, center content */}
        <main className="flex flex-col min-h-screen justify-between pt-[56px] items-center">
          {children}
          {/* footer with text center */}
          <footer className="bg-background/80 backdrop-blur-sm ">
            <div className="flex items-center p-4 justify-center">
              <p>© 2025</p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
