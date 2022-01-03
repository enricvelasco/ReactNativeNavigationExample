import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TextInput from '../../../../common/components/ui/atoms/textInput';
import PrimaryButton from '../../../../common/components/ui/atoms/primaryButton';

export const LoginModal = ({onClose, onLogin, onGoToLocation}) => {
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
        <PrimaryButton title={'Iniciar'} onPress={setLogin} />
        <PrimaryButton title={'Location Data'} onPress={onGoToLocation} />
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
