import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { AuthScreenProps } from '../../navigation/types';

export function EmailLoginScreen({ navigation }: AuthScreenProps<'EmailLogin'>) {
  return (
    <View style={styles.container}>
      <Text>Email Login Screen</Text>
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