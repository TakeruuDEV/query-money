import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar/page";
import Header from "@/components/header/page";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Query Money",
  description: "Um aplicativo para controle financeiro pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex">
        <Sidebar valorRestante={700} entrada={1000} />
        <div className="w-flex flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
