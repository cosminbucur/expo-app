### screen sample

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../config/colors';

export const WelcomeScreen = () => {
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
```

## best practices

### export components to index.js

```js
export * from './ComponentModal';
```

Snippets

// srl
// rnss