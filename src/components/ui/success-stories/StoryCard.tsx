"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Story } from "@/types/success-stories";

export default function StoryCard({
  title,
  excerpt,
  category,
  date,
  image,
  logo,
  readTime,
}: Story) {
  return (
    <div className="group bg-card border border-card-border rounded-3xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col h-full cursor-pointer hover:shadow-md">
      {/* Image Wrapper */}
      {image && (
        <div className="relative h-52 md:h-56 w-full overflow-hidden bg-muted/20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          {logo && (
            <div className="absolute top-5 left-5 bg-white/95 text-black text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
              {logo}
            </div>
          )}
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Meta Row */}
        <div className="flex items-center flex-wrap gap-2 text-[11px] font-bold uppercase tracking-widest text-secondary mb-3">
          <span>{category}</span>
          {readTime && (
            <>
              <span className="text-muted/40 font-normal">•</span>
              <span className="text-muted/80 font-medium normal-case tracking-normal">
                {readTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted text-[14px] md:text-base leading-relaxed line-clamp-3 mb-6 flex-1">
          {excerpt}
        </p>

        {/* Date & Trigger */}
        <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
          <span className="text-xs text-muted/70 font-medium">{date}</span>
          <div className="flex items-center text-primary text-sm font-semibold transition-colors group-hover:text-primary-hover">
            Read more{" "}
            <ArrowRight
              size={16}
              className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
