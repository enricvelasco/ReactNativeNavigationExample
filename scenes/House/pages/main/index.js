import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Main = ({navigation, route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Back'}
        onPress={() => navigation.navigate(params.backNavigation)}
      />
      <Text>Main HOUSE</Text>
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

export default Main;
