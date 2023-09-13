import {StyleSheet} from 'react-native';
import {PRIMARY_DARK, WHITE} from '../../utils/colors';
import {
  BOLDTEXT,
  BTN_INPUT_HEIGHT,
  BTN_INPUT_WIDTH,
  LARGETEXT,
} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_DARK,
    height: BTN_INPUT_HEIGHT,
    width: BTN_INPUT_WIDTH,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '2%',
  },
  buttonTitle: {
    fontSize: LARGETEXT,
    fontWeight: BOLDTEXT,
    alignSelf: 'center',
    color: WHITE,
  },
});
