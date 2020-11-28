import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './app/core/store';
import { Navigation } from './app/screens/navigation/Navigation';

const App = () => {

  useEffect(() => {
    let fontName = 'Roboto';
    // Platform.OS !== 'ios' && GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

// TODO: add global cotainer
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;