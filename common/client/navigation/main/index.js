import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UnregisteredNavigation} from '../unregistered';
import useLoginStatus from '../../../hooks/useLoginStatus';
import {RegisteredNavigation} from '../registered';

export const MainNavigation = () => {
  const {isSignedIn} = useLoginStatus();
  return (
    <NavigationContainer>
      {isSignedIn && <RegisteredNavigation />}
      {!isSignedIn && <UnregisteredNavigation />}
    </NavigationContainer>
  );
};
