import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../../../pages/main';
import Home from '../../../pages/home';

const Tab = createBottomTabNavigator();

export const ParkingNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ParkingMain" component={Main} />
      <Tab.Screen name="ParkingHome" component={Home} />
    </Tab.Navigator>
  );
};
