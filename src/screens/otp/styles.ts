import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, RED_ERROR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE},
  // root: {padding: 0},
  verificationText: {fontSize: 16, marginHorizontal: '8%', marginTop: '8%'},
  numberText: {
    fontSize: 16,
    marginHorizontal: '8%',
    marginTop: '2%',
    color: PRIMARY_COLOR,
  },
  codeFieldRoot: {marginTop: '8%', paddingHorizontal: 70},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  verifyBtn: {
    backgroundColor: PRIMARY_COLOR,
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
  resendOtp: {
    fontSize: 16,
    marginHorizontal: '8%',
    marginTop: '2%',
    // color: PRIMARY_COLOR,
    alignSelf: 'center',
  },
});
