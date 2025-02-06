import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NewsStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/hooks/useTheme';

type Props = NativeStackScreenProps<NewsStackParamList, 'NewsDetail'>;

function NewsDetailScreen({ route }: Props) {
  const { articleId } = route.params;
  const theme = useTheme();

  return (
    <ScrollView 
      style={[
        styles.container, 
        { backgroundColor: theme.colors.background }
      ]}
    >
      <Text>News Detail Screen - Article ID: {articleId}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsDetailScreen; 