import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'elevated';
  testID?: string;
}

export const Card = ({ 
  children, 
  style, 
  variant = 'default',
  testID
}: CardProps) => {
  return (
    <View 
      style={[styles.card, styles[variant], style]}
      accessibilityRole="none"
      testID={testID}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  default: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});