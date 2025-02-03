export type NewsCategory = 'for-you' | 'latest' | 'immigration' | 'legal' | 'policy';

export interface NewsArticle {
  articleId: string;
  title: string;
  summary: string;
  content: string;
  source: {
    name: string;
    logo: string;
  };
  publishedAt: string;
  imageUrl: string;
  category: NewsCategory;
  metrics: {
    views: number;
    shares: number;
    comments: number;
  };
}