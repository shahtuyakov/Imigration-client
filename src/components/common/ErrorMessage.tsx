import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/hooks/useTheme';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.colors.error }]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});