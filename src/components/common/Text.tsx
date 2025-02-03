import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'body' | 'error';
}

export function Text({ variant = 'body', style, ...props }: TextProps) {
  return (
    <RNText 
      style={[styles[variant], style]} 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary.dark,
  },
  body: {
    fontSize: 16,
    color: colors.text.primary.dark,
  },
  error: {
    fontSize: 14,
    color: colors.error.light,
  },
}); 