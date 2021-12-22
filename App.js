import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginStatusProvider} from './common/contexts/loginStatusContext';
import Navigation from './common/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <LoginStatusProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </LoginStatusProvider>
  );
};

export default App;
