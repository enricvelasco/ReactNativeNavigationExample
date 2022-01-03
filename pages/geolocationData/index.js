import React from 'react';
import {Text} from 'react-native';
import {UseGeolocationStatus} from '../../common/hooks/useGeolocationStatus';
import {SafeAreaView} from 'react-native-safe-area-context';
import PrimaryButton from '../../common/components/ui/atoms/primaryButton';

const GeolocationData = ({navigation}) => {
  const {latitude, longitude} = UseGeolocationStatus();
  return (
    <SafeAreaView>
      <Text>LAT: {latitude}</Text>
      <Text>LON: {longitude}</Text>
      <PrimaryButton title={'BACK'} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default GeolocationData;
