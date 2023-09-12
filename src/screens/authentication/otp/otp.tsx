import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../../routes/routeStack';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {inspectorVerifyOtp} from '../../../redux/actions/inspector';
import {InspectorVerificationDto} from '../../../models/inspector';
import {unwrapResult} from '@reduxjs/toolkit';
import PrimaryButton from '../../../components/primaryButton/primaryButton';
import {consumerVerifyOtp} from '../../../redux/actions/consumer';
import {ConsumerVerificationDto} from '../../../models/consumer';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = NativeStackScreenProps<RootStackParams, 'Otp'>;

const CELL_COUNT = 4;

const Otp = ({navigation, route}: Props) => {
  const {phoneNumber, isInspector, consumer, inspector} = route.params;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
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

  const handleVerification = async () => {
    const userVerificationData: InspectorVerificationDto = {
      phoneNumber: phoneNumber,
      otp: value,
    };
    let userType;
    const userTypeObject = await AsyncStorage.getItem('user');
    if (userTypeObject) {
      userType = JSON.parse(userTypeObject);
    }
    try {
      if ((userType?.emiratesId && inspector) || isInspector) {
        const token = await dispatch<any>(
          inspectorVerifyOtp(userVerificationData),
        );
        if (token) {
          navigation.navigate('BottomTab');
        } else {
          Alert.alert('Could not sign you up');
        }
      } else {
        const token = await dispatch<any>(
          consumerVerifyOtp(userVerificationData),
        );
        if (token) {
          if (userType.fullName && userType.address) {
            navigation.navigate('ConsumerHome');
          } else {
            navigation.navigate('ConsumerProfile');
          }
        } else {
          Alert.alert('Could not sign you up');
        }
      }
    } catch (error) {
      // Handle errors gracefully via snackbars / error shown to users
      Alert.alert('Could not sign you up');
      console.error(error);
    }
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
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <PrimaryButton
        navigation={handleVerification}
        buttonTitle="Verify"
        buttonStyle={{}}
      />
    </SafeAreaView>
  );
};

export default Otp;
