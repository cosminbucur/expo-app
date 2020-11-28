import React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = ({ goBack, title, subtitle }) => {

  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};
