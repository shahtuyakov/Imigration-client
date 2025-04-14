import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsNavigator from './NewsNavigator';
import { BottomTabsParamList } from './types';
import NewsDetailScreen from '../screens/news/NewsDetailScreen';
// ... other imports

const Tab = createBottomTabNavigator<BottomTabsParamList>();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="NewsFeed" 
        component={NewsNavigator}
        options={{
          // ... your tab options
        }}
      />
      <Tab.Screen 
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{ headerShown: false }}
      />
      {/* ... other tab screens */}
    </Tab.Navigator>
  );
}

export default MainTabNavigator; 