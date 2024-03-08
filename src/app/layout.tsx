import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rent",
  description: "Welcome to Car Rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[1240px] mx-auto">
        <h1 className="text-5xl text text-center text-green">This is navbar</h1>
        <Providers>
          {children}
        </Providers>
        <h1 className="text-5xl text text-center text-green">This is Footer</h1>
      </body>
        
    </html>
  );
}
