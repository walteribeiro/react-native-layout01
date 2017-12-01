import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from "../../../styles/colors";

const Comment = ({comment: {name, comment, attached, datetime, star, highlighter}}) => (
  <View style={styles.container}>
    <View style={styles.letterContainer}>
      <Text style={styles.firstLetter}>{name.substr(0, 1)}</Text>
    </View>

    <View style={styles.commentContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>

    <View style={styles.extraContainer}>
      <View style={styles.topContainer}>
        { attached
         ? <Icon name="attach-file" size={22} color={colors.dark} />
         :  <Text/>}
        <Text style={styles.dateFmt}>{datetime}</Text>
      </View>

      <View style={styles.bottomContainer}>
        { highlighter === ''
          ? <Text/>
          : <Text style={[styles.highlighter, styles.highlighterOrange]}>{highlighter}</Text>}

        { star
         ? <Icon name="star" size={25} style={styles.icon} color={colors.yellow} />
         : <Icon name="star" size={25} style={styles.icon} color={colors.light} />}
      </View>
    </View>
  </View>
);

export default Comment;
