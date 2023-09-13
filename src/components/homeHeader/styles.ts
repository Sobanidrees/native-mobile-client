import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.12,
    backgroundColor: '#0EA1AB',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingTop: '14%',
    paddingBottom: '4%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  title: {fontWeight: '500', fontSize: 20, color: WHITE},
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },
});
