export interface Author {
  name: string;
  title: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

export interface ArticleSchema {
  // Basic Information
  title: string;
  slug: string;
  description: string;
  content: string;
  
  // Metadata
  publishDate: string; // ISO 8601 format
  modifiedDate?: string; // ISO 8601 format
  readingTime: string;
  
  // Categorization
  category: string;
  tags: string[];
  
  // Media
  image: {
    url: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  
  // Author Information
  author: Author;
  
  // SEO
  seo: {
    title: string; // If different from article title
    description: string; // If different from article description
    canonicalUrl?: string;
    ogImage?: string;
    ogType: 'article';
    twitterCard: 'summary_large_image' | 'summary';
  };
  
  // Structured Data
  structuredData: {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: {
      '@type': 'Person';
      name: string;
      url?: string;
    };
    publisher: {
      '@type': 'Organization';
      name: string;
      logo: {
        '@type': 'ImageObject';
        url: string;
      };
    };
    mainEntityOfPage: {
      '@type': 'WebPage';
      '@id': string;
    };
  };
  
  // Analytics & Tracking
  analytics?: {
    pageType: 'article';
    category: string;
    tags: string[];
    author: string;
    publishDate: string;
  };
}

// Example usage of the schema
export const exampleArticle: ArticleSchema = {
  title: "What Drives the Price of a Painting? An Insider's Guide",
  slug: "what-drives-painting-prices",
  description: "Explore the key factors that influence art valuations and market prices. From artist reputation to provenance, understand what makes certain artworks more valuable than others.",
  content: "...", // Full article content
  
  publishDate: "2024-03-15T09:00:00Z",
  modifiedDate: "2024-03-15T09:00:00Z",
  readingTime: "7 min read",
  
  category: "MARKET INSIGHTS",
  tags: ["art valuation", "art market", "investment", "pricing"],
  
  image: {
    url: "https://images.unsplash.com/photo-1578321272128-a6a0e0e9a2a2?q=80&w=2070&auto=format&fit=crop",
    alt: "Art valuation process showing an expert examining a painting",
    caption: "Art experts use various factors to determine a painting's value",
    width: 2070,
    height: 1380
  },
  
  author: {
    name: "Sarah Johnson",
    title: "Senior Art Market Analyst",
    bio: "Sarah has over 15 years of experience in art market analysis and valuation.",
    image: "/images/authors/sarah-johnson.jpg",
    twitter: "@sarahjart",
    linkedin: "linkedin.com/in/sarahjohnson"
  },
  
  seo: {
    title: "Art Pricing Guide: What Determines a Painting's Value? | Masterworks",
    description: "Learn the key factors that influence art valuations and market prices in this comprehensive guide to art pricing and investment.",
    canonicalUrl: "https://masterworks.io/blog/what-drives-painting-prices",
    ogImage: "https://masterworks.io/og-images/art-pricing-guide.jpg",
    ogType: "article",
    twitterCard: "summary_large_image"
  },
  
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Drives the Price of a Painting? An Insider's Guide",
    description: "Explore the key factors that influence art valuations and market prices. From artist reputation to provenance, understand what makes certain artworks more valuable than others.",
    image: "https://masterworks.io/og-images/art-pricing-guide.jpg",
    datePublished: "2024-03-15T09:00:00Z",
    dateModified: "2024-03-15T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Sarah Johnson",
      url: "https://masterworks.io/authors/sarah-johnson"
    },
    publisher: {
      "@type": "Organization",
      name: "Masterworks",
      logo: {
        "@type": "ImageObject",
        url: "https://masterworks.io/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://masterworks.io/blog/what-drives-painting-prices"
    }
  },
  
  analytics: {
    pageType: "article",
    category: "MARKET INSIGHTS",
    tags: ["art valuation", "art market", "investment", "pricing"],
    author: "Sarah Johnson",
    publishDate: "2024-03-15"
  }
};