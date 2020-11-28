// TODO: loader

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import colors from '../../config/colors';

export const Loader = () => {
  let isLoading = useSelector(state => state.loading);

  // TODO: remove this in production
  isLoading = false;

  return <>
    { isLoading &&
      <View style={styles.cotainer}>
        <ActivityIndicator color="#grey" size="large" />
      </View>
    }
  </>;
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,

    backgroundColor: colors.background
  }
});
