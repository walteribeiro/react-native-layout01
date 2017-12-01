import { Dimensions, StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const { height, width }= Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 34,
    left: (width - 90),
    top: (height - 120),
    zIndex: 1,
  },

  icon: {
    backgroundColor: colors.red,
    padding: metrics.padding,
    borderRadius: 50,
  }
});

export default styles;
