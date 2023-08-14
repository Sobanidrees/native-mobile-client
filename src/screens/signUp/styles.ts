import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  title: {fontSize: 28, fontWeight: '500', color: WHITE, marginTop: '0%'},
  input: {
    height: '6%',
    width: '90%',
    margin: '2%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 6,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.04,
  },
  btn: {
    backgroundColor: PRIMARY_COLOR,
    height: '6%',
    width: '90%',
    marginVertical: '2%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {fontSize: 20, fontWeight: 'bold', color: WHITE},
  loginText: {fontSize: 15, color: WHITE, marginTop: '2%'},
});