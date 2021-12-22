import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../../pages/home';
import {assetTypes} from '../../../../common/client/assetsConfig';

const Stack = createNativeStackNavigator();

export const HiltonLoggedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      {assetTypes.map(item => (
        <Stack.Screen
          key={item.id}
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
