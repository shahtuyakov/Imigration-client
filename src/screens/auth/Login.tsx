import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input, Card } from '../../components/common';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { AuthStackParamList } from '../../navigation/types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await dispatch(login({ email, password })).unwrap();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { idToken } = await GoogleSignin.signIn();
      await dispatch(googleLogin(idToken)).unwrap();
    } catch (err) {
      setError('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setLoading(true);
      const { identityToken } = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      await dispatch(appleLogin(identityToken)).unwrap();
    } catch (err) {
      setError('Apple login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Card variant="elevated" style={styles.card}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button
          title="Login"
          onPress={handleLogin}
          loading={loading}
          disabled={!email || !password}
        />

        <Button
          title="Forgot Password?"
          variant="outline"
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotButton}
        />

        <View style={styles.socialButtons}>
          <Button
            title="Continue with Google"
            variant="outline"
            onPress={handleGoogleLogin}
            style={styles.socialButton}
          />
          {Platform.OS === 'ios' && (
            <Button
              title="Continue with Apple"
              variant="outline"
              onPress={handleAppleLogin}
              style={styles.socialButton}
            />
          )}
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      justifyContent: 'center',
    },
    card: {
      margin: 24,
    },
    error: {
      color: '#FF3B30',
      fontSize: 14,
      marginBottom: 16,
      textAlign: 'center',
    },
    forgotButton: {
      marginTop: 16,
    },
  });