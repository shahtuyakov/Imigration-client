import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NewsStackParamList, NewsDetailScreenProps } from '../../navigation/types';
import { useTheme } from '../../theme/hooks/useTheme';

function NewsDetailScreen({ route }: NewsDetailScreenProps) {
  const { newsId } = route.params;
  const theme = useTheme();

  return (
    <ScrollView 
      style={[
        styles.container, 
        { backgroundColor: theme.colors.background }
      ]}
    >
      <Text>News Detail Screen - Article ID: {newsId}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsDetailScreen; 