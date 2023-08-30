import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_LIGHT,
  RED_ERROR,
  WHITE,
} from '../../utils/colors';
import {BOLDTEXT, HEADINGTEXT} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE},
  // root: {padding: 0},
  headingText: {
    fontSize: 28,
    fontWeight: BOLDTEXT,
    color: PRIMARY_COLOR_LIGHT,
    alignSelf: 'center',
    marginTop: '6%',
  },
  verificationText: {fontSize: 16, marginHorizontal: '8%', marginTop: '8%'},
  numberText: {
    fontSize: 16,
    marginHorizontal: '8%',
    marginTop: '2%',
    color: PRIMARY_COLOR,
  },
  codeFieldRoot: {marginTop: '8%', paddingHorizontal: 40},
  cell: {
    width: 52,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00000030',
    textAlign: 'center',
    marginBottom: '6%',
  },
  focusCell: {
    borderColor: '#000',
  },
  verifyBtn: {
    backgroundColor: PRIMARY_COLOR_LIGHT,
    height: '6%',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
    alignSelf: 'center',
  },
  btnText: {
    fontWeight: '600',
    color: WHITE,
    fontSize: 20,
    alignSelf: 'center',
  },
  resendView: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resendOtp: {
    fontSize: 16,
    // marginHorizontal: '8%',
    // marginTop: '2%',
    // color: PRIMARY_COLOR,
    alignSelf: 'center',
  },
});
