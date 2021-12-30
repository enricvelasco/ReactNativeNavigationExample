import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FloatingButton = ({
  text,
  icon,
  color,
  disabled,
  style,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.shadowProp, styles.container, style]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.text} numberOfLines={1}>
        {text}
      </Text>
      <icon.component size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'white',
    width: '100%',
    maxHeight: 64,
    height: 64,
    paddingLeft: 20,
    paddingRight: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
  },
});

export default FloatingButton;
