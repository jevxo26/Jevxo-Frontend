import { QuoteData, Story, WhitepaperData } from "@/types/success-stories";

export const mockStories: Story[] = [
  {
    id: "1",
    type: "article",
    title: "Building Scalable Microservices in 2024",
    excerpt:
      "A deep dive into the architecture patterns that allow global teams to scale to millions of concurrent users without breaking a sweat.",
    category: "TECH TRENDS",
    date: "Sept 20, 2023",
    image: "/images/microservices.jpg",
    logo: "TECH II NATURAL",
    readTime: "5 min read",
  },
  {
    id: "2",
    type: "article",
    title: "Decentralized Finance: Beyond the Hype",
    excerpt:
      "How traditional financial institutions are integrating blockchain technology to increase transparency and lower operational costs.",
    category: "INSIGHTS",
    date: "Sept 18, 2023",
    image: "/images/web3.jpg",
    logo: "web 3",
    readTime: "6 min read",
  },
  {
    id: "3",
    type: "article",
    title: "Zero-Trust Architecture in the Cloud",
    excerpt:
      "Securing the perimeter is no longer enough. Learn why identity is the new firewall in modern enterprise environments.",
    category: "CYBERSECURITY",
    date: "Sept 12, 2023",
    image: "/images/zerotrust.jpg",
    readTime: "4 min read",
  },
  {
    id: "4",
    type: "news",
    title: "The Semiconductor Surge: Supply Chain Resilience",
    excerpt:
      "Analyzing the shift in global hardware production and its long-term effects on digital infrastructure costs.",
    category: "INDUSTRY NEWS",
    date: "Sept 05, 2023",
    image: "/images/semiconductor.jpg",
    readTime: "4 min read",
  },
];

export const whitepaperConfig: WhitepaperData = {
  title: "The Digital Transformation Roadmap for 2025",
  pages: "34 page PDF",
  description: "We cover everything from cloud migration to AI governance.",
};

export const quoteConfig: QuoteData = {
  text: "The true digital empire isn’t built with just code, but with a culture of relentless innovation and data-driven decision making.",
  author: "Sarah Jenkins",
  role: "Director of Digital Strategy, JEVXO",
  initials: "SJ",
};
