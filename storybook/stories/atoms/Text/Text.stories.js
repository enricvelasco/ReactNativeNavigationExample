import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Text from '../../../../common/components/ui/atoms/text';

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
  .add('Text', () => (
    <>
      <Text type={'title'}>
        TITLE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Text>
      <Text type={'default'}>
        DEFAULT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Text>
      <Text type={'infoTitle'}>
        INFO_TITLE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do
      </Text>
      <Text type={'infoDefault'}>
        INFO_DEFAULT: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do
      </Text>
    </>
  ));
