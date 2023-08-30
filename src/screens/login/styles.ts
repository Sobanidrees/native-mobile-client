import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  WHITE,
  RED_ERROR,
  SOLID_BLACK,
  PRIMARY_COLOR_LIGHT,
  PRIMARY_DARK,
} from '../../utils/colors';
import {
  BASICTEXT,
  BOLDTEXT,
  BTN_INPUT_WIDTH,
  HEADINGTEXT,
} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  welcomeText: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: HEADINGTEXT,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: '25%',
  },
  enterNoText: {fontSize: 14, fontWeight: '400', alignSelf: 'center'},
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '6%',
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    // borderColor: '#9E9E9E',
    borderRadius: 10,
    marginVertical: '3%',
    paddingHorizontal: '4%',
    backgroundColor: WHITE,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
  },
  newAcc: {fontSize: 13, marginVertical: '2%'},
  signView: {flexDirection: 'row', alignItems: 'center', marginTop: '2%'},
  signUpText: {fontWeight: BOLDTEXT, fontSize: BASICTEXT},
});
