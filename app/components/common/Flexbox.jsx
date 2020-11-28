import React from 'react';
import { View } from 'react-native';

export const Flexbox = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1
    }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 2
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1
        }}
      />
    </View>
  );
};
