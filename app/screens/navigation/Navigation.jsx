// TODO: navigation stack

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../home/HomeScreen';
import { WelcomeScreen } from '../welcome/WelcomeScreen';
import { LoginScreen } from '../login/LoginScreen';
import { SplashScreen } from './SplashScreen';
import { BooksScreen } from '../books/BooksScreen';
import { BookAddModal } from '../books/components/BookAddModal';
import { BookEditModal } from '../books/components/BookEditModal';
import { RegisterScreen } from '../register/RegisterScreen';
import { BookInfo } from '../books/components/BookInfo';

const RootStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />

        <RootStack.Screen name="Home" component={HomeScreen} />

        <RootStack.Screen name="Books" component={BooksScreen} />
        <RootStack.Screen name="BookInfo" component={BookInfo} />
        <RootStack.Screen name="BooksAdd" component={BookAddModal} />
        <RootStack.Screen name="BooksEdit" component={BookEditModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// DONE: add material

// DONE: add material icons
