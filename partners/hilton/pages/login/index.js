import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, Text} from 'react-native';
import useLoginStatus from '../../../../common/hooks/useLoginStatus';

const LoginScreen = ({navigation}) => {
  const {setIsSignedIn} = useLoginStatus();

  return (
    <SafeAreaView style={styles.container}>
      <Text>HILTON Login</Text>
      <Button title={'Set Login'} onPress={() => setIsSignedIn(true)} />
      <Button title={'TO NEWS'} onPress={() => navigation.navigate('News')} />
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

export default LoginScreen;
