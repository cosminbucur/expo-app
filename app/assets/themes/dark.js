// TODO: create dark theme

import React from 'react';
import { configureFonts, DefaultTheme } from 'react-native-paper';

import customFonts from '../fonts/fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4169E1',
    accent: '#f1c40f'
  }
};
