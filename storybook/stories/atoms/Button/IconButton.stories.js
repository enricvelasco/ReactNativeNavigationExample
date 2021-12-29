import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import IconButton from '../../../../common/components/ui/atoms/iconButton';
import {HouseHomeIcon} from '../../../../common/components/ui/atoms/icons/houseUser';

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

storiesOf('Atoms/Buttons/IconButton', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Default', () => (
    <>
      <IconButton icon={{component: HouseHomeIcon}} />
    </>
  ))
  .add('Disabled', () => (
    <>
      <IconButton
        icon={{component: HouseHomeIcon}}
        disabled
        color={'#fcfdff'}
      />
    </>
  ))
  .add('Custom', () => (
    <>
      <IconButton
        style={{backgroundColor: '#2E66D9FF'}}
        icon={{component: HouseHomeIcon}}
        color={'#fcfdff'}
      />
    </>
  ));
