import type { Metadata } from "next";

import "@/app/globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReactQueryProvider from "./providers";
import { ToastContainer } from "react-toastify";
import BackgroundManager from "@/components/layouts/HomeBackground"; // ← New

export const metadata: Metadata = {
  title: "JEVXO",
  description: "Global Business Ecosystem",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <BackgroundManager>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </BackgroundManager>
    </ReactQueryProvider>
  );
}
