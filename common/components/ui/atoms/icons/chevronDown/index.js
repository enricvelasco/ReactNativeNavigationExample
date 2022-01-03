import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export const ChevronDownIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faChevronDown} size={size} color={color} />
);
