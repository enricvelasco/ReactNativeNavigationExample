import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TextInput from '../../../../common/components/ui/atoms/textInput';

export const LoginModal = ({onClose, onLogin}) => {
  const setLogin = () => {
    onClose();
    onLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Login 👋!</Text>
        <TextInput placeholder={'Email'} />
        <TextInput placeholder={'Password'} />
        <Button onPress={setLogin} title="Set Login" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 300,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
