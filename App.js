import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginStatusProvider} from './common/contexts/loginStatusContext';
import Navigation from './common/navigation';
import GetNewsList from './core/domain/news/repositories/getNewsList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // GetNewsList().then(res => console.log('RES::::', res[0].title));
  return (
    <LoginStatusProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </LoginStatusProvider>
  );
};

export default App;
