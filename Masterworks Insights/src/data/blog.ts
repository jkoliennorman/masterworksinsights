import { authors } from './authors';

export const allPosts = [
  // MARKET INSIGHTS
  {
    title: "What Drives the Price of a Painting? An Insider's Guide",
    description: "Explore the key factors that influence art valuations and market prices. From artist reputation to provenance, understand what makes certain artworks more valuable than others.",
    publishDate: "March 15, 2024",
    readingTime: "7 min read",
    slug: "what-drives-painting-prices",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2070&auto=format&fit=crop",
    category: "MARKET INSIGHTS",
    author: authors["sarah-johnson"]
  },
  {
    title: "The Impact of Global Events on Art Markets",
    description: "An in-depth analysis of how global events shape art market dynamics and create new opportunities for investors.",
    publishDate: "March 14, 2024",
    readingTime: "6 min read",
    slug: "global-events-art-market",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?q=80&w=2069&auto=format&fit=crop",
    category: "MARKET INSIGHTS",
    author: authors["michael-chen"]
  },
  {
    title: "Digital Art: A New Frontier for Investors",
    description: "Understanding the growing market for digital art and its implications for traditional art investors.",
    publishDate: "March 13, 2024",
    readingTime: "8 min read",
    slug: "digital-art-investing",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2069&auto=format&fit=crop",
    category: "MARKET INSIGHTS",
    author: authors["emma-rodriguez"]
  },
  {
    title: "How Art Performs During a Recession",
    description: "An analysis of art market performance during economic downturns, with historical data and insights for investors.",
    publishDate: "March 14, 2024",
    readingTime: "6 min read",
    slug: "art-performance-during-recession",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2069&auto=format&fit=crop",
    category: "MARKET ANALYSIS",
    author: authors["david-park"]
  },
  {
    title: "Q1 2024 Art Market Performance Review",
    description: "A comprehensive analysis of art market trends and performance metrics from the first quarter of 2024.",
    publishDate: "March 12, 2024",
    readingTime: "9 min read",
    slug: "q1-2024-market-review",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop",
    category: "MARKET ANALYSIS",
    author: authors["michael-chen"]
  },
  {
    title: "Emerging Markets in Contemporary Art",
    description: "Analyzing growth opportunities in emerging art markets and their impact on global art trade.",
    publishDate: "March 10, 2024",
    readingTime: "7 min read",
    slug: "emerging-art-markets",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2070&auto=format&fit=crop",
    category: "MARKET ANALYSIS",
    author: authors["emma-rodriguez"]
  }
];

export const featuredTabs = [
  {
    id: 'latest',
    label: 'LATEST',
    posts: allPosts.slice(0, 4)
  },
  {
    id: 'investment-guides',
    label: 'INVESTMENT GUIDES',
    posts: [
      {
        title: "How to Invest in Art: A Complete Guide for 2025",
        category: "INVESTING 101",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop",
        slug: "how-to-invest-in-art",
        author: authors["sarah-johnson"]
      },
      {
        title: "Art Investment Fees Explained",
        category: "INVESTING 101",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2070&auto=format&fit=crop",
        slug: "art-investment-fees",
        author: authors["michael-chen"]
      },
      {
        title: "Your First Art Investment: Step by Step",
        category: "INVESTING 101",
        image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=2069&auto=format&fit=crop",
        slug: "first-art-investment",
        author: authors["emma-rodriguez"]
      },
      {
        title: "Understanding Art Fund Returns",
        category: "INVESTING 101",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
        slug: "art-fund-returns",
        author: authors["david-park"]
      }
    ]
  },
  {
    id: 'market-analysis',
    label: 'MARKET ANALYSIS',
    posts: [
      {
        title: "Q1 2025 Art Market Report",
        category: "MARKET ANALYSIS",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop",
        slug: "q1-2025-market-report",
        author: authors["michael-chen"]
      },
      {
        title: "Next Appraisal Report: What to Expect",
        category: "APPRAISALS",
        image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?q=80&w=2070&auto=format&fit=crop",
        slug: "upcoming-appraisal-preview",
        author: authors["sarah-johnson"]
      },
      {
        title: "Art vs Traditional Assets: 2025 Outlook",
        category: "MARKET ANALYSIS",
        image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop",
        slug: "art-vs-traditional-assets",
        author: authors["david-park"]
      },
      {
        title: "Breaking Down Our Latest Appraisal",
        category: "APPRAISALS",
        image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=2069&auto=format&fit=crop",
        slug: "latest-appraisal-breakdown",
        author: authors["emma-rodriguez"]
      }
    ]
  }
];

export const categories = [
  "ALL",
  "MARKET INSIGHTS",
  "INVESTING 101", 
  "MARKET ANALYSIS",
  "ARTIST SPOTLIGHT",
  "PORTFOLIO NEWS",
  "APPRAISALS",
  "CASE STUDIES",
  "INSIDE MASTERWORKS"
];