import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { SvgXml } from 'react-native-svg';


import { LOGIN_SCREEN_IMAGE } from '../../utils/assets';
type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');

  const handleRegistration = async () => { };

  return (
    <SafeAreaView style={styles.container}>
      <SvgXml style={{ marginTop: '16%' }} xml={LOGIN_SCREEN_IMAGE} />

      <Text style={styles.loginText}>Create Your New Account</Text>

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
      <View style={styles.input}>
        <Text style={{ marginHorizontal: '1%' }}>+971 -</Text>
        <TextInput
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity onPress={handleRegistration} style={styles.btn}>
        <Text style={styles.btnText}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.enterNoText}>Agree to our terms of services and privacy policies</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ alignItems: 'flex-end' }}>
        <Text style={styles.loginText}>back to login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
