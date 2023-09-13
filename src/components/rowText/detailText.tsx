import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Divider from '../divider/divider';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: () => void;
};
const TextInputComponent = ({placeholder, value, onChangeText}: Props) => {
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
});
