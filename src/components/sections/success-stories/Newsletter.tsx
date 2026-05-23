"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { NewsletterProps } from "@/types/success-stories";
import PrimaryButton from "@/components/ui/PrimaryButton";



export default function Newsletter({
  title = "Ready to start your Empire?",
  subtitle = "Subscribe to our newsletter to receive the latest insights and industry news directly in your inbox. No spam, just pure signal.",
  placeholder = "Your work email",
  buttonText = "Subscribe",
  onSubscribe,
  className = "",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus("error");
        setMessage("Please enter a valid email address");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        const success = onSubscribe
          ? await onSubscribe(email.trim())
          : await new Promise<boolean>((res) =>
              setTimeout(() => res(true), 800),
            );

        if (success) {
          setStatus("success");
          setMessage("Thank you! You've been subscribed successfully.");
          setEmail("");
        } else {
          throw new Error();
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    },
    [email, onSubscribe],
  );

  return (
    <div
      className={`rounded-3xl p-10 md:p-16 my-12 md:my-16 lg:my-20 max-w-3xl mx-auto card-gradient border border-card-border shadow-sm ${className}`}
    > 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          {title.split("Empire").map((part, i) =>
            i === 1 ? (
              <span key={i} className="text-secondary">
                Empire
              </span>
            ) : (
              part
            ),
          )}
        </h2>

        <p className="text-base md:text-lg max-w-xl mx-auto mb-10 text-muted">
          {subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              <Mail size={20} />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={status === "loading" || status === "success"}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-base bg-background border border-border text-foreground placeholder:text-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            />
          </div>

          <PrimaryButton
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {status === "loading" ? (
              "Processing..."
            ) : status === "success" ? (
              <>
                <CheckCircle size={20} /> Subscribed
              </>
            ) : (
              <>
                {buttonText} <ArrowRight size={18} />
              </>
            )}
          </PrimaryButton>
        </form>

        {/* Status Message */}
        {message && (
          <p
            className={`mt-4 text-sm font-medium ${status === "success" ? "text-emerald-500" : "text-red-500"}`}
          >
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}
