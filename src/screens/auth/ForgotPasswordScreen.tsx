import React from 'react';
import { View, Text } from 'react-native';
import { AuthStackScreenProps } from '../../navigation/types';

interface ForgotPasswordScreenProps extends AuthStackScreenProps<'ForgotPassword'> {}

export default function ForgotPasswordScreen({}: ForgotPasswordScreenProps) {
  return (
    <View>
      <Text>Forgot Password Screen</Text>
    </View>
  );
} 