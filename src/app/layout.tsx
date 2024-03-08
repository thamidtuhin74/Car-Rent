import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <h1 className="text-5xl text text-center text-green">This is navbar</h1>
        {children}
        <h1 className="text-5xl text text-center text-green">This is Footer</h1>
      </body>
        
    </html>
  );
}
