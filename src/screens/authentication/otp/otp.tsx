import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../routes/routeStack';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { inspectorVerifyOtp } from '../../../redux/actions/inspector';
import { InspectorVerificationDto } from '../../../models/inspector';
import PrimaryButton from '../../../components/primaryButton/primaryButton';
import { consumerVerifyOtp } from '../../../redux/actions/consumer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgXml } from 'react-native-svg';
import { BACK_ICON_OTP } from '../../../utils/assets';
import { PEVCST } from '../../../utils/textFile';
type Props = NativeStackScreenProps<RootStackParams, 'Otp'>;

const CELL_COUNT = 4;

const Otp = ({ navigation, route }: Props) => {
  const { phoneNumber, isInspector, inspector } = route.params;
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

  const handleVerification = async () => {
    const userVerificationData: InspectorVerificationDto = {
      phoneNumber: phoneNumber,
      otp: value,
    };
    let user;
    const userTypeObject = await AsyncStorage.getItem('user');
    
    if (userTypeObject) {
      user = JSON.parse(userTypeObject);
    }
    try {
      if ((user?.emiratesId && inspector) || isInspector) {
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
          if (!user.fullName && !user.address) {
            navigation.navigate('ConsumerProfile');
          } else if (
            user.fullName &&
            user.address &&
            !user.vehicle[0].year &&
            !user.vehicle[0].make &&
            !user.vehicle[0].model
          ) {
            navigation.navigate('UpdateVehicle');
          } else if (user.fullName && user.address && user.vehicle) {
            navigation.navigate('ConsumerHome');
          }
        } else {
          Alert.alert('Could not sign you up');
        }
      }
    } catch (error) {
      Alert.alert('Could not sign you up');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <SvgXml xml={BACK_ICON_OTP} />
      </TouchableOpacity>
      <Text style={styles.headingText}>VERIFICATION CODE</Text>
      <Text style={styles.verificationText}>{PEVCST}</Text>
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
      <PrimaryButton
        onPress={() => handleVerification()}
        buttonTitle="Verify"
        buttonStyle={{}}
      />
    </SafeAreaView>
  );
};

export default Otp;
