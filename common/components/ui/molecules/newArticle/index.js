import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Poster from '../../atoms/poster';
import Text from '../../atoms/text';

const NewArticle = ({
  imageURL = '',
  title = '',
  description = '',
  style,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp, style]}
      onPress={() => onPress({imageURL, title, description})}>
      <View style={styles.imageContainer}>
        <Poster src={imageURL} style={styles.imageProps} />
      </View>
      <View style={styles.textContainer}>
        <Text type={'infoTitle'} numberOfLines={1}>
          {title}
        </Text>
        <Text type={'infoDefault'} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 260,
    height: 260,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 150,
  },
  imageProps: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 16,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default NewArticle;
