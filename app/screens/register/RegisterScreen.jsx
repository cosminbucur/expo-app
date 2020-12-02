import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import colors from "../../config/colors";

export const RegisterScreen = () => {
  const _handleLoginWithFacebook = () => console.log("login with facebook");

  return (
    <View style={styles.cotainer}>
      <Text style={styles.text}>
        Create your account and get access to a huge set of features
      </Text>

      <View style={styles.loginFacebookButton}>
        <Button onPress={_handleLoginWithFacebook}>
          Continue with Facebook
        </Button>
      </View>

      <Text style={styles.text}>--- or ---</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              label="Password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
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
  loginFacebookButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.green,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 18,
  },
});
