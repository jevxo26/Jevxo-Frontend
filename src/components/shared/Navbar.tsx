"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Lock, Menu, X } from "lucide-react";

import logo from "../../../public/images/logo-navbar.png";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ThemeToggleSwitch from "../ui/ThemeToggleSwitch";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const NAV_LINKS: NavLink[] = [
  { label: "The Hub", href: "#", isActive: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Products", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Partnership", href: "#" },
];

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.25 },
    },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full fixed top-0 left-0 z-50"
    >
      <div className="w-full" style={{ overflowX: "clip" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-2 md:pt-4 lg:pt-6 w-screen md:w-auto">
          {/* Nav Bar */}
          <motion.nav
            whileHover={{ borderColor: "rgba(255,255,255,0.16)" }}
            className="h-auto rounded-2xl border border-white/10 bg-[#0A0F1C]/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 py-3 md:py-2 relative transition-all duration-300"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center"
            >
              <Image
                width={100}
                height={100}
                src={logo}
                alt="Jevxo Logo"
                className="h-6 w-auto object-contain lg:pl-12"
              />
            </motion.div>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-10 text-sm text-white/80">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-1 cursor-pointer transition duration-200 ${
                    link.isActive ? "text-primary" : "hover:text-white"
                  }`}
                >
                  <a href={link.href}>{link.label}</a>
                  {link.hasDropdown && (
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <div className="shadow-[0_0_20px_rgba(216,171,90,0.45)] rounded-xl">
                  <PrimaryButton className="hidden md:block">
                    Launch Your Project
                  </PrimaryButton>
                </div>
              </motion.div>

              <ThemeToggleSwitch />

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden text-white/80 hover:text-white focus:outline-none transition p-1"
                aria-label="Toggle Menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>

          {/* Mobile & Tablet Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-2 w-full lg:hidden rounded-2xl border border-white/10 bg-[#0A0F1C]/95 backdrop-blur-xl p-6 shadow-xl"
              >
                <ul className="flex flex-col gap-5 text-sm text-white/80">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={navItemVariants}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center justify-between cursor-pointer py-1 transition ${
                        link.isActive ? "text-primary" : "hover:text-white"
                      }`}
                    >
                      <a href={link.href}>{link.label}</a>
                      {link.hasDropdown && <ChevronDown size={16} />}
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  variants={navItemVariants}
                  className="mt-6 pt-6 border-t border-white/5 md:hidden"
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <PrimaryButton className="w-full justify-center py-3">
                      Launch Your Project
                    </PrimaryButton>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
