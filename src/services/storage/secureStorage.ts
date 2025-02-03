import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
};

export const secureStorage = {
  setToken: (token: string) => AsyncStorage.setItem(KEYS.AUTH_TOKEN, token),
  getToken: () => AsyncStorage.getItem(KEYS.AUTH_TOKEN),
  removeToken: () => AsyncStorage.removeItem(KEYS.AUTH_TOKEN),
};