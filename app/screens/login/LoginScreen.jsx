// TODO: login screen

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../config/colors';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>It's focus time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14
  }
});
