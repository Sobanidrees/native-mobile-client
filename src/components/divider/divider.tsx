import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GREY} from '../../utils/colors';
import {BTN_INPUT_WIDTH} from '../../utils/constantStyle';

const Divider = () => {
  return <View style={styles.divider} />;
};
export default Divider;
const styles = StyleSheet.create({
  divider: {
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    borderColor: GREY,
    alignSelf: 'center',
  },
});
