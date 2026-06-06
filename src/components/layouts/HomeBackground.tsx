"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import DotField from "@/components/ui/DotField";

interface BackgroundManagerProps {
  children: ReactNode;
}

const BackgroundManager = ({ children }: BackgroundManagerProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Show DotField only on homepage + dark mode
  const showDotField = isHomePage && isDark;

  return (
    <>
      {/* Dot Field - Only on Homepage in Dark Mode */}
      {showDotField && (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <DotField
            dotRadius={1.4}
            dotSpacing={26}
            bulgeStrength={75}
            glowRadius={190}
            sparkle={true}
            cursorRadius={560}
            cursorForce={0.13}
            bulgeOnly
            gradientFrom="#1e40af"
            gradientTo="#22d3ee"
            glowColor="#1e3a8a"
          />
        </div>
      )}

      {/* Grid Background - Everywhere else + Light Mode on homepage */}
      {!showDotField && (
        <div className="fixed inset-0 z-[-1] bg-grid-pattern" />
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </>
  );
};

export default BackgroundManager;
