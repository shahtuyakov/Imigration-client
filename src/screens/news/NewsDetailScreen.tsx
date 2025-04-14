import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/hooks/useTheme';
import { sampleNewsArticles } from '../../data/sampleNews';
import { NewsArticle } from '../../types/news';

const NewsDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'NewsDetail'>>();
  const { articleId } = route.params || {};
  const theme = useTheme();

  // Replace API fetch with direct data lookup
  const article = sampleNewsArticles.find((article: NewsArticle) => article.articleId === articleId);

  if (!article) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.text.primary }]}>Article not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {article.imageUrl && (
          <Image source={{ uri: article.imageUrl }} style={styles.image} />
        )}
        <Text style={[styles.headline, { color: theme.colors.text.primary }]}>{article.headline}</Text>
        <View style={styles.metaData}>
          <Text style={[styles.author, { color: theme.colors.text.primary }]}>{article.author}</Text>
          <Text style={[styles.date, { color: theme.colors.text.primary }]}>
            {new Date(article.publishedAt).toLocaleDateString()}
          </Text>
        </View>
        <Text style={[styles.content, { color: theme.colors.text.primary }]}>{article.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
  headline: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  metaData: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  author: { fontSize: 14, fontStyle: 'italic' },
  date: { fontSize: 14 },
  content: { fontSize: 16, lineHeight: 24 },
  loading: { flex: 1, justifyContent: 'center' },
  errorText: { fontSize: 16, textAlign: 'center', marginTop: 20 },
});

export default NewsDetailScreen;