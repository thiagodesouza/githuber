import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  description: {
    borderTopColor: colors.light,
    borderTopWidth: 0.8,
    fontSize: 12,
    marginTop: metrics.baseMargin,
    paddingBottom: metrics.basePadding / 2,
    paddingTop: metrics.basePadding / 2,
  },

  info: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: metrics.baseMargin * 3,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  infoIcon: {
    color: colors.dark,
    marginRight: metrics.baseMargin,
  },

  inforText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
