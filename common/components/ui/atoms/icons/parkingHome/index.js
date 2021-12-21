import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faParking} from '@fortawesome/free-solid-svg-icons';

export const ParkingHomeIcon = ({color}) => (
  <FontAwesomeIcon icon={faParking} size={32} color={color} />
);
