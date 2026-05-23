"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number | string) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 12,
  onPageChange,
}: PaginationProps) {
  // স্ক্রিনশটের মতো ডাইনামিক পেজ অ্যারে জেনারেট করার লজিক [১, ২, ৩, "...", ১২]
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);

      pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2.5 rounded-full p-2">
        {/* Previous Button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-card-border text-foreground hover:bg-card-border/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => {
          const isDot = page === "...";
          const isActive = currentPage === page;

          return (
            <button
              key={index}
              onClick={() => !isDot && onPageChange(page)}
              disabled={isDot}
              className={`w-11 h-11 flex items-center justify-center rounded-full text-base font-medium transition-all ${
                isDot
                  ? "text-muted/60 cursor-default"
                  : isActive
                    ? "bg-secondary text-black font-semibold shadow-xl"
                    : "border border-card-border text-foreground hover:bg-card-border/40 cursor-pointer"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-card-border text-foreground hover:bg-card-border/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
