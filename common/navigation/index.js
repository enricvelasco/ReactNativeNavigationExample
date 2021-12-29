import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {partnersList} from '../../partners';
import useLoginStatus from '../hooks/useLoginStatus';

/**
 * alfred = Alf1
 * nunez = NyN1
 * hilton = Hilton1
 */
const partner = partnersList.find(item => item.idPartner === 'NyN1');

const Navigation = () => {
  const {isSignedIn} = useLoginStatus();

  return (
    <NavigationContainer>
      {!isSignedIn && <partner.unLoggedNavigation />}
      {isSignedIn && <partner.loggedNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
