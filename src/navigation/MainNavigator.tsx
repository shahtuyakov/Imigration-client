import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { HomeScreen, CasesNavigator, NewsNavigator, LawyersNavigator, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cases" component={CasesNavigator} />
    <Tab.Screen name="News" component={NewsNavigator} />
    <Tab.Screen name="Lawyers" component={LawyersNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
