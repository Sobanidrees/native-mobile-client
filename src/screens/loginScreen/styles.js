import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE, RED_ERROR} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 24, fontWeight: '500', marginBottom: '4%'},
  input: {
    height: '6%',
    width: '90%',
    marginVertical: '2%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 6,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.04,
  },
  forgotBtn: {fontSize: 16, color: RED_ERROR, marginTop: '2%'},
  newAcc: {fontSize: 16, color: PRIMARY_COLOR, marginVertical: '2%'},
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    height: '6%',
    width: '90%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {fontSize: 20, fontWeight: 'bold', color: WHITE},
});
