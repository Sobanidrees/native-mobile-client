import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { GREY, WHITE } from '../../utils/colors';
import {
  BTN_INPUT_HEIGHT,
  BTN_INPUT_WIDTH,
} from '../../utils/constantStyle';
import Divider from '../divider/divider';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const ProfileText = ({ value, onChange, placeholder }: Props) => {
  return (
    <>
      <View style={styles.textIconView}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChange}
        />
      </View>
      <Divider />
    </>
  );
};

export default ProfileText;

const styles = StyleSheet.create({
  textIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: BTN_INPUT_WIDTH,
    marginTop: '4%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: BTN_INPUT_HEIGHT,
    width: BTN_INPUT_WIDTH,
    borderColor: GREY,
    padding: 10,
    backgroundColor: WHITE,
  },
});
