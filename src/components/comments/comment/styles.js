import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.light,
    flexDirection: 'row',
  },

  letterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.blue,
  },

  firstLetter: {
    fontSize: 22,
    color: colors.white,
    padding: 15,
  },

  commentContainer: {

  },

  name: {
    fontSize: fonts.big,
    color: colors.dark,
  },

  comment: {
    fontSize: fonts.big,
    color: colors.light,
  },

  extraContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
  },

  topContainer: {
    flexDirection: 'row',
  },

  dateFmt: {
    alignItems: 'flex-end',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  highlighter: {
    fontSize: fonts.small,
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 5,
    marginRight: 5,
  },

  highlighterOrange: {
    backgroundColor: colors.orange,
  },

  icon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});

export default styles;