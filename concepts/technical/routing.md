### install dependencies

```bash
yarn add @react-navigation/native
```

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### add to top of App.js

```js
import 'react-native-gesture-handler';
```

### in Navigation.jsx
```js
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

<NavigationContainer>
  // wrap app code here
</NavigationContainer>
```
### install stack navigator
```bash
yarn add @react-navigation/stack
```

### create stack navigator
