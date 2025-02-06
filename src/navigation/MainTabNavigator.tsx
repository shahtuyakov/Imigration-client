import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsNavigator from './NewsNavigator';
import { BottomTabsParamList } from './types';
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
      {/* ... other tab screens */}
    </Tab.Navigator>
  );
}

export default MainTabNavigator; 