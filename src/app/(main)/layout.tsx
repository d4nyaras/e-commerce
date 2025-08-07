import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Toaster } from "react-hot-toast";
import AnnouncementBar from "@/components/AnnouncementBar";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { geistSans, geistMono } from "@/fonts/font";

export const metadata: Metadata = {
  title: "E-shop website",
  description: "E-shop website with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-700`}
      >
        <AuthProvider>
          <CartProvider>
            <Toaster position="top-center" />
            <AppRouterCacheProvider>
              <div className="flex flex-col min-h-screen">
                <AnnouncementBar message="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!" />
                <NavBar />
                <main className=" overflow-x-hidden">{children}</main>
                <Footer />
              </div>
            </AppRouterCacheProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
