import React from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginStatus from '../../hooks/useLoginStatus';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Main = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const {setIsSignedIn} = useLoginStatus();

  console.log('MAIN::::', useLoginStatus());

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>MAIN Pull down to see RefreshControl indicator</Text>
        {/* <Button title="set Login" onPress={() => setIsSignedIn(true)} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Main;
