import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const TITLE = "Landing Page | Herbie";
const DESCRIPTION =
  "";

export const metadata: Metadata = {
  metadataBase: new URL("https://herbiebingham.co.uk"),
  title: TITLE,
  description: DESCRIPTION,
  twitter: {
    images: ["/logo.png"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    type: "website",
    images: ["/logo.png"],
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
          <NuqsAdapter>
            <body
              className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
              )}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
            </body>
          </NuqsAdapter>
    </html>
  );
}
