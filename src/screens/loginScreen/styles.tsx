import { Dimensions, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE, RED_ERROR } from '../../utils/colors';
import { windowHeight, windowWidth } from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    // alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.33,
    width: windowWidth * 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  title: { fontSize: 28, fontWeight: '500',  color: WHITE, marginTop: '0%' },
  input: {
    height: '6%',
    width: '90%',
    marginVertical: '3%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 6,
    elevation: 1,
    shadowOffset: { width: 0, height: 0.1 },
    shadowColor: '#000000',
    shadowOpacity: 0.04,
  },
  forgotBtn: { fontSize: 16, color: RED_ERROR, marginVertical: '3%' },
  newAcc: { fontSize: 18, color: PRIMARY_COLOR, marginVertical: '2%' },
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    height: '6%',
    width: '90%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: { fontSize: 20, fontWeight: 'bold', color: WHITE },
});
