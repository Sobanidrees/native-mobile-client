import {StyleSheet} from 'react-native';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';
import {windowWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  requestView: {
    height: 100,
    width: windowWidth * 0.94,
    backgroundColor: WHITE,
    marginVertical: '2%',
    borderRadius: 12,
  },
  imgView: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  detailView: {justifyContent: 'center', marginHorizontal: 10},
  carName: {
    fontSize: 18,
    color: PRIMARY_COLOR,
  },
});
