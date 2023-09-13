import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  InspectorRegisterDto,
  InspectorLoginDto,
  InspectorVerificationDto,
} from '../../models/inspector';
import {ActionTypes} from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiCall} from '../../apis/api';
import {ServiceRequestType} from '../../models/consumer';

export const inspectorRegister = createAsyncThunk(
  ActionTypes.INSPECTOR_REGISTER,
  async (params: InspectorRegisterDto, {rejectWithValue}) => {
    try {
      const user = await apiCall('/inspector/register', 'post', params);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
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

export const inspectorVerifyOtp = createAsyncThunk(
  ActionTypes.VERIFY_OTP,
  async (params: InspectorVerificationDto, {rejectWithValue}) => {
    try {
      const token = await apiCall('/inspector/verify_otp', 'post', params);
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

export const inspectorLogin = createAsyncThunk(
  ActionTypes.INSPECTOR_LOGIN,
  async (params: InspectorLoginDto, {dispatch, rejectWithValue}) => {
    try {
      const user = await apiCall('/inspector/login', 'post', params);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      return user;
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

export const inspectorLogout = createAsyncThunk(
  ActionTypes.INSPECTOR_LOGOUT,
  async () => {
    try {
      await AsyncStorage.removeItem('jwtToken');
      await AsyncStorage.removeItem('user');
      // await apiCall('/inspector/logout', 'get');
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return;
      }
    }
  },
);

