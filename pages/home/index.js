import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {assetTypes} from '../../common/client/assetsConfig';
import useLoginStatus from '../../common/hooks/useLoginStatus';

const ButtonsList = ({navigation, list}) => {
  const buttons = list.map(item => {
    const type = assetTypes.find(val => val.assetType === item.type);
    return (
      <Button
        key={item.id}
        title={item.alias}
        onPress={() => navigation.navigate(type.link)}
      />
    );
  });
  return <>{buttons}</>;
};

const Home = ({navigation, route}) => {
  const {setIsSignedIn} = useLoginStatus();
  const {data} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <ButtonsList navigation={navigation} list={data} />
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
