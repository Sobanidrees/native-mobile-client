import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from '../../apis/api';
import {ActionTypes} from '../constants/actionTypes';
import {Vehicle} from '../../models/consumer';

export const inspectorRegister = createAsyncThunk(
  ActionTypes.INSPECTOR_REGISTER,
  async (params: Vehicle, {rejectWithValue}) => {
    try {
      const user = await apiCall('/inspector/register', 'post', params);
      return user;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
