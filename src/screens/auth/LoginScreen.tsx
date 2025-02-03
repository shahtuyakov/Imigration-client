import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { googleSignIn, appleSignIn } from '../../store/slices/authSlice';
import { AuthButton } from '../../components/auth/AuthButton';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { useAuthError } from '../../hooks/useAuthError';
import { useTheme } from '../../theme/hooks/useTheme';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { error, loading } = useAuthError();
  const handleGoogleSignIn = async () => {
    await dispatch(googleSignIn() as any);
  };

  const handleAppleSignIn = async () => {
    await dispatch(appleSignIn() as any);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {error && <ErrorMessage message={error} />}
      <AuthButton
        onPress={handleGoogleSignIn}
        title="Continue with Google"
        iconName="google"
        isLoading={loading}
      />
      {Platform.OS === 'ios' && (
        <AuthButton
          onPress={handleAppleSignIn}
          title="Continue with Apple"
          iconName="apple"
          isLoading={loading}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});