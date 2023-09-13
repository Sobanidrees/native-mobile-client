import {StyleSheet} from 'react-native';
import {
  WHITE,
  PRIMARY_COLOR_LIGHT,
  RED,
  RED_ERROR,
  PRIMARY_DARK,
} from '../../../utils/colors';
import {
  BASICTEXT,
  BOLDTEXT,
  BTN_INPUT_WIDTH,
  HEADINGTEXT,
} from '../../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    paddingTop: '20%',
  },
  welcomeText: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: HEADINGTEXT,
    fontWeight: '600',
    alignSelf: 'center',
    marginVertical: '5%',
  },
  authText: {fontWeight: BOLDTEXT},
  enterNoText: {fontSize: 14, fontWeight: '400', alignSelf: 'center'},
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '6%',
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    // borderColor: '#9E9E9E',
    borderRadius: 10,
    marginVertical: '4%',
    paddingHorizontal: '4%',
    backgroundColor: WHITE,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
  },
  errorText: {color: RED_ERROR},
  validButton: {borderColor: PRIMARY_DARK, backgroundColor: 'transparent'},
  invalidButton: {
    borderColor: PRIMARY_COLOR_LIGHT,
    backgroundColor: PRIMARY_COLOR_LIGHT,
  },
  newAcc: {fontSize: 13, marginVertical: '2%'},
  signView: {flexDirection: 'row', alignItems: 'center', marginTop: '2%'},
  signUpText: {fontWeight: BOLDTEXT, fontSize: BASICTEXT},
});
