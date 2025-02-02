import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'YOUR_API_URL';

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'immigrant' | 'lawyer' | 'admin';
    isEmailVerified: boolean;
  };
}

class AuthService {
  private static async storeToken(token: string): Promise<void> {
    await AsyncStorage.setItem('token', token);
  }

  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    await this.storeToken(response.data.token);
    return response.data;
  }

  static async signup(email: string, password: string, role: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email,
      password,
      role,
    });
    await this.storeToken(response.data.token);
    return response.data;
  }

  static async forgotPassword(email: string): Promise<void> {
    await axios.post(`${API_URL}/auth/forgot-password`, { email });
  }

  static async verifyEmail(token: string): Promise<void> {
    await axios.post(`${API_URL}/auth/verify-email`, { token });
  }

  static async socialLogin(provider: 'google' | 'apple', token: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/social-login`, {
      provider,
      token,
    });
    await this.storeToken(response.data.token);
    return response.data;
  }

  static async logout(): Promise<void> {
    await AsyncStorage.removeItem('token');
  }
}

export default AuthService;