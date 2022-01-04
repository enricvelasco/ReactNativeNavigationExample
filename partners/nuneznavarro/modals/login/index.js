import React, {useState} from 'react';
import Watch, {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Button,
  Alert,
} from 'react-native';
import TextInput from '../../../../common/components/ui/atoms/textInput';
import PrimaryButton from '../../../../common/components/ui/atoms/primaryButton';
import {
  useReachability,
  sendMessageData,
  sendMessage,
  startFileTransfer,
  useInstalled,
} from 'react-native-watch-connectivity';

export const LoginModal = ({onClose, onLogin, onGoToLocation}) => {
  const [message, setMessage] = useState('');

  const setLogin = () => {
    onClose();
    onLogin();
  };

  const handleLocation = () => {
    onClose();
    onGoToLocation();
  };

  const watchSendMessage = () => {
    console.log('SEND_MESSAGE:', message);
    sendMessage({message}, error => {
      if (error) {
        Alert.alert(`the message "${message}" can't be sent`);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Login 👋!</Text>
        <TextInput placeholder={'Email'} />
        <TextInput placeholder={'Password'} />
        <PrimaryButton title={'Iniciar'} onPress={setLogin} />
        <Button title={'Location Data'} onPress={handleLocation} />
        <TextInput
          placeholder={'Text to Whatch'}
          onChange={setMessage}
          value={message}
        />
        <Button title={'Send to Watch'} onPress={watchSendMessage} />
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
    height: 450,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
