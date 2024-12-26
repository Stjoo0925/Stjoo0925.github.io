import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "@/assets/css/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-gothic",
});

export const metadata: Metadata = {
  title: "Stjoo's Portfolio",
  description: "Frontend Developer Portfolio",
  keywords: ["Full-stack", "Developer", "Portfolio"],
  authors: [{ name: "주순태" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${nanumGothic.variable} font-nanum-gothic antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 mt-[8vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
