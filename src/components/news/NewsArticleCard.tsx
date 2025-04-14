import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NewsArticle } from '../../types/news';
import type { NewsNavigationProp } from '../../navigation/types';

function formatTimeAgo(date: string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  return `${Math.floor(diffInSeconds / 86400)}d`;
}

function NewsArticleCard({ article }: { article: NewsArticle }) {
  const navigation = useNavigation<NewsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('NewsDetail', { articleId: article.articleId });
  };

  return (
    <TouchableOpacity 
      style={styles.articleContainer}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.articleHeader}>
        <View style={styles.sourceInfo}>
          {article.source.logo && (
            <Image
              source={{ uri: article.source.logo }}
              style={styles.sourceLogo}
            />
          )}
          <Text style={styles.sourceName}>{article.source.name}</Text>
          <Text style={styles.timeAgo}>· {formatTimeAgo(article.publishedAt)}</Text>
        </View>
        <Text style={styles.author}>{article.author}</Text>
      </View>
      <View style={styles.articleContent}>
        <View style={styles.textContent}>
          <Text style={styles.title} numberOfLines={3}>
            {article.headline}
          </Text>
          <Text style={styles.summary} numberOfLines={2}>
            {article.contentSummary}
          </Text>
        </View>
        {article.imageUrl && (
          <Image
            source={{ uri: article.imageUrl }}
            style={styles.thumbnail}
          />
        )}
      </View>
      <View style={styles.footer}>
        <Text style={styles.region}>{article.region}</Text>
        <View style={styles.tags}>
          {article.tags.slice(0, 2).map((tag, index) => (
            <Text key={index} style={styles.tag}>#{tag}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  articleHeader: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 14,
    fontWeight: '500',
  },
  author: {
    fontSize: 12,
    color: '#666',
  },
  timeAgo: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
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
    marginBottom: 4,
  },
  summary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  metrics: {
    flexDirection: 'row',
    gap: 12,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  region: {
    fontSize: 12,
    color: '#666',
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    fontSize: 12,
    color: '#4a7dff',
  },
});

export default NewsArticleCard;