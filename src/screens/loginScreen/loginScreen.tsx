import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';


type Props = NativeStackScreenProps<RootStackParams, 'LoginScreen'>;


const LoginScreen = ({ navigation }: Props) => {
  const [number, onChangeNumber] = useState('');
  const [password, setPassword] = useState('');
  console.log(number, '-------------------');
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>InspectKar</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        // value={number}
        placeholder="Mobile number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        // value={password}
        placeholder="Enter Password"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotBtn}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.newAcc}>Create a new account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
