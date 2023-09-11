import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BTN_INPUT_WIDTH } from '../../utils/constantStyle';

type Props = {
  color: string;
};
const Divider = ({ color }: Props) => {
  return <View style={[styles.divider, { borderColor: color }]} />;
};
export default Divider;
const styles = StyleSheet.create({
  divider: {
    width: BTN_INPUT_WIDTH,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: '2%'
  },
});
