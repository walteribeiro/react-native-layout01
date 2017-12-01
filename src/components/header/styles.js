import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles/index'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  },

  icon: {
    color: colors.white
  }
});

export default styles;
