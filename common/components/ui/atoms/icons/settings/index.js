import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

export const SettingsIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faCog} size={size} color={color} />
);
