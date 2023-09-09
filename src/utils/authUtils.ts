// asyncStorageUtils.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const getUserFromStorage = async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user from AsyncStorage:', error);
    return null;
  }
};

export const getJwtTokenFromStorage = async () => {
  try {
    return await AsyncStorage.getItem('jwtToken');
  } catch (error) {
    console.error('Error retrieving jwtToken from AsyncStorage:', error);
    return null;
  }
};

export const hasFullNameAndAddress = (jwtToken: any) => {
  try {
    const decodedToken = jwt_decode(jwtToken);
    // Check if 'fullName' and 'address' are present in the decoded token
    return (
      decodedToken &&
      decodedToken.hasOwnProperty('fullName') &&
      decodedToken.hasOwnProperty('address')
    );
  } catch (error) {
    console.error('Error decoding jwtToken:', error);
    return false;
  }
};
