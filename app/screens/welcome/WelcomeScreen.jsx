// TODO: welcome screen

import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../../config/colors';

// DONE: add image
export const WelcomeScreen = ({ navigation }) => {

  // TODO: implement facebook login
  const _handleLoginWithFacebook = () => console.log('login with facebook');

  const _handleRegister = () => navigation.navigate('Register');

  const _handleLogin = () => navigation.navigate('Login');

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      </View>

      <View style={styles.loginFacebookButton}>
        <Button title="Continue with Facebook" onPress={_handleLoginWithFacebook}/>
      </View>

      <Text style={styles.text}>--- or ---</Text>

      <View style={styles.registerButton}>
        <Button title="Create account" onPress={_handleRegister}/>
      </View>

      <View style={styles.registerButton}>
        <Button title="Already have an account? Login" onPress={_handleLogin}/>
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
  loginFacebookButton: {
    width: '100%',
    height: 100
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
    height: 100
  },
  text: {
    color: colors.textPrimary,
    fontSize: 18
  }
});
