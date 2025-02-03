import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { AuthScreenProps } from '../../navigation/types';

export function AuthOptionsScreen({ navigation }: AuthScreenProps<'AuthOptions'>) {
  return (
    <View style={styles.container}>
      <Text>Auth Options Screen</Text>
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