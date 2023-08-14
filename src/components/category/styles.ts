import {StyleSheet} from 'react-native';
import { SOLID_BLACK } from '../../utils/colors';

export const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: 160,
    borderRadius: 20,
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    bottom: -20,
    marginLeft: 6,
    color: SOLID_BLACK,
  },
});
