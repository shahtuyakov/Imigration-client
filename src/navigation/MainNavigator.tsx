import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import NewsScreen from '../screens/news/NewsScreen';
import CasesScreen from '../screens/case/CasesScreen';
import LawyersScreen from '../screens/lawyer/LawyersScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Cases" component={CasesScreen} />
      <Tab.Screen name="Lawyers" component={LawyersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
