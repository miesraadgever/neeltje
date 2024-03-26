import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naailes bij Neeltje",
  description: "Naai cursussen",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="nl">
      <body className={inter.className}>
      <Toaster position="top-center" toastOptions={{
          style: {
              padding: "5px",
              background: "lightgray"
          },
          icon: null

      }} />
      {children}
      </body>
      </html>
  );
}
