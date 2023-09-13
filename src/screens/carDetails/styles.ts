import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constants';
import {MEDIUMTEXT} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerView: {
    marginTop: '8%',
    // height: windowHeight * 0.7,
    marginHorizontal: '8%',
  },
  textView: {
    marginVertical: '6%',
  },
  title: {
    fontSize: MEDIUMTEXT,
  },
  value: {
    fontSize: MEDIUMTEXT,
    fontWeight: '600',
    marginRight: 12,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
