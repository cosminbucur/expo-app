import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { Navigation } from './app/screens/navigation/Navigation';
import { store } from './app/core/store';
import { theme } from './app/assets/themes/dark';

const App = () => {

  useEffect(() => {
    let fontName = 'Roboto';
    // Platform.OS !== 'ios' && GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <View style={styles.container}>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </StoreProvider>
    </View >
  );
};

// TODO: add global cotainer
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;