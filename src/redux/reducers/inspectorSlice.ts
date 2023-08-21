import { createSlice } from '@reduxjs/toolkit'
import { inspectorRegister, inspectorLogin, inspectorVerifyOtp } from '../actions/inspector'

const initialState = {
  loading: false,
  inspector: null,
  jwtToken: null, // for storing the JWT
  error: null,
  success: false,
}

const inspectorSlice = createSlice({
  name: 'inspector',
  initialState,
  reducers: {},
  extraReducers: {
    // Inspector Register
    [inspectorRegister.pending.toString()]: (state: any) => {
      state.loading = true
      state.error = null
    },
    [inspectorRegister.fulfilled.toString()]: (state: any, { payload }: any) => {
      state.loading = false
      state.success = true
      state.inspector = payload
    },
    [inspectorRegister.rejected.toString()]: (state: any, { payload }: any) => {
      state.loading = false
      state.error = payload
    },

    // Inspector Login
    [inspectorLogin.pending.toString()]: (state) => {
      state.loading = true
      state.error = null
    },
    [inspectorLogin.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false
      state.inspector = payload
    },
    [inspectorLogin.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // Inspector Verify Otp
    [inspectorVerifyOtp.pending.toString()]: (state: any) => {
      state.loading = true
      state.error = null
    },
    [inspectorVerifyOtp.fulfilled.toString()]: (state: any, { payload }: any) => {
      state.loading = false
      state.success = true
      state.jwtToken = payload
    },
    [inspectorVerifyOtp.rejected.toString()]: (state: any, { payload }: any) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default inspectorSlice.reducer;