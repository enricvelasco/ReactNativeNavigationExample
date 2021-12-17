import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginStatusProvider} from './contexts/loginStatusContext';
import {MainNavigation} from './client/navigation/main';

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
