export interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<boolean>;
  className?: string;
}

export interface StoryCard {
  id?: string;
  type: "article" | "whitepaper" | "quote" | "news";
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  image?: string;
  author?: string;
  logo?: string;
  badge?: string;
}

export interface Story {
  id: string;
  type: "article" | "news";
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  logo?: string;
  readTime?: string;
}

export interface WhitepaperData {
  title: string;
  pages: string;
  description: string;
}

export interface QuoteData {
  text: string;
  author: string;
  role: string;
  initials: string;
}