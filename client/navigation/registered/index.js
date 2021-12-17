import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../pages/home';
import {assetTypes} from '../../assetsConfig';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

export const RegisteredNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      {assetTypes.map(item => (
        <Stack.Screen
          name={item.link}
          component={item.navigationComponent}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
