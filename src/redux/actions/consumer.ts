import {createAsyncThunk} from '@reduxjs/toolkit';

import {ActionTypes} from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiCall} from '../../apis/api';
import {
  ConsumerRegisterDto,
  ConsumerVerificationDto,
  ConsumerLoginDto,
} from '../../models/consumer';

export const consumerRegister = createAsyncThunk(
  ActionTypes.CONSUMER_REGISTER,
  async (params: ConsumerRegisterDto, {rejectWithValue}) => {
    try {
      return await apiCall('/consumer/register', 'post', params);
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const consumerVerifyOtp = createAsyncThunk(
  ActionTypes.CONSUMER_VERIFY_OTP,
  async (params: ConsumerVerificationDto, {rejectWithValue}) => {
    try {
      const token = await apiCall('/consumer/verify_otp', 'post', params);
      console.log('token: ', token);
      await AsyncStorage.setItem('jwtToken', token);
      return token;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const consumerLogin = createAsyncThunk(
  ActionTypes.CONSUMER_LOGIN,
  async (params: ConsumerLoginDto, {rejectWithValue}) => {
    try {
      return await apiCall('/consumer/login', 'post', params);
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// export const inspectorLogout = createAsyncThunk(
//   ActionTypes.INSPECTOR_LOGOUT,
//   async (params: InspectorLogoutDto, {rejectWithValue}) => {},
// );
