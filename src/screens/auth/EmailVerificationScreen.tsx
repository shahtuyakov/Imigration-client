import React from 'react';
import { View, Text } from 'react-native';
import { AuthStackScreenProps } from '../../navigation/types';

interface EmailVerificationScreenProps extends AuthStackScreenProps<'EmailVerification'> {}

export default function EmailVerificationScreen({}: EmailVerificationScreenProps) {
  return (
    <View>
      <Text>Email Verification Screen</Text>
    </View>
  );
} 