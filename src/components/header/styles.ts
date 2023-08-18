import {StyleSheet} from 'react-native';
import {GREEN, PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    height: windowHeight * 0.05,
    marginHorizontal: '4%',
  },
  titleView: {width: windowWidth * 0.85, alignSelf: 'center'},
  title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    color: PRIMARY_COLOR,
    left: '-4%',
  },
  iconView: {
    width: '8%',
  },
  backIcon: {
    height: 20,
    width: 20,
  },
});
