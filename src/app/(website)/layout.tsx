import type { Metadata } from "next";

import "@/app/globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReactQueryProvider from "./providers";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "JEVXO",
  description: "A Startup Company",
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
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </ReactQueryProvider>
  );
}
