import {StyleSheet} from 'react-native';
import {WHITE} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constantStyle';
import {MEDIUMTEXT} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerView: {
    marginTop: '8%',
    marginHorizontal: '8%',
  },
  profileImage: {
    height: windowHeight * 0.23,
    width: windowWidth * 0.5,
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
