import React from 'react';
import { View, Text } from 'react-native';
import { AuthStackScreenProps } from '../../navigation/types';

interface SignUpScreenProps extends AuthStackScreenProps<'SignUp'> {}

export default function SignUpScreen({}: SignUpScreenProps) {
  return (
    <View>
      <Text>Sign Up Screen</Text>
    </View>
  );
} 