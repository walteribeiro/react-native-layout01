import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { colors } from '../../styles/index';

const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>
      <Icon name="group" color={colors.blue} size={30} style={styles.icon}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Social</Text>
        <Text style={styles.description}>Google+</Text>
      </View>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, styles.tagBlue]}>1 new</Text>
      </View>
    </View>

    <View style={styles.itemContainer}>
      <Icon name="local-offer" color={colors.green} size={30} style={styles.icon}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Promotions</Text>
        <Text style={styles.description}>Zagat, Google Offers</Text>
      </View>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, styles.tagGreen]}>2 new</Text>
      </View>
    </View>

    <View style={styles.itemContainer}>
      <Icon name="info" color={colors.yellow} size={30} style={styles.icon}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Updates</Text>
        <Text style={styles.description}>Google Play</Text>
      </View>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, styles.tagYellow]}>1 new</Text>
      </View>
    </View>
  </View>
);

export default SubHeader;
