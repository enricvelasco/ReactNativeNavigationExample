import React from 'react';
import Poster from '../../atoms/poster';
import IconButton from '../../atoms/iconButton';
import NewsList from '../../organisms/newsList';
import {StyleSheet, View} from 'react-native';
import {UserIcon} from '../../atoms/icons/user';

const NewsTemplate = ({
  posterImage,
  list,
  onSelectNew = () => {},
  onSelectProfile = () => {},
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
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#706f6f',
    top: 45,
    left: 20,
  },
});

export default NewsTemplate;
