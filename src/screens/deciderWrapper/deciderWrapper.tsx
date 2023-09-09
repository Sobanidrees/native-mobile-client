import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import jwt_decode from "jwt-decode";

type Props = NativeStackScreenProps<RootStackParams, 'DeciderWrapper'>;
const DeciderWrapper = ({ navigation }: Props) => {

  const decideUser = async () => {
    let jwtToken = await AsyncStorage.getItem('jwtToken');
    let user;
    const userTypeObject = await AsyncStorage.getItem('user');

    if (userTypeObject) {
      user = JSON.parse(userTypeObject)
    }
    if (!!jwtToken) {
      const decodedToken: any = jwt_decode(jwtToken);
      const userType = decodedToken?.emiratesId ? 'inspector' : 'consumer';
      if (userType === 'inspector') {
        navigation.navigate('BottomTab');
      } else if (user.fullName && user.address) {
        navigation.navigate('ConsumerHome');
      } else if (userType === 'consumer') {
        navigation.navigate('ConsumerProfile');
      }
    } else {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    decideUser();
  }, []);

  return <></>;
};

export default DeciderWrapper;
