import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={{ height: 60, width: 120, resizeMode: 'contain', }}
      />

      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        // value={number}
        placeholder="Mobile number"
        keyboardType="numeric"
      />

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
