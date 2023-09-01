import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';

type Props = NativeStackScreenProps<RootStackParams, 'DeciderWrapper'>;

const DeciderWrapper = ({ navigation }: Props) => {
  const user = useSelector((state: RootState) => state.inspector);

  const mountAction = async () => {
    let jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
      console.log("jwtToken: ", jwtToken)
      navigation.navigate('BottomTab');

      // if ((user?.inspector as any)?.id && !!jwtToken) {
      //   navigation.navigate('Home');
      // } else {
      //   navigation.navigate('Login');
      // }
    } else {
      navigation.navigate('Login');
    }
  }
  useEffect(() => {
    console.log("user: ", user)
    mountAction()
  }, [])


  // TODO: Find a better way to check the user id
  // Also, if for some reason, user is not in
  // redux store but jwtToken is in Async storage
  // Fetch loggedIn user


  // TODO: Implement loader
  return <></>;
};
export default DeciderWrapper;
