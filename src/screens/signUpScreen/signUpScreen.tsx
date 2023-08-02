import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { PRIMARY_COLOR, SOLID_BLACK, WHITE } from '../../utils/colors';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParams, 'SignUpScreen'>;


const SignUpScreen = ({ navigation }: Props) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');

  const handleRegistration = async () => {

    const respo: any = await fetch('http://localhost:3001/api/v1/inspector/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: "123456126577",
        fullName: "M Soban Idrees",
        bio: "I am an experienced automotive inspector with a passion for assessing and evaluating vehicles.",
        emiratesId: "784-1234-1234567-7"

      }),
    });
  };


  return (
    <LinearGradient start={{ x: -0.5, y: -0.9 }} colors={['#008080', '#d8eeef']} style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Mobile number"
        keyboardType="numeric"
      />
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

      <TouchableOpacity onPress={handleRegistration} style={styles.btn}>
        <Text style={styles.btnText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={{ alignItems: 'flex-end' }}>
        <Text style={styles.loginText}>back to login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SignUpScreen;
