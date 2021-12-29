import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faToolbox} from '@fortawesome/free-solid-svg-icons';

export const ServicesIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faToolbox} size={size} color={color} />
);
