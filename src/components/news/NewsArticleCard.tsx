import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { NewsArticle } from '../../types/news';

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
  return (
    <TouchableOpacity style={styles.articleContainer}>
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
      </View>
      <View style={styles.articleContent}>
        <View style={styles.textContent}>
          <Text style={styles.title} numberOfLines={3}>
            {article.title}
          </Text>
          <View style={styles.metrics}>
            <View style={styles.metricItem}>
              <Text>{article.metrics.views}</Text>
            </View>
            <View style={styles.metricItem}>
              <Text>{article.metrics.shares}</Text>
            </View>
            <View style={styles.metricItem}>
              <Text>{article.metrics.comments}</Text>
            </View>
          </View>
        </View>
        {article.imageUrl && (
          <Image
            source={{ uri: article.imageUrl }}
            style={styles.thumbnail}
          />
        )}
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
});

export default NewsArticleCard;