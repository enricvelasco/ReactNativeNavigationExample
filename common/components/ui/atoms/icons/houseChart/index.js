import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';

export const HouseChartIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faChartBar} size={size} color={color} />
);
