"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Lock, Sun, Moon } from "lucide-react";
import switchBody from "../../../public/images/switch-body.png";

const ThemeToggleSwitch = () => {
  // 💡 এখানে 'theme' এর বদলে 'resolvedTheme' ব্যবহার করো
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-[#13171B] border border-white/10" />
    );
  }

  // 💡 resolvedTheme সরাসরি 'light' অথবা 'dark' স্ট্রিং রিটার্ন করে
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-3">
      <Lock
        size={18}
        className={isDark ? "text-[#2E7CF6]" : "text-slate-500"}
      />

      <div
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          w-14
          h-8
          rounded-full
          relative
          border
          border-card-border
          cursor-pointer
          bg-cover
          bg-center
          bg-no-repeat
          transition-all
          duration-300
        "
        style={{
          backgroundImage: `url(${switchBody.src || switchBody})`,
          filter: isDark ? "none" : "brightness(95%)",
        }}
      >
        <div
          className={`
            absolute
            top-1/2
            left-1
            -translate-y-1/2
            size-6
            rounded-full
            bg-white
            shadow-md
            transition-all
            duration-300
            ease-in-out
            flex
            items-center
            justify-center
            ${isDark ? "translate-x-6" : "translate-x-0"}
          `}
        >
          {isDark ? (
            <Moon size={12} className="text-[#0B0F14]" />
          ) : (
            <Sun size={12} className="text-amber-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggleSwitch;
