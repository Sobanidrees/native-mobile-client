import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParams, 'LoginScreen'>;

const LoginScreen = ({ navigation }: Props) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  console.log(phoneNumber, '-------------------');

  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/inspector/register", {
        phoneNumber: phoneNumber,
      });

      if (response.data.success) {
        // Registration successful, show success alert
        Alert.alert("Registration Successful", "User registered successfully!");
        navigation.navigate("HomeScreen");
      } else {
        // Registration failed, show error alert
        Alert.alert("Registration Failed", "Please check your phone number and try again.");
      }
    } catch (error) {
      // Handle any network or server-related errors here
      console.error("Error occurred:", error);
      Alert.alert("Error", "An error occurred while processing your request.");
    }
  };



  return (
    // <View style={[styles.container]}>
    <LinearGradient start={{ x: -0.5, y: -0.9 }} colors={['#008080', '#d8eeef']} style={styles.container}>

      <Text style={styles.title}>EFYX</Text>

      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        // value={number}
        placeholder="Mobile number"
        keyboardType="numeric"
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={setPassword}
        // value={password}
        placeholder="Enter Password"
        secureTextEntry={true}
      /> */}

      {/* <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotBtn}>
          Forgot Password?
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.newAcc}>Create a new account</Text>
      </TouchableOpacity>
    </LinearGradient>
    // </View>
  );
};

export default LoginScreen;
