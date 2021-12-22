import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsScreen from '../../pages/news';

const Stack = createNativeStackNavigator();

const UnregisteredNunezNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="News"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default UnregisteredNunezNavigation;
