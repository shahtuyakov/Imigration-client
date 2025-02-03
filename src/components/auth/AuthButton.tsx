import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../theme/hooks/useTheme';

interface AuthButtonProps {
  onPress: () => void;
  title: string;
  iconName: 'google' | 'apple';
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function AuthButton({
  onPress,
  title,
  iconName,
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}: AuthButtonProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.colors.surface },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <>
          {iconName === 'google' && (
            <Text style={styles.icon}>G</Text>
          )}
          {iconName === 'apple' && (
            <Text style={styles.icon}>A</Text>
          )}
          <Text
            style={[
              styles.text,
              { color: theme.colors.text.primary },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});