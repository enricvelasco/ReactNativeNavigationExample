import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHotel} from '@fortawesome/free-solid-svg-icons';

export const HotelHomeIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faHotel} size={size} color={color} />
);
