import { register } from 'redux/operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
        state.isLoading = true;
      },
    [register.fulfilled](state, action) {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
  },
});

export const authReducer = authSlice.reducer
