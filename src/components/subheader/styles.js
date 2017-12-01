import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.light,
  },

  infoContainer: {
    marginTop: 10,
  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.dark,
  },

  description: {
    fontSize: fonts.big,
    color: colors.light,
  },

  icon: {
    padding: 20,
  },

  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    top: 12,
    paddingVertical: 12
  },

  tag: {
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: metrics.padding
  },

  tagBlue: {
    backgroundColor: colors.blue,
  },

  tagGreen: {
    backgroundColor: colors.green,
  },

  tagYellow: {
    backgroundColor: colors.yellow,
  },
});

export default styles;
