import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../routes/routeStack';
import { LOGIN_SCREEN_IMAGE } from '../../../utils/assets';
import { InspectorLoginDto } from '../../../models/inspector';
import { useDispatch } from 'react-redux';
import { inspectorLogin } from '../../../redux/actions/inspector';
import { unwrapResult } from '@reduxjs/toolkit';
import UserTypeButton from '../../../components/userTypeButton/userTypeButton';
import PrimaryButton from '../../../components/primaryButton/primaryButton';
import { PRIMARY_COLOR_LIGHT, PRIMARY_DARK } from '../../../utils/colors';
import { consumerLogin } from '../../../redux/actions/consumer';
import { ConsumerLoginDto } from '../../../models/consumer';
import { DHAA, EYPNT } from '../../../utils/textFile';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = useState('consumer');
  const [error, setError] = useState('');

  const dispatch = useDispatch();


  const handleLogin = async () => {
    if (phoneNumber.length === 14) {
      setError('Enter a valid phone number');
      return;
    }

    const InspectorLoginData: InspectorLoginDto = {
      phoneNumber: phoneNumber,
    };

    const ConsumerLoginData: ConsumerLoginDto = {
      phoneNumber: phoneNumber,
    };

    if (userType === 'consumer') {
      dispatch<any>(consumerLogin(ConsumerLoginData))
        .then(unwrapResult)
        .then((consumer: any) => {
          if (consumer) {
            navigation.navigate('Otp', {
              consumer: consumer,
              phoneNumber: phoneNumber,
            });
          } else {
            Alert.alert('Could not log you in');
          }
        })
        .catch((error: any) => {
          Alert.alert('Could not log you in');
          console.log(error);
        });
    } else {
      dispatch<any>(inspectorLogin(InspectorLoginData))
        .then(unwrapResult)
        .then((inspector: any) => {
          if (inspector) {
            navigation.navigate('Otp', {
              inspector: inspector,
              phoneNumber: phoneNumber,
            });
          } else {
            Alert.alert('Could not log you in');
          }
        })
        .catch((error: any) => {
          Alert.alert('Could not log you in');
          console.log(error);
        });
    }
  };

  const handleUserTypeSelection = (selectedUserType: string) => {
    setUserType(selectedUserType);
  };

  return (
    <View style={[styles.container]}>
      <UserTypeButton onSelectUserType={handleUserTypeSelection} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.enterNoText}>
        {EYPNT}{' '}
        <Text style={styles.authText}>Authenticate</Text>
      </Text>
      <View
        style={[
          styles.input,
          { borderColor: phoneNumber ? PRIMARY_DARK : PRIMARY_COLOR_LIGHT },
        ]}>
        <Text>+971 - </Text>
        <TextInput
          style={{ width: '85%', height: '80%' }}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <PrimaryButton
        onPress={handleLogin}
        buttonTitle="Authenticate"
        buttonStyle={{}}
      />
      {userType === 'inspector' && (
        <View style={styles.signView}>
          <Text>{DHAA} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up Here</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;
