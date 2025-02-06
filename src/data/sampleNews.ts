import { NewsArticle } from '../types/news';

export const sampleNewsArticles: NewsArticle[] = [
  {
    articleId: '1',
    headline: 'New Immigration Policy Changes Coming in 2024',
    contentSummary: 'Major changes to immigration policies expected to take effect next year',
    content: 'The government announced significant changes to immigration policies that will impact various visa categories and processing times. The changes aim to streamline the immigration process while maintaining security standards.',
    contentLength: 450,
    source: {
      name: 'Immigration Daily',
      logo: 'https://example.com/immigration-daily-logo.png'
    },
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T14:30:00Z',
    imageUrl: 'https://example.com/immigration-policy.jpg',
    categories: ['policy', 'immigration'],
    tags: ['policy changes', '2024', 'visa processing'],
    region: 'United States',
    timezone: 'America/New_York',
    metrics: {
      views: 1520,
      shares: 284,
      comments: 45
    }
  },
  {
    articleId: '2',
    headline: 'Supreme Court Rules on DACA Case',
    contentSummary: 'Landmark decision affects thousands of DACA recipients',
    content: 'In a landmark decision, the Supreme Court ruled today on a case that will significantly impact the future of DACA recipients...',
    contentLength: 850,
    source: {
      name: 'Legal Times',
      logo: 'https://example.com/legal-times-logo.png'
    },
    author: 'Michael Chen',
    publishedAt: '2024-01-14T15:45:00Z',
    updatedAt: '2024-01-14T18:20:00Z',
    imageUrl: 'https://example.com/supreme-court.jpg',
    categories: ['legal', 'immigration'],
    tags: ['DACA', 'Supreme Court', 'legal ruling'],
    region: 'United States',
    timezone: 'America/New_York',
    metrics: {
      views: 2340,
      shares: 567,
      comments: 89
    }
  },
  {
    articleId: '3',
    headline: 'H-1B Visa Cap Reached for Fiscal Year 2025',
    contentSummary: 'USCIS announces H-1B visa cap reached within first week of filing',
    content: 'The U.S. Citizenship and Immigration Services announced that the H-1B visa cap for FY2025 has been reached...',
    contentLength: 620,
    source: {
      name: 'Immigration News',
      logo: 'https://example.com/immigration-news-logo.png'
    },
    author: 'David Martinez',
    publishedAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T11:30:00Z',
    imageUrl: 'https://example.com/h1b-visa.jpg',
    categories: ['immigration', 'policy'],
    tags: ['H-1B', 'visa cap', 'USCIS'],
    region: 'United States',
    timezone: 'America/New_York',
    metrics: {
      views: 1890,
      shares: 423,
      comments: 67
    }
  },
  {
    articleId: '4',
    headline: 'New Express Entry Draw Invites 5,000 Candidates',
    contentSummary: 'Canadas latest Express Entry draw sees lowest CRS score of the year',
    content: 'Immigration, Refugees and Citizenship Canada (IRCC) has issued 5,000 invitations to apply for permanent residence...',
    contentLength: 580,
    source: {
      name: 'Canadian Immigration News',
      logo: 'https://example.com/cin-logo.png'
    },
    author: 'Emma Thompson',
    publishedAt: '2024-01-12T14:00:00Z',
    updatedAt: '2024-01-12T16:45:00Z',
    imageUrl: 'https://example.com/express-entry.jpg',
    categories: ['immigration', 'for-you'],
    tags: ['Canada', 'Express Entry', 'CRS'],
    region: 'Canada',
    timezone: 'America/Toronto',
    metrics: {
      views: 3200,
      shares: 890,
      comments: 156
    }
  },
  {
    articleId: '5',
    headline: 'UK Announces New Skilled Worker Visa Requirements',
    contentSummary: 'Changes to point-based immigration system coming into effect',
    content: 'The UK Home Office has announced significant changes to the Skilled Worker visa requirements...',
    contentLength: 730,
    source: {
      name: 'UK Immigration Portal',
      logo: 'https://example.com/ukip-logo.png'
    },
    author: 'James Wilson',
    publishedAt: '2024-01-11T08:30:00Z',
    updatedAt: '2024-01-11T10:15:00Z',
    imageUrl: 'https://example.com/uk-visa.jpg',
    categories: ['policy', 'latest'],
    tags: ['UK', 'skilled worker', 'points-based system'],
    region: 'United Kingdom',
    timezone: 'Europe/London',
    metrics: {
      views: 2100,
      shares: 445,
      comments: 88
    }
  },
  {
    articleId: '6',
    headline: 'New Immigration Court Procedures Announced',
    contentSummary: 'DOJ implements new procedures to reduce case backlog',
    content: 'The Department of Justice has announced new procedures for immigration courts aimed at reducing the massive case backlog...',
    contentLength: 690,
    source: {
      name: 'Legal Immigration News',
      logo: 'https://example.com/lin-logo.png'
    },
    author: 'Patricia Rodriguez',
    publishedAt: '2024-01-10T11:20:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    imageUrl: 'https://example.com/immigration-court.jpg',
    categories: ['legal', 'latest'],
    tags: ['immigration court', 'DOJ', 'backlog'],
    region: 'United States',
    timezone: 'America/Chicago',
    metrics: {
      views: 1750,
      shares: 320,
      comments: 92
    }
  },
  {
    articleId: '7',
    headline: 'Australia Expands Regional Migration Program',
    contentSummary: 'New incentives for immigrants choosing regional areas',
    content: 'The Australian government has announced an expansion of its regional migration program...',
    contentLength: 540,
    source: {
      name: 'Australian Migration Review',
      logo: 'https://example.com/amr-logo.png'
    },
    author: 'Tom Anderson',
    publishedAt: '2024-01-09T03:45:00Z',
    updatedAt: '2024-01-09T05:30:00Z',
    imageUrl: 'https://example.com/australia-regional.jpg',
    categories: ['immigration', 'policy'],
    tags: ['Australia', 'regional migration', 'skilled migration'],
    region: 'Australia',
    timezone: 'Australia/Sydney',
    metrics: {
      views: 1420,
      shares: 265,
      comments: 43
    }
  },
  {
    articleId: '8',
    headline: 'Tech Industry Pushes for Immigration Reform',
    contentSummary: 'Major tech companies advocate for high-skilled immigration changes',
    content: 'Leading technology companies have joined forces to advocate for comprehensive immigration reform...',
    contentLength: 780,
    source: {
      name: 'Tech Immigration Today',
      logo: 'https://example.com/tit-logo.png'
    },
    author: 'Rachel Kim',
    publishedAt: '2024-01-08T16:00:00Z',
    updatedAt: '2024-01-08T18:20:00Z',
    imageUrl: 'https://example.com/tech-immigration.jpg',
    categories: ['policy', 'for-you'],
    tags: ['tech industry', 'immigration reform', 'skilled workers'],
    region: 'United States',
    timezone: 'America/Los_Angeles',
    metrics: {
      views: 4200,
      shares: 890,
      comments: 234
    }
  }
]; 