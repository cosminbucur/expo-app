// TODO: create CRUD screen

import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';

import colors from '../../config/colors';
import { bookData } from '../../mocks/mocks';

export const BooksScreen = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);
  const books = useSelector(state => state.books);

  const renderItem = ({ item }) => {
    return <>
      <Avatar.Icon size={64} icon="book" />
      <BookItem
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          console.log('selected book', item.id);
        }}
      />
    </>;
  };

  return (
    <>
      <View style={styles.container}>

        <FlatList
          data={bookData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={selectedId}
          contentContainerStyle={styles.listContainer}
        />

        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate('BooksAdd')}
        />

      </View>
    </>
  );
};

const BookItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.bookItem}>
    <Text style={styles.text}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center'
  },
  listContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: colors.yellow
  },
  bookItem: {
    height: 60,
    marginVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tomato
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
});
