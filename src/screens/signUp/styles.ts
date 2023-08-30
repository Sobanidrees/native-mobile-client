import {StyleSheet} from 'react-native';
import {
  GREY,
  PRIMARY_COLOR,
  PRIMARY_COLOR_LIGHT,
  WHITE,
} from '../../utils/colors';
import {
  BASICTEXT,
  BOLDTEXT,
  BTN_INPUT_HEIGHT,
  BTN_INPUT_WIDTH,
} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 32,
    fontWeight: BOLDTEXT,
    color: PRIMARY_COLOR_LIGHT,
    marginTop: '16%',
  },
  createAccText: {
    fontSize: BASICTEXT,
    marginVertical: '2%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: BTN_INPUT_HEIGHT,
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    borderColor: GREY,
    borderRadius: 10,
    marginVertical: '3%',
    padding: 10,
    backgroundColor: WHITE,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: BTN_INPUT_WIDTH,
    marginTop: '4%',
  },
  enterNoText: {fontSize: BASICTEXT, marginLeft: '4%'},
  alreadyToLogin: {alignItems: 'center', flexDirection: 'row', marginTop: '4%'},
  backText: {fontSize: BASICTEXT, fontWeight: BOLDTEXT},
});
