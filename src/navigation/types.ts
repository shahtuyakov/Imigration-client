import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Loading: undefined;
  Auth: undefined;
  GuestTabs: undefined;
  BottomTabs: undefined;
};

export type AuthStackParamList = {
  [key: string]: undefined | object;  // Add index signature
  AuthOptions: undefined;
  EmailLogin: undefined;
  GoogleLogin: undefined;
  AppleLogin: undefined;
  SignUp: undefined;
  Login: undefined;
  VerifyEmail: { email: string };
};

export type GuestTabsParamList = {
  GuestNews: undefined;
  NewsDetail: { articleId: string };
};

export type BottomTabsParamList = {
  NewsFeed: undefined;
  Cases: undefined;
  Lawyers: undefined;
  Profile: undefined;
};

export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;

export type GuestTabScreenProps<T extends keyof GuestTabsParamList> = 
  BottomTabScreenProps<GuestTabsParamList, T>;

export type MainTabParamList = {
  News: undefined;
  Cases: undefined;
  Lawyers: undefined;
  Profile: undefined;
};
  