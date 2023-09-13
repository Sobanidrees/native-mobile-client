import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import Divider from '../divider/divider';
import { MEDIUMTEXT } from '../../utils/constantStyle';
import { GREY } from '../../utils/colors';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: () => void;
};
const TextInputComponent = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <View style={styles.textView}>
      <View style={styles.rowView}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <Divider />
    </View>
  );
};
export default TextInputComponent;
const styles = StyleSheet.create({
  textView: {
    marginVertical: '6%',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
  },
  title: {
    fontSize: MEDIUMTEXT,
  },
  value: {
    fontSize: MEDIUMTEXT,
    fontWeight: '600',
    marginRight: 12,
  },
});
