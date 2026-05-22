"use client";

import { usePathname } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  ChevronUp,
  Share2,
  Globe,
  LucideIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import PrimaryButton from "@/components/ui/PrimaryButton";
import Decors8 from "@/components/ui/Decors/Decors8";

// ─── Types ──────────────────────────────────────────────────────
interface ContactItem {
  icon: LucideIcon;
  text: string;
}

// ─── Constants ──────────────────────────────────────────────────────
const CONTACT_ITEMS: ContactItem[] = [
  { icon: Mail, text: "contact@jevxo.com" },
  { icon: MapPin, text: "Rajshahi, Bangladesh" },
  { icon: Phone, text: "+880123456789" },
];

const FOOTER_LINKS: Record<string, string[]> = {
  Platform: ["The Hub", "Pricing", "ROI Calculator"],
  Company: ["About Us", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const SOCIAL_ICONS: LucideIcon[] = [Globe, Share2, Mail];

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};


// ─── Main Component ──────────────────────────────────────────────────────
const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const systemStatus = "Online";

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-nav-footer pt-12 md:pt-16 lg:pt-20 pb-8 relative border-t-3 border-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Decorative Element - Only show on Home page to keep other pages clean (Optional: remove isHome check if you want it everywhere) */}
        {isHome && (
          <div className="hidden md:block">
            <Decors8 />
          </div>
        )}

        {isHome && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-50 items-center mb-12 md:mb-16 lg:mb-20">
            {/* Left: Brand & Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0}
              viewport={{ once: true, amount: 0.2 }}
              className="md:flex md:justify-between md:items-center lg:block"
            >
              <div className="flex justify-center items-center flex-col md:block">
                <Image
                  width={120}
                  height={25}
                  src="/images/logo-footer.png"
                  className="mb-8 lg:ml-12"
                  alt="Jevxo"
                />
                <h2 className="text-5xl font-semibold text-primary mb-6">
                  Contact Us
                </h2>
                <p className="text-secondary max-w-xs text-[18px] mb-12 tracking-wide">
                  We are committed to processing the information in order to
                  contact you and talk about your project.
                </p>
              </div>

              <div className="space-y-8 flex justify-center items-center flex-col md:block">
                {CONTACT_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={0.1 + i * 0.1}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex items-center gap-5 hover:scale-110 hover:-translate-y-2.5 transition-all duration-300 cursor-pointer">
                      <item.icon className="text-secondary" size={22} />
                      <span className="text-primary text-lg tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.2}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-white text-black p-4 rounded-xl outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-white text-black p-4 rounded-xl outline-none"
                  required
                />
                <input
                  type="url"
                  placeholder="Website*"
                  className="w-full bg-white text-black p-4 rounded-xl outline-none z-30"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white text-black p-4 rounded-xl outline-none resize-none z-30"
                />
              </div>
              <PrimaryButton type="submit" className="w-full">
                Submit
              </PrimaryButton>
            </motion.form>
          </div>
        )}

        {/* =========================================================
            Footer Links Grid (SHOWS ON ALL PAGES)
            ========================================================= */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          custom={0.1}
          viewport={{ once: true, amount: 0.2 }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12`}
        >
          {/* Brand blurb + socials */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo injected here ONLY for non-home pages */}
            {!isHome && (
              <Image
                width={125}
                height={25}
                src="/images/logo-footer.png"
                className="mb-6 lg:ml-12"
                alt="Jevxo Logo"
              />
            )}

            <p className="text-foreground/80 max-w-xs mb-8">
              The partner for enterprises building the next generation of
              digital empires.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {SOCIAL_ICONS.map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-secondary hover:text-foreground hover:border-muted transition-all cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links], i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.15 + i * 0.1}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h4 className="text-muted text-xs font-bold uppercase tracking-widest mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          custom={0.2}
          viewport={{ once: true }}
          className="relative pt-16 md:pt-20 lg:pt-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
        >
          <p className="text-foreground/25 text-sm">
            © {new Date().getFullYear()} Jevxo Enterprise. All rights reserved.
          </p>

          <button
            onClick={handleScrollTop}
            className="absolute cursor-pointer -top-4 md:top-10 lg:top-16 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-black shadow-lg shadow-primary/20"
          >
            <ChevronUp size={28} />
          </button>

          <div className="flex gap-6 text-sm">
            <span className="text-foreground/20">English (US)</span>
            <span className="text-foreground/20">
              System Status:{" "}
              <span className="text-green-500">{systemStatus}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;