import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

const Text = ({children, type = 'default', numberOfLines}) => (
  <NativeText style={types[type]} numberOfLines={numberOfLines}>
    {children}
  </NativeText>
);

const styles = StyleSheet.create({
  titleText: {
    color: '#53565A',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22,
  },
  defaultText: {
    color: '#53565A',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
  },
  infoTitle: {
    color: '#53565A',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
  },
  infoDefault: {
    color: '#97999B',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
  },
});

const types = {
  title: styles.titleText,
  default: styles.defaultText,
  infoTitle: styles.infoTitle,
  infoDefault: styles.infoDefault,
};

export default Text;
