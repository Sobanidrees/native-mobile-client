import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import { BTN_INPUT_HEIGHT, BTN_INPUT_WIDTH } from '../../utils/constantStyle';
import { GREY, WHITE } from '../../utils/colors';

const renderInputField = (field, placeholder, keyboardType = 'default') => {
  return(
    <>
    <TextInput
      style={styles.input}
      onChangeText={text => handleInputChange(field, text)}
      value={formData[field]}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
    {errors[field] ? (
      <Text style={styles.errorText}>{errors[field]}</Text>
    ) : null}
    <>
  )
    };

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: BTN_INPUT_HEIGHT,
        width: BTN_INPUT_WIDTH,
        borderWidth: 1,
        borderColor: GREY,
        borderRadius: 10,
        marginVertical: '3%',
        padding: 10,
        backgroundColor: WHITE,
        elevation: 1,
        shadowOffset: {width: 0, height: 0.1},
        shadowColor: '#000000',
        shadowOpacity: 0.2,
      },
})