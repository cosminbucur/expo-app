// TODO: add modal

import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from 'react-redux';

import colors from "../../../config/colors";
import { addBook } from "../bookActions";

// TODO: create add form
export const BookAddModal = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.cotainer}>
      <Formik
        initialValues={{ title: "", author: "", publishedAt: "" }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addBook(values));
          navigation.navigate('Books');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              label="Title"
              style={styles.input}
              onChangeText={handleChange("title")}
              value={values.title}
            />
            <TextInput
              label="Author"
              style={styles.input}
              onChangeText={handleChange("author")}
              value={values.author}
            />
            <TextInput
              label="Published at"
              style={styles.input}
              onChangeText={handleChange("publishedAt")}
              value={values.publishedAt}
            />
            <Button onPress={handleSubmit}>Save</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  input: {
    backgroundColor: colors.background,
    color: colors.textPrimary
  },
});
