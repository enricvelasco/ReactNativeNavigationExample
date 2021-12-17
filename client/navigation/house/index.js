import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../../../pages/main';
import Settings from '../../../pages/settings';

const Tab = createBottomTabNavigator();

export const HouseNavigation = () => {
  return (
    <Tab.Navigator
      options={{
        headerShown: false,
      }}>
      <Tab.Screen name="HouseMain" component={Main} />
      <Tab.Screen name="HouseSettings" component={Settings} />
    </Tab.Navigator>
  );
};
