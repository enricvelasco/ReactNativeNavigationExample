import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, Text} from 'react-native';
import useLoginStatus from '../../../../common/hooks/useLoginStatus';
import useModalStatus from '../../../../common/hooks/useModalStatus';
import {LoginModal} from '../../modals/login';

const NewsScreen = () => {
  const {setIsSignedIn} = useLoginStatus();
  const {setShowBottomSwipeModal, setConfig} = useModalStatus();

  const modalConfig = {
    component: LoginModal,
    props: {
      onLogin: () => setIsSignedIn(true),
    },
  };

  const showModal = () => {
    setConfig(modalConfig);
    setShowBottomSwipeModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>NN NEWS</Text>
      <Button title={'Open Login'} onPress={showModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsScreen;
