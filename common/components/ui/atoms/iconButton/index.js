import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const IconButton = ({
  icon,
  disabled = false,
  style,
  color = '#fcfdff',
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled ? styles.disabled : styles.enabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <icon.component color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  enabled: {
    backgroundColor: '#FFC72C',
    color: '#FFFFFF',
    fontSize: 14,
  },
  disabled: {
    backgroundColor: '#EEEEEE',
    fontSize: 14,
    color: '#97999B',
  },
});

export default IconButton;
