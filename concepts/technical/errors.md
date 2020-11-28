### Dashboard

> Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`.

https://stackoverflow.com/questions/49577736/warning-failed-child-context-type-invalid-child-context-virtualizedcell-cell


### Home
> Warning: Failed prop type: Invalid prop `autoCapitalize` of value `false` supplied to `ForwardRef(wrapper)`, expected one of ["none","sentences","words","characters"]


To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:

```js
import 'react-native-gesture-handler';
```

Note: If you skip this step, your app may crash in production even if it works fine in development.

### emulator
>ERROR: A snapshot operation for 'Pixel_3_API_29' is pending and timeout has expired. Exiting..

```bash
sudo rm ~/.android/avd/Pixel_3_XL_API_29_2.avd/*.lock
```