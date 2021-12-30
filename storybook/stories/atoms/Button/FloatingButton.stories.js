import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {HouseHomeIcon} from '../../../../common/components/ui/atoms/icons/houseUser';
import FloatingButton from '../../../../common/components/ui/atoms/floatingButton';
import {ChevronRightIcon} from '../../../../common/components/ui/atoms/icons/chevronRight';

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

storiesOf('Atoms/Buttons/FloatingButton', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Default', () => (
    <>
      <FloatingButton
        text={'Floating Button'}
        icon={{component: ChevronRightIcon}}
        color={'#000000'}
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <FloatingButton
        text={'Floating Button Disabled'}
        icon={{component: ChevronRightIcon}}
        disabled
        color={'#000000'}
      />
    </>
  ))
  .add('Custom', () => (
    <>
      <FloatingButton
        text={'Floating Button Custom'}
        icon={{component: HouseHomeIcon}}
        color={'#f8f8f8'}
        style={{backgroundColor: '#d37575'}}
      />
    </>
  ));
