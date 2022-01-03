import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export const ChevronRightIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faChevronRight} size={size} color={color} />
);
