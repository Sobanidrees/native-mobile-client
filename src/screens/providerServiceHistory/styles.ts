import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_LIGHT, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: '4%',
    alignSelf: 'center',
    color: PRIMARY_COLOR_LIGHT,
  },

  scrollView: {
    paddingBottom: '0%',
    alignItems: 'center',
    borderRadius: 20,
    height: '94%',
  },
});
