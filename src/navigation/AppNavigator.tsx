import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/auth/LoginScreen';
import NewsFeedScreen from '../screens/news/NewsFeedScreen';
import { RootState } from '../store';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'NewsFeed' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
} 