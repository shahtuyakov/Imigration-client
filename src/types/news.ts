// Define common news categories as a const for type safety while allowing custom categories
export const NEWS_CATEGORIES = [
  'for-you',
  'latest',
  'immigration',
  'legal',
  'policy',
  'general'
] as const;

export type NewsCategory = typeof NEWS_CATEGORIES[number];

export interface NewsSource {
  name: string;
  logo?: string;
}

export interface NewsMetrics {
  views: number;
  shares: number;
  comments: number;
}

export interface NewsArticle {
  articleId: string;
  headline: string;                // Changed from title to match backend
  content: string;
  contentSummary: string;         // Changed from summary to match backend
  contentLength: number;          // Added from backend
  source: NewsSource;             // Extended to include both name and logo
  author: string;                 // Added from backend
  publishedAt: string;            // Keep as string for frontend display
  updatedAt: string;              // Added from backend
  imageUrl?: string;              // Made optional to match backend
  categories: NewsCategory[];     // Changed to array to match backend
  tags: string[];                 // Added from backend
  region: string;                 // Added from backend
  timezone: string;               // Added from backend
  metrics: NewsMetrics;           // Kept client-specific metrics
}

// Type for transforming backend response to client format
export interface BackendNewsArticle {
  headline: string;
  content: string;
  contentSummary: string;
  imageUrl?: string;
  source: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  region: string;
  categories: string[];
  tags: string[];
  contentLength: number;
  timezone: string;
}