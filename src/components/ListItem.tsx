import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ApiRequestInterface} from '../interfaces/ApiInterface';
import {Colors} from '../theme/globalTheme';
import SimpleText from './SimpleText';

const ListItem = ({avatar, name, username}: ApiRequestInterface) => {
  // fakercloud is a fake image generator, not work in this case
  let image = avatar.includes('fakercloud')
    ? 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg'
    : avatar;
  return (
    <View style={styles.container}>
      <SimpleText>{name}</SimpleText>
      {username && <SimpleText>{username}</SimpleText>}
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
});

export default ListItem;
