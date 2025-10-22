import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Shopcart online store",
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">

            <Header />
            <main className="flex-1">{children}</main>
            
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
