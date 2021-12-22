import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, Text} from 'react-native';

const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HILTON NEWS</Text>
      <Button title={'Login'} onPress={() => {}} />
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
