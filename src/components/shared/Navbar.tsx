"use client";

import React, { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import logo from "../../../public/images/logo-navbar.png";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ThemeToggleSwitch from "@/components/ui/ThemeToggleSwitch";

// ─── Types ─────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavLink[]; 
}

// ─── Config ────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: "The Hub", href: "/" },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Partnership", href: "/partnership" },
];

// ─── Animation Variants ────────────────────────────────────────────────
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, height: 0, y: -10, transition: { duration: 0.3 } },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35 },
  }),
};

// ─── Main Component ────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-3 md:pt-4 lg:pt-6">
        <motion.nav
          className="w-full rounded-2xl border border-nav-border bg-nav-footer backdrop-blur-xl shadow-2xl px-4 sm:px-5 py-3 md:py-2 flex items-center justify-between transition-all duration-300"
          whileHover={{ borderColor: "rgba(66, 77, 93, 0.25)" }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center"
          >
            <Link href="/" onClick={closeMenu} className="block">
              <Image
                src={logo}
                alt="JEVXO Logo"
                width={140}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.href}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={navItemVariants}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <PrimaryButton>Launch Your Project</PrimaryButton>
            </div>

            <ThemeToggleSwitch />

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 text-muted hover:text-accent transition-colors"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-3 rounded-2xl border border-nav-border bg-nav-footer backdrop-blur-2xl p-6 shadow-2xl overflow-hidden"
            >
              <nav>
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      variants={navItemVariants}
                      custom={index}
                      className="rounded-xl"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-5 py-4 text-base rounded-xl transition-all ${
                          isActive(link.href)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted"
                        }`}
                      >
                        {link.label}
                        {link.hasDropdown && <ChevronDown size={18} />}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 md:hidden">
                <PrimaryButton
                  className="w-full py-3.5 text-base"
                  onClick={closeMenu}
                >
                  Launch Your Project
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default React.memo(Navbar);
