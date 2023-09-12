import {createAsyncThunk} from '@reduxjs/toolkit';

import {ActionTypes} from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiCall} from '../../apis/api';
import {
  ConsumerRegisterDto,
  ConsumerVerificationDto,
  ConsumerLoginDto,
  ConsumerUpdateProfileDto,
  UpdateVehicleDto,
} from '../../models/consumer';

export const consumerRegister = createAsyncThunk(
  ActionTypes.CONSUMER_REGISTER,
  async (params: ConsumerRegisterDto, {rejectWithValue}) => {
    try {
      return await apiCall('/consumer/register', 'post', params);
    } catch (error: any) {
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
      const user = await apiCall('/consumer/login', 'post', params);
      console.log(user, '====== user consumerLogin =====');
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const consumerLogout = createAsyncThunk(
  ActionTypes.CONSUMER_LOGOUT,
  async () => {
    try {
      await apiCall('/consumer/logout', 'post');
      AsyncStorage.removeItem('user');
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return;
      }
    }
  },
);

export const consumerUpdate = createAsyncThunk(
  ActionTypes.CONSUMER_UPDATE,
  async (params: ConsumerUpdateProfileDto, {rejectWithValue}) => {
    try {
      const updatedConsumer = await apiCall(
        '/consumer/update_Profile',
        'patch',
        params,
      );
      await AsyncStorage.setItem('user', JSON.stringify(updatedConsumer));
      return updatedConsumer;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const vehicleUpdate = createAsyncThunk(
  ActionTypes.VEHICLE_UPDATE,
  async (params: UpdateVehicleDto, {rejectWithValue}) => {
    try {
      const updatedVehicle = await apiCall(
        '/consumer/update_Vehicle',
        'patch',
        params,
      );
      await AsyncStorage.setItem('user', JSON.stringify(updatedVehicle));
      return updatedVehicle;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
