import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../../../../pages/landing';

const Stack = createNativeStackNavigator();

export const UnregisteredNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};
