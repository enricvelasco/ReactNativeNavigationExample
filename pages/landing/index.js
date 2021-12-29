import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginStatus from '../../common/hooks/useLoginStatus';

const Landing = () => {
  const {setIsSignedIn} = useLoginStatus();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing (NEWS)</Text>
      <Button title="set Login" onPress={() => setIsSignedIn(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Landing;
