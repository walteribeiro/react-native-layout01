import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Icon name="menu" size={26} style={styles.icon} />
    <Text style={styles.title}>Primary</Text>
    <Icon name="search" size={26} style={styles.icon} />
  </View>
);

export default Header;
