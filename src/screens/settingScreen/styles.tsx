import { Dimensions, StyleSheet } from 'react-native';
import { GREEN, GREY, PRIMARY_COLOR, WHITE } from '../../utils/colors';
import { windowHeight, windowWidth } from '../../utils/constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    height: windowHeight * 0.05,
    paddingHorizontal: '4%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: '30%',
    color: PRIMARY_COLOR,
  },

  input: {
    height: '6%',
    width: '90%',
    // margin: '2%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 6,
    elevation: 1,
    shadowOffset: { width: 0, height: 0.1 },
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
  btnText: { fontSize: 20, fontWeight: 'bold', color: WHITE },
  loginText: { fontSize: 15, color: PRIMARY_COLOR, marginTop: '2%' },
});
