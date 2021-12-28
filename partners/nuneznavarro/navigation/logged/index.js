import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../../pages/home';
import {assetTypes} from '../../../../common/client/assetsConfig';
import useAssetsStatus from '../../../../common/hooks/useAssetsStatus';
import LoadingScreen from '../../../../pages/loading';

const Stack = createNativeStackNavigator();

export const NunezLoggedNavigation = () => {
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
