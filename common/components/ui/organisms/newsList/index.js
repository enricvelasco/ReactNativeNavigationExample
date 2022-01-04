import React from 'react';
import {StyleSheet, View, FlatList, Dimensions, ScrollView} from 'react-native';
import NewArticle from '../../molecules/newArticle';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const NewsList = ({list, onSelectItem = () => {}}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {list.map(item => (
          <NewArticle
            style={styles.article}
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
            onPress={onSelectItem}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  article: {
    width: windowWidth - 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});

export default NewsList;

/*
<View>
      {list.map((item, key) => (
        <NewArticle
          key={key}
          title={item.title}
          description={item.description}
          imageURL={item.imageURL}
        />
      ))}
    </View>
 */
