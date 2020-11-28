// TODO: add modal

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../config/colors';

export const BookAddModal = () => {
  return (
    <View style={styles.cotainer}>
      <Text>Screen loaded</Text>
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
