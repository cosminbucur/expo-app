import React, { View } from 'react-native';

export const Flexbox2 = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1
    }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />
    </View>
  );
};
