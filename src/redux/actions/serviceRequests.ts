import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from '../../apis/api';
import {ActionTypes} from '../constants/actionTypes';

export const assignedServiceRequest = createAsyncThunk(
  ActionTypes.ASSIGNED_SERVICE_REQUEST,
  async () => {
    try {
      const res = await apiCall('/inspector/InspectorAssignedSrs', 'get');
      return res;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
      } else {
      }
    }
  },
);
