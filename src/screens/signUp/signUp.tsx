import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import {SvgXml} from 'react-native-svg';

import {LOGIN_SCREEN_IMAGE} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {inspectorRegister} from '../../redux/actions/inspector';
import {InspectorRegisterDto} from '../../models/inspector';
import {unwrapResult} from '@reduxjs/toolkit';
type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');

  const dispatch = useDispatch();

  const handleRegistration = async () => {
    const inspectorRegisterData: InspectorRegisterDto = {
      fullName: fullName,
      emiratesId: emiratesId,
      phoneNumber: phoneNumber,
    };

    dispatch<any>(inspectorRegister(inspectorRegisterData))
      .then(unwrapResult)
      .then((inspector: any) => {
        // handle result here
        if (inspector?.id) {
          navigation.navigate('Otp', {user: inspector});
        } else {
          // TODO: Manage errors gracefully via snackbars / error shown to users
          Alert.alert('Could not sign you up');
        }
      })
      .catch((error: any) => {
        // TODO: Manage errors gracefully via snackbars / error shown to users
        Alert.alert('Could not sign you up');
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SvgXml style={{marginTop: '16%'}} xml={LOGIN_SCREEN_IMAGE} />

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
      <Text style={styles.enterNoText}>
        Agree to our terms of services and privacy policies
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{alignItems: 'flex-end'}}>
        <Text style={styles.loginText}>back to login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
