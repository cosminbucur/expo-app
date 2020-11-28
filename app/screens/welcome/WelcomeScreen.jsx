// TODO: welcome screen

import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../../config/colors';

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        <Text style={styles.text}>It's focus time</Text>
      </View>
      <View style={styles.loginButton}>
        <Button title="Login" />
      </View>
      <View style={styles.registerButton}>
        <Button title="Register" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.tomato
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.green
  },
  text: {
    color: colors.textPrimary,
    fontSize: 24
  }
});
