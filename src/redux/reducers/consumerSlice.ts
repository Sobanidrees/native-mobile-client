import {createSlice} from '@reduxjs/toolkit';
import {
  consumerRegister,
  consumerLogin,
  consumerVerifyOtp,
  consumerUpdate,
} from '../actions/consumer';

const initialState = {
  loading: false,
  consumer: null,
  jwtToken: null, // for storing the JWT
  error: null,
  success: false,
  fullName: '', // Initial values
  address: '',
};

const consumerSlice = createSlice({
  name: 'consumer',
  initialState,
  reducers: {},
  extraReducers: {
    // Consumer register
    [consumerRegister.pending.toString()]: (state: any) => {
      state.loading = true;
    },
    [consumerRegister.fulfilled.toString()]: (state: any, {payload}: any) => {
      state.loading = false;
      state.success = true;
      state.consumer = payload;
    },
    [consumerRegister.rejected.toString()]: (state: any, {payload}: any) => {
      state.loading = false;
      state.error = payload;
    },

    // Consumer Login
    [consumerLogin.pending.toString()]: state => {
      state.loading = true;
      state.error = null;
    },
    [consumerLogin.fulfilled.toString()]: (state, {payload}) => {
      state.loading = false;
      state.consumer = payload;
    },
    [consumerLogin.rejected.toString()]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },

    // Consumer Verify Otp
    [consumerVerifyOtp.pending.toString()]: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    [consumerVerifyOtp.fulfilled.toString()]: (state: any, {payload}: any) => {
      state.loading = false;
      state.success = true;
      state.jwtToken = payload;
    },
    [consumerVerifyOtp.rejected.toString()]: (state: any, {payload}: any) => {
      state.loading = false;
      state.error = payload;
    },

    //Update consumer profile
    [consumerUpdate.fulfilled.toString()]: (state, action) => {
      // Assuming the action.payload contains the updated profile data
      state.fullName = action.payload.fullName;
      state.address = action.payload.address;
    },
    [consumerUpdate.rejected.toString()]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default consumerSlice.reducer;
