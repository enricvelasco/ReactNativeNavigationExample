import React from 'react';
// import {useColorScheme} from 'react-native';
import Navigation from './common/navigation';
import {AppContextProvider} from './common/contexts/utils/AppContextProvider';
import ModalsManagement from './common/modals';
import {StatusBar} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];

const App = () => {
  return (
    <AppContextProvider>
      <>
        <StatusBar barStyle={STYLES[2]} hidden={false} translucent={true} />
        <Navigation />
        <ModalsManagement />
      </>
    </AppContextProvider>
  );
};

export default App;

// export {default} from './storybook';
