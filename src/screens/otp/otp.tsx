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
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { inspectorVerifyOtp } from '../../redux/actions/inspector';
import { inspectorVerificationDto } from '../../models/inspector';
import { unwrapResult } from '@reduxjs/toolkit';
import PrimaryButton from '../../components/primaryButton/primaryButton';
type Props = NativeStackScreenProps<RootStackParams, 'Otp'>;

const CELL_COUNT = 4;
const DEFAULT_OTP = '1234';

const Otp = ({ navigation, route }: Props) => {
  const { user, phoneNumber } = route.params;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.focus();
    }, 500);
  }, []);

  const handleVerification = () => {
    const inspectorVerificationData: inspectorVerificationDto = {
      phoneNumber: user.phoneNumber,
      otp: value,
    };

    dispatch<any>(inspectorVerifyOtp(inspectorVerificationData))
      .then(unwrapResult)
      .then((inspector: any) => {
        // TODO: Check for JWT instead of inspector
        console.log("inspector: ", inspector)
        if (inspector) {
          navigation.navigate('Home');
        } else {
          // TODO: Manage errors gracefully via snackbars / error shown to users
          Alert.alert('Could not sign you up');
        }
      })
      .catch((error: any) => {
        // TODO: Manage errors gracefully via snackbars / error shown to users
        Alert.alert('Could not sign you up');
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>VERIFICATION CODE</Text>
      <Text style={styles.verificationText}>
        Please Enter Verification Code Sent To
      </Text>
      <Text style={styles.numberText}>{phoneNumber}</Text>

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
      <PrimaryButton navigation={handleVerification} buttonTitle="Verify" />

    </SafeAreaView>
  );
};

export default Otp;
