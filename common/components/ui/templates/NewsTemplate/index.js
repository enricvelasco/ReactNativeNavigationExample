import React from 'react';
import Poster from '../../atoms/poster';
import IconButton from '../../atoms/iconButton';
import NewsList from '../../organisms/newsList';
import {Dimensions, StyleSheet, View} from 'react-native';
import {UserIcon} from '../../atoms/icons/user';
import FloatingButton from '../../atoms/floatingButton';
import {ChevronRightIcon} from '../../atoms/icons/chevronRight';

const windowWidth = Dimensions.get('window').width;

const NewsTemplate = ({
  posterImage,
  list,
  onSelectNew = () => {},
  onSelectProfile = () => {},
  onSelectParkingSearcher = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <Poster src={posterImage} />
        <IconButton
          style={styles.floatingButton}
          icon={{component: UserIcon}}
          color={'#c9c8c8'}
          onPress={onSelectProfile}
        />
        <View style={styles.floatingParkingButtonContainer}>
          <FloatingButton
            style={styles.floatingParkingButton}
            text={'Encuentra tu parking'}
            icon={{component: ChevronRightIcon}}
            onPress={onSelectParkingSearcher}
          />
        </View>
      </View>
      <NewsList list={list} onSelectItem={onSelectNew} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  posterContainer: {
    width: '100%',
    height: '30%',
    position: 'relative',
    marginBottom: 40,
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#706f6f',
    top: 45,
    left: 20,
  },
  floatingParkingButtonContainer: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  floatingParkingButton: {
    width: windowWidth - 40,
    position: 'absolute',
    bottom: -30,
  },
});

export default NewsTemplate;
