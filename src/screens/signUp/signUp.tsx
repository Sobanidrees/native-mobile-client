import React, { useEffect, useRef, useState } from 'react';
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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AHAA, BYJ, CYNA } from '../../utils/textFile';
type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  type SignUpFormValues = {
    fullName: string;
    emiratesId: string;
    phoneNumber: string;
  };

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter Your Full Name'),
    emiratesId: Yup.string()
      .matches(
        /^\d{3}-\d{4}-\d{7}-\d{1}$/,
        'Invalid Emirates ID format (xxx-xxxx-xxxxxxx-x)',
      )
      .required('Please Enter Your Emirates ID'),
    phoneNumber: Yup.string()
      .min(13, 'Enter Valid Phone Number')
      .max(13, 'Enter Valid Phone Number')
      .required('Please Enter Your Phone Number'),
  });

  const dispatch = useDispatch();
  const handleRegistration = async (values: SignUpFormValues) => {
    if (!isChecked) {
      Alert.alert('Please agree to our terms of services and policies');
      return;
    }
    const user: InspectorRegisterDto = {
      fullName: values.fullName,
      emiratesId: values.emiratesId,
      phoneNumber: values.phoneNumber,
    };
    console.log(
      values.fullName,
      values.emiratesId,
      values.phoneNumber,
    );

    dispatch<any>(inspectorRegister(user))
      .then(unwrapResult)
      .then((inspector: any) => {
        if (inspector?.id) {
          navigation.navigate('Otp', {
            inspector: user,
            isInspector: true,
            phoneNumber: user.phoneNumber,
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
          <Formik
            initialValues={{
              phoneNumber: '',
              fullName: '',
              emiratesId: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldTouched,
              setFieldValue,
              isValid,
            }) => (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.registerText}>{BYJ}</Text>
                <Text style={styles.createAccText}>
                  {CYNA}
                </Text>

                <TextInput
                  style={styles.input}
                  value={values.fullName}
                  placeholder="Full Name"
                  onChangeText={handleChange('fullName')}
                  onBlur={() => setFieldTouched('fullName')}
                />
                {touched.fullName && errors.fullName ? (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  value={values.emiratesId}
                  placeholder="Enter Your Emirates ID"
                  keyboardType="numeric"
                  onChangeText={handleChange('emiratesId')}
                  onBlur={() => setFieldTouched('emiratesId')}
                />
                {touched.emiratesId && errors.emiratesId ? (
                  <Text style={styles.errorText}>{errors.emiratesId}</Text>
                ) : null}
                <View style={[styles.input]}>
                  <Text>+971 - </Text>
                  <TextInput
                    style={{ width: '85%', height: '80%' }}
                    value={values.phoneNumber}
                    keyboardType="numeric"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={() => setFieldTouched('phoneNumber')}
                  />
                </View>
                {touched.phoneNumber && errors.phoneNumber ? (
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                ) : null}

                <CheckBox
                  checked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                />

                <PrimaryButton
                  onPress={() => {
                    handleRegistration(values);
                  }}
                  buttonTitle="Register"
                />
                <View style={styles.alreadyToLogin}>
                  <Text>{AHAA} {' '}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.backText}>Login Here</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
