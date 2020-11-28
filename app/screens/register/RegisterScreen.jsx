import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import colors from '../../config/colors';

export const RegisterScreen = () => {

  const [text, setText] = useState('');

  const _handleLoginWithFacebook = () => console.log('login with facebook');

  return (
    <View style={styles.cotainer}>
      <Text style={styles.text}>Create your account and get access to a huge set of features</Text>

      <View style={styles.loginFacebookButton}>
        <Button title="Continue with Facebook" onPress={_handleLoginWithFacebook} />
      </View>

      <Text style={styles.text}>--- or ---</Text>

      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  loginFacebookButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.green
  },
  text: {
    color: colors.textPrimary,
    fontSize: 18
  }
});
