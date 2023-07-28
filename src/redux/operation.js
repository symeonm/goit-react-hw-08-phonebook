import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, api) => {
    try {
      const resp = await axios.post('/contacts', newContact);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const resp = await axios.get('/contacts');
    return resp.data;
  } catch (e) {
    console.log(e);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async registerData => {
    try {
      const resp = await axios.post('/users/signup', registerData);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    console.log(e);
  }
});

export const logIn = createAsyncThunk('auth/login', async (userData) => {
  try {
    const resp = await axios.post('/users/login', userData);
    setAuthHeader(resp.data.token);
    return resp.data
  } catch (e) {
    console.log(e);
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (API) => {
  const state = API.getState();
  const persistedToken = state.auth.token;


  if (persistedToken === null) {
    return API.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/me');
    return res.data;
  } catch (error) {
    return API.rejectWithValue(error.message);
  }
}
)


