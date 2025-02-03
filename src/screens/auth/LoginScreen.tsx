import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn, appleSignIn } from '../../store/slices/authSlice';
import { AuthButton } from '../../components/auth/AuthButton';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { useAuthError } from '../../hooks/useAuthError';
import { useTheme } from '../../theme/hooks/useTheme';
import { NavigationProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { RootState } from '../../store/types';
import { useAuthState } from '../../hooks/useAuthState';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { error, loading } = useAuthError();
  const { isAuthenticated } = useAuthState();

  const handleGoogleSignIn = async () => {
    await dispatch(googleSignIn() as any);
  };

  const handleAppleSignIn = async () => {
    await dispatch(appleSignIn() as any);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('NewsFeed');
    }
  }, [isAuthenticated, navigation]);

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