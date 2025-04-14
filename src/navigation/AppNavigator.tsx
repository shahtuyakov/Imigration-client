import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthState } from '../hooks/useAuthState';
import { AuthOptionsScreen, EmailLoginScreen, GoogleLoginScreen, AppleLoginScreen, VerifyEmailScreen } from '../screens/auth/index';
import { NewsDetailScreen } from '../screens/news/index';
import { LoadingScreen } from '../screens/LoadingScreen';
import { RootStackParamList, AuthStackParamList, BottomTabsParamList } from './types';
import NewsNavigator from './NewsNavigator';
import CasesScreen from '../screens/case/CasesScreen';
import LawyersScreen from '../screens/lawyer/LawyersScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
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

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        headerShown: true,
      }}
    >
      <BottomTab.Screen 
        name="NewsFeed" 
        component={NewsNavigator}
        options={{
          title: 'News Feed',
          headerShadowVisible: false,
        }}
      />
      <BottomTab.Screen name="Cases" component={CasesScreen} />
      <BottomTab.Screen name="Lawyers" component={LawyersScreen} />
      <BottomTab.Screen name="Profile" component={LoginScreen} />
    </BottomTab.Navigator>
  );
}

export function AppNavigator() {
  const { isLoading } = useAuthState();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <RootStack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <>
            <RootStack.Screen name="BottomTabs" component={BottomTabNavigator} />
            <RootStack.Screen 
              name="NewsDetail" 
              component={NewsDetailScreen}
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
                title: 'News Detail'
              }}
            />
            <RootStack.Screen name="Auth" component={AuthNavigator} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
} 