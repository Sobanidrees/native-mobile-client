import {StyleSheet} from 'react-native';
import {WHITE} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerView: {
    alignItems: 'center',
    marginTop: '4%',
  },
  profileImage: {
    height: windowHeight * 0.23,
    width: windowWidth * 0.5,
  },
});
