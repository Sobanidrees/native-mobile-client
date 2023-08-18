import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { WHITE } from '../../utils/colors';
import { styles } from './styles';
import Header from '../../components/header/header';
type Props = NativeStackScreenProps<RootStackParams, 'Otp'>;

const CELL_COUNT = 4;
const DEFAULT_OTP = '1234';

const Otp = ({ navigation }: Props) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.focus();
    }, 500);

  }, []);


  const handleVerification = () => {
    if (value === DEFAULT_OTP) {
      navigation.navigate('Home'); // Navigate to home screen for correct OTP
    } else {
      Alert.alert('Incorrect OTP', 'Please enter the correct OTP.');
    }
  };
  console.log(value, 'value');


  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} headerTitle="OTP Verification" />
      <Text style={styles.verificationText}>Please Enter Verification Code Sent To</Text>
      <Text style={styles.numberText}>+971-3202919700</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {/* <View style={styles.root}> */}
      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerification}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
      {/* </View> */}
      <Text style={styles.resendOtp}>Didn't receive the code? Re-send otp</Text>

    </SafeAreaView>
  );
};

export default Otp;
