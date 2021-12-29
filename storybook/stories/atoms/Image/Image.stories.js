import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Poster from '../../../../common/components/ui/atoms/poster';

const ViewContainer = ({children}) => (
  <View
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingLeft: 8,
      paddingRight: 8,
    }}>
    {children}
  </View>
);

storiesOf('Atoms', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Poster', () => (
    <>
      <Poster
        src={'https://picsum.photos/400'}
        size={'large'}
        resizeMode={'cover'}
      />
      <Poster
        src={'https://picsum.photos/400'}
        size={'medium'}
        resizeMode={'cover'}
      />
      <Poster
        src={'https://picsum.photos/400'}
        size={'small'}
        resizeMode={'cover'}
      />
    </>
  ));
