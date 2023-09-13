import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {windowHeight} from '../../utils/constants';
import {BTN_INPUT_HEIGHT, BTN_INPUT_WIDTH} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  btnView: {
    height: BTN_INPUT_HEIGHT,
    borderRadius: 10,
    marginVertical: '4%',
    flexDirection: 'row',
  },
  btnStyle: {
    width: BTN_INPUT_WIDTH / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
