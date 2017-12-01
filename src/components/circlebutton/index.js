import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { colors } from '../../styles';

const CircleButton = () => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {}} >
    <Icon name="mode-edit" color={colors.white} size={40} style={styles.icon} />
  </TouchableOpacity>
);

export default CircleButton;
