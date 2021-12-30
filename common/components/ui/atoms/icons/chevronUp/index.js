import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

export const ChevronUpIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faChevronUp} size={size} color={color} />
);
