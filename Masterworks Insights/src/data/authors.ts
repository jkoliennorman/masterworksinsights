export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  "sarah-johnson": {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Senior Art Market Analyst",
    bio: "Sarah has over 15 years of experience in art market analysis and valuation. She specializes in contemporary art and emerging markets, providing strategic insights to collectors and investors.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    twitter: "@sarahjart",
    linkedin: "in/sarahjohnson"
  },
  "michael-chen": {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Investment Research Director",
    bio: "Michael leads our investment research team, focusing on market analysis and portfolio strategy. With a background in both finance and art history, he brings a unique perspective to art investment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    twitter: "@mchenart",
    linkedin: "in/michaelchen"
  },
  "emma-rodriguez": {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    title: "Contemporary Art Specialist",
    bio: "Emma is a leading expert in contemporary art markets with a focus on emerging artists and digital art. She has curated major exhibitions and advised prominent collectors worldwide.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    twitter: "@emmarodart",
    linkedin: "in/emmarodriguez"
  },
  "david-park": {
    id: "david-park",
    name: "David Park",
    title: "Market Strategy Director",
    bio: "David specializes in art market economics and investment strategy. His research focuses on market trends, valuation methodologies, and portfolio optimization in the fine art sector.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    twitter: "@davidparkart",
    linkedin: "in/davidpark"
  }
};