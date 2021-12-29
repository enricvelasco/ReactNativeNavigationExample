import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faParking} from '@fortawesome/free-solid-svg-icons';

export const ParkingHomeIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faParking} size={size} color={color} />
);
