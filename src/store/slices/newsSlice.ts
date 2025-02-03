import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { NewsArticle, NewsCategory } from '../../types/news';
import { api } from '../../services/auth/api/api';

export interface NewsState {
  articles: NewsArticle[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  currentCategory: NewsCategory;
}

const initialState: NewsState = {
  articles: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  currentCategory: 'for-you',
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category: NewsCategory) => {
    const response = await api.get(`/news/${category}`);
    return response.data;
  }
);

export const searchNews = createAsyncThunk(
  'news/searchNews',
  async (query: string) => {
    const response = await api.get('/news/search', {
      params: { query },
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<NewsCategory>) => {
      state.currentCategory = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch news
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch news';
      })
      // Search news
      .addCase(searchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to search news';
      });
  },
});

export const { setCategory, clearError } = newsSlice.actions;
export default newsSlice.reducer; 