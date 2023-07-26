import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64be0f412320b36433c80158.mockapi.io';

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, api) => {
  try {
    const resp = await axios.post('/contacts', newContact);
    return resp.data
  } catch (e) {
    console.log(e);
  }
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const resp = await axios.get('/contacts');
    return resp.data
  } catch (e) {
    console.log(e);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  try {
    const resp = await axios.delete(`/contacts/${id}`);
    return resp.data
  } catch (e) {
    console.log(e);
  }
});
