import React from 'react';
// import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './common/navigation';
import {AppContextProvider} from './common/contexts/utils/AppContextProvider';
import ModalsManagement from './common/modals';
import {StatusBar} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={STYLES[2]} hidden={false} translucent={true} />
        <Navigation />
        <ModalsManagement />
      </SafeAreaProvider>
    </AppContextProvider>
  );
};

export default App;

// export {default} from './storybook';
