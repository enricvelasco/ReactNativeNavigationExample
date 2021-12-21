import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginStatusProvider} from './common/contexts/loginStatusContext';
import {MainNavigation} from './common/client/navigation/main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <LoginStatusProvider>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </LoginStatusProvider>
  );
};

export default App;
