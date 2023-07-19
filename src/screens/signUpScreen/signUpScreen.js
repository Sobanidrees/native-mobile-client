import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, SOLID_BLACK, WHITE} from '../../utils/colors';
import {styles} from './styles';
const SignUpScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [number, onChangeNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Confirm Password"
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>SignUp</Text>
      </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{alignItems: 'flex-end'}}>
          <Text style={styles.loginText}>back to login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
