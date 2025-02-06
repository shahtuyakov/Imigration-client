import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export interface RootStackParamList extends Record<string, object | undefined> {
  Loading: undefined;
  BottomTabs: undefined;
  Auth: undefined;
  NewsDetail: { newsId: string };
}

export interface AuthStackParamList extends Record<string, object | undefined> {
  AuthOptions: undefined;
  EmailLogin: undefined;
  GoogleLogin: undefined;
  AppleLogin: undefined;
  VerifyEmail: undefined;
}

export interface BottomTabsParamList extends Record<string, object | undefined> {
  NewsFeed: undefined;
  Cases: undefined;
  Lawyers: undefined;
  Profile: undefined;
}

export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;

export type NewsStackParamList = {
  NewsFeedList: undefined;
};

export type NewsStackNavigationProp = NativeStackNavigationProp<NewsStackParamList>;

export type NewsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsParamList, 'NewsFeed'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type NewsDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'NewsDetail'>;
  