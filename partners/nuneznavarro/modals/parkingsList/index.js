import React from 'react';
import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../../../../common/components/ui/atoms/text';
import useParkingStatus from '../../../../common/hooks/useParkingStatus';
import LoadingScreen from '../../../../pages/loading';
import {getDistanceBetweenTwoCoordinates} from '../../../../common/utils/geolocation';

const windowHeight = Dimensions.get('window').height;

export const ParkingListModal = ({longitude, latitude}) => {
  const [data, isLoading] = useParkingStatus();

  return (
    <View style={styles.container}>
      {isLoading && <LoadingScreen />}
      {!isLoading &&
        data.map((item, key) => (
          <TouchableOpacity key={key} style={styles.itemContainer}>
            <Text type={'infoTitle'}>{item.title}</Text>
            <Text type={'infoDefault'}>{item.direction}</Text>
            <Text type={'infoDefault'}>
              Distancia:{' '}
              {getDistanceBetweenTwoCoordinates(
                {longitude, latitude},
                {longitude: item.longitude, latitude: item.latitude},
              )}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: windowHeight - 40,
    paddingTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemContainer: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
