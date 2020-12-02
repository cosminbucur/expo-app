import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import colors from "../../../config/colors";
import { deleteBook } from "../bookActions";

export const BookInfo = ({ navigation }) => {
  console.log('navigation', navigation);
  // const item = navigation.params.item;
  const item = navigation.getParam('item');

  console.log('item', item);

  const dispatch = useDispatch();

  const _handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const _handleEdit = (id) => {
    navigation.navigate('BookEdit');
  };

  return (
    <>
      <View>
        <Appbar.Header>
          <Appbar.Content title="Add book" />
          <Badge>{notificationNo}</Badge>
          <Appbar.Action icon="trash-can" onPress={_handleDelete} />
          <Appbar.Action icon="pencil" onPress={_handleEdit} />
        </Appbar.Header>
      </View>

      <View style={styles.cotainer}>
        <Text style={styles.text}>{book.title}</Text>
        <Text style={styles.text}>{book.author}</Text>
        <Text style={styles.text}>{book.publishedAt}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary
  }
});
