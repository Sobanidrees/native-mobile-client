import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  InspectorRegisterDto,
  InspectorLoginDto,
  inspectorVerificationDto,
  InspectorLogoutDto,
  // InspectorLogoutDto
} from '../../models/inspector';
import {ActionTypes} from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiCall} from '../../apis/api';

export const inspectorRegister = createAsyncThunk(
  ActionTypes.INSPECTOR_REGISTER,
  async (params: InspectorRegisterDto, {rejectWithValue}) => {
    try {
      return await apiCall('/inspector/register', 'post', params);
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
  async (params: inspectorVerificationDto, {rejectWithValue}) => {
    try {
      const token = await apiCall('/inspector/verify_otp', 'post', params);
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

export const inspectorLogin = createAsyncThunk(
  ActionTypes.INSPECTOR_LOGIN,
  async (params: InspectorLoginDto, {rejectWithValue}) => {
    try {
      return await apiCall('/inspector/login', 'post', params);
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
