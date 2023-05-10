import { Image, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/animales.png')} style={styles.image} resizeMode="cover"/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
