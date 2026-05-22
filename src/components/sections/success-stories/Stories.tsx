"use client";

import React, { useState, useMemo } from "react";
import { Search, ArrowRight, Download } from "lucide-react";
import StoryCard from "@/components/ui/StoryCard";


export default function Stories() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    "All Stories",
    "Insights",
    "Tech Trends",
    "Case Studies",
    "Whitepapers",
  ];

//   const filteredResources = useMemo(() => {
//     return mockResources.filter((resource) => {
//       const matchesSearch =
//         resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesSearch;
//     });
//   }, [searchQuery]);

  return (
    <section className="bg-zinc-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-amber-500 text-black"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 pl-11 py-3 rounded-2xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Main Content Cards */}
          <div className="lg:col-span-8 space-y-6">
            {/* Card 1 - Light */}
            <StoryCard
              type="article"
              title="Building Scalable Microservices in 2024"
              excerpt="A deep dive into the architecture patterns that allow global teams to scale to millions of concurrent users without breaking a sweat."
              category="TECH TRENDS"
              date="Sept 20, 2023"
              image="/images/microservices.jpg" // replace with real path later
              logo="TECH II NATURAL"
            />

            {/* Card 2 - Dark with logo */}
            <StoryCard
              type="article"
              title="Decentralized Finance: Beyond the Hype"
              excerpt="How traditional financial institutions are integrating blockchain technology to increase transparency and lower operational costs."
              category="INSIGHTS"
              date="Sept 18, 2023"
              image="/images/web3.jpg"
              logo="web 3"
            />

            {/* Card 3 - Green */}
            <StoryCard
              type="article"
              title="Zero-Trust Architecture in the Cloud"
              excerpt="Securing the perimeter is no longer enough. Learn why identity is the new firewall in modern enterprise environments."
              category="CYBERSECURITY"
              date="Sept 12, 2023"
              image="/images/zerotrust.jpg"
            />

            {/* Card 4 - Green Key */}
            <StoryCard
              type="news"
              title="The Semiconductor Surge: Supply Chain Resilience"
              excerpt="Analyzing the shift in global hardware production and its long-term effects on digital infrastructure costs."
              category="INDUSTRY NEWS"
              date="Sept 05, 2023"
              image="/images/semiconductor.jpg"
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Whitepaper */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  📘
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-500">
                    WHITEPAPER • 34 page PDF
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    The Digital Transformation Roadmap for 2025
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
                We cover everything from cloud migration to AI governance.
              </p>
              <button className="w-full bg-white text-black py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-black transition-all">
                <Download size={18} /> Download Whitepaper
              </button>
            </div>

            {/* Quote Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-6xl text-amber-500 mb-6">“</div>
              <p className="text-lg leading-tight text-white mb-8">
                The true digital empire isn’t built with just code, but with a
                culture of relentless innovation and data-driven decision
                making.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-700 rounded-2xl overflow-hidden">
                  {/* Replace with Image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                </div>
                <div>
                  <p className="font-medium">Sarah Jenkins</p>
                  <p className="text-sm text-zinc-500">
                    Director of Digital Strategy, JEVXO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-2">
            {[1, 2, 3, "...", 12].map((page, i) => (
              <button
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-all ${
                  page === 1
                    ? "bg-amber-500 text-black"
                    : "hover:bg-zinc-800 text-zinc-400"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="ml-2 px-4 py-2 text-amber-500 hover:text-amber-400 flex items-center gap-1">
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

