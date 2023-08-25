import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import {WHITE} from '../../utils/colors';
import {styles} from './styles';
import Header from '../../components/header/header';
type Props = NativeStackScreenProps<RootStackParams, 'Otp'>;

const CELL_COUNT = 4;
const DEFAULT_OTP = '1234';

const Otp = ({navigation}: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {}, []);

  const handleVerification = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <Header navigation={navigation} headerTitle="Verification" />
      <View style={styles.root}>
        <TouchableOpacity style={styles.verifyBtn} onPress={handleVerification}>
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
