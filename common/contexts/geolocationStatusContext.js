import React, {createContext, useEffect, useState} from 'react';
import {
  getLocation,
  subscribeToLocationUpdates,
} from '../../application/permissions/geolocation';

const GeolocationStatusContext = createContext();
export default GeolocationStatusContext;

export const GeolocationStatusContextProvider = ({children}) => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const updateLocation = location => {
    // setLongitude(location.longitude || null);
    setLongitude(41.3729513317664);
    // setLatitude(location.latitude || null);
    setLatitude(2.1577972773379717);
  };

  useEffect(() => {
    getLocation().then(location => {
      updateLocation(location);
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
