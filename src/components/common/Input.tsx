import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '../../theme/hooks/useTheme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.text.secondary }]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: error
              ? theme.colors.error
              : isFocused
              ? theme.colors.primary
              : theme.colors.text.secondary,
            color: theme.colors.text.primary,
          },
          style,
        ]}
        placeholderTextColor={theme.colors.text.secondary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <Text style={[styles.error, { color: theme.colors.error }]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    fontSize: 12,
  },
});