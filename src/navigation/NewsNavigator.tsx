import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsFeedScreen, NewsDetailScreen } from '../screens/news';
import { NewsStackParamList } from './types';

const Stack = createNativeStackNavigator<NewsStackParamList>();

function NewsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="NewsFeedList"
        component={NewsFeedScreen}
      />
    </Stack.Navigator>
  );
}

export default NewsNavigator; 