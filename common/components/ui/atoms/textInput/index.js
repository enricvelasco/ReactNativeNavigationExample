import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput as NativeTextInput} from 'react-native';
import {widthSizes} from '../../constants/sizes';

const TextInput = ({
  placeholder = '',
  value = '',
  size = 'full',
  maxLength = 255,
  disabled = false,
  onChange = () => {},
}) => {
  const [textValue, setTextValue] = useState();

  useEffect(() => {
    setTextValue(value);
  }, []);

  const updateText = val => {
    setTextValue(val);
    onChange(val);
  };

  return (
    <NativeTextInput
      style={[styles.input, sizes[size], disabled && styles.disabled]}
      onChangeText={updateText}
      value={textValue}
      placeholder={placeholder}
      maxLength={maxLength}
      editable={!disabled}
      // keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#53565A',
    padding: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#d0d0d0',
  },
});

const sizes = {
  full: widthSizes.fullSize,
  large: widthSizes.largeSize,
  medium: widthSizes.mediumSize,
  small: widthSizes.smallSize,
};

export default TextInput;
