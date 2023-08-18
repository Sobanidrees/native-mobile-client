import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { SvgXml } from 'react-native-svg';

import { LOGIN_SCREEN_IMAGE } from '../../utils/assets';
type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={[styles.container]}>

      <SvgXml style={{ marginTop: '16%' }} xml={LOGIN_SCREEN_IMAGE} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.enterNoText}>Enter Your Phone Number To Login</Text>
      <View style={styles.input}>
        <Text style={{ marginHorizontal: '1%' }}>+971 -</Text>
        <TextInput

          onChangeText={setPhoneNumber}
          // value={number}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Otp')}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.newAcc}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
