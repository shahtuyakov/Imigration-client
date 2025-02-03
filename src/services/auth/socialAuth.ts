import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { Platform } from 'react-native';
import { AuthResponse } from './types';

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // Get this from Google Cloud Console
  iosClientId: 'YOUR_IOS_CLIENT_ID', // Get this from Google Cloud Console
});

export async function signInWithGoogle(): Promise<AuthResponse> {
  try {
    await GoogleSignin.hasPlayServices();
    const { accessToken } = await GoogleSignin.getTokens();
    
    // Call your backend API to validate Google token
    const response = await fetch('YOUR_API_ENDPOINT/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: accessToken,
      }),
    });
    
    return await response.json();
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      throw new Error('Sign in cancelled');
    }
    throw error;
  }
}

export async function signInWithApple(): Promise<AuthResponse> {
  try {
    if (Platform.OS !== 'ios') {
      throw new Error('Apple Sign-In is only available on iOS devices');
    }

    const appleAuthResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const { identityToken, nonce } = appleAuthResponse;

    if (!identityToken) {
      throw new Error('Apple Sign-In failed - no identity token returned');
    }

    // Call your backend API to validate Apple token
    const response = await fetch('YOUR_API_ENDPOINT/auth/apple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identityToken,
        nonce,
      }),
    });

    return await response.json();
  } catch (error: any) {
    if (error.code === appleAuth.Error.CANCELED) {
      throw new Error('Sign in cancelled');
    }
    throw error;
  }
}