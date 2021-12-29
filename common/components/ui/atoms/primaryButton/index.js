import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {widthSizes} from '../../constants/sizes';

const PrimaryButton = ({
  title,
  accessibilityLabel,
  disabled = false,
  onPress = () => {},
  size = 'full',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled ? styles.disabled : styles.enabled,
        sizes[size],
      ]}
      title={title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}>
      <Text style={[disabled ? styles.disabled : styles.enabled]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 30,
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

const sizes = {
  full: widthSizes.fullSize,
  large: widthSizes.largeSize,
  medium: widthSizes.mediumSize,
  small: widthSizes.smallSize,
};

export default PrimaryButton;
