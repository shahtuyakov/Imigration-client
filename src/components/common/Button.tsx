import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../../theme/hooks/useTheme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (variant === 'primary') return theme.colors.primary;
    if (variant === 'secondary') return theme.colors.secondary;
    return 'transparent';
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getBackgroundColor() },
        variant === 'outline' && { borderColor: theme.colors.primary, borderWidth: 1 },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? theme.colors.primary : 'white'} />
      ) : (
        <Text
          style={[
            styles.text,
            { color: variant === 'outline' ? theme.colors.primary : 'white' },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});