import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { 
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import { login, socialLogin } from '../../store/slices/authSlice';
import { Button, Input } from '@/components/common';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await dispatch(login({ email, password })).unwrap();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await dispatch(socialLogin({
        provider: 'google',
        token: userInfo.idToken
      })).unwrap();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // handle cancelled
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  const handleAppleLogin = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      await dispatch(socialLogin({
        provider: 'apple',
        token: appleAuthRequestResponse.identityToken
      })).unwrap();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title="Login" 
        onPress={handleLogin} 
        loading={loading}
      />
      <Button 
        title="Continue with Google" 
        onPress={handleGoogleLogin}
      />
      {appleAuth.isSupported && (
        <Button 
          title="Continue with Apple" 
          onPress={handleAppleLogin}
        />
      )}
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate('SignUp')}
        type="outline"
      />
      <Button 
        title="Forgot Password?" 
        onPress={() => navigation.navigate('ForgotPassword')}
        type="text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default LoginScreen;