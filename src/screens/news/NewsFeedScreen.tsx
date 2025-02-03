import React, { useState, useCallback } from 'react';
import { View, FlatList, RefreshControl, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, searchNews } from '../../store/slices/newsSlice.ts';
import NewsSearchHeader from '../../components/news/NewsSearchHeader';
import NewsCategoryTabs from '../../components/news/NewsCategoryTabs';
import NewsArticleCard from '../../components/news/NewsArticleCard';
import type { NewsArticle, NewsCategory } from '../../types/news';
import { RootState } from '../../store/types';
import { useTheme } from '../../theme/hooks/useTheme';

export default function NewsFeedScreen() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('for-you');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state: RootState) => state.news);
  const theme = useTheme();

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(fetchNews(selectedCategory));
    setIsRefreshing(false);
  }, [dispatch, selectedCategory]);

  const handleSearch = useCallback((query: string) => {
    dispatch(searchNews(query));
  }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <NewsSearchHeader
        onSearch={handleSearch}
        onRefresh={handleRefresh}
      />
      <NewsCategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={articles}
        renderItem={({ item }) => <NewsArticleCard article={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedTab: {
    backgroundColor: '#4a7dff',
  },
  tabText: {
    color: '#666',
  },
  selectedTabText: {
    color: '#fff',
  },
  articleContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceLogo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  sourceName: {
    fontWeight: '500',
    marginRight: 4,
  },
  timeAgo: {
    color: '#666',
  },
  articleContent: {
    flexDirection: 'row',
  },
  textContent: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  metrics: {
    flexDirection: 'row',
    marginTop: 8,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});