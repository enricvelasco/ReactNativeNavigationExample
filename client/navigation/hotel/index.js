import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../../../pages/main';
import Home from '../../../pages/home';

const Tab = createBottomTabNavigator();

export const HotelNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HotelMain" component={Main} />
      <Tab.Screen name="HotelHome" component={Home} />
    </Tab.Navigator>
  );
};
