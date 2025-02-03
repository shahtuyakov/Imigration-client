export interface NewsArticle {
    title: string;
    source: {
      name: string;
      logo?: string;
    };
    publishedAt: string;
    thumbnail?: string;
    metrics: {
      likes: number;
      dislikes: number;
      comments: number;
    };
  }
  
export type NewsCategory = 'for-you' | 'local' | 'top-stories';