import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '../../../../common/components/ui/atoms/primaryButton';

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

storiesOf('Atoms/Buttons/Primary Button', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Default', () => (
    <>
      <PrimaryButton
        title={'Default full'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
      />
      <PrimaryButton
        title={'Large'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'large'}
      />
      <PrimaryButton
        title={'Medium'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'medium'}
      />
      <PrimaryButton
        title={'Small'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'small'}
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <PrimaryButton
        title={'Default full'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        disabled
      />
      <PrimaryButton
        title={'Large'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'large'}
        disabled
      />
      <PrimaryButton
        title={'Medium'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'medium'}
        disabled
      />
      <PrimaryButton
        title={'Small'}
        onPress={() => console.log('ON_CLICK_BUTTON')}
        size={'small'}
        disabled
      />
    </>
  ));
