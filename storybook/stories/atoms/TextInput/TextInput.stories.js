import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import TextInput from '../../../../common/components/ui/atoms/textInput';

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

storiesOf('Atoms/Text Input', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Default', () => (
    <>
      <TextInput
        placeholder={'full size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
      />
      <TextInput
        placeholder={'large size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'large'}
      />
      <TextInput
        placeholder={'medium size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'medium'}
      />
      <TextInput
        placeholder={'small size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'small'}
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <TextInput
        placeholder={'full size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        disabled
      />
      <TextInput
        placeholder={'large size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'large'}
        disabled
      />
      <TextInput
        placeholder={'medium size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'medium'}
        disabled
      />
      <TextInput
        placeholder={'small size'}
        onChange={val => console.log('CHANGE_TEXT::', val)}
        size={'small'}
        disabled
      />
    </>
  ));
