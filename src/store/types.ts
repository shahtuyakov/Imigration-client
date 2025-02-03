import { NewsState } from '../store/slices/newsSlice';

export interface RootState {
  news: NewsState;
  // Add other slice states here as needed
} 