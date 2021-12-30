import {useContext} from 'react';
import GeolocationStatusContext from '../contexts/geolocationStatusContext';

export const UseGeolocationStatus = () => {
  return useContext(GeolocationStatusContext);
};
