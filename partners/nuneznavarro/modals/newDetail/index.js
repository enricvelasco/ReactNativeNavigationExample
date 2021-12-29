import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Text from '../../../../common/components/ui/atoms/text';
import Poster from '../../../../common/components/ui/atoms/poster';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const NewDetailModal = ({imageURL, title, description}) => {
  return (
    <View style={styles.content}>
      <ScrollView>
        <TouchableHighlight>
          <>
            <Poster style={styles.image} src={imageURL} />
            <View style={styles.textContainer}>
              <Text type={'infoTitle'}>{title}</Text>
              <Text type={'infoDefault'}>{description}</Text>
            </View>
          </>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: windowHeight - 40,
    paddingTop: 24,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  image: {
    height: 250,
  },
  textContainer: {
    padding: 20,
    height: windowHeight,
  },
});
