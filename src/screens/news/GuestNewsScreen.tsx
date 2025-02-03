import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { GuestTabScreenProps } from '../../navigation/types';

export function GuestNewsScreen({ navigation }: GuestTabScreenProps<'GuestNews'>) {
  return (
    <View style={styles.container}>
      <Text>Guest News Screen</Text>
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