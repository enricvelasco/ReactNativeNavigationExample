import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import IconsList from '../../../../common/components/ui/atoms/icons';

const ViewContainer = ({children}) => (
  <View
    style={{
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    {children}
  </View>
);

storiesOf('Atoms/Icons', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('Default', () => <IconsList color={null} size={50} />);
