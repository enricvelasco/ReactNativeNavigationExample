import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsScreen from '../../pages/news';
import LoginScreen from '../../pages/login';

const Stack = createNativeStackNavigator();

const UnregisteredHiltonNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="News"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default UnregisteredHiltonNavigation;
