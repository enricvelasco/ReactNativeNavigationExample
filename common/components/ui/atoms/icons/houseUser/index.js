import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouseUser} from '@fortawesome/free-solid-svg-icons';

export const HouseHomeIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faHouseUser} size={size} color={color} />
);
