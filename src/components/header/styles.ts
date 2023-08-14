import {StyleSheet} from 'react-native';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';
import {windowHeight} from '../../utils/constants';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    height: windowHeight * 0.05,
    marginHorizontal: '4%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    color: PRIMARY_COLOR,
    left: '-4%',
  },
  providerName: {fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR},
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },
});
