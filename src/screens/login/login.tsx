import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { SvgXml } from 'react-native-svg';
import { LOGIN_SCREEN_IMAGE } from '../../utils/assets';
import { InspectorLoginDto } from '../../models/inspector';
import { useDispatch } from 'react-redux';
import { inspectorLogin } from '../../redux/actions/inspector';
import { unwrapResult } from '@reduxjs/toolkit';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const inspectorLoginData: InspectorLoginDto = {
      phoneNumber: phoneNumber,
    };

    dispatch<any>(inspectorLogin(inspectorLoginData))
      .then(unwrapResult)
      .then((inspector: any) => {
        // TODO: Send inspector instead of a message here from backend
        if (inspector) {
          navigation.navigate('Otp', { user: inspector });
        } else {
          // TODO: Manage errors gracefully via snackbars / error shown to users
          Alert.alert('Could not log you in');
        }
      })
      .catch((error: any) => {
        // TODO: Manage errors gracefully via snackbars / error shown to users
        Alert.alert('Could not log you in');
        console.log(error);
      });
  };

  return (
    <View style={[styles.container]}>
      <SvgXml style={{ marginTop: '16%' }} xml={LOGIN_SCREEN_IMAGE} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.enterNoText}>Enter Your Phone Number To Login</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setPhoneNumber}
          // value={number}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.newAcc}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
