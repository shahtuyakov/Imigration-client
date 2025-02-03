import { NewsArticle } from '../types/news';

export const sampleNewsArticles: NewsArticle[] = [
  {
    articleId: '1',
    title: 'New Immigration Policy Changes Coming in 2024',
    summary: 'Major changes to immigration policies expected to take effect next year',
    content: 'The government announced significant changes to immigration policies...',
    source: {
      name: 'Immigration Daily',
      logo: 'https://example.com/immigration-daily-logo.png'
    },
    publishedAt: '2024-01-15T10:30:00Z',
    imageUrl: 'https://example.com/immigration-policy.jpg',
    category: 'policy',
    metrics: {
      views: 1520,
      shares: 284,
      comments: 45
    }
  },
  {
    articleId: '2',
    title: 'Supreme Court Rules on Immigration Case',
    summary: 'Landmark decision affects DACA recipients',
    content: 'In a landmark decision, the Supreme Court ruled today...',
    source: {
      name: 'Legal Times',
      logo: 'https://example.com/legal-times-logo.png'
    },
    publishedAt: '2024-01-14T15:45:00Z',
    imageUrl: 'https://example.com/supreme-court.jpg',
    category: 'legal',
    metrics: {
      views: 2340,
      shares: 567,
      comments: 89
    }
  },
  {
    articleId: '3',
    title: 'H-1B Visa Cap Reached for 2024',
    summary: 'USCIS announces H-1B visa cap reached within first week',
    content: 'The U.S. Citizenship and Immigration Services announced...',
    source: {
      name: 'Immigration News',
      logo: 'https://example.com/immigration-news-logo.png'
    },
    publishedAt: '2024-01-13T09:15:00Z',
    imageUrl: 'https://example.com/h1b-visa.jpg',
    category: 'immigration',
    metrics: {
      views: 1890,
      shares: 423,
      comments: 67
    }
  }
]; 