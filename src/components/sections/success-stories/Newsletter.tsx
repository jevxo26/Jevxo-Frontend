"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<boolean>;
  className?: string;
  variant?: "dark" | "light";
}

export default function Newsletter({
  title = "Ready to start your Empire?",
  subtitle = "Subscribe to our newsletter to receive the latest insights and industry news directly in your inbox. No spam, just pure signal.",
  placeholder = "Your work email",
  buttonText = "Subscribe",
  onSubscribe,
  className = "",
  variant = "dark",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email.trim()) {
        setStatus("error");
        setMessage("Please enter your email address");
        return;
      }

      if (!validateEmail(email)) {
        setStatus("error");
        setMessage("Please enter a valid email address");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        let success = true;

        if (onSubscribe) {
          success = await onSubscribe(email.trim());
        } else {
          // Mock API call for development/demo
          await new Promise((resolve) => setTimeout(resolve, 800));
        }

        if (success) {
          setStatus("success");
          setMessage("Thank you! You've been subscribed successfully.");
          setEmail("");
        } else {
          throw new Error("Subscription failed");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      } finally {
        // Auto reset error/success after 4 seconds
        setTimeout(() => {
          if (status !== "success") {
            setStatus("idle");
            setMessage("");
          }
        }, 4000);
      }
    },
    [email, onSubscribe, status],
  );

  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-3xl p-10 md:p-16 max-w-3xl mx-auto ${isDark ? "bg-gradient-to-br from-zinc-950 to-black border border-zinc-800" : "bg-white border border-zinc-200"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2
          className={`text-4xl md:text-5xl font-semibold tracking-tight mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}
        >
          {title.split("Empire").map((part, i) =>
            i === 1 ? (
              <span
                key={i}
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
              >
                Empire
              </span>
            ) : (
              part
            ),
          )}
        </h2>

        <p
          className={`text-lg md:text-xl max-w-xl mx-auto mb-10 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        >
          {subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-1 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={status === "loading" || status === "success"}
              className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-base transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50
                ${
                  isDark
                    ? "bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400"
                }`}
              aria-label="Work email"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`px-8 py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 whitespace-nowrap transition-all min-w-[140px]
              ${
                isDark
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black shadow-lg shadow-amber-500/30"
                  : "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black shadow-lg"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {status === "loading" ? (
              <>Processing...</>
            ) : status === "success" ? (
              <>
                <CheckCircle size={20} /> Subscribed
              </>
            ) : (
              <>
                {buttonText} <ArrowRight size={18} />
              </>
            )}
          </motion.button>
        </form>

        {/* Status Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-sm font-medium ${
              status === "success" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
