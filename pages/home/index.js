import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginStatus from '../../hooks/useLoginStatus';
import {assetsMock} from '../../mocks/assets';
import {assetTypes} from '../../client/assetsConfig';

const Home = ({navigation}) => {
  const {setIsSignedIn} = useLoginStatus();

  return (
    <SafeAreaView style={styles.container}>
      {assetTypes.map(item => item.navigationComponent)}
      <Text>Home</Text>
      {assetsMock.map(item => {
        const type = assetTypes.find(val => val.assetType === item.id);
        return (
          <Button
            key={item.id}
            title={item.name}
            onPress={() => navigation.navigate(type.link)}
          />
        )
      })}
      <Button title="set LOGOUT" onPress={() => setIsSignedIn(false)} />
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

export default Home;
