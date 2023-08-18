import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE, alignItems: 'center'},
  title: {fontSize: 28, fontWeight: '500', color: WHITE, marginTop: '0%'},
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '6%',
    width: '90%',
    borderWidth: 1,
    borderColor: '#9E9E9E',
    borderRadius: 10,
    marginVertical: '3%',
    padding: 10,
    backgroundColor: WHITE,
    elevation: 1,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
  },
  btn: {
    backgroundColor: PRIMARY_COLOR,
    height: '6%',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
  btnText: {fontSize: 20, fontWeight: 'bold', color: WHITE},
  loginText: {fontSize: 15, color: PRIMARY_COLOR, marginTop: '2%'},
  enterNoText: {fontSize: 13, marginTop: '4%'},
});
