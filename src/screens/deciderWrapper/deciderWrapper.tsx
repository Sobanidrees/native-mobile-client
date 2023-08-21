import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';

type Props = NativeStackScreenProps<RootStackParams, 'DeciderWrapper'>;

const DeciderWrapper = ({navigation}: Props) => {
  const user = useSelector((state: RootState) => state.inspector);
  const jwtToken = AsyncStorage.getItem('jwtToken');

  // TODO: Find a better way to check the user id
  // Also, if for some reason, user is not in
  // redux store but jwtToken is in Async storage
  // Fetch loggedIn user
  if ((user?.inspector as any)?.id && !!jwtToken) {
    navigation.navigate('Home');
  } else {
    navigation.navigate('Login');
  }

  // TODO: Implement loader
  return <></>;
};
export default DeciderWrapper;
