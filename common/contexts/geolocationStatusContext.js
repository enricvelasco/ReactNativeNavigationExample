import React, {createContext, useEffect, useState} from 'react';
import {initGeolocation} from '../../application/permissions/geolocation';
import RNLocation from 'react-native-location';

const GeolocationStatusContext = createContext();
export default GeolocationStatusContext;

export const GeolocationStatusContextProvider = ({children}) => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const updateLocation = location => {
    setLongitude(location.longitude || null);
    setLatitude(location.latitude || null);
  };

  useEffect(() => {
    initGeolocation().then(granted => {
      granted &&
        RNLocation.subscribeToLocationUpdates(locations =>
          updateLocation(locations[0]),
        );
    });
  }, []);

  const value = {
    longitude,
    latitude,
    setLocation: location => location && updateLocation(location),
  };

  return (
    <GeolocationStatusContext.Provider value={value}>
      {children}
    </GeolocationStatusContext.Provider>
  );
};
