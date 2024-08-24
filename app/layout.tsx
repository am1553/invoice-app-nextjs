import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-league-spartan",
});
export const metadata: Metadata = {
  title: "Invoice App",
  description: "Store and create invoices",
};

const ThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} h-screen w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
