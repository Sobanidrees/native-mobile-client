import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';

type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');

  const handleRegistration = async () => {};

  return (
    <>
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
        onPress={() => navigation.navigate('Login')}
        style={{alignItems: 'flex-end'}}>
        <Text style={styles.loginText}>back to login</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignUp;
