import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_LIGHT, WHITE} from '../../utils/colors';
import {windowHeight} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.12,
    backgroundColor: PRIMARY_COLOR_LIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingTop: '14%',
    paddingBottom: '4%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    color: WHITE,
  },
});
