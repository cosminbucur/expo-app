// TODO: create dark theme

import React from 'react';
import { configureFonts, DefaultTheme } from 'react-native-paper';

import customFonts from '../fonts/fonts';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  colors: {
    ...DefaultTheme.colors,
    primary: '#4169E1',
    accent: '#f1c40f'
  }
};
