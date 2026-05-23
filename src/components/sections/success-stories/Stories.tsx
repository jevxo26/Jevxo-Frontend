"use client";

import React, { useState } from "react";
import { Search, Download } from "lucide-react";
import StoryCard from "@/components/ui/StoryCard";
import Pagination from "@/components/ui/Pagination";
import { mockStories, quoteConfig, whitepaperConfig } from "@/config/storyData";

export default function Stories() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    "All Stories",
    "Insights",
    "Tech Trends",
    "Case Studies",
    "Whitepapers",
  ];

  const filteredStories = mockStories.filter((story) => {
    const matchesTab =
      activeTab === "All Stories" ||
      story.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header & Tabs & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 pb-2 flex-1 lg:max-w-3xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-card-border/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border pl-11 pr-4 py-3 rounded-2xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        {/* 3 Columns Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>

        {/* Dynamic Sidebar Features placed nicely below the grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 border-t border-border/40">
          {/* Whitepaper Box */}
          <div className="lg:col-span-7 card-gradient border border-card-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-xl shrink-0">
                📘
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                  WHITEPAPER • {whitepaperConfig.pages}
                </p>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                  {whitepaperConfig.title}
                </h3>
                <p className="text-muted text-sm max-w-md">
                  {whitepaperConfig.description}
                </p>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary text-white px-6 py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-primary-hover transition-all cursor-pointer whitespace-nowrap shadow-md shadow-primary/10">
              <Download size={18} /> Download
            </button>
          </div>

          {/* Quote Box */}
          <div className="lg:col-span-5 card-gradient border border-card-border rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <p className="text-base italic font-medium leading-relaxed text-foreground mb-6 relative">
              <span className="text-3xl font-serif text-secondary leading-none select-none absolute -left-3 -top-2">
                “
              </span>
              <span className="pl-4 block">{quoteConfig.text}</span>
            </p>
            <div className="flex items-center gap-3 pl-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                {quoteConfig.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {quoteConfig.author}
                </p>
                <p className="text-xs text-muted">{quoteConfig.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={12}
            onPageChange={(page) => setCurrentPage(Number(page))}
          />
        </div>
      </div>
    </section>
  );
}
