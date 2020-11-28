// TODO: login screen

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import colors from '../../config/colors';

export const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>It's focus time</Text>

      <TextInput.Icon name="book" />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14
  }
});
