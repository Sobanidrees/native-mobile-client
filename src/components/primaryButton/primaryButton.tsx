import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {PRIMARY_DARK, WHITE} from '../../utils/colors';
import {
  BOLDTEXT,
  BTN_INPUT_HEIGHT,
  BTN_INPUT_WIDTH,
  MEDIUMTEXT,
} from '../../utils/constantStyle';

type Props = {
  navigation: any;
  buttonTitle: string;
  buttonStyle: ViewStyle;
};

const PrimaryButton = ({navigation, buttonTitle, buttonStyle}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={navigation}>
      <Text style={styles.buttonTitle}>{buttonTitle} </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_DARK,
    height: BTN_INPUT_HEIGHT,
    width: BTN_INPUT_WIDTH,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '2%',
  },
  buttonTitle: {
    fontSize: MEDIUMTEXT,
    fontWeight: BOLDTEXT,
    alignSelf: 'center',
    color: WHITE,
  },
});
