import React, { forwardRef } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, touched, style, ...props }, ref) => {
    const showError = error && touched;
    
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[styles.input, showError && styles.inputError, style]}
          placeholderTextColor="#999"
          accessibilityLabel={label}
          accessibilityRole="text"
          {...props}
        />
        {showError && (
          <Text style={styles.errorText} accessibilityRole="alert">
            {error}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
});