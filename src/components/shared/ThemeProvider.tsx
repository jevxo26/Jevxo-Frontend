"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // বাই-ডিফল্ট ডার্ক মোড অন থাকবে
      enableSystem={true} // তুমি চাইলে ট্রু করে দিতে পারো সিস্টেম থিম ট্র্যাক করার জন্য
    >
      {children}
    </NextThemesProvider>
  );
}
