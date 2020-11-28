// TODO: splash screen

import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../config/colors';

export const SplashScreen = () => {
  return (
    <View style={styles.cotainer}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.background
  }
});
