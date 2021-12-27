import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, ActivityIndicator} from 'react-native';

const LoadingScreen = () => {
  console.log('LOADING_SCREEN::::::::::');
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
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

export default LoadingScreen;
