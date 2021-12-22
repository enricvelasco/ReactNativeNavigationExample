import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

export const SettingsIcon = ({color}) => (
  <FontAwesomeIcon icon={faCog} size={32} color={color} />
);
