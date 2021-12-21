import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../pages/main';
import Settings from '../pages/settings';
import {SettingsIcon} from '../../../common/components/ui/atoms/icons/settings';
import {ParkingHomeIcon} from '../../../common/components/ui/atoms/icons/parkingHome';

const Tab = createBottomTabNavigator();

const menuItems = {
  MAIN: 'HouseMain',
  SETTINGS: 'HouseSettings',
};

const menuIcon = {
  [menuItems.MAIN]: ParkingHomeIcon,
  [menuItems.SETTINGS]: SettingsIcon,
};

const getMenuIcon = (IconComponent, focused) => {
  return <IconComponent color={focused ? '#454545' : '#dbdbdb'} />;
};

const defaultParams = {
  backNavigation: 'Home',
};

const getScreenOptions = ({route}) => ({
  headerShown: false,
  tabBarIcon: ({focused, color, size}) => {
    return getMenuIcon(menuIcon[route.name], focused);
  },
  tabBarActiveTintColor: '#454545',
  tabBarInactiveTintColor: '#454545',
});

export const ParkingNavigation = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen
        name={menuItems.MAIN}
        component={Main}
        initialParams={defaultParams}
      />
      <Tab.Screen
        name={menuItems.SETTINGS}
        component={Settings}
        initialParams={defaultParams}
      />
    </Tab.Navigator>
  );
};
