import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { GuestTabScreenProps } from '../../navigation/types';

export function NewsDetailScreen({ navigation, route }: GuestTabScreenProps<'NewsDetail'>) {
  const { articleId } = route.params;

  return (
    <View style={styles.container}>
      <Text>News Detail Screen</Text>
      <Text>Article ID: {articleId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 