import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../pages/main';
import Settings from '../pages/settings';
import {HotelHomeIcon} from '../../../common/components/ui/atoms/icons/hotelHome';
import {SettingsIcon} from '../../../common/components/ui/atoms/icons/settings';
import {createDrawerNavigator} from '@react-navigation/drawer';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const menuItems = {
  MAIN: 'HotelMain',
  SETTINGS: 'HotelSettings',
};

const menuIcon = {
  [menuItems.MAIN]: HotelHomeIcon,
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

export const HotelNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name={menuItems.MAIN}
        component={Main}
        initialParams={defaultParams}
      />
      <Drawer.Screen
        name={menuItems.SETTINGS}
        component={Settings}
        initialParams={defaultParams}
      />
    </Drawer.Navigator>
  );
};

/* <Tab.Navigator screenOptions={getScreenOptions}>
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
    </Tab.Navigator> */
