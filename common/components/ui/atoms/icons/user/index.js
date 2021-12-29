import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export const UserIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faUser} size={size} color={color} />
);
