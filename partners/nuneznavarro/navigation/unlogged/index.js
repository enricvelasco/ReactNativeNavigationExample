import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsScreen from '../../pages/news';
import useNewsStatus from '../../../../common/hooks/useNewsStatus';
import LoadingScreen from '../../../../pages/loading';

const Stack = createNativeStackNavigator();

const UnregisteredNunezNavigation = () => {
  const [data, isLoading] = useNewsStatus();

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Stack.Navigator
          initialRouteName="News"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="News"
            component={NewsScreen}
            initialParams={{data}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default UnregisteredNunezNavigation;
