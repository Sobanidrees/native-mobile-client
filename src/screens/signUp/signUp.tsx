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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { useDispatch } from 'react-redux';
import { inspectorRegister } from '../../redux/actions/inspector';
import { InspectorRegisterDto } from '../../models/inspector';
import { unwrapResult } from '@reduxjs/toolkit';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import CheckBox from '../../components/checkbox/checkbox';

type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    fullName: '',
    emiratesId: '',
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    phoneNumber: '',
    fullName: '',
    emiratesId: '',
    isChecked: '',
  });

  const handleCheckBoxClick = () => {
    setFormData({ ...formData, isChecked: !formData.isChecked });
    setErrors({ ...errors, isChecked: '' });
  };

  const dispatch = useDispatch();

  const handleRegistration = async () => {
    setErrors({
      phoneNumber: '',
      fullName: '',
      emiratesId: '',
      isChecked: '',
    });

    if (!formData.fullName.trim()) {
      setErrors({ ...errors, fullName: 'Please enter your Full Name' });
      return;
    }

    if (
      !formData.emiratesId.trim() ||
      formData.emiratesId.trim().length !== 18
    ) {
      setErrors({
        ...errors,
        emiratesId: 'Please enter a valid Emirates ID (xxx-xxxx-xxxxxxx-x)',
      });
      return;
    }

    if (
      !formData.phoneNumber.trim() ||
      formData.phoneNumber.trim().length !== 13
    ) {
      setErrors({
        ...errors,
        phoneNumber: 'Please enter a valid Phone Number (10 digits)',
      });
      return;
    }

    if (!formData.isChecked) {
      setErrors({
        ...errors,
        isChecked: 'Please agree to our terms and policies',
      });
      return;
    }

    const inspectorRegisterData: InspectorRegisterDto = {
      fullName: formData.fullName,
      emiratesId: formData.emiratesId,
      phoneNumber: formData.phoneNumber,
    };

    dispatch<any>(inspectorRegister(inspectorRegisterData))
      .then(unwrapResult)
      .then((inspector: any) => {
        if (inspector?.id) {
          navigation.navigate('Otp', {
            isConsumer: false,
            inspector: inspectorRegisterData,
            isInspector: true,
            phoneNumber: formData.phoneNumber,
          });
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
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.registerText}>Begin Your Journey</Text>
            <Text style={styles.createAccText}>Create Your New Account</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setFormData({ ...formData, fullName: text });
                setErrors({ ...errors, fullName: '' });
              }}
              value={formData.fullName}
              placeholder="Full Name"
            />
            {errors.fullName ? (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setFormData({ ...formData, emiratesId: text });
                setErrors({ ...errors, emiratesId: '' });
              }}
              value={formData.emiratesId}
              placeholder="Enter Your Emirates ID"
              keyboardType="numeric"
            />
            {errors.emiratesId ? (
              <Text style={styles.errorText}>{errors.emiratesId}</Text>
            ) : null}
            <View style={[styles.input]}>
              <Text>+971 - </Text>
              <TextInput
                style={{ width: '85%', height: '80%' }}
                onChangeText={text => {
                  setFormData({ ...formData, phoneNumber: text });
                  setErrors({ ...errors, phoneNumber: '' });
                }}
                keyboardType="numeric"
              />
            </View>
            {errors.phoneNumber ? (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            ) : null}

            <CheckBox
              checked={formData.isChecked}
              onPress={handleCheckBoxClick}
            />
            {errors.isChecked ? (
              <Text style={styles.errorText}>{errors.isChecked}</Text>
            ) : null}

            <PrimaryButton
              navigation={handleRegistration}
              buttonTitle="Register"
              buttonStyle={{}}
            />
            <View style={styles.alreadyToLogin}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.backText}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
