import axios from 'axios';
import {NEST_JS_API} from '../../env-vars';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiCall = async (
  url: string,
  method: any,
  data?: any,
  params?: any,
) => {
  const asyncToken = await AsyncStorage.getItem('jwtToken');
  console.log('async Token', asyncToken);

  const api = axios.create({
    baseURL: NEST_JS_API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${asyncToken}`,
    },
  });

  try {
    const res = await api({url, method, data, params});
    return res.data;
  } catch (error) {
    // Handle errors here
    console.error('API Call Error:', error);
    throw error; // Rethrow the error so the caller can handle it
  }
};
