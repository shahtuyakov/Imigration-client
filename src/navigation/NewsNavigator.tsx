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
      <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
      <Stack.Screen 
        name="NewsDetail" 
        component={NewsDetailScreen}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          title: 'News Detail'
        }}
      />
    </Stack.Navigator>
  );
}

export default NewsNavigator; 