import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const ForgotPassword = ({navigation}) => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
