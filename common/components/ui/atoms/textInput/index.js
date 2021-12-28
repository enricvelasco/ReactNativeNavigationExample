import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput as NativeTextInput} from 'react-native';

const TextInput = ({placeholder = '', value = '', onChange = () => {}}) => {
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
      style={styles.input}
      onChangeText={updateText}
      value={textValue}
      placeholder={placeholder}
      // keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export default TextInput;
