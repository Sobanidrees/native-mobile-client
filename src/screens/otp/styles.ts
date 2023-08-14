import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, RED_ERROR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  root: {flex: 1, padding: 60},
  verifyBtn: {
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    marginTop: 20,
  },
  btnText: {
    fontWeight: '600',
    color: WHITE,
    fontSize: 20,
    alignSelf: 'center',
  },
});
