import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, Text} from 'react-native';
import useLoginStatus from '../../../../common/hooks/useLoginStatus';

const NewsScreen = () => {
  const {setIsSignedIn} = useLoginStatus();

  return (
    <SafeAreaView style={styles.container}>
      <Text>NN NEWS</Text>
      <Button title={'Login'} onPress={() => setIsSignedIn(true)} />
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
