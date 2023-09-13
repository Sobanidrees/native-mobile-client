import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BTN_INPUT_WIDTH } from '../../utils/constantStyle';
import { GREY, LIGHT_GREY } from '../../utils/colors';

const Divider = () => {
  return <View style={[styles.divider]} />;
};
export default Divider;
const styles = StyleSheet.create({
  divider: {
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: '2%',
    borderColor: GREY
  },
});
