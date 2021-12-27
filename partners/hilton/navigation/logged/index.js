import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../../pages/home';
import {assetTypes} from '../../../../common/client/assetsConfig';
import LoadingScreen from '../../../../pages/loading';
import useAssetsStatus from '../../../../common/hooks/useAssetsStatus';

const Stack = createNativeStackNavigator();

export const HiltonLoggedNavigation = () => {
  const [data, isLoading] = useAssetsStatus();

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} initialParams={{data}} />
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
      )}
    </>
  );
};
