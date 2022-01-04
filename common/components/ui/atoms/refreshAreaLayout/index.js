import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScrollView, RefreshControl} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const RefreshAreaLayout = ({children, style}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaProvider style={style}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {children}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default RefreshAreaLayout;
