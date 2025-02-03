import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { AuthScreenProps } from '../../navigation/types';

export function VerifyEmailScreen({ navigation, route }: AuthScreenProps<'VerifyEmail'>) {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text>Verify Email Screen</Text>
      <Text>Email: {email}</Text>
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