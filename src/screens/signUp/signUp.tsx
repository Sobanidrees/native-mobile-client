import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { SvgXml } from 'react-native-svg';

import { LOGIN_SCREEN_IMAGE } from '../../utils/assets';
import { useDispatch } from 'react-redux';
import { inspectorRegister } from '../../redux/actions/inspector';
import { InspectorRegisterDto } from '../../models/inspector';
import { unwrapResult } from '@reduxjs/toolkit';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import { PRIMARY_DARK } from '../../utils/colors';
import CheckBox from '../../components/checkbox/checkbox';
import { BOLDTEXT } from '../../utils/constantStyle';

type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };
  const dispatch = useDispatch();

  const handleRegistration = async () => {
    const inspectorRegisterData: InspectorRegisterDto = {
      fullName: fullName,
      emiratesId: emiratesId,
      phoneNumber: phoneNumber,
    };

    dispatch<any>(inspectorRegister(inspectorRegisterData))
      .then(unwrapResult)
      .then((inspector: any) => {
        // handle result here
        if (inspector?.id) {
          navigation.navigate('Otp', { user: inspector, phoneNumber: phoneNumber });
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

  const handleScreenTap = () => {
    // Hide the keyboard when the user taps on the screen
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.registerText}>Register Here</Text>
        <Text style={styles.createAccText}>Create Your New Account</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFullName}
          value={fullName}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmiratesId}
          value={emiratesId}
          placeholder="Enter Your Emirates ID"
        />
        <View style={[styles.input]}>
          <Text>+971 - </Text>
          <TextInput
            style={{ width: '85%', height: '80%' }}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>

        <PrimaryButton navigation={handleRegistration} buttonTitle="Register" />
        <CheckBox checked={isChecked} onPress={handleCheckBoxClick} />
        <View style={styles.alreadyToLogin}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.backText}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
