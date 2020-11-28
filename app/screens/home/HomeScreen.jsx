// TODO: home screen

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Badge, Button } from 'react-native-paper';

import colors from '../../config/colors';

export const HomeScreen = ({ navigation }) => {

  const _handleSideNav = () => console.log('Show sidenav');
  const _handleNotifications = () => console.log('Show notifications');

  const _handleLogout = () => navigation.navigate('Welcome');

  const notificationNo = 3;

  // TODO: add icon with badge
  return <>

    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={_handleSideNav} />
        <Appbar.Content title="Home" />
        <Badge>{notificationNo}</Badge>
        <Appbar.Action icon="bell" onPress={_handleNotifications} />
      </Appbar.Header>
    </View>

    <View style={styles.container}>
      <Text style={styles.text}>It's focus time</Text>

      {/* remove this in production */}
      <Button
        icon="book"
        mode="contained"
        onPress={() => navigation.navigate('Books')}
      >
        Books
      </Button>

      <Button
        mode="contained"
        onPress={_handleLogout}
      >
        Logout
      </Button>

    </View>
  </>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14
  }
});
