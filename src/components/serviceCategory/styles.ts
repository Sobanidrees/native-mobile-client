import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_LIGHT, SOLID_BLACK, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  service: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_LIGHT,
    marginVertical: '2%',
    padding: '4%',
    borderRadius: 10,
    marginHorizontal: '2%',
  },
  title: {fontSize: 18, fontWeight: '500'},
});
