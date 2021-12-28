import React from 'react';
// import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './common/navigation';
import {AppContextProvider} from './common/contexts/utils/AppContextProvider';
import ModalsManagement from './common/modals';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <Navigation />
        <ModalsManagement />
      </SafeAreaProvider>
    </AppContextProvider>
  );
};

export default App;
