import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/auth/LoginScreen';
import NewsFeedScreen from '../screens/news/NewsFeedScreen';
import { RootState } from '../store';
import { useAuthState } from '../hooks/useAuthState';
import { AuthOptionsScreen, EmailLoginScreen, GoogleLoginScreen, AppleLoginScreen, VerifyEmailScreen } from '../screens/auth/index';
import { GuestNewsScreen, NewsDetailScreen } from '../screens/news/index';
import { CaseManagementScreen, LawyerListScreen, ProfileScreen } from '../screens/cases/index';
import { LoadingScreen } from '../screens/LoadingScreen';
import { RootStackParamList, GuestTabsParamList, AuthStackParamList, BottomTabsParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const GuestTab = createBottomTabNavigator<GuestTabsParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="AuthOptions" component={AuthOptionsScreen} />
      <AuthStack.Screen name="EmailLogin" component={EmailLoginScreen} />
      <AuthStack.Screen name="GoogleLogin" component={GoogleLoginScreen} />
      <AuthStack.Screen name="AppleLogin" component={AppleLoginScreen} />
      <AuthStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    </AuthStack.Navigator>
  );
}

function GuestTabNavigator() {
  return (
    <GuestTab.Navigator>
      <GuestTab.Screen name="GuestNews" component={GuestNewsScreen} />
      <GuestTab.Screen name="NewsDetail" component={NewsDetailScreen} />
    </GuestTab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="NewsFeed" component={NewsFeedScreen} />
      <BottomTab.Screen name="Cases" component={CaseManagementScreen} />
      <BottomTab.Screen name="Lawyers" component={LawyerListScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

export function AppNavigator() {
  const { isLoading, isAuthenticated } = useAuthState();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <RootStack.Screen name="Loading" component={LoadingScreen} />
        ) : true ? (
          <RootStack.Screen name="BottomTabs" component={BottomTabNavigator} />
        ) : (
          <>
            <RootStack.Screen name="GuestTabs" component={GuestTabNavigator} />
            <RootStack.Screen name="Auth" component={AuthNavigator} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
} 