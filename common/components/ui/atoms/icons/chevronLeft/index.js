import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

export const ChevronLeftIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faChevronLeft} size={size} color={color} />
);
