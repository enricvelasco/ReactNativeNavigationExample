import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../pages/main';
import Settings from '../pages/settings';
import {SettingsIcon} from '../../../common/components/ui/atoms/icons/settings';
import {HouseHomeIcon} from '../../../common/components/ui/atoms/icons/houseUser';
import {HouseChartIcon} from '../../../common/components/ui/atoms/icons/houseChart';
import {HouseStayIcon} from '../../../common/components/ui/atoms/icons/houseStay';
import {ServicesIcon} from '../../../common/components/ui/atoms/icons/services';

const Tab = createBottomTabNavigator();

const menuItems = {
  MAIN: 'HouseMain',
  SETTINGS: 'HouseSettings',
  STAYS: 'HouseStays',
  CHARTS: 'HouseCharts',
  SERVICES: 'HouseServices',
};

const menuIcon = {
  [menuItems.STAYS]: HouseStayIcon,
  [menuItems.CHARTS]: HouseChartIcon,
  [menuItems.MAIN]: HouseHomeIcon,
  [menuItems.SERVICES]: ServicesIcon,
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

export const HouseNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={getScreenOptions}
      initialRouteName={menuItems.MAIN}>
      <Tab.Screen
        name={menuItems.STAYS}
        component={Main}
        initialParams={defaultParams}
      />
      <Tab.Screen
        name={menuItems.CHARTS}
        component={Main}
        initialParams={defaultParams}
      />
      <Tab.Screen
        name={menuItems.MAIN}
        component={Main}
        initialParams={defaultParams}
      />
      <Tab.Screen
        name={menuItems.SERVICES}
        component={Settings}
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
